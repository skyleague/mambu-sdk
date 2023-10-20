import { groupBy, hasPropertiesDefined, pick, valuesOf } from '@skyleague/axioms'
import type { OpenapiV3 } from '@skyleague/therefore'
import { $restclient } from '@skyleague/therefore'
import type { PathItem } from '@skyleague/therefore/src/lib/primitives/restclient/openapi.type.js'
import camelCase from 'camelcase'
import got from 'got'

export interface Clients {
    items: { jsonPath: string; label: string; hashValue: string; index?: number }[]
}
const baseUrl = 'https://demotenant.dev.mambucloud.com/api/swagger/'

const client = got.extend({ prefixUrl: baseUrl })
const clients = await client.get('resources').json<Clients>()

const clientList = [
    ...clients.items.filter((i) => !i.jsonPath.includes('{') && i.hashValue !== 'Loan_Accounts'),
    { jsonPath: 'json/loans_v2_swagger.json', label: 'Loan Accounts', hashValue: 'Loan_Accounts' },
    { jsonPath: 'json/loans_schedule_v2_swagger.json', label: 'Loan Account Schedule', hashValue: 'Loan_Account_Schedule' },
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
for (const [group, vals] of Object.entries(groupBy(clientList, (l) => l.label))) {
    if (vals.length > 1) {
        throw new Error(`Found duplicate labels on group ${group}`)
    }
}

const exports: Record<string, unknown> = {}
for (const item of clientList) {
    const openapi = await client.get(item.jsonPath).json<OpenapiV3>()

    const node = await $restclient(openapi, {
        strict: false,
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
                        pick(pathItem, ['get', 'delete', 'put', 'head', 'options', 'trace', 'patch', 'post'])
                    ).filter(hasPropertiesDefined('security'))) {
                        method.security.unshift({ apiKey: [] })
                    }
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if ((api.components?.schemas?.RestError as any)?.properties?.errorReason?.enum !== undefined) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                delete (api.components?.schemas?.RestError as any)?.properties?.errorReason?.enum
            }

            return api
        },
        explicitContentNegotiation: true,
    })
    let clientName = item.label.replace(/[_\s]/g, '-').toLowerCase()
    clientName = clientName.includes('a-p-i') ? clientName.replace('a-p-i', 'api') : clientName
    clientName = clientName.includes('i-d-') ? clientName.replace('i-d-', 'id-') : clientName

    node.value.filePath = `${clientName}/rest`
    exports[camelCase(`mambu_${clientName}`)] = node
}

export default exports
