import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    ApplyInterestInput,
    ApplyPlannedFeesResponse,
    Card,
    ChangeArrearsSettingsInput,
    ChangeDueDatesSettingsInput,
    ChangeInterestRateLoanAccountInput,
    ChangePeriodicPaymentLoanAccountInput,
    ChangeRepaymentValueLoanAccountInput,
    CollateralAssetFilter,
    CollateralAssetsReevaluationResponse,
    CreateLoanAccountFundingSourcesRequest,
    CreateLoanAccountFundingSourcesResponse,
    CreatePlannedFeesRequest,
    CreatePlannedFeesResponse,
    ErrorResponse,
    GetAllAuthorizationHoldsResponse,
    GetAllCardsResponse,
    GetAllPlannedFeesResponse,
    GetAllResponse,
    GetLoanAccountDocumentResponse,
    GetVersionsByIdResponse,
    LoanAccount,
    LoanAccountAction,
    LoanAccountBalances,
    LoanAccountPayOffInput,
    LoanAccountSchedule,
    LoanAccountSearchCriteria,
    LoanActionDetails,
    PatchFundingSourceRequest,
    PatchRequest,
    PlannedFeeKeys,
    PreviewLoanAccountSchedule,
    PreviewPayOffDueAmountsInAFutureDateInput,
    PreviewPayOffDueAmountsInAFutureDateWrapper,
    RefinanceLoanAccountAction,
    RescheduleLoanAccountAction,
    SearchResponse,
    TerminateLoanAccountInput,
    UpdateLoanAccountFundingSourcesRequest,
    UpdateLoanAccountFundingSourcesResponse,
    UpdatePlannedFeesRequest,
    UpdatePlannedFeesResponse,
} from './rest.zod.js'

/**
 * loans
 */
