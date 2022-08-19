/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import got from 'got'
import type { CancelableRequest, Got, Options, Response } from 'got'
import type { ValidateFunction, ErrorObject } from 'ajv'
import { IncomingHttpHeaders } from 'http'
import {
    AddCreditArrangementAccountInput,
    CreditArrangement,
    CreditArrangementAccounts,
    CreditArrangementAction,
    CreditArrangementSchedule,
    CreditArrangementSearchCriteria,
    ErrorResponse,
    GetAllResponse,
    PatchRequest,
    RemoveCreditArrangementAccountInput,
    SearchResponse,
} from './rest.type'

export class MambuCreditArrangements {
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
     * Remove account from credit arrangement
     */
    public async removeAccount({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        body: RemoveCreditArrangementAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(RemoveCreditArrangementAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:removeAccount`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: CreditArrangementAccounts,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of credit arrangements using various query parameters
     */
    public async getAll({
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; sortBy?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`creditarrangements`, {
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
     * Create a new credit arrangement
     */
    public async create({ body, auth = [['apiKey'], ['basic']] }: { body: CreditArrangement; auth?: string[][] | string[] }) {
        this.validateRequestBody(CreditArrangement, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements`, {
                json: body,
                responseType: 'json',
            }),
            {
                201: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows posting an action such as change credit arrangement state
     */
    public async changeState({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        body: CreditArrangementAction
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CreditArrangementAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:changeState`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Client Directed Query. Allows you to search credit arrangements by various criteria
     */
    public async search({
        query,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        body: CreditArrangementSearchCriteria
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CreditArrangementSearchCriteria, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements:search`, {
                json: body,
                searchParams: query ?? {},
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

    /**
     * Add account to credit arrangement
     */
    public async addAccount({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        body: AddCreditArrangementAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(AddCreditArrangementAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:addAccount`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: CreditArrangementAccounts,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a consolidated credit arrangement schedule by provided credit arrangement id or encodedKey
     */
    public async getSchedule({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}/schedule`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: CreditArrangementSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single credit arrangement via id or encoded key
     */
    public async getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Update an existing credit arrangement
     */
    public async update({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        body: CreditArrangement
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CreditArrangement, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`creditarrangements/${path.creditArrangementId}`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Delete a credit arrangement
     */
    public async delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`creditarrangements/${path.creditArrangementId}`, {
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
     * Partially update an existing credit arrangement
     */
    public async patch({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        body: PatchRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`creditarrangements/${path.creditArrangementId}`, {
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
     * Allows retrieval of all the loan and deposit accounts linked to the credit arrangement
     */
    public async getAllAccounts({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { creditArrangementId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}/accounts`, {
                responseType: 'json',
            }),
            {
                200: CreditArrangementAccounts,
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
        type InferSchemaType<T> = T extends { is: (o: unknown) => o is infer S; assert: (o: unknown) => void } ? S : never
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