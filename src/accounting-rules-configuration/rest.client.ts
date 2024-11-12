/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { IncomingHttpHeaders } from 'node:http'

import type { DefinedError } from 'ajv'
import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'

/**
 * configuration/accountingrules.yaml
 */
export class MambuAccountingRulesConfiguration {
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
     * GET /configuration/accountingrules.yaml
     *
     * Retrieve accounting rulesconfiguration
     */
    public get({
        auth = [['apiKey'], ['basic']],
    }: { auth?: string[][] | string[] } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', IncomingHttpHeaders>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get('configuration/accountingrules.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { parse: (x: unknown) => ({ right: x }) },
                401: { parse: (x: unknown) => ({ right: x }) },
                403: { parse: (x: unknown) => ({ right: x }) },
            },
            'text',
        ) as ReturnType<this['get']>
    }

    /**
     * PUT /configuration/accountingrules.yaml
     *
     * Update the current accounting rules configuration
     */
    public update({
        auth = [['apiKey'], ['basic']],
    }: { auth?: string[][] | string[] } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', IncomingHttpHeaders>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              IncomingHttpHeaders
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).put('configuration/accountingrules.yaml', {}),
            {
                200: { parse: (x: unknown) => ({ right: x }) },
                400: { parse: (x: unknown) => ({ right: x }) },
                401: { parse: (x: unknown) => ({ right: x }) },
                403: { parse: (x: unknown) => ({ right: x }) },
                404: { parse: (x: unknown) => ({ right: x }) },
            },
            'text',
        ) as ReturnType<this['update']>
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
