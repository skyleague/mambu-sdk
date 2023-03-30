/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import got from 'got'
import type { CancelableRequest, Got, Options, Response } from 'got'
import type { ValidateFunction, ErrorObject } from 'ajv'
import type { IncomingHttpHeaders } from 'http'
import {
    ErrorResponse,
    GetAllResponse,
    GetCreditArrangementsByGroupIdOrKeyResponse,
    Group,
    GroupSearchCriteria,
    PatchRequest,
    SearchResponse,
} from './rest.type.js'

/**
 * groups
 */
export class MambuGroups {
    public client: Got

    public auth: {
        basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
        apiKey?: string | (() => Promise<string>)
    }

    public availableAuth: Set<string>
    public defaultAuth: string[][] | string[] | undefined

    public constructor({
        prefixUrl,
        options,
        auth = {},
        defaultAuth,
    }: {
        prefixUrl: string | 'http://localhost:8889/api' | 'https://localhost:8889/api'
        options?: Options
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
            apiKey?: string | (() => Promise<string>)
        }
        defaultAuth?: string[][] | string[]
    }) {
        this.client = got.extend(...[{ prefixUrl, throwHttpErrors: false }, options].filter((o): o is Options => o !== undefined))
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * Allows retrieval of groups using various query parameters
     */
    public async getAll({
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            creditOfficerUsername?: string
            branchId?: string
            centreId?: string
            sortBy?: string
        }
        auth?: string[][] | string[]
    } = {}) {
        return this.awaitResponse(
            this.buildClient(auth).get(`groups`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetAllResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Create a new group
     */
    public async create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Group
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(Group, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`groups`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single group via id or encoded key
     */
    public async getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { groupId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`groups/${path.groupId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Update an existing group
     */
    public async update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Group
        path: { groupId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(Group, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`groups/${path.groupId}`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Delete a group
     */
    public async delete({ path, auth = [['apiKey'], ['basic']] }: { path: { groupId: string }; auth?: string[][] | string[] }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`groups/${path.groupId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Partially update an existing group
     */
    public async patch({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchRequest
        path: { groupId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`groups/${path.groupId}`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Credit arrangements list retrieved
     */
    public async getCreditArrangementsByGroupIdOrKey({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { groupId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`groups/${path.groupId}/creditarrangements`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetCreditArrangementsByGroupIdOrKeyResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows you to search groups by various criteria
     */
    public async search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: GroupSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(GroupSearchCriteria, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`groups:search`, {
                json: body,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: SearchResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    public validateRequestBody<T>(schema: { is: (o: unknown) => o is T; assert: (o: unknown) => void }, body: T) {
        schema.assert(body)
        return body
    }

    public async awaitResponse<
        T,
        S extends Record<PropertyKey, undefined | { is: (o: unknown) => o is T; validate?: ValidateFunction<T> }>
    >(response: CancelableRequest<Response<unknown>>, schemas: S) {
        type FilterStartingWith<S extends PropertyKey, T extends string> = S extends number | string
            ? `${S}` extends `${T}${infer _X}`
                ? S
                : never
            : never
        type InferSchemaType<T> = T extends { is: (o: unknown) => o is infer S } ? S : never
        const result = await response
        const validator = schemas[result.statusCode] ?? schemas.default
        if (validator?.is(result.body) === false || result.statusCode < 200 || result.statusCode >= 300) {
            return {
                statusCode: result.statusCode,
                headers: result.headers,
                left: result.body,
                validationErrors: validator?.validate?.errors ?? undefined,
            } as {
                statusCode: number
                headers: IncomingHttpHeaders
                left: InferSchemaType<S[keyof S]>
                validationErrors?: ErrorObject[]
            }
        }
        return { statusCode: result.statusCode, headers: result.headers, right: result.body } as {
            statusCode: number
            headers: IncomingHttpHeaders
            right: InferSchemaType<S[keyof Pick<S, FilterStartingWith<keyof S, '2' | 'default'>>]>
        }
    }

    protected buildBasicClient(client: Got) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const basic = this.auth.basic
                        if (basic !== undefined) {
                            const [username, password] = typeof basic === 'function' ? await basic() : basic
                            options.username = username
                            options.password = password
                        }
                    },
                ],
            },
        })
    }

    protected buildApiKeyClient(client: Got) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const apiKey = this.auth.apiKey
                        const key = typeof apiKey === 'function' ? await apiKey() : apiKey
                        options.headers['apiKey'] = key
                    },
                ],
            },
        })
    }

    protected buildClient(auths: string[][] | string[] | undefined = this.defaultAuth, client: Got = this.client): Got {
        const auth = (auths ?? [...this.availableAuth])
            .map((auth) => (Array.isArray(auth) ? auth : [auth]))
            .filter((auth) => auth.every((a) => this.availableAuth.has(a)))
        for (const chosen of auth[0] ?? []) {
            if (chosen === 'basic') {
                client = this.buildBasicClient(client)
            } else if (chosen === 'apiKey') {
                client = this.buildApiKeyClient(client)
            }
        }
        return client
    }
}
