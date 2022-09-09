import { hasPropertiesDefined, pick, valuesOf } from '@skyleague/axioms'
import type { OpenapiV3 } from '@skyleague/therefore'
import { $restclient } from '@skyleague/therefore'
import type { PathItem } from '@skyleague/therefore/src/lib/primitives/restclient/openapi.type'
import camelCase from 'camelcase'
import got from 'got'

export interface Clients {
    items: { jsonPath: string; label: string; hashValue: string; index: number }[]
}
const baseUrl = 'https://demotenant.dev.mambucloud.com/api/swagger/'
module.exports = (async () => {
    const client = got.extend({ prefixUrl: baseUrl })
    const clients = await client.get('resources').json<Clients>()

    const exports: Record<string, unknown> = {}
    for (const item of clients.items) {
        const openapi = await client.get(item.jsonPath).json<OpenapiV3>()

        const node = await $restclient(openapi, {
            transformOpenapi: (api: OpenapiV3) => {
                const securitySchemes = api.components?.securitySchemes
                const injectApiKey =
                    securitySchemes !== undefined &&
                    Object.values(securitySchemes).find((s) => 'type' in s && s.type === 'apiKey') === undefined
                // inject apiKey security schema if not present
                if (injectApiKey) {
                    securitySchemes['apiKey'] = {
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
                if ((api?.components?.schemas?.['RestError'] as any)?.properties?.['errorReason']?.['enum'] !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    delete (api?.components?.schemas?.['RestError'] as any)?.properties?.['errorReason']?.['enum']
                }

                return api
            },
            explicitContentNegotiation: true,
        })
        const clientName = item.label.replace(/[_\s]/g, '-').toLowerCase()
        node.value.filePath = `${clientName}/rest`
        exports[camelCase(`mambu_${clientName}`)] = node
    }

    return exports
})()
