import { pick, valuesOf } from '@skyleague/axioms'
import type { OpenapiV3 } from '@skyleague/therefore'
import { $restclient } from '@skyleague/therefore'
import type { PathItem } from '@skyleague/therefore/src/types/openapi.type.js'
import camelCase from 'camelcase'
import ky from 'ky'

export interface Clients {
    items: { jsonPath: string; label: string; hashValue: string; index?: number }[]
}
const baseUrl = 'https://demotenant.dev.mambucloud.com/api/swagger/'

const client = ky.extend({ prefixUrl: baseUrl })
const clients = await client.get('resources').json<Clients>()

const clientList = [
    ...clients.items.filter(
        (i) => !i.jsonPath.includes('{') && i.hashValue !== 'Loan_Accounts' && i.hashValue !== 'Loan_Transactions',
    ),
    {
        jsonPath: 'json/loans_v2_swagger.json',
        label: 'Loan Accounts',
        hashValue: 'Loan_Accounts',
    },
    {
        jsonPath: 'json/loans_schedule_v2_swagger.json',
        label: 'Loan Account Schedule',
        hashValue: 'Loan_Account_Schedule',
    },
    {
        jsonPath: 'json/loans_transactions_v2_swagger.json',
        label: 'Loan Transactions',
        hashValue: 'Loan_Transactions',
    },
]

for (const manifest of clientList) {
    if (manifest.jsonPath === 'json/consumers_v2_swagger.json') {
        //
    } else if (manifest.jsonPath === 'json/apikey_rotation_v2_swagger.json') {
        manifest.label = 'API Keys Rotation'
    } else if (manifest.jsonPath === 'json/organization_holidays_v2_swagger.json') {
        manifest.label = 'Organization Holidays'
    } else if (manifest.jsonPath === 'json/organization_holidays_nonworkingdays_v2_swagger.json') {
        manifest.label = 'Organization Non-Working Days'
    } else if (manifest.jsonPath === 'json/organization_holidays_general_v2_swagger.json') {
        manifest.label = 'Organization General Holidays'
    } else if (manifest.jsonPath === 'json/mambu-functions_v2_swagger.json') {
        manifest.label = 'Mambu Functions'
    } else if (manifest.jsonPath === 'json/mambu-functions-secrets_v2_swagger.json') {
        manifest.label = 'Mambu Function Secrets'
    }
}
for (const [group, vals] of Object.entries(Object.groupBy(clientList, (l) => l.label))) {
    if (vals && vals.length > 1) {
        throw new Error(`Found duplicate labels on group ${group}`)
    }
}

const exports: Record<string, unknown> = {}
for (const item of clientList) {
    const openapi = await client.get(item.jsonPath).json<OpenapiV3>()

    let clientName = item.label.replace(/[_\s]/g, '-').toLowerCase()
    clientName = clientName.includes('a-p-i') ? clientName.replace('a-p-i', 'api') : clientName
    clientName = clientName.includes('i-d-') ? clientName.replace('i-d-', 'id-') : clientName

    openapi.info.title ??= item.label
    openapi.info.version ??= '1.0.0'

    exports[camelCase(`mambu_${clientName}`)] = $restclient(openapi, {
        filename: `${clientName}/rest.client.ts`,
        strict: false,
        formats: false,
        client: 'ky',
        validator: 'zod',
        options: {
            timeout: false,
        },
        transformOpenapi: (api: OpenapiV3) => {
            const securitySchemes = api.components?.securitySchemes
            const injectApiKey =
                securitySchemes !== undefined &&
                Object.values(securitySchemes).find((s) => 'type' in s && s.type === 'apiKey') === undefined
            // inject apiKey security schema if not present
            if (injectApiKey) {
                securitySchemes.apiKey = {
                    type: 'apiKey',
                    in: 'header',
                    name: 'apiKey',
                }

                for (const path of valuesOf(api.paths)) {
                    const pathItem = path as PathItem
                    for (const method of valuesOf(
                        pick(pathItem, ['get', 'delete', 'put', 'head', 'options', 'trace', 'patch', 'post']),
                    ).filter((method) => method?.security !== undefined)) {
                        method?.security?.unshift({ apiKey: [] })
                    }
                }
            }

            // allow custom fields
            for (const schema of Object.values(
                pick(api.components?.schemas ?? {}, [
                    'Client',
                    'Group',
                    'LoanAccount',
                    'DepositAccount',
                    'DepositProduct',
                    'CreditArrangement',
                    'Guarantor',
                    'Asset',
                    'Branch',
                    'User',
                    'LoanTransaction',
                    'DepositTransaction',
                    'Centre',
                ]),
            )) {
                if (!('$ref' in schema)) {
                    schema.additionalProperties = true
                }
            }

            // biome-ignore lint/suspicious/noExplicitAny: ignoe
            if ((api.components?.schemas?.RestError as any)?.properties?.errorReason?.enum !== undefined) {
                // biome-ignore lint/performance/noDelete: This is necessary
                // biome-ignore lint/suspicious/noExplicitAny: ignore
                delete (api.components?.schemas?.RestError as any)?.properties?.errorReason?.enum
            }

            for (const [name, definition] of Object.entries(api.components?.schemas ?? {})) {
                if (name.endsWith('FilterCriteria')) {
                    if ('properties' in definition && definition.properties?.field !== undefined) {
                        if ('type' in definition.properties.field && definition.properties.field.type === 'string') {
                            definition.properties.field = {
                                anyOf: [definition.properties.field, { type: 'string' }],
                            }
                        }
                    }
                }
                if (name === 'PatchOperation') {
                    if ('properties' in definition && definition.properties?.value !== undefined) {
                        if (
                            'type' in definition.properties.value &&
                            definition.properties.value.type === 'object' &&
                            !('properties' in definition.properties.value)
                        ) {
                            // biome-ignore lint/performance/noDelete: This is necessary
                            delete definition.properties.value.type
                        }
                    }
                }
            }

            return api
        },
        explicitContentNegotiation: true,
    })
}

export default exports
