import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    AccountBalances,
    AuthorizationHold,
    AuthorizationHoldAmountAdjustmentRequest,
    CardTransactionInput,
    CardTransactionOutput,
    CardTransactionReversal,
    ErrorResponse,
    GetAuthorizationHold,
    GetCardTransaction,
    PatchAuthorizationHoldRequest,
} from './rest.zod.js'

/**
 * cards
 */
export class MambuCards {
    public client: KyInstance

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
        client = ky,
    }: {
        prefixUrl: string | 'http://localhost:8889/api' | 'https://localhost:8889/api'
        options?: Options
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
            apiKey?: string | (() => Promise<string>)
        }
        defaultAuth?: string[][] | string[]
        client?: KyInstance
    }) {
        this.client = client.extend({ prefixUrl, throwHttpErrors: false, ...options })
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * POST /cards/{cardReferenceToken}/authorizationholds
     *
     * Create an authorization hold corresponding to a given card.
     */
    public createAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHold
        path: { cardReferenceToken: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', AuthorizationHold>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(AuthorizationHold, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`cards/${path.cardReferenceToken}/authorizationholds`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: AuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createAuthorizationHold']>
    }

    /**
     * POST /cards/{cardReferenceToken}/financialtransactions
     *
     * Create a financial transaction corresponding to a given card
     */
    public createCardTransaction({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CardTransactionInput
        path: { cardReferenceToken: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CardTransactionOutput>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CardTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`cards/${path.cardReferenceToken}/financialtransactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CardTransactionOutput,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createCardTransaction']>
    }

    /**
     * POST /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}:decrease
     *
     * Decreases the amount of an authorization hold. If the amount is greater or equal to the authorization hold amount, then the authorization hold is reversed.
     */
    public decreaseAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(AuthorizationHoldAmountAdjustmentRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}:decrease`,
                {
                    json: _body.right,
                    headers: headers ?? {},
                },
            ),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['decreaseAuthorizationHold']>
    }

    /**
     * GET /cards/{cardReferenceToken}/balanceInquiry
     *
     * Get account balances using card tokens
     */
    public getAccountBalances({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { cardReferenceToken: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', AccountBalances>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`cards/${path.cardReferenceToken}/balanceInquiry`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: AccountBalances,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAccountBalances']>
    }

    /**
     * GET /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Get card authorization hold
     */
    public getAuthorizationHoldById({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetAuthorizationHold>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                },
            ),
            {
                200: GetAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAuthorizationHoldById']>
    }

    /**
     * GET /cards/{cardReferenceToken}/financialtransactions/{cardTransactionExternalReferenceId}
     *
     * Get card transaction
     */
    public getCardTransaction({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetCardTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(
                `cards/${path.cardReferenceToken}/financialtransactions/${path.cardTransactionExternalReferenceId}`,
                {
                    searchParams: query ?? {},
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                },
            ),
            {
                200: GetCardTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getCardTransaction']>
    }

    /**
     * POST /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}:increase
     *
     * Increase authorization hold amount
     */
    public increaseAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(AuthorizationHoldAmountAdjustmentRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}:increase`,
                {
                    json: _body.right,
                    headers: headers ?? {},
                },
            ),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['increaseAuthorizationHold']>
    }

    /**
     * PATCH /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Partially update an authorization hold
     */
    public patchAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchAuthorizationHoldRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(PatchAuthorizationHoldRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    json: _body.right,
                    headers: headers ?? {},
                },
            ),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patchAuthorizationHold']>
    }

    /**
     * DELETE /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Reverse a card authorization hold.
     */
    public reverseAuthorizationHold({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {},
            ),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['reverseAuthorizationHold']>
    }

    /**
     * POST /cards/{cardReferenceToken}/financialtransactions/{cardTransactionExternalReferenceId}:decrease
     *
     * Reverse card transaction
     */
    public reverseCardTransaction({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CardTransactionReversal
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CardTransactionReversal, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/financialtransactions/${path.cardTransactionExternalReferenceId}:decrease`,
                {
                    json: _body.right,
                    headers: headers ?? {},
                },
            ),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['reverseCardTransaction']>
    }

    public validateRequestBody<Body>(
        parser: { safeParse: (o: unknown) => SafeParseReturnType<unknown, Body> },
        body: unknown,
    ): { right: Body } | FailureResponse<undefined, unknown, 'request:body', undefined> {
        const _body = parser.safeParse(body)
        if (!_body.success) {
            return {
                success: false as const,
                statusCode: undefined,
                status: undefined,
                headers: undefined,
                left: body,
                error: _body.error,
                where: 'request:body',
            } satisfies FailureResponse<undefined, unknown, 'request:body', undefined>
        }
        return { right: _body.data }
    }

    public async awaitResponse<I, S extends Record<PropertyKey, { safeParse: (o: unknown) => SafeParseReturnType<unknown, I> }>>(
        response: ResponsePromise<I>,
        schemas: S,
        responseType?: 'json' | 'text',
    ) {
        const _body = (await (responseType !== undefined ? response[responseType]() : response.text())) as I
        const result = await response
        const status =
            result.status < 200
                ? 'informational'
                : result.status < 300
                  ? 'success'
                  : result.status < 400
                    ? 'redirection'
                    : result.status < 500
                      ? 'client-error'
                      : 'server-error'
        const validator = schemas[result.status] ?? schemas.default
        const body = validator?.safeParse?.(_body)
        if (result.status < 200 || result.status >= 300) {
            return {
                success: false as const,
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: body?.success ? body.data : _body,
                error: body !== undefined && !body.success ? body.error : undefined,
                where: 'response:statuscode',
            }
        }
        if (body === undefined || !body.success) {
            return {
                success: body === undefined,
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: _body,
                error: body?.error,
                where: 'response:body',
            }
        }
        return { success: true as const, statusCode: result.status.toString(), status, headers: result.headers, right: body.data }
    }

    protected buildBasicClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const basic = this.auth.basic
                        if (basic !== undefined) {
                            const [username, password] = typeof basic === 'function' ? await basic() : basic
                            options.headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`)
                        }
                    },
                ],
            },
        })
    }

    protected buildApiKeyClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const apiKey = this.auth.apiKey
                        const key = typeof apiKey === 'function' ? await apiKey() : apiKey
                        options.headers.set('apiKey', `${key}`)
                    },
                ],
            },
        })
    }

    protected buildClient(auths: string[][] | string[] | undefined = this.defaultAuth, client?: KyInstance): KyInstance {
        const auth = (auths ?? [...this.availableAuth])
            .map((auth) => (Array.isArray(auth) ? auth : [auth]))
            .filter((auth) => auth.every((a) => this.availableAuth.has(a)))
        let chosenClient = client ?? this.client
        for (const chosen of auth[0] ?? []) {
            if (chosen === 'basic') {
                chosenClient = this.buildBasicClient(chosenClient)
            } else if (chosen === 'apiKey') {
                chosenClient = this.buildApiKeyClient(chosenClient)
            }
        }
        return chosenClient
    }
}

export type Status<Major> = Major extends string
    ? Major extends `1${number}`
        ? 'informational'
        : Major extends `2${number}`
          ? 'success'
          : Major extends `3${number}`
            ? 'redirection'
            : Major extends `4${number}`
              ? 'client-error'
              : 'server-error'
    : undefined
export interface SuccessResponse<StatusCode extends string, T> {
    success: true
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: Headers
    right: T
}
export interface FailureResponse<StatusCode = string, T = unknown, Where = never, HeaderResponse = Headers> {
    success: false
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: HeaderResponse
    error: ZodError<T> | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`
