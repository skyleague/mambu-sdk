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
    AccountAuthorizationHold,
    ApplyInterestInput,
    BlockFund,
    Card,
    ChangeInterestRateAction,
    ChangeWithholdingTaxAction,
    DepositAccount,
    DepositAccountAction,
    DepositAccountSearchCriteria,
    ErrorResponse,
    GetAllAuthorizationHoldsResponse,
    GetAllBlocksResponse,
    GetAllCardsResponse,
    GetAllResponse,
    GetDepositAccountDocumentResponse,
    GetFundedLoansResponse,
    GetWithholdingTaxHistoryResponse,
    LoanAccountSchedule,
    PatchBlockFundRequest,
    PatchRequest,
    ReopenDepositAction,
    SearchResponse,
    StartMaturityAction,
    UndoMaturityAction,
} from './rest.type'

/**
 * deposits
 */
export class MambuDepositAccounts {
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
     * Delete a card associated to the provided account via its reference token
     */
    public async deleteCard({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; cardReferenceToken: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}/cards/${path.cardReferenceToken}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Retrieves the withholding taxes related to a deposit account
     */
    public async getWithholdingTaxHistory({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { from?: string; to?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/withholdingtaxes`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetWithholdingTaxHistoryResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a deposit account document (populated template) by provided deposit account id and template id
     */
    public async getDepositAccountDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/templates/${path.templateId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetDepositAccountDocumentResponse,
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
        path: { depositAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/cards`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
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
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Card
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(Card, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/cards`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                201: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Starts the maturity period for the specified deposit account
     */
    public async startMaturity({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: StartMaturityAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(StartMaturityAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:startMaturity`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Retrieves authorization holds related to a deposit account, ordered from newest to oldest by creation date
     */
    public async getAllAuthorizationHolds({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/authorizationholds`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
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
     * Creates an authorization hold corresponding to a given account.
     */
    public async createAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AccountAuthorizationHold
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(AccountAuthorizationHold, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/authorizationholds`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                201: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of all loan accounts that are funded by the deposit account with the given id or encoded key.
     */
    public async getFundedLoans({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/funding`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetFundedLoansResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of deposit accounts using various query parameters. It's possible to look up deposits by their state, branch, centre or by a credit officer to which the deposits are assigned.
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
        }
        auth?: string[][] | string[]
    } = {}) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetAllResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Creates a new deposit account
     */
    public async create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccount
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositAccount, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                201: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows to change the withholding tax for a deposit account
     */
    public async changeWithholdingTax({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeWithholdingTaxAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeWithholdingTaxAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeWithholdingTax`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows download of a deposit account document as PDF by provided deposit account id and template id
     */
    public async getPdfDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/templates/${path.templateId}/pdf`, {
                searchParams: query ?? {},
            }),
            {
                200: { is: (x: unknown): x is string => true },
                400: { is: (x: unknown): x is string => true },
                401: { is: (x: unknown): x is string => true },
                403: { is: (x: unknown): x is string => true },
                404: { is: (x: unknown): x is string => true },
            }
        )
    }

    /**
     * Apply accrued interest
     */
    public async applyInterest({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ApplyInterestInput
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ApplyInterestInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:applyInterest`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Reopen a deposit account
     */
    public async reopen({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ReopenDepositAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ReopenDepositAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:reopen`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Undo the maturity period for the specified deposit account
     */
    public async undoMaturity({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: UndoMaturityAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(UndoMaturityAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:undoMaturity`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Allows to change the interest rate for a deposit account
     */
    public async changeInterestRate({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeInterestRateAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(ChangeInterestRateAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeInterestRate`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows posting an action such as approve deposit account
     */
    public async changeState({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccountAction
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositAccountAction, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeState`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows to unblock a previously blocked fund for a deposit account
     */
    public async unblockFund({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; externalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Updates the amount of an existing blocked fund on a deposit account. If the new amount equals the seized amount the block fund will transition to a seized state.
     */
    public async patchBlockFund({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchBlockFundRequest
        path: { depositAccountId: string; externalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchBlockFundRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single deposit account via id or encoded key
     */
    public async getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Update an existing deposit account
     */
    public async update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccount
        path: { depositAccountId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositAccount, body)

        return this.awaitResponse(
            this.buildClient(auth).put(`deposits/${path.depositAccountId}`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Delete an inactive deposit account via id or encoded key
     */
    public async delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Partially update a deposit account
     */
    public async patch({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchRequest
        path: { depositAccountId: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(`deposits/${path.depositAccountId}`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of all block funds for a deposit account
     */
    public async getAllBlocks({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; state?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/blocks`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: GetAllBlocksResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Create a block fund for the provided account
     */
    public async createBlockFund({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: BlockFund
        path: { depositAccountId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(BlockFund, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/blocks`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (x: unknown): x is unknown => true },
                201: BlockFund,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of a single account authorization hold via external reference id
     */
    public async getAuthorizationHoldById({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(
                `deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                    responseType: 'json',
                }
            ),
            {
                200: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Reverses an account authorization hold.
     */
    public async reverseAuthorizationHold({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(
                `deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                    responseType: 'json',
                }
            ),
            {
                204: { is: (x: unknown): x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Allows retrieval of deposit accounts using search parameters.
     */
    public async search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccountSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(DepositAccountSearchCriteria, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits:search`, {
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
     * Allows retrieval of the loan account schedule for a loan account with the given id or encodedKey and funded by the deposit account with the given id or encodedKey.
     */
    public async getScheduleForFundedAccount({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; loanAccountId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/funding/${path.loanAccountId}/schedule`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
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
