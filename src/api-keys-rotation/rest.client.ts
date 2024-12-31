/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError } from 'ajv'
import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'

import { ApiKey, ApiKeyRotationResult, ErrorResponse } from './rest.type.js'

/**
 * apikey/rotation
 */
export class MambuApiKeysRotation {
    public client: KyInstance

    public auth: {
        secretkey?: string | (() => Promise<string>)
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
            secretkey?: string | (() => Promise<string>)
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
     * POST /apikey/rotation
     *
     * Rotate API key
     */
    public rotateKey({
        body,
        headers,
        auth = [[]],
    }: { body: ApiKey; headers: { secretkey: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', ApiKeyRotationResult>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(ApiKey, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('apikey/rotation', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                200: ApiKeyRotationResult,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['rotateKey']>
    }

    public validateRequestBody<Body>(
        parser: { parse: (o: unknown) => { left: DefinedError[] } | { right: Body } },
        body: unknown,
    ) {
        const _body = parser.parse(body)
        if ('left' in _body) {
            return {
                success: false as const,
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
        S extends Record<PropertyKey, { parse: (o: I) => { left: DefinedError[] } | { right: unknown } }>,
    >(response: ResponsePromise<I>, schemas: S, responseType?: 'json' | 'text') {
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
        const body = validator?.parse?.(_body)
        if (result.status < 200 || result.status >= 300) {
            return {
                success: false as const,
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
                success: body === undefined,
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: _body,
                validationErrors: body?.left,
                where: 'response:body',
            }
        }
        return { success: true as const, statusCode: result.status.toString(), status, headers: result.headers, right: _body }
    }

    protected buildSecretkeyClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const secretkey = this.auth.secretkey
                        const key = typeof secretkey === 'function' ? await secretkey() : secretkey
                        options.headers.set('secretkey', `${key}`)
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
            if (chosen === 'secretkey') {
                chosenClient = this.buildSecretkeyClient(chosenClient)
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
    validationErrors: DefinedError[] | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`