export class MambuLoanAccounts {
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
     * POST /loans/{loanAccountId}:applyInterest
     *
     * Apply accrued interest
     */
    public applyInterest({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ApplyInterestInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ApplyInterestInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:applyInterest`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['applyInterest']>
    }

    /**
     * POST /loans/{loanAccountId}/plannedfees:apply
     *
     * ApplY planned fees from the past installments, as backdated or from future installments, on the first pending installment
     */
    public applyPlannedFees({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PlannedFeeKeys
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', ApplyPlannedFeesResponse>
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
        const _body = this.validateRequestBody(PlannedFeeKeys, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/plannedfees:apply`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: ApplyPlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyPlannedFees']>
    }

    /**
     * POST /loans/{loanAccountId}:changeArrearsSettings
     *
     * Change arrears settings for loan account
     */
    public changeArrearsSettings({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeArrearsSettingsInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ChangeArrearsSettingsInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeArrearsSettings`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeArrearsSettings']>
    }

    /**
     * POST /loans/{loanAccountId}:changeDueDatesSettings
     *
     * Change due dates settings for loan account
     */
    public changeDueDatesSettings({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeDueDatesSettingsInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ChangeDueDatesSettingsInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeDueDatesSettings`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeDueDatesSettings']>
    }

    /**
     * POST /loans/{loanAccountId}:changeInterestRate
     *
     * Change loan account interest rate
     */
    public changeInterestRate({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeInterestRateLoanAccountInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ChangeInterestRateLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeInterestRate`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeInterestRate']>
    }

    /**
     * POST /loans/{loanAccountId}:changePeriodicPayment
     *
     * Change the periodic payment amount for an active loan, so that it is still possible to have principal and interest installments, but with a smaller or greater total due amount than the initial one.
     */
    public changePeriodicPayment({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangePeriodicPaymentLoanAccountInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ChangePeriodicPaymentLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changePeriodicPayment`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changePeriodicPayment']>
    }

    /**
     * POST /loans/{loanAccountId}:changeRepaymentValue
     *
     * Change repayment value for loan account
     */
    public changeRepaymentValue({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeRepaymentValueLoanAccountInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(ChangeRepaymentValueLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeRepaymentValue`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeRepaymentValue']>
    }

    /**
     * POST /loans/{loanAccountId}:changeState
     *
     * Change loan account state
     */
    public changeState({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanAccountAction
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', LoanAccount>
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
        const _body = this.validateRequestBody(LoanAccountAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeState`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['changeState']>
    }

    /**
     * POST /loans
     *
     * Create loan account
     */
    public create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: LoanAccount; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanAccount>
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
        const _body = this.validateRequestBody(LoanAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('loans', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * POST /loans/{loanAccountId}/cards
     *
     * Represents the information needed to create and associate a new card to an account.
     */
    public createCard({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Card
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', unknown>
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
        const _body = this.validateRequestBody(Card, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/cards`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['createCard']>
    }

    /**
     * POST /loans/{loanAccountId}/funding
     *
     * Create funding sources for a loan account
     */
    public createLoanAccountFundingSources({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CreateLoanAccountFundingSourcesRequest
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CreateLoanAccountFundingSourcesResponse>
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
        const _body = this.validateRequestBody(CreateLoanAccountFundingSourcesRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/funding`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CreateLoanAccountFundingSourcesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createLoanAccountFundingSources']>
    }

    /**
     * POST /loans/{loanAccountId}/plannedfees
     *
     * Create planned fees
     */
    public createPlannedFees({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CreatePlannedFeesRequest
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CreatePlannedFeesResponse>
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
        const _body = this.validateRequestBody(CreatePlannedFeesRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/plannedfees`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CreatePlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createPlannedFees']>
    }

    /**
     * DELETE /loans/{loanAccountId}
     *
     * Delete loan account
     */
    public delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`loans/${path.loanAccountId}`, {}),
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
     * DELETE /loans/{loanAccountId}/cards/{cardReferenceToken}
     *
     * Represents the information needed to delete a card associated to an account using its reference token.
     */
    public deleteCard({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string; cardReferenceToken: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/cards/${path.cardReferenceToken}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteCard']>
    }

    /**
     * DELETE /loans/{loanAccountId}/funding
     *
     * Delete loan account funding sources
     */
    public deleteFundingSources({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/funding`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteFundingSources']>
    }

    /**
     * DELETE /loans/{loanAccountId}/plannedfees/{plannedInstallmentFeeKey}
     *
     * Delete planned fee
     */
    public deletePlannedFees({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string; plannedInstallmentFeeKey: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/plannedfees/${path.plannedInstallmentFeeKey}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deletePlannedFees']>
    }

    /**
     * DELETE /loans/{loanAccountId}/funding/{fundEncodedKey}
     *
     * Delete loan account funding source
     */
    public deleteSingleFundingSource({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string; fundEncodedKey: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteSingleFundingSource']>
    }

    /**
     * GET /loans
     *
     * Get loan accounts
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
            accountState?: string
            accountHolderType?: string
            accountHolderId?: string
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
            this.buildClient(auth).get('loans', {
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
     * GET /loans/{loanAccountId}/authorizationholds
     *
     * Get authorization holds related to a loan account, ordered from newest to oldest by creation date
     */
    public getAllAuthorizationHolds({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetAllAuthorizationHoldsResponse>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}/authorizationholds`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllAuthorizationHoldsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllAuthorizationHolds']>
    }

    /**
     * GET /loans/{loanAccountId}/cards
     *
     * Get cards associated with an account
     */
    public getAllCards({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetAllCardsResponse>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}/cards`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllCardsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllCards']>
    }

    /**
     * GET /loans/{loanAccountId}/plannedfees
     *
     * Get planned fees
     */
    public getAllPlannedFees({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetAllPlannedFeesResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/plannedfees`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllPlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllPlannedFees']>
    }

    /**
     * GET /loans/{loanAccountId}/balances
     *
     * Get loan account balances
     */
    public getBalancesByLoanAccountId({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', LoanAccountBalances>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}/balances`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountBalances,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getBalancesByLoanAccountId']>
    }

    /**
     * GET /loans/{loanAccountId}
     *
     * Get loan account
     */
    public getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', LoanAccount>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * GET /loans/{loanAccountId}/templates/{templateId}
     *
     * Get loan account document
     */
    public getLoanAccountDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetLoanAccountDocumentResponse>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}/templates/${path.templateId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetLoanAccountDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getLoanAccountDocument']>
    }

    /**
     * GET /loans/{loanAccountId}/templates/{templateId}/pdf
     *
     * Download loan account document PDF
     */
    public getPdfDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/templates/${path.templateId}/pdf`, {
                searchParams: query ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getPdfDocument']>
    }

    /**
     * POST /loans:previewSchedule
     *
     * Preview loan account schedule for non-existent loan account
     */
    public getPreviewLoanAccountSchedule({
        body,
        auth = [['apiKey'], ['basic']],
    }: { body: PreviewLoanAccountSchedule; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(PreviewLoanAccountSchedule, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('loans:previewSchedule', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getPreviewLoanAccountSchedule']>
    }

    /**
     * GET /loans/{loanAccountId}:versions
     *
     * Get all versions of loan account
     */
    public getVersionsById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { loanAccountId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetVersionsByIdResponse>
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
            this.buildClient(auth).get(`loans/${path.loanAccountId}:versions`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetVersionsByIdResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getVersionsById']>
    }

    /**
     * PATCH /loans/{loanAccountId}
     *
     * Partially update loan account
     */
    public patch({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: PatchRequest; path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
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
            this.buildClient(auth).patch(`loans/${path.loanAccountId}`, {
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
     * PATCH /loans/{loanAccountId}/funding/{fundEncodedKey}
     *
     * Update loan account funding source
     */
    public patchFundingSource({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchFundingSourceRequest
        path: { loanAccountId: string; fundEncodedKey: string }
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
        const _body = this.validateRequestBody(PatchFundingSourceRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {
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
        ) as ReturnType<this['patchFundingSource']>
    }

    /**
     * POST /loans/{loanAccountId}:payOff
     *
     * Pay off loan account
     */
    public payOff({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanAccountPayOffInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(LoanAccountPayOffInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:payOff`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['payOff']>
    }

    /**
     * POST /loans/{loanAccountId}:previewPayOffAmounts
     *
     * Preview pay off due amounts in a future date
     */
    public previewPayOffAmounts({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PreviewPayOffDueAmountsInAFutureDateInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', PreviewPayOffDueAmountsInAFutureDateWrapper>
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
        const _body = this.validateRequestBody(PreviewPayOffDueAmountsInAFutureDateInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:previewPayOffAmounts`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: PreviewPayOffDueAmountsInAFutureDateWrapper,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['previewPayOffAmounts']>
    }

    /**
     * POST /loans:reevaluateCollateral
     *
     * Update collateral asset amounts
     */
    public reevaluateCollateralAssets({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: CollateralAssetFilter; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', CollateralAssetsReevaluationResponse>
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
        const _body = this.validateRequestBody(CollateralAssetFilter, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('loans:reevaluateCollateral', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: CollateralAssetsReevaluationResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['reevaluateCollateralAssets']>
    }

    /**
     * POST /loans/{loanAccountId}:refinance
     *
     * Refinance loan account
     */
    public refinance({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: RefinanceLoanAccountAction
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', LoanAccount>
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
        const _body = this.validateRequestBody(RefinanceLoanAccountAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:refinance`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['refinance']>
    }

    /**
     * POST /loans/{loanAccountId}:reschedule
     *
     * Reschedule loan account
     */
    public reschedule({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: RescheduleLoanAccountAction
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', LoanAccount>
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
        const _body = this.validateRequestBody(RescheduleLoanAccountAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:reschedule`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['reschedule']>
    }

    /**
     * POST /loans:search
     *
     * Search loan accounts
     */
    public search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanAccountSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', SearchResponse>
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
        const _body = this.validateRequestBody(LoanAccountSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('loans:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: SearchResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search']>
    }

    /**
     * POST /loans/{loanAccountId}:terminate
     *
     * Terminate loan account
     */
    public terminateLoanAccount({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: TerminateLoanAccountInput
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(TerminateLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:terminate`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['terminateLoanAccount']>
    }

    /**
     * POST /loans/{loanAccountId}:undoRefinance
     *
     * Undo loan account refinance action
     */
    public undoRefinance({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanActionDetails
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(LoanActionDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoRefinance`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['undoRefinance']>
    }

    /**
     * POST /loans/{loanAccountId}:undoReschedule
     *
     * Undo loan account reschedule action
     */
    public undoReschedule({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanActionDetails
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(LoanActionDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoReschedule`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['undoReschedule']>
    }

    /**
     * POST /loans/{loanAccountId}:undoWriteOff
     *
     * Undo write off for loan account
     */
    public undoWriteOff({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanActionDetails
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(LoanActionDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoWriteOff`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['undoWriteOff']>
    }

    /**
     * PUT /loans/{loanAccountId}
     *
     * Update loan account
     */
    public update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: LoanAccount; path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', LoanAccount>
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
        const _body = this.validateRequestBody(LoanAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update']>
    }

    /**
     * PUT /loans/{loanAccountId}/funding
     *
     * Update loan account funding sources
     */
    public updateLoanAccountFundingSources({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: UpdateLoanAccountFundingSourcesRequest; path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', UpdateLoanAccountFundingSourcesResponse>
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
        const _body = this.validateRequestBody(UpdateLoanAccountFundingSourcesRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}/funding`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: UpdateLoanAccountFundingSourcesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updateLoanAccountFundingSources']>
    }

    /**
     * PUT /loans/{loanAccountId}/plannedfees
     *
     * Update planned fees
     */
    public updatePlannedFees({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: UpdatePlannedFeesRequest; path: { loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', UpdatePlannedFeesResponse>
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
        const _body = this.validateRequestBody(UpdatePlannedFeesRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}/plannedfees`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: UpdatePlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updatePlannedFees']>
    }

    /**
     * POST /loans/{loanAccountId}:writeOff
     *
     * Write off loan account
     */
    public writeOff({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: LoanActionDetails
        path: { loanAccountId: string }
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
        const _body = this.validateRequestBody(LoanActionDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:writeOff`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['writeOff']>
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
