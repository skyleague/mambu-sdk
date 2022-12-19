import { cloneDeep, omitUndefined, pick } from '@skyleague/axioms'
import { $restclient } from '@skyleague/therefore'
import type { OpenapiV3 } from '@skyleague/therefore'
import type {
    APIKeySecurityScheme,
    Operation,
    PathItem,
    Schema,
} from '@skyleague/therefore/src/lib/primitives/restclient/openapi.type'
import got from 'got'

export const baseMambuStreaming = got
    .get('https://api.mambu.com/streaming-api/mambu-streaming-api-spec-oas3.json')
    .json<OpenapiV3>()
    .then((data) => {
        if (data.components?.securitySchemes?.ApiKeyAuth !== undefined) {
            const apiKeyAuth = data.components.securitySchemes.ApiKeyAuth as APIKeySecurityScheme
            apiKeyAuth.name = 'apikey'
        }

        for (const path of Object.values(data.paths)) {
            for (const [method, op] of Object.entries(
                pick(path as PathItem, ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'])
            )) {
                const operation = op as Operation
                if (operation.operationId === '"get-subscriptions-subscription_id-events') {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    delete path[method]
                } else if (operation.operationId === 'post-subscriptions-subscription_id-cursors') {
                    operation.operationId = 'commitSubscriptionCursors'
                } else {
                    delete operation.operationId
                }
            }
        }

        const schemas = data.components?.schemas
        if (schemas !== undefined) {
            delete ((schemas.Subscription as Schema).properties?.initial_cursors as Schema).minItems

            const eventProperties = (schemas.Event as Schema).properties
            if (eventProperties?.body !== undefined) {
                eventProperties.body = {
                    anyOf: [{ type: 'string' }, { type: 'object' }],
                }
            }

            const cursor = cloneDeep(schemas.Cursor as Schema)
            schemas['Subscription-Cursor'] = omitUndefined({
                ...cloneDeep(cursor),
                ...schemas['Subscription-Cursor'],
                allOf: undefined,
                properties: {
                    ...cloneDeep(cursor.properties),
                    event_type: {
                        type: 'string',
                        minLength: 1,
                        description: "The name of the event type this partition's events belong to.",
                    },
                    cursor_token: {
                        type: 'string',
                        minLength: 1,
                        description: 'An opaque value defined by the server.',
                    },
                },
                required: [...(cursor.required ?? []), 'event_type', 'cursor_token'],
            }) as Schema
            schemas['Subscription-Cursor-Without-Token'] = omitUndefined({
                ...cloneDeep(cursor),
                ...schemas['Subscription-Cursor-Without-Token'],
                allOf: undefined,
                properties: {
                    ...cloneDeep(cursor.properties),
                    event_type: {
                        type: 'string',
                        minLength: 1,
                        description: "The name of the event type this partition's events belong to.",
                    },
                },
                required: [...(cursor.required ?? []), 'cursor_token'],
            }) as Schema
        }

        data.security ??= [{ ApiKeyAuth: [] }]

        return $restclient(data, {
            strict: false,
        })
    })
