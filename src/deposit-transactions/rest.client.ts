/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import got from 'got'
import type { CancelableRequest, Got, Options, OptionsInit, Response } from 'got'
import type { ValidateFunction, ErrorObject } from 'ajv'
import type { IncomingHttpHeaders } from 'http'
import {
    BulkDepositTransactionsInput,
    DepositTransaction,
    DepositTransactionAdjustmentDetails,
    DepositTransactionInput,
    DepositTransactionSearchCriteria,
    EditTransactionDetailsRequest,
    ErrorResponse,
    FeeAppliedDepositTransactionInput,
    GetAllResponse,
    GetDepositTransactionDocumentResponse,
    SearchResponse,
    SeizeBlockAmount,
    TransferDepositTransactionInput,
    WithdrawalDepositTransactionInput,
} from './rest.type.js'

/**
 * deposits/transactions
 */
export class MambuDepositTransactions {
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
        options?: Options | OptionsInit
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
     * Create a new withdrawal transaction
     */
    public async makeWithdrawalAsync({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: WithdrawalDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(WithdrawalDepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/transactions/withdrawals`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                202: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Create a new withdrawal transaction
     */
    public async makeWithdrawal({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: WithdrawalDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(WithdrawalDepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/withdrawal-transactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Apply a fee on deposit account
     */
    public async applyFee({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: FeeAppliedDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(FeeAppliedDepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/fee-transactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Seize a block amount on deposit account
     */
    public async makeSeizure({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: SeizeBlockAmount
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(SeizeBlockAmount, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/seizure-transactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Create a bulk of deposit transactions
     */
    public async makeBulkDeposits({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: BulkDepositTransactionsInput
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(BulkDepositTransactionsInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/deposit-transactions:bulk`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                202: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows the adjustment of a deposit transaction. The adjustment of a single transaction may bulk adjust multiple transactions
     */
    public async adjust({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositTransactionAdjustmentDetails
        path: { depositTransactionId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositTransactionAdjustmentDetails, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/transactions/${path.depositTransactionId}:adjust`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                200: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows to retrieve a deposit transaction document (populated template) by provided transaction id and template id.
     */
    public async getDepositTransactionDocument({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositTransactionId: string; templateId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/transactions/${path.depositTransactionId}/templates/${path.templateId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetDepositTransactionDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Create a new transfer transaction
     */
    public async makeTransfer({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: TransferDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(TransferDepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/transfer-transactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of all transactions for a deposit account via id or encoded key
     */
    public async getAll({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/transactions`, {
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
     * Create new deposit transaction for account
     */
    public async makeDepositAsync({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/transactions/deposits`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                202: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single deposit transaction via id or encoded key
     */
    public async getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositTransactionId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/transactions/${path.depositTransactionId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Edit custom information or notes for deposit transaction
     */
    public async editTransactionDetails({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: EditTransactionDetailsRequest
        path: { depositTransactionId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(EditTransactionDetailsRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`deposits/transactions/${path.depositTransactionId}`, {
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
     * Client Directed Query. Allows you to search deposit transactions for deposit accounts by various criteria
     */
    public async search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositTransactionSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositTransactionSearchCriteria, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/transactions:search`, {
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

    /**
     * Create new deposit transaction for account
     */
    public async makeDeposit({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositTransactionInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/deposit-transactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
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
