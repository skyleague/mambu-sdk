import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

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
} from './rest.zod.js'

/**
 * creditarrangements
 */
export class MambuCreditArrangements {
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
        this.client = client.extend({ prefixUrl, throwHttpErrors: false, timeout: false, ...options })
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * POST /creditarrangements/{creditArrangementId}:addAccount
     *
     * Add account to credit arrangement
     */
    public addAccount({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AddCreditArrangementAccountInput
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', CreditArrangementAccounts>
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
        const _body = this.validateRequestBody(AddCreditArrangementAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:addAccount`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: CreditArrangementAccounts,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['addAccount']>
    }

    /**
     * POST /creditarrangements/{creditArrangementId}:changeState
     *
     * Change credit arrangement state
     */
    public changeState({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CreditArrangementAction
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', CreditArrangement>
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
        const _body = this.validateRequestBody(CreditArrangementAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:changeState`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['changeState']>
    }

    /**
     * POST /creditarrangements
     *
     * Create credit arrangement
     */
    public create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: CreditArrangement; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CreditArrangement>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CreditArrangement, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('creditarrangements', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * DELETE /creditarrangements/{creditArrangementId}
     *
     * Delete credit arrangement
     */
    public delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { creditArrangementId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
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
            this.buildClient(auth).delete(`creditarrangements/${path.creditArrangementId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete']>
    }

    /**
     * GET /creditarrangements
     *
     * Get credit arrangements
     */
    public getAll({
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; sortBy?: string }
        auth?: string[][] | string[]
    } = {}): Promise<
        | SuccessResponse<'200', GetAllResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get('creditarrangements', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll']>
    }

    /**
     * GET /creditarrangements/{creditArrangementId}/accounts
     *
     * Get all loan and deposit accounts linked to credit arrangement
     */
    public getAllAccounts({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { creditArrangementId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', CreditArrangementAccounts>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}/accounts`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CreditArrangementAccounts,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllAccounts']>
    }

    /**
     * GET /creditarrangements/{creditArrangementId}
     *
     * Get credit arrangement
     */
    public getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { creditArrangementId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', CreditArrangement>
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
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * GET /creditarrangements/{creditArrangementId}/schedule
     *
     * Get credit arrangement schedule
     */
    public getSchedule({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { creditArrangementId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', CreditArrangementSchedule>
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
            this.buildClient(auth).get(`creditarrangements/${path.creditArrangementId}/schedule`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CreditArrangementSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getSchedule']>
    }

    /**
     * PATCH /creditarrangements/{creditArrangementId}
     *
     * Partially update credit arrangement
     */
    public patch({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: PatchRequest; path: { creditArrangementId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(PatchRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(`creditarrangements/${path.creditArrangementId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch']>
    }

    /**
     * POST /creditarrangements/{creditArrangementId}:removeAccount
     *
     * Remove account from credit arrangement
     */
    public removeAccount({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: RemoveCreditArrangementAccountInput
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', CreditArrangementAccounts>
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
        const _body = this.validateRequestBody(RemoveCreditArrangementAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`creditarrangements/${path.creditArrangementId}:removeAccount`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: CreditArrangementAccounts,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['removeAccount']>
    }

    /**
     * POST /creditarrangements:search
     *
     * Search credit arrangements
     */
    public search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CreditArrangementSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', SearchResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(CreditArrangementSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('creditarrangements:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: SearchResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search']>
    }

    /**
     * PUT /creditarrangements/{creditArrangementId}
     *
     * Update credit arrangement
     */
    public update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: CreditArrangement; path: { creditArrangementId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', CreditArrangement>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CreditArrangement, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`creditarrangements/${path.creditArrangementId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CreditArrangement,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update']>
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
