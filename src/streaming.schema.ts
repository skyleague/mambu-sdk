import type { OpenapiV3 } from '@skyleague/therefore'
import { $restclient } from '@skyleague/therefore'
import type { ApiKeySecurityScheme } from '@skyleague/therefore/src/openapi.type'
import got from 'got'

export const streamingClient = got
    .get('https://api.mambu.com/streaming-api/mambu-streaming-api-spec-oas3.json')
    .json<OpenapiV3>()
    .then((data) => {
        if (data?.components?.securitySchemes?.['ApiKeyAuth'] !== undefined) {
            const apiKeyAuth = data.components.securitySchemes['ApiKeyAuth'] as ApiKeySecurityScheme
            apiKeyAuth.name = 'apikey'
        }
        data.security ??= [{ ApiKeyAuth: [] }]
        return $restclient(data, { preferOperationId: false })
    })
