import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    Client,
    ClientRole,
    ClientSearchCriteria,
    ErrorResponse,
    GetAllResponse,
    GetCreditArrangementsByClientIdOrKeyResponse,
    PatchRequest,
    SearchResponse,
} from './rest.zod.js'

/**
 * clients
 */
export class MambuClients {
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
     * POST /clients
     *
     * Create client
     */
    public create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: Client; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Client>
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
        const _body = this.validateRequestBody(Client, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('clients', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Client,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * DELETE /clients/{clientId}
     *
     * Delete client
     */
    public delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { clientId: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`clients/${path.clientId}`, {}),
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
     * GET /clients
     *
     * Get clients
     */
    public getAll({
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
            firstName?: string
            lastName?: string
            idNumber?: string
            state?: string
            birthDate?: string
            sortBy?: string
        }
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
            this.buildClient(auth).get('clients', {
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
     * GET /clients/{clientId}
     *
     * Get client
     */
    public getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { clientId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', Client>
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
            this.buildClient(auth).get(`clients/${path.clientId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Client,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * GET /clients/{clientId}/creditarrangements
     *
     * Credit arrangements list returned.
     */
    public getCreditArrangementsByClientIdOrKey({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { clientId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetCreditArrangementsByClientIdOrKeyResponse>
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
            this.buildClient(auth).get(`clients/${path.clientId}/creditarrangements`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetCreditArrangementsByClientIdOrKeyResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getCreditArrangementsByClientIdOrKey']>
    }

    /**
     * GET /clients/{clientId}/role
     *
     * Get client role for client
     */
    public getRoleByClientId({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { clientId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', ClientRole>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`clients/${path.clientId}/role`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: ClientRole,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getRoleByClientId']>
    }

    /**
     * PATCH /clients/{clientId}
     *
     * Partially update client
     */
    public patch({
        body,
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchRequest
        path: { clientId: string }
        query?: { keepAssociationForAccounts?: string }
        auth?: string[][] | string[]
    }): Promise<
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
            this.buildClient(auth).patch(`clients/${path.clientId}`, {
                json: _body.right,
                searchParams: query ?? {},
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
     * POST /clients:search
     *
     * Search clients
     */
    public search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ClientSearchCriteria
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
        const _body = this.validateRequestBody(ClientSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('clients:search', {
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
     * PUT /clients/{clientId}
     *
     * Update client
     */
    public update({
        body,
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Client
        path: { clientId: string }
        query?: { keepAssociationForAccounts?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', Client>
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
        const _body = this.validateRequestBody(Client, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`clients/${path.clientId}`, {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Client,
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
