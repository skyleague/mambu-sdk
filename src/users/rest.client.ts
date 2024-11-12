/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { IncomingHttpHeaders } from 'node:http'

import type { DefinedError } from 'ajv'
import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'

import { ErrorResponse, GetAllResponse, PatchRequest, User, UserRequest } from './rest.type.js'

/**
 * users
 */
export class MambuUsers {
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
     * POST /users
     *
     * Create user
     */
    public create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: UserRequest; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', User>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        const _body = this.validateRequestBody(UserRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('users', {
                json: _body.right as UserRequest,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { parse: (x: unknown) => ({ right: x }) },
                201: User,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * DELETE /users/{userId}
     *
     * Delete user
     */
    public delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { userId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(`users/${path.userId}`, {}),
            {
                204: { parse: (x: unknown) => ({ right: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete']>
    }

    /**
     * GET /users
     *
     * Get users
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
            branchId?: string
            branchIdType?: string
        }
        auth?: string[][] | string[]
    } = {}): Promise<
        | SuccessResponse<'200', GetAllResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get('users', {
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
     * GET /users/{userId}
     *
     * Get user
     */
    public getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { userId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', User>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`users/${path.userId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: User,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * PATCH /users/{userId}
     *
     * Partially update user
     */
    public patch({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchRequest
        path: { userId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        const _body = this.validateRequestBody(PatchRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(`users/${path.userId}`, {
                json: _body.right as PatchRequest,
                headers: headers ?? {},
            }),
            {
                204: { parse: (x: unknown) => ({ right: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch']>
    }

    /**
     * PUT /users/{userId}
     *
     * Update user
     */
    public update({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: User; path: { userId: string }; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', User>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        const _body = this.validateRequestBody(User, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`users/${path.userId}`, {
                json: _body.right as User,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { parse: (x: unknown) => ({ right: x }) },
                200: User,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update']>
    }

    public validateRequestBody<Parser extends { parse: (o: unknown) => { left: DefinedError[] } | { right: Body } }, Body>(
        parser: Parser,
        body: unknown,
    ) {
        const _body = parser.parse(body)
        if ('left' in _body) {
            return {
                statusCode: undefined,
                status: undefined,
                headers: undefined,
                left: body,
                validationErrors: _body.left,
                where: 'request:body',
            } satisfies FailureResponse<undefined, unknown, 'request:body', undefined>
        }
        return _body
    }

    public async awaitResponse<
        I,
        S extends Record<PropertyKey, { parse: (o: I) => { left: DefinedError[] } | { right: unknown } } | undefined>,
    >(response: ResponsePromise<I>, schemas: S, responseType?: 'json' | 'text') {
        const result = await response
        const _body = (await (responseType !== undefined ? result[responseType]() : result.text())) as I
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
        const body = validator?.parse?.(_body)
        if (result.status < 200 || result.status >= 300) {
            return {
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: body !== undefined && 'right' in body ? body.right : _body,
                validationErrors: body !== undefined && 'left' in body ? body.left : undefined,
                where: 'response:statuscode',
            }
        }
        if (body === undefined || 'left' in body) {
            return {
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: _body,
                validationErrors: body?.left,
                where: 'response:body',
            }
        }
        return { statusCode: result.status.toString(), status, headers: result.headers, right: _body }
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
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: IncomingHttpHeaders
    right: T
}
export interface FailureResponse<StatusCode = string, T = unknown, Where = never, Headers = IncomingHttpHeaders> {
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: Headers
    validationErrors: DefinedError[] | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`
