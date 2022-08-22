/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import got from 'got'
import type { CancelableRequest, Got, Options, Response } from 'got'
import type { ValidateFunction, ErrorObject } from 'ajv'
import { IncomingHttpHeaders } from 'http'
import { ErrorResponse, GetAllResponse, TransactionChannel } from './rest.type'

export class MambuTransactionChannels {
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
     * Allows retrieval of transaction channels
     */
    public async getAll({
        query,
        auth = [['apiKey'], ['basic']],
    }: { query?: { detailsLevel?: string; transactionChannelState?: string }; auth?: string[][] | string[] } = {}) {
        return this.awaitResponse(
            this.buildClient(auth).get(`organization/transactionChannels`, {
                searchParams: query ?? {},
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
     * Creates a new transaction channel
     */
    public async create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: TransactionChannel
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(TransactionChannel, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`organization/transactionChannels`, {
                json: body,
                headers: headers ?? {},
                responseType: 'json',
            }),
            {
                201: TransactionChannel,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single transaction channel by id
     */
    public async getById({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { transactionChannelId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`organization/transactionChannels/${path.transactionChannelId}`, {
                responseType: 'json',
            }),
            {
                200: TransactionChannel,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Updates an existing transaction channel
     */
    public async update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: TransactionChannel
        path: { transactionChannelId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(TransactionChannel, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`organization/transactionChannels/${path.transactionChannelId}`, {
                json: body,
                responseType: 'json',
            }),
            {
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Deletes a transaction channel by id
     */
    public async delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { transactionChannelId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`organization/transactionChannels/${path.transactionChannelId}`, {
                responseType: 'json',
            }),
            {
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    public validateRequestBody<T>(schema: { is: (o: unknown) => o is T; assert: (o: unknown) => void }, body: T) {
        schema.assert(body)
        return body
    }

    public async awaitResponse<
        T,
        S extends Record<PropertyKey, undefined | { is: (o: unknown) => o is T; validate: ValidateFunction<T> }>
    >(response: CancelableRequest<Response<unknown>>, schemas: S) {
        type FilterStartingWith<S extends PropertyKey, T extends string> = S extends number | string
            ? `${S}` extends `${T}${infer _X}`
                ? S
                : never
            : never
        type InferSchemaType<T> = T extends { is: (o: unknown) => o is infer S } ? S : never
        const result = await response
        const validator = schemas[result.statusCode]
        if (validator?.is(result.body) === false || result.statusCode < 200 || result.statusCode >= 300) {
            return {
                statusCode: result.statusCode,
                headers: result.headers,
                left: result.body,
                validationErrors: validator?.validate.errors ?? undefined,
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
            right: InferSchemaType<S[keyof Pick<S, FilterStartingWith<keyof S, '2'>>]>
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
        const auth = (auths ?? [])
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
