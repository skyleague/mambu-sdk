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
    GetByIdWitVersionsResponse,
    GetLoanAccountDocumentResponse,
    LoanAccount,
    LoanAccountAction,
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
} from './rest.type'

export class MambuLoanAccounts {
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
     * Allows retrieval of a loan account document (populated template) by provided loan account id and template id
     */
    public async getLoanAccountDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/templates/${path.templateId}`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: GetLoanAccountDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to update the entire list of the loan account funding sources by provided loan account id.
     */
    public async updateLoanAccountFundingSources({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: UpdateLoanAccountFundingSourcesRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(UpdateLoanAccountFundingSourcesRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}/funding`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: UpdateLoanAccountFundingSourcesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Creates new funding sources for a loan account.
     */
    public async createLoanAccountFundingSources({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: CreateLoanAccountFundingSourcesRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CreateLoanAccountFundingSourcesRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/funding`, {
                json: body,
                responseType: 'json',
            }),
            {
                201: CreateLoanAccountFundingSourcesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Deletes all loan account funding sources.
     */
    public async deleteFundingSources({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/funding`, {
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
     * Undo write off for a loan account
     */
    public async undoWriteOff({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanActionDetails
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanActionDetails, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoWriteOff`, {
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
     * Allows to pay off a loan account
     */
    public async payOff({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanAccountPayOffInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanAccountPayOffInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:payOff`, {
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
     * Allows to change the periodic payment amount for an active loan, so that we can still be able to have Principal and Interest installments, but with a smaller/greater total due amount than the initial one.
     */
    public async changePeriodicPayment({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ChangePeriodicPaymentLoanAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangePeriodicPaymentLoanAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changePeriodicPayment`, {
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
     * Allows to refinance a loan account
     */
    public async refinance({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: RefinanceLoanAccountAction
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(RefinanceLoanAccountAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:refinance`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Preview pay off due amounts in a future date
     */
    public async previewPayOffAmounts({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: PreviewPayOffDueAmountsInAFutureDateInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PreviewPayOffDueAmountsInAFutureDateInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:previewPayOffAmounts`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: PreviewPayOffDueAmountsInAFutureDateWrapper,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to reschedule a loan account
     */
    public async reschedule({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: RescheduleLoanAccountAction
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(RescheduleLoanAccountAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:reschedule`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Delete a card associated to the provided account via its reference token
     */
    public async deleteCard({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; cardReferenceToken: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/cards/${path.cardReferenceToken}`, {
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
     * Allows to undo reschedule a loan account
     */
    public async undoReschedule({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanActionDetails
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanActionDetails, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoReschedule`, {
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
     * Allows to change the arrears settings for an active loan account
     */
    public async changeArrearsSettings({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ChangeArrearsSettingsInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeArrearsSettingsInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeArrearsSettings`, {
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
     * Applies planned fees from the past installments, as backdated or from future installments, on the first pending installment.
     */
    public async applyPlannedFees({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: PlannedFeeKeys
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PlannedFeeKeys, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/plannedfees:apply`, {
                json: body,
                responseType: 'json',
            }),
            {
                201: ApplyPlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to change the interest rate for a loan account
     */
    public async changeInterestRate({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ChangeInterestRateLoanAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeInterestRateLoanAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeInterestRate`, {
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
     * Invokes a job to run the update for collateral assets amounts.
     */
    public async reevaluateCollateralAssets({
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CollateralAssetFilter
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CollateralAssetFilter, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans:reevaluateCollateral`, {
                json: body,
                responseType: 'json',
            }),
            {
                202: CollateralAssetsReevaluationResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows to change due dates settings for an active loan account
     */
    public async changeDueDatesSettings({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ChangeDueDatesSettingsInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeDueDatesSettingsInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeDueDatesSettings`, {
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
     * Client Directed Query. Allows you to search loan accounts by various criteria
     */
    public async search({
        query,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        body: LoanAccountSearchCriteria
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanAccountSearchCriteria, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans:search`, {
                json: body,
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: SearchResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to delete loan account single funding source by provided loan account id or encoded key and fund encoded key.
     */
    public async deleteSingleFundingSource({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; fundEncodedKey: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {
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
     * Allows updating a single funding source by provided loan account id and fund encoded key with patch operations
     */
    public async patchFundingSource({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; fundEncodedKey: string }
        body: PatchFundingSourceRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchFundingSourceRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {
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
     * Allows retrieval of all planned fees associated to the installments of the provided account.
     */
    public async getAllPlannedFees({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/plannedfees`, {
                responseType: 'json',
            }),
            {
                200: GetAllPlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Updates existing planned fees associated to the installments of the provided account.
     */
    public async updatePlannedFees({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: UpdatePlannedFeesRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(UpdatePlannedFeesRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}/plannedfees`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: UpdatePlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Creates new planned fees associated to the installments of the provided account.
     */
    public async createPlannedFees({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: CreatePlannedFeesRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CreatePlannedFeesRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/plannedfees`, {
                json: body,
                responseType: 'json',
            }),
            {
                201: CreatePlannedFeesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to write off a loan account
     */
    public async writeOff({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanActionDetails
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanActionDetails, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:writeOff`, {
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
     * Allows retrieval of a single loan account via id or encoded key
     */
    public async getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Update an existing loan account
     */
    public async update({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanAccount
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanAccount, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`loans/${path.loanAccountId}`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Delete a loan account
     */
    public async delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`loans/${path.loanAccountId}`, {
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
     * Partially update an existing loan account
     */
    public async patch({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: PatchRequest
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`loans/${path.loanAccountId}`, {
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
     * Retrieves authorization holds related to a loan account, ordered from newest to oldest by creation date
     */
    public async getAllAuthorizationHolds({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/authorizationholds`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: GetAllAuthorizationHoldsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of all cards associated with the account
     */
    public async getAllCards({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}/cards`, {
                responseType: 'json',
            }),
            {
                200: GetAllCardsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Create and associate a new card to the provided account
     */
    public async createCard({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: Card
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(Card, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}/cards`, {
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
     * Allows to change the repayment value for a loan account
     */
    public async changeRepaymentValue({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ChangeRepaymentValueLoanAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeRepaymentValueLoanAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeRepaymentValue`, {
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
     * Apply accrued interest
     */
    public async applyInterest({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: ApplyInterestInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ApplyInterestInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:applyInterest`, {
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
     * Allows retrieval of loan accounts using various query parameters. It's possible to look up loans by their state, branch, centre or by a credit officer to which the loans are assigned.
     */
    public async getAll({
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
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans`, {
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
     * Creates a new loan account
     */
    public async create({ body, auth = [['apiKey'], ['basic']] }: { body: LoanAccount; auth?: string[][] | string[] }) {
        this.validateRequestBody(LoanAccount, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans`, {
                json: body,
                responseType: 'json',
            }),
            {
                201: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows to undo refinance a loan account
     */
    public async undoRefinance({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanActionDetails
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanActionDetails, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:undoRefinance`, {
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
     * Allows to terminate a loan account
     */
    public async terminateLoanAccount({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: TerminateLoanAccountInput
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(TerminateLoanAccountInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:terminate`, {
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
     * Allows posting an action such as approve/reject/withdraw/close loan account
     */
    public async changeState({
        path,
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        body: LoanAccountAction
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(LoanAccountAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans/${path.loanAccountId}:changeState`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: LoanAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single loan account via id. The result contains details all the previous versions of the particular account if it was refinanced/rescheduled
     */
    public async getByIdWitVersions({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`loans/${path.loanAccountId}:versions`, {
                searchParams: query ?? {},
                responseType: 'json',
            }),
            {
                200: GetByIdWitVersionsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Deletes planned fee associated to the planned installment fee encoded key of the provided account.
     */
    public async deletePlannedFees({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; plannedInstallmentFeeKey: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`loans/${path.loanAccountId}/plannedfees/${path.plannedInstallmentFeeKey}`, {
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
     * Allows retrieval of a loan account schedule for non existing loan account
     */
    public async getPreviewLoanAccountSchedule({
        body,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PreviewLoanAccountSchedule
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PreviewLoanAccountSchedule, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`loans:previewSchedule`, {
                json: body,
                responseType: 'json',
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            }
        )
    }

    /**
     * Allows to download a pdf of loan account document by provided loan account id and template id.
     */
    public async getPdfDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { loanAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }) {
        return this.buildClient(auth).get(`loans/${path.loanAccountId}/templates/${path.templateId}/pdf`, {
            searchParams: query ?? {},
        })
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
