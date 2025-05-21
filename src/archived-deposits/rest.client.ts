import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    AccountAuthorizationHold,
    AccountBalances,
    AccountingRate,
    AccountingReport,
    AccountingReportGenerationInput,
    AccountingReportGenerationResponse,
    AddCreditArrangementAccountInput,
    ApiConsumer,
    ApiKey,
    ApiKeyInput,
    ApiKeyRotationResult,
    ApplicationStatus,
    ApplyInterestInput,
    ApplyPlannedFeesResponse,
    ArchivedDepositTransaction,
    AuthorizationHold,
    AuthorizationHoldAmountAdjustmentRequest,
    BackgroundProcess,
    BlockFund,
    Branch,
    BulkCardAuthorizationHoldsInput,
    BulkDepositTransactionsInput,
    BulkInterestAccountSettingsAvailabilityInput,
    BulkProcessStatus,
    Card,
    CardTransactionInput,
    CardTransactionOutput,
    CardTransactionReversal,
    Centre,
    ChangeArrearsSettingsInput,
    ChangeDueDatesSettingsInput,
    ChangeInterestRateAction,
    ChangeInterestRateLoanAccountInput,
    ChangePeriodicPaymentLoanAccountInput,
    ChangeRepaymentValueLoanAccountInput,
    ChangeWithholdingTaxAction,
    Client,
    ClientRole,
    ClientSearchCriteria,
    CollateralAssetFilter,
    CollateralAssetsReevaluationResponse,
    Comment,
    CommunicationMessage,
    CommunicationMessageAction,
    CommunicationMessageEnqueueAction,
    CommunicationMessagesSearchSortCriteria,
    Create9Request,
    Create9Response,
    Create10Response,
    Create19Request,
    Create19Response,
    CreateDocument1Request,
    CreateDocumentRequest,
    CreateLoanAccountFundingSourcesRequest,
    CreateLoanAccountFundingSourcesResponse,
    CreatePlannedFeesRequest,
    CreatePlannedFeesResponse,
    CreditArrangement,
    CreditArrangementAccounts,
    CreditArrangementAction,
    CreditArrangementSchedule,
    CreditArrangementSearchCriteria,
    CurrencyDetails,
    CustomFieldMeta,
    DataImportAction,
    DataImportRequest,
    DataImportResponse,
    DataImportStatus,
    DepositAccount,
    DepositAccountAction,
    DepositAccountBalanceSummarySearchCriteria,
    DepositAccountSearchCriteria,
    DepositProduct,
    DepositProductAction,
    DepositProductActionResponse,
    DepositTransaction,
    DepositTransactionAdjustmentDetails,
    DepositTransactionInput,
    DepositTransactionSearchCriteria,
    DisbursementLoanTransactionInput,
    Document,
    EditScheduleRequest,
    EditTranchesRequest,
    EditTranchesResponse,
    EditTransactionDetailsRequest,
    ErrorResponse,
    ExchangeRate,
    ExchangeRateInput,
    FeeAppliedDepositTransactionInput,
    FeeLoanTransactionInput,
    FilterCriteriaValueDateBetweenDTO,
    GLAccount,
    GLJournalEntrySearchCriteria,
    GeneralSetup,
    GetAll1Response,
    GetAll2Response,
    GetAll3Response,
    GetAll4Response,
    GetAll5Response,
    GetAll6Response,
    GetAll7Response,
    GetAll8Response,
    GetAll9Response,
    GetAll10Response,
    GetAll11Response,
    GetAll12Response,
    GetAll13Response,
    GetAll14Response,
    GetAll15Response,
    GetAll16Response,
    GetAll17Response,
    GetAll18Response,
    GetAll19Response,
    GetAll20Response,
    GetAll21Response,
    GetAll22Response,
    GetAll23Response,
    GetAll24Response,
    GetAllAuthorizationHolds1Response,
    GetAllAuthorizationHoldsResponse,
    GetAllBlocksResponse,
    GetAllBySetIdResponse,
    GetAllCards1Response,
    GetAllCardsResponse,
    GetAllIndexRateSourcesResponse,
    GetAllIndexRatesResponse,
    GetAllPlannedFeesResponse,
    GetAllResponse,
    GetAuthorizationHold,
    GetCardTransaction,
    GetCommentsResponse,
    GetCreditArrangementsByClientIdOrKeyResponse,
    GetCreditArrangementsByGroupIdOrKeyResponse,
    GetDepositAccountDocumentResponse,
    GetDepositTransactionDocumentResponse,
    GetDocumentsByClientIdResponse,
    GetDocumentsByEntityIdResponse,
    GetFundedLoansResponse,
    GetInterestAvailabilitiesListResponse,
    GetKeysByConsumerIdResponse,
    GetLoanAccountDocumentResponse,
    GetLoanAccountRsvResponse,
    GetTranchesResponse,
    GetTransactionsForAllVersionsResponse,
    GetVersionsByIdResponse,
    GetWithholdingTaxHistoryResponse,
    Group,
    GroupSearchCriteria,
    Holiday,
    Holidays,
    IndexRate,
    IndexRateSource,
    InterestAccountSettingsAvailability,
    InterestAccountSettingsAvailabilityResponse,
    InterestAccountSettingsAvailabilityUpdate,
    InterestAccrualSearchCriteria,
    LoanAccount,
    LoanAccountAction,
    LoanAccountBalances,
    LoanAccountPayOffInput,
    LoanAccountPreviewProcessPMTTransactionally,
    LoanAccountSchedule,
    LoanAccountSearchCriteria,
    LoanActionDetails,
    LoanProduct,
    LoanTransaction,
    LoanTransactionAdjustmentDetails,
    LoanTransactionSearchCriteria,
    LockLoanAccountInput,
    LockLoanTransactionsWrapper,
    MultipleAtomicGroupsInput,
    MultipleAtomicGroupsResponse,
    NonWorkingDays,
    OrganizationSetup,
    Patch1Request,
    Patch2Request,
    Patch3Request,
    Patch4Request,
    Patch5Request,
    Patch6Request,
    Patch7Request,
    Patch8Request,
    Patch9Request,
    Patch10Request,
    Patch11Request,
    PatchAuthorizationHoldRequest,
    PatchBlockFundRequest,
    PatchFundingSourceRequest,
    PatchRequest,
    PaymentMadeTransactionInput,
    PlannedFeeKeys,
    PostAccountingRateDTO,
    PostGLJournalEntriesDTO,
    PreviewLoanAccountSchedule,
    PreviewPayOffDueAmountsInAFutureDateInput,
    PreviewPayOffDueAmountsInAFutureDateWrapper,
    PreviewTranchesOnScheduleRequest,
    PrincipalOverpaymentLoanTransactionInput,
    RedrawRepaymentTransactionInputDTO,
    RefinanceLoanAccountAction,
    RefundLoanTransactionInput,
    RemoveCreditArrangementAccountInput,
    ReopenDepositAction,
    RepaymentLoanTransactionInput,
    RescheduleLoanAccountAction,
    Role,
    Search1Response,
    Search2Request,
    Search2Response,
    Search3Response,
    Search4Response,
    Search5Response,
    Search6Response,
    Search7Response,
    Search8Response,
    Search9Response,
    Search10Response,
    Search11Response,
    SearchResponse,
    SecretKey,
    SeizeBlockAmount,
    SellFundingSourceAction,
    SellResponse,
    StartMaturityAction,
    Task,
    TerminateLoanAccountInput,
    TransactionChannel,
    TransferDepositTransactionInput,
    TransferOwnershipAction,
    TriggerDatabaseBackupRequest,
    TriggerDatabaseBackupResponse,
    TriggerHourlyAndEndOfDayProcessingResponse,
    UndoMaturityAction,
    UnlockLoanAccountInput,
    UpdateLoanAccountFundingSourcesRequest,
    UpdateLoanAccountFundingSourcesResponse,
    UpdatePlannedFeesRequest,
    UpdatePlannedFeesResponse,
    User,
    UserRequest,
    WithdrawalDepositTransactionInput,
    WithdrawalRedrawTransactionInput,
} from './rest.zod.js'

/**
 * Archived Deposits
 */
export class MambuArchivedDeposits {
    public client: KyInstance

    public auth: {
        basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
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
        prefixUrl: string
        options?: Options
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
            secretkey?: string | (() => Promise<string>)
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
     * POST /data/import/events/{eventKey}:action
     *
     * Allows you to approve or reject a data import event
     */
    public action({
        body,
        path,
        headers,
    }: { body: DataImportAction; path: { eventKey: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
        const _body = this.validateRequestBody(DataImportAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`data/import/events/${path.eventKey}:action`, {
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
        ) as ReturnType<this['action']>
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
    }: {
        body: AddCreditArrangementAccountInput
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`creditarrangements/${path.creditArrangementId}:addAccount`, {
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
     * POST /deposits/transactions/{depositTransactionId}:adjust
     *
     * Adjust a deposit transaction, which may bulk adjust multiple transactions
     */
    public adjust({
        body,
        path,
        headers,
    }: {
        body: DepositTransactionAdjustmentDetails
        path: { depositTransactionId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositTransaction>
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
        const _body = this.validateRequestBody(DepositTransactionAdjustmentDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/transactions/${path.depositTransactionId}:adjust`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['adjust']>
    }

    /**
     * POST /loans/transactions/{loanTransactionId}:adjust
     *
     * Adjust loan transaction
     */
    public adjust1({
        body,
        path,
        headers,
    }: {
        body: LoanTransactionAdjustmentDetails
        path: { loanTransactionId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', LoanTransaction>
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
        const _body = this.validateRequestBody(LoanTransactionAdjustmentDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/transactions/${path.loanTransactionId}:adjust`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['adjust1']>
    }

    /**
     * POST /deposits/{depositAccountId}/fee-transactions
     *
     * Apply a fee on a deposit account
     */
    public applyFee({
        body,
        path,
        headers,
    }: {
        body: FeeAppliedDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(FeeAppliedDepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/fee-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyFee']>
    }

    /**
     * POST /loans/{loanAccountId}/fee-transactions
     *
     * Apply a fee on a loan account
     */
    public applyFee1({
        body,
        path,
        headers,
    }: { body: FeeLoanTransactionInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(FeeLoanTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/fee-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyFee1']>
    }

    /**
     * POST /deposits/{depositAccountId}:applyInterest
     *
     * Represents information to apply accrued interest.
     */
    public applyInterest({
        body,
        path,
        headers,
    }: { body: ApplyInterestInput; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
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
            this.client.post(`deposits/${path.depositAccountId}:applyInterest`, {
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
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['applyInterest']>
    }

    /**
     * POST /loans/{loanAccountId}:applyInterest
     *
     * Apply accrued interest
     */
    public applyInterest1({
        body,
        path,
        headers,
    }: { body: ApplyInterestInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:applyInterest`, {
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
        ) as ReturnType<this['applyInterest1']>
    }

    /**
     * POST /loans/{loanAccountId}/lock-transactions
     *
     * Lock loan account income sources (interest, fees, penalties)
     */
    public applyLock({
        body,
        path,
        headers,
    }: { body: LockLoanAccountInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LockLoanTransactionsWrapper>
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
        const _body = this.validateRequestBody(LockLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/lock-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LockLoanTransactionsWrapper,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyLock']>
    }

    /**
     * POST /loans/{loanAccountId}/payment-made-transactions
     *
     * Make payment in redraw balance for loan account
     */
    public applyPaymentMade({
        body,
        path,
        headers,
    }: { body: PaymentMadeTransactionInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(PaymentMadeTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/payment-made-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyPaymentMade']>
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
    }: { body: PlannedFeeKeys; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}/plannedfees:apply`, {
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
     * POST /loans/{loanAccountId}/unlock-transactions
     *
     * Unlock loan account income sources (interest, fees, penalties)
     */
    public applyUnlock({
        body,
        path,
        headers,
    }: { body: UnlockLoanAccountInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LockLoanTransactionsWrapper>
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
        const _body = this.validateRequestBody(UnlockLoanAccountInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/unlock-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LockLoanTransactionsWrapper,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['applyUnlock']>
    }

    /**
     * POST /depositproducts/{depositProductId}:batchUpdate
     *
     * Perform a batch update action on the specified deposit product
     */
    public batchUpdate({
        body,
        path,
        headers,
    }: { body: DepositProductAction; path: { depositProductId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', DepositProductActionResponse>
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
        const _body = this.validateRequestBody(DepositProductAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`depositproducts/${path.depositProductId}:batchUpdate`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: DepositProductActionResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['batchUpdate']>
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
    }: { body: ChangeArrearsSettingsInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:changeArrearsSettings`, {
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
    }: { body: ChangeDueDatesSettingsInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:changeDueDatesSettings`, {
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
     * POST /deposits/{depositAccountId}:changeInterestRate
     *
     * Change deposit account interest rate
     */
    public changeInterestRate({
        body,
        path,
        headers,
    }: { body: ChangeInterestRateAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
        const _body = this.validateRequestBody(ChangeInterestRateAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:changeInterestRate`, {
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
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeInterestRate']>
    }

    /**
     * POST /loans/{loanAccountId}:changeInterestRate
     *
     * Change loan account interest rate
     */
    public changeInterestRate1({
        body,
        path,
        headers,
    }: {
        body: ChangeInterestRateLoanAccountInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`loans/${path.loanAccountId}:changeInterestRate`, {
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
        ) as ReturnType<this['changeInterestRate1']>
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
    }: {
        body: ChangePeriodicPaymentLoanAccountInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`loans/${path.loanAccountId}:changePeriodicPayment`, {
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
    }: {
        body: ChangeRepaymentValueLoanAccountInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`loans/${path.loanAccountId}:changeRepaymentValue`, {
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
     * POST /creditarrangements/{creditArrangementId}:changeState
     *
     * Change credit arrangement state
     */
    public changeState({
        body,
        path,
        headers,
    }: {
        body: CreditArrangementAction
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`creditarrangements/${path.creditArrangementId}:changeState`, {
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
     * POST /deposits/{depositAccountId}:changeState
     *
     * Represents the information to post an action, such as approving a deposit account.
     */
    public changeState1({
        body,
        path,
        headers,
    }: { body: DepositAccountAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
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
        const _body = this.validateRequestBody(DepositAccountAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:changeState`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['changeState1']>
    }

    /**
     * POST /loans/{loanAccountId}:changeState
     *
     * Change loan account state
     */
    public changeState2({
        body,
        path,
        headers,
    }: { body: LoanAccountAction; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:changeState`, {
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
        ) as ReturnType<this['changeState2']>
    }

    /**
     * POST /deposits/{depositAccountId}:changeWithholdingTax
     *
     * Change deposit account withholding tax rate
     */
    public changeWithholdingTax({
        body,
        path,
        headers,
    }: {
        body: ChangeWithholdingTaxAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
        const _body = this.validateRequestBody(ChangeWithholdingTaxAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:changeWithholdingTax`, {
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
        ) as ReturnType<this['changeWithholdingTax']>
    }

    /**
     * POST /currencies/{currencyCode}/accountingRates
     *
     * Create accounting rates
     */
    public create({
        body,
        path,
        headers,
    }: { body: PostAccountingRateDTO; path: { currencyCode: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', AccountingRate>
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
        const _body = this.validateRequestBody(PostAccountingRateDTO, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`currencies/${path.currencyCode}/accountingRates`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: AccountingRate,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * POST /accounting/reports
     *
     * Create  accounting report
     */
    public create1({
        body,
        headers,
    }: { body: AccountingReportGenerationInput; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', AccountingReportGenerationResponse>
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
        const _body = this.validateRequestBody(AccountingReportGenerationInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('accounting/reports', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: AccountingReportGenerationResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create1']>
    }

    /**
     * POST /gljournalentries
     *
     * Create general ledger journal entries.
     */
    public create10({
        body,
        headers,
    }: { body: PostGLJournalEntriesDTO; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Create10Response>
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
        const _body = this.validateRequestBody(PostGLJournalEntriesDTO, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('gljournalentries', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Create10Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create10']>
    }

    /**
     * POST /groups
     *
     * Create group
     */
    public create11({
        body,
        headers,
    }: { body: Group; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Group>
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
        const _body = this.validateRequestBody(Group, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('groups', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create11']>
    }

    /**
     * POST /loans
     *
     * Create loan account
     */
    public create12({
        body,
        headers,
    }: { body: LoanAccount; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post('loans', {
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
        ) as ReturnType<this['create12']>
    }

    /**
     * POST /loanproducts
     *
     * Create loan product
     */
    public create13({
        body,
        headers,
    }: { body: LoanProduct; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanProduct>
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
        const _body = this.validateRequestBody(LoanProduct, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('loanproducts', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create13']>
    }

    /**
     * POST /tasks
     *
     * Create task
     */
    public create14({
        body,
        headers,
    }: { body: Task; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Task>
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
        const _body = this.validateRequestBody(Task, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('tasks', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Task,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create14']>
    }

    /**
     * POST /organization/transactionChannels
     *
     * Create transaction channel
     */
    public create15({
        body,
        headers,
    }: { body: TransactionChannel; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', TransactionChannel>
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
        const _body = this.validateRequestBody(TransactionChannel, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('organization/transactionChannels', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: TransactionChannel,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create15']>
    }

    /**
     * POST /userroles
     *
     * Create user role
     */
    public create16({
        body,
        headers,
    }: { body: Role; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Role>
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
        const _body = this.validateRequestBody(Role, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('userroles', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Role,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create16']>
    }

    /**
     * POST /users
     *
     * Create user
     */
    public create17({
        body,
        headers,
    }: { body: UserRequest; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', User>
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
        const _body = this.validateRequestBody(UserRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('users', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: User,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create17']>
    }

    /**
     * POST /currencies
     *
     * Create currency
     */
    public create18({
        body,
        headers,
    }: { body: CurrencyDetails; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CurrencyDetails>
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
        const _body = this.validateRequestBody(CurrencyDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('currencies', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CurrencyDetails,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create18']>
    }

    /**
     * POST /organization/holidays/general
     *
     * Create holidays
     */
    public create19({
        body,
        headers,
    }: { body: Create19Request; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Create19Response>
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
        const _body = this.validateRequestBody(Create19Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('organization/holidays/general', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Create19Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create19']>
    }

    /**
     * POST /consumers
     *
     * Create API consumer
     */
    public create2({
        body,
        headers,
    }: { body: ApiConsumer; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', ApiConsumer>
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
        const _body = this.validateRequestBody(ApiConsumer, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('consumers', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: ApiConsumer,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create2']>
    }

    /**
     * POST /branches
     *
     * Create branch
     */
    public create3({
        body,
        headers,
    }: { body: Branch; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Branch>
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
        const _body = this.validateRequestBody(Branch, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('branches', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Branch,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create3']>
    }

    /**
     * POST /clients
     *
     * Create client
     */
    public create4({
        body,
        headers,
    }: { body: Client; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post('clients', {
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
        ) as ReturnType<this['create4']>
    }

    /**
     * POST /creditarrangements
     *
     * Create credit arrangement
     */
    public create5({
        body,
        headers,
    }: { body: CreditArrangement; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post('creditarrangements', {
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
        ) as ReturnType<this['create5']>
    }

    /**
     * POST /deposits
     *
     * Create deposit account
     */
    public create6({
        body,
        headers,
    }: { body: DepositAccount; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create6']>
    }

    /**
     * POST /depositproducts
     *
     * Create deposit product
     */
    public create7({
        body,
        headers,
    }: { body: DepositProduct; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositProduct>
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
        const _body = this.validateRequestBody(DepositProduct, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('depositproducts', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create7']>
    }

    /**
     * POST /currencies/{currencyCode}/rates
     *
     * Post exchange rates for a specific currency.
     */
    public create8({
        body,
        path,
        headers,
    }: { body: ExchangeRateInput; path: { currencyCode: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', ExchangeRate>
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
        const _body = this.validateRequestBody(ExchangeRateInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`currencies/${path.currencyCode}/rates`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: ExchangeRate,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create8']>
    }

    /**
     * POST /glaccounts
     *
     * Create general ledger account
     */
    public create9({
        body,
        headers,
    }: { body: Create9Request; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Create9Response>
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
        const _body = this.validateRequestBody(Create9Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('glaccounts', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Create9Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create9']>
    }

    /**
     * POST /consumers/{apiConsumerId}/apikeys
     *
     * Create API key
     */
    public createApiKeyForConsumer({
        body,
        path,
        headers,
    }: { body: ApiKeyInput; path: { apiConsumerId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', ApiKey>
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
        const _body = this.validateRequestBody(ApiKeyInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`consumers/${path.apiConsumerId}/apikeys`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: ApiKey,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createApiKeyForConsumer']>
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
    }: { body: AuthorizationHold; path: { cardReferenceToken: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`cards/${path.cardReferenceToken}/authorizationholds`, {
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
     * POST /deposits/{depositAccountId}/authorizationholds
     *
     * Create an authorization hold corresponding to a given account
     */
    public createAuthorizationHold1({
        body,
        path,
        headers,
    }: { body: AccountAuthorizationHold; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', AccountAuthorizationHold>
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
        const _body = this.validateRequestBody(AccountAuthorizationHold, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/authorizationholds`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createAuthorizationHold1']>
    }

    /**
     * POST /deposits/{depositAccountId}/blocks
     *
     * Create a block fund for the account
     */
    public createBlockFund({
        body,
        path,
        headers,
    }: { body: BlockFund; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', BlockFund>
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
        const _body = this.validateRequestBody(BlockFund, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/blocks`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: BlockFund,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createBlockFund']>
    }

    /**
     * POST /cards/{cardReferenceToken}/authorizationholds:bulk
     *
     * Create bulk authorization holds corresponding to a given card
     */
    public createBulkAuthorizationHolds({
        body,
        path,
    }: { body: BulkCardAuthorizationHoldsInput; path: { cardReferenceToken: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', BulkCardAuthorizationHoldsInput>
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
        const _body = this.validateRequestBody(BulkCardAuthorizationHoldsInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`cards/${path.cardReferenceToken}/authorizationholds:bulk`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: BulkCardAuthorizationHoldsInput,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createBulkAuthorizationHolds']>
    }

    /**
     * POST /deposits/{depositAccountId}/cards
     *
     * Represents the information needed to create and associate a new card to an account.
     */
    public createCard({
        body,
        path,
        headers,
    }: { body: Card; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', unknown>
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
        const _body = this.validateRequestBody(Card, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/cards`, {
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
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['createCard']>
    }

    /**
     * POST /loans/{loanAccountId}/cards
     *
     * Represents the information needed to create and associate a new card to an account.
     */
    public createCard1({
        body,
        path,
        headers,
    }: { body: Card; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}/cards`, {
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
        ) as ReturnType<this['createCard1']>
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
    }: { body: CardTransactionInput; path: { cardReferenceToken: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`cards/${path.cardReferenceToken}/financialtransactions`, {
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
     * POST /comments
     *
     * Create a new comment for an entity.
     */
    public createComment({
        body,
        headers,
    }: { body: Comment; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Comment>
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
        const _body = this.validateRequestBody(Comment, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('comments', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Comment,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createComment']>
    }

    /**
     * POST /clients/{clientId}/documents
     *
     * Create client document
     */
    public createDocument({
        body,
        path,
        headers,
    }: { body: CreateDocumentRequest; path: { clientId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | SuccessResponse<'201', Document>
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
        const _body = this.validateRequestBody(CreateDocumentRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        const _form = new FormData()
        for (const [key, value] of Object.entries(_body.right as CreateDocumentRequest)) {
            if (value !== null && value !== undefined) {
                _form.append(key, value as string)
            }
        }
        return this.awaitResponse(
            this.client.post(`clients/${path.clientId}/documents`, {
                body: _form,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                201: Document,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createDocument']>
    }

    /**
     * POST /documents
     *
     * Create document
     */
    public createDocument1({
        body,
        headers,
    }: { body: CreateDocument1Request; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', Document>
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
        const _body = this.validateRequestBody(CreateDocument1Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        const _form = new FormData()
        for (const [key, value] of Object.entries(_body.right as CreateDocument1Request)) {
            if (value !== null && value !== undefined) {
                _form.append(key, value as string)
            }
        }
        return this.awaitResponse(
            this.client.post('documents', {
                body: _form,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: Document,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createDocument1']>
    }

    /**
     * POST /indexratesources/{indexRateSourceId}/indexrates
     *
     * Create index rate
     */
    public createIndexRate({
        body,
        path,
        headers,
    }: { body: IndexRate; path: { indexRateSourceId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', IndexRate>
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
        const _body = this.validateRequestBody(IndexRate, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`indexratesources/${path.indexRateSourceId}/indexrates`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: IndexRate,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createIndexRate']>
    }

    /**
     * POST /indexratesources
     *
     * Create index rate source
     */
    public createIndexRateSource({
        body,
        headers,
    }: { body: IndexRateSource; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', IndexRateSource>
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
        const _body = this.validateRequestBody(IndexRateSource, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('indexratesources', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: IndexRateSource,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createIndexRateSource']>
    }

    /**
     * POST /deposits/{depositAccountId}/interest-availabilities
     *
     * Create Interest Availability
     */
    public createInterestAvailability({
        body,
        path,
        headers,
    }: {
        body: InterestAccountSettingsAvailability
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', InterestAccountSettingsAvailabilityResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(InterestAccountSettingsAvailability, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/interest-availabilities`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createInterestAvailability']>
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
    }: {
        body: CreateLoanAccountFundingSourcesRequest
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`loans/${path.loanAccountId}/funding`, {
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
    }: { body: CreatePlannedFeesRequest; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}/plannedfees`, {
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
     * POST /consumers/{apiConsumerId}/secretkeys
     *
     * Create secret key
     */
    public createSecretKeyForConsumer({
        path,
        headers,
    }: { path: { apiConsumerId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', SecretKey>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.client.post(`consumers/${path.apiConsumerId}/secretkeys`, {
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: SecretKey,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createSecretKeyForConsumer']>
    }

    /**
     * POST /data/import
     *
     * Allows you to import data
     */
    public dataImport({
        body,
    }: { body: DataImportRequest }): Promise<
        | SuccessResponse<'202', DataImportResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(DataImportRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        const _form = new FormData()
        for (const [key, value] of Object.entries(_body.right as DataImportRequest)) {
            if (value !== null && value !== undefined) {
                _form.append(key, value as string)
            }
        }
        return this.awaitResponse(
            this.client.post('data/import', {
                body: _form,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                202: DataImportResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['dataImport']>
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
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(
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
     * DELETE /consumers/{apiConsumerId}
     *
     * Delete API consumer
     */
    public delete({
        path,
    }: { path: { apiConsumerId: string } }): Promise<
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
            this.client.delete(`consumers/${path.apiConsumerId}`, {}),
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
     * DELETE /clients/{clientId}
     *
     * Delete client
     */
    public delete1({
        path,
    }: { path: { clientId: string } }): Promise<
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
            this.client.delete(`clients/${path.clientId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete1']>
    }

    /**
     * DELETE /userroles/{roleId}
     *
     * Delete user role
     */
    public delete10({
        path,
    }: { path: { roleId: string } }): Promise<
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
            this.client.delete(`userroles/${path.roleId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete10']>
    }

    /**
     * DELETE /users/{userId}
     *
     * Delete user
     */
    public delete11({
        path,
    }: { path: { userId: string } }): Promise<
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
            this.client.delete(`users/${path.userId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete11']>
    }

    /**
     * DELETE /currencies/{currencyCode}
     *
     * Delete currency by code
     */
    public delete12({
        path,
    }: { path: { currencyCode: string } }): Promise<
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
            this.client.delete(`currencies/${path.currencyCode}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete12']>
    }

    /**
     * DELETE /organization/holidays/general/{holidayIdentifier}
     *
     * Delete holiday
     */
    public delete13({
        path,
    }: { path: { holidayIdentifier: string } }): Promise<
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
            this.client.delete(`organization/holidays/general/${path.holidayIdentifier}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete13']>
    }

    /**
     * DELETE /creditarrangements/{creditArrangementId}
     *
     * Delete credit arrangement
     */
    public delete2({
        path,
    }: { path: { creditArrangementId: string } }): Promise<
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
            this.client.delete(`creditarrangements/${path.creditArrangementId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete2']>
    }

    /**
     * DELETE /deposits/{depositAccountId}
     *
     * Delete inactive deposit account
     */
    public delete3({
        path,
    }: { path: { depositAccountId: string } }): Promise<
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
            this.client.delete(`deposits/${path.depositAccountId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete3']>
    }

    /**
     * DELETE /depositproducts/{depositProductId}
     *
     * Delete deposit product
     */
    public delete4({
        path,
    }: { path: { depositProductId: string } }): Promise<
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
            this.client.delete(`depositproducts/${path.depositProductId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete4']>
    }

    /**
     * DELETE /groups/{groupId}
     *
     * Delete group
     */
    public delete5({
        path,
    }: { path: { groupId: string } }): Promise<
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
            this.client.delete(`groups/${path.groupId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete5']>
    }

    /**
     * DELETE /loans/{loanAccountId}
     *
     * Delete loan account
     */
    public delete6({
        path,
    }: { path: { loanAccountId: string } }): Promise<
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
            this.client.delete(`loans/${path.loanAccountId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete6']>
    }

    /**
     * DELETE /loanproducts/{loanProductId}
     *
     * Delete loan product
     */
    public delete7({
        path,
    }: { path: { loanProductId: string } }): Promise<
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
            this.client.delete(`loanproducts/${path.loanProductId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete7']>
    }

    /**
     * DELETE /tasks/{taskId}
     *
     * Delete task
     */
    public delete8({
        path,
    }: { path: { taskId: string } }): Promise<
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
            this.client.delete(`tasks/${path.taskId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete8']>
    }

    /**
     * DELETE /organization/transactionChannels/{transactionChannelId}
     *
     * Delete transaction channel
     */
    public delete9({
        path,
    }: { path: { transactionChannelId: string } }): Promise<
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
            this.client.delete(`organization/transactionChannels/${path.transactionChannelId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete9']>
    }

    /**
     * DELETE /consumers/{apiConsumerId}/apikeys/{apiKeyId}
     *
     * Delete API key
     */
    public deleteApiKeyForConsumer({
        path,
    }: { path: { apiConsumerId: string; apiKeyId: string } }): Promise<
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
            this.client.delete(`consumers/${path.apiConsumerId}/apikeys/${path.apiKeyId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteApiKeyForConsumer']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/cards/{cardReferenceToken}
     *
     * Represents the information needed to delete a card associated to an account using its reference token.
     */
    public deleteCard({
        path,
    }: { path: { depositAccountId: string; cardReferenceToken: string } }): Promise<
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
            this.client.delete(`deposits/${path.depositAccountId}/cards/${path.cardReferenceToken}`, {}),
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
     * DELETE /loans/{loanAccountId}/cards/{cardReferenceToken}
     *
     * Represents the information needed to delete a card associated to an account using its reference token.
     */
    public deleteCard1({
        path,
    }: { path: { loanAccountId: string; cardReferenceToken: string } }): Promise<
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
            this.client.delete(`loans/${path.loanAccountId}/cards/${path.cardReferenceToken}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteCard1']>
    }

    /**
     * DELETE /documents/{documentId}
     *
     * Delete document
     */
    public deleteDocumentById({
        path,
    }: { path: { documentId: string } }): Promise<
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
            this.client.delete(`documents/${path.documentId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteDocumentById']>
    }

    /**
     * DELETE /loans/{loanAccountId}/funding
     *
     * Delete loan account funding sources
     */
    public deleteFundingSources({
        path,
    }: { path: { loanAccountId: string } }): Promise<
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
            this.client.delete(`loans/${path.loanAccountId}/funding`, {}),
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
     * DELETE /indexratesources/{indexRateSourceId}/indexrates/{indexRateId}
     *
     * Delete index rate
     */
    public deleteIndexRate({
        path,
    }: { path: { indexRateSourceId: string; indexRateId: string } }): Promise<
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
            this.client.delete(`indexratesources/${path.indexRateSourceId}/indexrates/${path.indexRateId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteIndexRate']>
    }

    /**
     * DELETE /indexratesources/{indexRateSourceId}
     *
     * Delete index rate source
     */
    public deleteIndexRateSource({
        path,
    }: { path: { indexRateSourceId: string } }): Promise<
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
            this.client.delete(`indexratesources/${path.indexRateSourceId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteIndexRateSource']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Delete Interest Availability
     */
    public deleteInterestAvailability({
        path,
    }: { path: { depositAccountId: string; interestAvailabilityKey: string } }): Promise<
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
            this.client.delete(`deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteInterestAvailability']>
    }

    /**
     * DELETE /loans/{loanAccountId}/plannedfees/{plannedInstallmentFeeKey}
     *
     * Delete planned fee
     */
    public deletePlannedFees({
        path,
    }: { path: { loanAccountId: string; plannedInstallmentFeeKey: string } }): Promise<
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
            this.client.delete(`loans/${path.loanAccountId}/plannedfees/${path.plannedInstallmentFeeKey}`, {}),
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
    }: { path: { loanAccountId: string; fundEncodedKey: string } }): Promise<
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
            this.client.delete(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {}),
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
     * GET /database/backup/{databaseBackupVersion}
     *
     * Download database backup
     */
    public downloadBackup({
        path,
    }: { path: { databaseBackupVersion: string } }): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`database/backup/${path.databaseBackupVersion}`, {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['downloadBackup']>
    }

    /**
     * GET /documents/{documentId}
     *
     * Download document
     */
    public downloadDocumentById({
        path,
    }: { path: { documentId: string } }): Promise<
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
            this.client.get(`documents/${path.documentId}`, {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['downloadDocumentById']>
    }

    /**
     * PUT /loans/{loanAccountId}/schedule
     *
     * Update loan account schedule
     */
    public editSchedule({
        body,
        path,
    }: { body: EditScheduleRequest; path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
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
        const _body = this.validateRequestBody(EditScheduleRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`loans/${path.loanAccountId}/schedule`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['editSchedule']>
    }

    /**
     * PUT /loans/{loanAccountId}/tranches
     *
     * Update loan account tranches list
     */
    public editTranches({
        body,
        path,
    }: { body: EditTranchesRequest; path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', EditTranchesResponse>
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
        const _body = this.validateRequestBody(EditTranchesRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`loans/${path.loanAccountId}/tranches`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: EditTranchesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['editTranches']>
    }

    /**
     * PATCH /deposits/transactions/{depositTransactionId}
     *
     * Edit custom information or notes for deposit transaction
     */
    public editTransactionDetails({
        body,
        path,
    }: { body: EditTransactionDetailsRequest; path: { depositTransactionId: string } }): Promise<
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
        const _body = this.validateRequestBody(EditTransactionDetailsRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`deposits/transactions/${path.depositTransactionId}`, {
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
        ) as ReturnType<this['editTransactionDetails']>
    }

    /**
     * POST /communications/messages:resendAsyncByDate
     *
     * Resend failed communication message(s) asynchronously by date
     */
    public enqueueByDate({
        body,
        headers,
    }: { body: CommunicationMessageEnqueueAction; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', unknown>
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
        const _body = this.validateRequestBody(CommunicationMessageEnqueueAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages:resendAsyncByDate', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['enqueueByDate']>
    }

    /**
     * POST /communications/messages:resendAsyncByKeys
     *
     * Resend failed communication message(s) asynchronously using keys
     */
    public enqueueByKeys({
        body,
        headers,
    }: { body: CommunicationMessageAction; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', unknown>
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
        const _body = this.validateRequestBody(CommunicationMessageAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages:resendAsyncByKeys', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['enqueueByKeys']>
    }

    /**
     * GET /accounting/reports/{reportKey}
     *
     * Get accounting reports
     */
    public get({
        path,
    }: { path: { reportKey: string } }): Promise<
        | SuccessResponse<'200', AccountingReport>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`accounting/reports/${path.reportKey}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: AccountingReport,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['get']>
    }

    /**
     * GET /configuration/accountingrules.yaml
     *
     * Retrieve accounting rulesconfiguration
     */
    public get1(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/accountingrules.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get1']>
    }

    /**
     * GET /configuration/grouprolenames.yaml
     *
     * Get group role names configuration
     */
    public get10(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/grouprolenames.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get10']>
    }

    /**
     * GET /configuration/holidays.yaml
     *
     * Get holidays configuration
     */
    public get11(): Promise<
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
            this.client.get('configuration/holidays.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get11']>
    }

    /**
     * GET /configuration/iddocumenttemplates.yaml
     *
     * Get ID templates configuration
     */
    public get12(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/iddocumenttemplates.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get12']>
    }

    /**
     * GET /configuration/indexrates.yaml
     *
     * Get index rates configuration
     */
    public get13(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/indexrates.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get13']>
    }

    /**
     * GET /configuration/internalcontrols.yaml
     *
     * Get internal controls configuration
     */
    public get14(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/internalcontrols.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get14']>
    }

    /**
     * GET /configuration/labels.yaml
     *
     * Get object labels configuration
     */
    public get15(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/labels.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get15']>
    }

    /**
     * GET /configuration/loanproducts.yaml
     *
     * Allows you to get or update the loan products configuration.
     */
    public get16({
        query,
    }: { query?: { type?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/loanproducts.yaml', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get16']>
    }

    /**
     * GET /configuration/loanrisklevels.yaml
     *
     * Get loan risk levels configuration
     */
    public get17(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/loanrisklevels.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get17']>
    }

    /**
     * GET /configuration/organization.yaml
     *
     * Get organization details configuration
     */
    public get18(): Promise<
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
            this.client.get('configuration/organization.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get18']>
    }

    /**
     * GET /configuration/userroles.yaml
     *
     * Get user roles configuration
     */
    public get19(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/userroles.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get19']>
    }

    /**
     * GET /configuration/authorizationholds.yaml
     *
     * Get authorization holds configuration
     */
    public get2(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/authorizationholds.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get2']>
    }

    /**
     * GET /configuration/transactionchannels.yaml
     *
     * Get transaction channels configuration
     */
    public get20(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/transactionchannels.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get20']>
    }

    /**
     * GET /currencies/{currencyCode}
     *
     * Get currency by code
     */
    public get21({
        path,
        query,
    }: { path: { currencyCode: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', CurrencyDetails>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`currencies/${path.currencyCode}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CurrencyDetails,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['get21']>
    }

    /**
     * GET /organization/holidays
     *
     * Get holidays
     */
    public get22(): Promise<
        | SuccessResponse<'200', Holidays>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('organization/holidays', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Holidays,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['get22']>
    }

    /**
     * GET /configuration/branches.yaml
     *
     * Get branches configuration
     */
    public get3(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/branches.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get3']>
    }

    /**
     * GET /configuration/centres.yaml
     *
     * Get centres configuration
     */
    public get4(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/centres.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get4']>
    }

    /**
     * GET /configuration/clientroles.yaml
     *
     * Get client roles configuration
     */
    public get5({
        query,
    }: { query?: { type?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/clientroles.yaml', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get5']>
    }

    /**
     * GET /configuration/currencies.yaml
     *
     * Get currencies configuration
     */
    public get6({
        query,
    }: { query?: { startDate?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/currencies.yaml', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get6']>
    }

    /**
     * GET /configuration/customfields.yaml
     *
     * Get custom field definitions configuration
     */
    public get7({
        query,
    }: { query?: { availableFor?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/customfields.yaml', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get7']>
    }

    /**
     * GET /configuration/depositproducts.yaml
     *
     * Get configuration for all deposit products
     */
    public get8({
        query,
    }: { query?: { type?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/depositproducts.yaml', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get8']>
    }

    /**
     * GET /configuration/endofdayprocessing.yaml
     *
     * Get end of day processing configuration
     */
    public get9(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/endofdayprocessing.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['get9']>
    }

    /**
     * GET /cards/{cardReferenceToken}/balanceInquiry
     *
     * Get account balances using card tokens
     */
    public getAccountBalances({
        path,
    }: { path: { cardReferenceToken: string } }): Promise<
        | SuccessResponse<'200', AccountBalances>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`cards/${path.cardReferenceToken}/balanceInquiry`, {
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
     * GET /currencies/{currencyCode}/accountingRates
     *
     * Get accounting rates
     */
    public getAll({
        path,
        query,
    }: {
        path: { currencyCode: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; from?: string; to?: string }
    }): Promise<
        | SuccessResponse<'200', GetAllResponse>
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
            this.client.get(`currencies/${path.currencyCode}/accountingRates`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll']>
    }

    /**
     * GET /consumers
     *
     * Get all API consumers
     */
    public getAll1({
        query,
    }: { query?: { offset?: string; limit?: string; paginationDetails?: string } } = {}): Promise<
        | SuccessResponse<'200', GetAll1Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('consumers', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll1Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll1']>
    }

    /**
     * GET /deposits/{depositAccountId}/transactions
     *
     * Get deposit transactions
     */
    public getAll10({
        path,
        query,
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', GetAll10Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`deposits/${path.depositAccountId}/transactions`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll10Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll10']>
    }

    /**
     * GET /currencies/{currencyCode}/rates
     *
     * Get exchange rates for a specific currency.
     */
    public getAll11({
        path,
        query,
    }: {
        path: { currencyCode: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; from?: string; to?: string }
    }): Promise<
        | SuccessResponse<'200', GetAll11Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`currencies/${path.currencyCode}/rates`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll11Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll11']>
    }

    /**
     * GET /glaccounts
     *
     * Get general ledger accounts
     */
    public getAll12({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            type: string
            from?: string
            to?: string
            branchId?: string
            balanceExcluded?: string
        }
    }): Promise<
        | SuccessResponse<'200', GetAll12Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('glaccounts', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll12Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll12']>
    }

    /**
     * GET /gljournalentries
     *
     * Get general ledger journal entries
     */
    public getAll13({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            from: string
            to: string
            branchId?: string
            glAccountId?: string
        }
    }): Promise<
        | SuccessResponse<'200', GetAll13Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('gljournalentries', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll13Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll13']>
    }

    /**
     * GET /groups
     *
     * Get groups
     */
    public getAll14({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            creditOfficerUsername?: string
            branchId?: string
            centreId?: string
            sortBy?: string
        }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll14Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('groups', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll14Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll14']>
    }

    /**
     * GET /organization/identificationDocumentTemplates
     *
     * Get ID templates
     */
    public getAll15({
        query,
    }: { query?: { detailsLevel?: string } } = {}): Promise<
        | SuccessResponse<'200', GetAll15Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('organization/identificationDocumentTemplates', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll15Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll15']>
    }

    /**
     * GET /installments
     *
     * Get installments for `ACTIVE` or `ACTIVE_IN_ARREARS` loan accounts
     */
    public getAll16({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            dueFrom: string
            dueTo: string
            productTypeKey?: string
            accountState?: string
            installmentState?: string
        }
    }): Promise<
        | SuccessResponse<'200', GetAll16Response>
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
            this.client.get('installments', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll16Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll16']>
    }

    /**
     * GET /loans
     *
     * Get loan accounts
     */
    public getAll17({
        query,
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
    } = {}): Promise<
        | SuccessResponse<'200', GetAll17Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('loans', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll17Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll17']>
    }

    /**
     * GET /loanproducts
     *
     * Get loan products
     */
    public getAll18({
        query,
    }: { query?: { offset?: string; limit?: string; paginationDetails?: string; sortBy?: string } } = {}): Promise<
        | SuccessResponse<'200', GetAll18Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('loanproducts', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll18Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll18']>
    }

    /**
     * GET /loans/{loanAccountId}/transactions
     *
     * Get loan transactions
     */
    public getAll19({
        path,
        query,
    }: {
        path: { loanAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', GetAll19Response>
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
            this.client.get(`loans/${path.loanAccountId}/transactions`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll19Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll19']>
    }

    /**
     * GET /branches
     *
     * Get branches
     */
    public getAll2({
        query,
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; sortBy?: string }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll2Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('branches', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll2Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll2']>
    }

    /**
     * GET /tasks
     *
     * Gets tasks
     */
    public getAll20({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            username?: string
            clientId?: string
            groupId?: string
            status?: string
        }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll20Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('tasks', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll20Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll20']>
    }

    /**
     * GET /organization/transactionChannels
     *
     * Get transaction channels
     */
    public getAll21({
        query,
    }: { query?: { detailsLevel?: string; transactionChannelState?: string } } = {}): Promise<
        | SuccessResponse<'200', GetAll21Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('organization/transactionChannels', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll21Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll21']>
    }

    /**
     * GET /userroles
     *
     * Get user roles
     */
    public getAll22({
        query,
    }: { query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string } } = {}): Promise<
        | SuccessResponse<'200', GetAll22Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('userroles', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll22Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll22']>
    }

    /**
     * GET /users
     *
     * Get users
     */
    public getAll23({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            branchId?: string
            branchIdType?: string
        }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll23Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('users', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll23Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll23']>
    }

    /**
     * GET /currencies
     *
     * Get all currencies
     */
    public getAll24({
        query,
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; type?: string }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll24Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('currencies', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll24Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll24']>
    }

    /**
     * GET /centres
     *
     * Get centres
     */
    public getAll3({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            branchId?: string
            sortBy?: string
        }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll3Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('centres', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll3Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll3']>
    }

    /**
     * GET /clients
     *
     * Get clients
     */
    public getAll4({
        query,
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
    } = {}): Promise<
        | SuccessResponse<'200', GetAll4Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('clients', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll4Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll4']>
    }

    /**
     * GET /creditarrangements
     *
     * Get credit arrangements
     */
    public getAll5({
        query,
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; sortBy?: string }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll5Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('creditarrangements', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll5Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll5']>
    }

    /**
     * GET /customfieldsets
     *
     * Get custom field sets
     */
    public getAll6({
        query,
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            availableFor?: string
            'displaySettings.builtIn'?: string
        }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll6Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('customfieldsets', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll6Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll6']>
    }

    /**
     * GET /deposits/{depositAccountId}/balanceSummary
     *
     * Get balance summary for the deposit account
     */
    public getAll7({
        path,
        query,
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; startDate?: string; endDate?: string }
    }): Promise<
        | SuccessResponse<'200', GetAll7Response>
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
            this.client.get(`deposits/${path.depositAccountId}/balanceSummary`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll7Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll7']>
    }

    /**
     * GET /deposits
     *
     * Get deposit accounts
     */
    public getAll8({
        query,
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
    } = {}): Promise<
        | SuccessResponse<'200', GetAll8Response>
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
            this.client.get('deposits', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll8Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll8']>
    }

    /**
     * GET /depositproducts
     *
     * Get deposit products
     */
    public getAll9({
        query,
    }: {
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string; branchId?: string }
    } = {}): Promise<
        | SuccessResponse<'200', GetAll9Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('depositproducts', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAll9Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll9']>
    }

    /**
     * GET /creditarrangements/{creditArrangementId}/accounts
     *
     * Get all loan and deposit accounts linked to credit arrangement
     */
    public getAllAccounts({
        path,
    }: { path: { creditArrangementId: string } }): Promise<
        | SuccessResponse<'200', CreditArrangementAccounts>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`creditarrangements/${path.creditArrangementId}/accounts`, {
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
     * GET /deposits/{depositAccountId}/authorizationholds
     *
     * Get authorization holds related to a deposit account, ordered from newest to oldest by creation date
     */
    public getAllAuthorizationHolds({
        path,
        query,
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
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
            this.client.get(`deposits/${path.depositAccountId}/authorizationholds`, {
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
     * GET /loans/{loanAccountId}/authorizationholds
     *
     * Get authorization holds related to a loan account, ordered from newest to oldest by creation date
     */
    public getAllAuthorizationHolds1({
        path,
        query,
    }: {
        path: { loanAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
    }): Promise<
        | SuccessResponse<'200', GetAllAuthorizationHolds1Response>
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
            this.client.get(`loans/${path.loanAccountId}/authorizationholds`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllAuthorizationHolds1Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllAuthorizationHolds1']>
    }

    /**
     * GET /deposits/{depositAccountId}/blocks
     *
     * Get all block funds for a deposit account
     */
    public getAllBlocks({
        path,
        query,
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; state?: string }
    }): Promise<
        | SuccessResponse<'200', GetAllBlocksResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/blocks`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllBlocksResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllBlocks']>
    }

    /**
     * GET /customfieldsets/{customFieldSetId}/customfields
     *
     * Get custom field definitions by custom field set
     */
    public getAllBySetId({
        path,
        query,
    }: {
        path: { customFieldSetId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', GetAllBySetIdResponse>
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
            this.client.get(`customfieldsets/${path.customFieldSetId}/customfields`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllBySetIdResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllBySetId']>
    }

    /**
     * GET /deposits/{depositAccountId}/cards
     *
     * Get cards associated with an account
     */
    public getAllCards({
        path,
    }: { path: { depositAccountId: string } }): Promise<
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
            this.client.get(`deposits/${path.depositAccountId}/cards`, {
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
     * GET /loans/{loanAccountId}/cards
     *
     * Get cards associated with an account
     */
    public getAllCards1({
        path,
    }: { path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', GetAllCards1Response>
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
            this.client.get(`loans/${path.loanAccountId}/cards`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllCards1Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllCards1']>
    }

    /**
     * GET /indexratesources/{indexRateSourceId}/indexrates
     *
     * Get index rates for a source
     */
    public getAllIndexRates({
        path,
    }: { path: { indexRateSourceId: string } }): Promise<
        | SuccessResponse<'200', GetAllIndexRatesResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`indexratesources/${path.indexRateSourceId}/indexrates`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllIndexRatesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllIndexRates']>
    }

    /**
     * GET /indexratesources
     *
     * Get index rate sources
     */
    public getAllIndexRateSources(): Promise<
        | SuccessResponse<'200', GetAllIndexRateSourcesResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('indexratesources', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllIndexRateSourcesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllIndexRateSources']>
    }

    /**
     * GET /loans/{loanAccountId}/plannedfees
     *
     * Get planned fees
     */
    public getAllPlannedFees({
        path,
    }: { path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', GetAllPlannedFeesResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`loans/${path.loanAccountId}/plannedfees`, {
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
     * GET /application/status
     *
     * Allows you to retrieve the state of application data access
     */
    public getApplicationStatus(): Promise<
        | SuccessResponse<'200', ApplicationStatus>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('application/status', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: ApplicationStatus,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getApplicationStatus']>
    }

    /**
     * GET /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Get card authorization hold
     */
    public getAuthorizationHoldById({
        path,
    }: { path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string } }): Promise<
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
            this.client.get(`cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
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
     * GET /deposits/{depositAccountId}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Get account authorization hold
     */
    public getAuthorizationHoldById1({
        path,
    }: { path: { depositAccountId: string; authorizationHoldExternalReferenceId: string } }): Promise<
        | SuccessResponse<'200', AccountAuthorizationHold>
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
            this.client.get(`deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAuthorizationHoldById1']>
    }

    /**
     * GET /loans/{loanAccountId}/balances
     *
     * Get loan account balances
     */
    public getBalancesByLoanAccountId({
        path,
    }: { path: { loanAccountId: string } }): Promise<
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
            this.client.get(`loans/${path.loanAccountId}/balances`, {
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
     * GET /bulks/{bulkProcessKey}
     *
     * Allow retrieval the status of a bulk process via key
     */
    public getBulkStatus({
        path,
        query,
    }: { path: { bulkProcessKey: string }; query?: { offset?: string; limit?: string; paginationDetails?: string } }): Promise<
        | SuccessResponse<'200', BulkProcessStatus>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`bulks/${path.bulkProcessKey}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: BulkProcessStatus,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getBulkStatus']>
    }

    /**
     * GET /communications/messages/{encodedKey}
     *
     * Get communication message
     */
    public getByEncodedKey({
        path,
        query,
    }: { path: { encodedKey: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', CommunicationMessage>
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
            this.client.get(`communications/messages/${path.encodedKey}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CommunicationMessage,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getByEncodedKey']>
    }

    /**
     * GET /consumers/{apiConsumerId}
     *
     * Get API consumer
     */
    public getById({
        path,
    }: { path: { apiConsumerId: string } }): Promise<
        | SuccessResponse<'200', ApiConsumer>
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
            this.client.get(`consumers/${path.apiConsumerId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: ApiConsumer,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * GET /archive/deposits/transactions/customfields/{transactionId}
     *
     * Get archived deposit transaction
     */
    public getById1({
        path,
    }: { path: { transactionId: string } }): Promise<
        | SuccessResponse<'200', ArchivedDepositTransaction>
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
            this.client.get(`archive/deposits/transactions/customfields/${path.transactionId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: ArchivedDepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById1']>
    }

    /**
     * GET /glaccounts/{glAccountId}
     *
     * Get general ledger account
     */
    public getById10({
        path,
        query,
    }: {
        path: { glAccountId: string }
        query?: { from?: string; to?: string; branchId?: string; balanceExcluded?: string }
    }): Promise<
        | SuccessResponse<'200', GLAccount>
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
            this.client.get(`glaccounts/${path.glAccountId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GLAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById10']>
    }

    /**
     * GET /groups/{groupId}
     *
     * Get group
     */
    public getById11({
        path,
        query,
    }: { path: { groupId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', Group>
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
            this.client.get(`groups/${path.groupId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById11']>
    }

    /**
     * GET /loans/{loanAccountId}
     *
     * Get loan account
     */
    public getById12({
        path,
        query,
    }: { path: { loanAccountId: string }; query?: { detailsLevel?: string } }): Promise<
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
            this.client.get(`loans/${path.loanAccountId}`, {
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
        ) as ReturnType<this['getById12']>
    }

    /**
     * GET /loanproducts/{loanProductId}
     *
     * Get loan product
     */
    public getById13({
        path,
        query,
    }: { path: { loanProductId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', LoanProduct>
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
            this.client.get(`loanproducts/${path.loanProductId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById13']>
    }

    /**
     * GET /loans/transactions/{loanTransactionId}
     *
     * Get loan transaction
     */
    public getById14({
        path,
        query,
    }: { path: { loanTransactionId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', LoanTransaction>
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
            this.client.get(`loans/transactions/${path.loanTransactionId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById14']>
    }

    /**
     * GET /tasks/{taskId}
     *
     * Get task
     */
    public getById15({
        path,
    }: { path: { taskId: string } }): Promise<
        | SuccessResponse<'200', Task>
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
            this.client.get(`tasks/${path.taskId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Task,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById15']>
    }

    /**
     * GET /organization/transactionChannels/{transactionChannelId}
     *
     * Get transaction channel
     */
    public getById16({
        path,
    }: { path: { transactionChannelId: string } }): Promise<
        | SuccessResponse<'200', TransactionChannel>
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
            this.client.get(`organization/transactionChannels/${path.transactionChannelId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: TransactionChannel,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById16']>
    }

    /**
     * GET /userroles/{roleId}
     *
     * Get user role
     */
    public getById17({
        path,
        query,
    }: { path: { roleId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', Role>
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
            this.client.get(`userroles/${path.roleId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Role,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById17']>
    }

    /**
     * GET /users/{userId}
     *
     * Get user
     */
    public getById18({
        path,
        query,
    }: { path: { userId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', User>
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
            this.client.get(`users/${path.userId}`, {
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
        ) as ReturnType<this['getById18']>
    }

    /**
     * GET /branches/{branchId}
     *
     * Get branch
     */
    public getById2({
        path,
        query,
    }: { path: { branchId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', Branch>
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
            this.client.get(`branches/${path.branchId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Branch,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById2']>
    }

    /**
     * GET /centres/{centreId}
     *
     * Get centre
     */
    public getById3({
        path,
        query,
    }: { path: { centreId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', Centre>
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
            this.client.get(`centres/${path.centreId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Centre,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById3']>
    }

    /**
     * GET /clients/{clientId}
     *
     * Get client
     */
    public getById4({
        path,
        query,
    }: { path: { clientId: string }; query?: { detailsLevel?: string } }): Promise<
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
            this.client.get(`clients/${path.clientId}`, {
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
        ) as ReturnType<this['getById4']>
    }

    /**
     * GET /creditarrangements/{creditArrangementId}
     *
     * Get credit arrangement
     */
    public getById5({
        path,
        query,
    }: { path: { creditArrangementId: string }; query?: { detailsLevel?: string } }): Promise<
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
            this.client.get(`creditarrangements/${path.creditArrangementId}`, {
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
        ) as ReturnType<this['getById5']>
    }

    /**
     * GET /customfields/{customfieldId}
     *
     * Get custom field definition
     */
    public getById6({
        path,
        query,
    }: { path: { customfieldId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', CustomFieldMeta>
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
            this.client.get(`customfields/${path.customfieldId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CustomFieldMeta,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById6']>
    }

    /**
     * GET /deposits/{depositAccountId}
     *
     * Get deposit account
     */
    public getById7({
        path,
        query,
    }: { path: { depositAccountId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', DepositAccount>
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
            this.client.get(`deposits/${path.depositAccountId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById7']>
    }

    /**
     * GET /depositproducts/{depositProductId}
     *
     * Get deposit product
     */
    public getById8({
        path,
        query,
    }: { path: { depositProductId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', DepositProduct>
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
            this.client.get(`depositproducts/${path.depositProductId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById8']>
    }

    /**
     * GET /deposits/transactions/{depositTransactionId}
     *
     * Get deposit transaction
     */
    public getById9({
        path,
        query,
    }: { path: { depositTransactionId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', DepositTransaction>
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
            this.client.get(`deposits/transactions/${path.depositTransactionId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById9']>
    }

    /**
     * GET /organization/holidays/general/{holidayIdentifier}
     *
     * Get holiday
     */
    public getByIdentifier({
        path,
    }: { path: { holidayIdentifier: string } }): Promise<
        | SuccessResponse<'200', Holiday>
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
            this.client.get(`organization/holidays/general/${path.holidayIdentifier}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Holiday,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getByIdentifier']>
    }

    /**
     * GET /cards/{cardReferenceToken}/financialtransactions/{cardTransactionExternalReferenceId}
     *
     * Get card transaction
     */
    public getCardTransaction({
        path,
        query,
    }: {
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        query?: { detailsLevel?: string }
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
            this.client.get(`cards/${path.cardReferenceToken}/financialtransactions/${path.cardTransactionExternalReferenceId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
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
     * GET /clients/documents/{documentId}/metadata
     *
     * Get client document
     */
    public getClientDocumentById({
        path,
    }: { path: { documentId: string } }): Promise<
        | SuccessResponse<'200', Document>
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
            this.client.get(`clients/documents/${path.documentId}/metadata`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Document,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getClientDocumentById']>
    }

    /**
     * GET /clients/documents/{documentId}
     *
     * Download client document
     */
    public getClientDocumentFileById({
        path,
    }: { path: { documentId: string } }): Promise<
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
            this.client.get(`clients/documents/${path.documentId}`, {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getClientDocumentFileById']>
    }

    /**
     * GET /comments
     *
     * Get comments for an entity
     */
    public getComments({
        query,
    }: { query?: { offset?: string; limit?: string; paginationDetails?: string; ownerType: string; ownerKey: string } }): Promise<
        | SuccessResponse<'200', GetCommentsResponse>
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
            this.client.get('comments', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetCommentsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getComments']>
    }

    /**
     * GET /clients/{clientId}/creditarrangements
     *
     * Credit arrangements list returned.
     */
    public getCreditArrangementsByClientIdOrKey({
        path,
        query,
    }: {
        path: { clientId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
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
            this.client.get(`clients/${path.clientId}/creditarrangements`, {
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
     * GET /groups/{groupId}/creditarrangements
     *
     * Credit arrangements list returned.
     */
    public getCreditArrangementsByGroupIdOrKey({
        path,
        query,
    }: {
        path: { groupId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', GetCreditArrangementsByGroupIdOrKeyResponse>
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
            this.client.get(`groups/${path.groupId}/creditarrangements`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetCreditArrangementsByGroupIdOrKeyResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getCreditArrangementsByGroupIdOrKey']>
    }

    /**
     * GET /deposits/{depositAccountId}/templates/{templateId}
     *
     * Get deposit account document
     */
    public getDepositAccountDocument({
        path,
        query,
    }: { path: { depositAccountId: string; templateId: string }; query?: { startDate?: string; endDate?: string } }): Promise<
        | SuccessResponse<'200', GetDepositAccountDocumentResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/templates/${path.templateId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetDepositAccountDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getDepositAccountDocument']>
    }

    /**
     * GET /deposits/transactions/{depositTransactionId}/templates/{templateId}
     *
     * Get deposit transaction document
     */
    public getDepositTransactionDocument({
        path,
    }: { path: { depositTransactionId: string; templateId: string } }): Promise<
        | SuccessResponse<'200', GetDepositTransactionDocumentResponse>
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
            this.client.get(`deposits/transactions/${path.depositTransactionId}/templates/${path.templateId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetDepositTransactionDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getDepositTransactionDocument']>
    }

    /**
     * GET /clients/{clientId}/documentsMetadata
     *
     * Get all client documents
     */
    public getDocumentsByClientId({
        path,
        query,
    }: { path: { clientId: string }; query?: { offset?: string; limit?: string; paginationDetails?: string } }): Promise<
        | SuccessResponse<'200', GetDocumentsByClientIdResponse>
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
            this.client.get(`clients/${path.clientId}/documentsMetadata`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetDocumentsByClientIdResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getDocumentsByClientId']>
    }

    /**
     * GET /documents/documentsMetadata
     *
     * Get all documents' metadata
     */
    public getDocumentsByEntityId({
        query,
    }: { query?: { offset?: string; limit?: string; paginationDetails?: string; entity: string; ownerKey: string } }): Promise<
        | SuccessResponse<'200', GetDocumentsByEntityIdResponse>
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
            this.client.get('documents/documentsMetadata', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetDocumentsByEntityIdResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getDocumentsByEntityId']>
    }

    /**
     * GET /deposits/{depositAccountId}/funding
     *
     * Get all loan accounts funded by the deposit account with the given ID or encoded key
     */
    public getFundedLoans({
        path,
    }: { path: { depositAccountId: string } }): Promise<
        | SuccessResponse<'200', GetFundedLoansResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/funding`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetFundedLoansResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getFundedLoans']>
    }

    /**
     * GET /setup/general
     *
     * Get general setup
     */
    public getGeneralSetup(): Promise<
        | SuccessResponse<'200', GeneralSetup>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('setup/general', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GeneralSetup,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getGeneralSetup']>
    }

    /**
     * GET /data/import/{importKey}
     *
     * Allows you to retrieve a data import response
     */
    public getImport({
        path,
    }: { path: { importKey: string } }): Promise<
        | SuccessResponse<'200', DataImportStatus>
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
            this.client.get(`data/import/${path.importKey}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DataImportStatus,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getImport']>
    }

    /**
     * GET /indexratesources/{indexRateSourceId}
     *
     * Get index rate sources
     */
    public getIndexRateSourceById({
        path,
    }: { path: { indexRateSourceId: string } }): Promise<
        | SuccessResponse<'200', IndexRateSource>
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
            this.client.get(`indexratesources/${path.indexRateSourceId}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: IndexRateSource,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getIndexRateSourceById']>
    }

    /**
     * GET /deposits/{depositAccountId}/interest-availabilities
     *
     * Get Interest Availabilities
     */
    public getInterestAvailabilitiesList({
        path,
        query,
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; type?: string; from?: string; to?: string }
    }): Promise<
        | SuccessResponse<'200', GetInterestAvailabilitiesListResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/interest-availabilities`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetInterestAvailabilitiesListResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getInterestAvailabilitiesList']>
    }

    /**
     * GET /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Get Interest Availability
     */
    public getInterestAvailabilityById({
        path,
    }: { path: { depositAccountId: string; interestAvailabilityKey: string } }): Promise<
        | SuccessResponse<'200', InterestAccountSettingsAvailabilityResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getInterestAvailabilityById']>
    }

    /**
     * GET /consumers/{apiConsumerId}/keys
     *
     * Get API keys
     *
     * This endpoint allows you to get the API key ID and a six character clear text prefix of the API key.
     */
    public getKeysByConsumerId({
        path,
    }: { path: { apiConsumerId: string } }): Promise<
        | SuccessResponse<'200', GetKeysByConsumerIdResponse>
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
            this.client.get(`consumers/${path.apiConsumerId}/keys`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetKeysByConsumerIdResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getKeysByConsumerId']>
    }

    /**
     * GET /backgroundprocess/latest
     *
     * Get the latest manual or automatic end of day (EOD) process by specifying the type
     */
    public getLatestByType({
        query,
    }: { query?: { type?: string } } = {}): Promise<
        | SuccessResponse<'200', BackgroundProcess>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('backgroundprocess/latest', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: BackgroundProcess,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getLatestByType']>
    }

    /**
     * GET /loans/{loanAccountId}/templates/{templateId}
     *
     * Get loan account document
     */
    public getLoanAccountDocument({
        path,
        query,
    }: { path: { loanAccountId: string; templateId: string }; query?: { startDate?: string; endDate?: string } }): Promise<
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
            this.client.get(`loans/${path.loanAccountId}/templates/${path.templateId}`, {
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
     * GET /loans/{loanAccountId}:repaymentscheduleversioning
     *
     * Allows retrieval of repayment schedule versioning for a loan account
     */
    public getLoanAccountRsv({
        path,
    }: { path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', GetLoanAccountRsvResponse>
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
            this.client.get(`loans/${path.loanAccountId}:repaymentscheduleversioning`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetLoanAccountRsvResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getLoanAccountRsv']>
    }

    /**
     * GET /organization/holidays/nonworkingdays
     *
     * Get non-working days
     */
    public getNonWorkingDays(): Promise<
        | SuccessResponse<'200', NonWorkingDays>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('organization/holidays/nonworkingdays', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: NonWorkingDays,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getNonWorkingDays']>
    }

    /**
     * GET /setup/organization
     *
     * Get organization details
     */
    public getOrganizationSetup(): Promise<
        | SuccessResponse<'200', OrganizationSetup>
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
            this.client.get('setup/organization', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: OrganizationSetup,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getOrganizationSetup']>
    }

    /**
     * GET /deposits/{depositAccountId}/templates/{templateId}/pdf
     *
     * Download deposit account document PDF
     */
    public getPdfDocument({
        path,
        query,
    }: { path: { depositAccountId: string; templateId: string }; query?: { startDate?: string; endDate?: string } }): Promise<
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
            this.client.get(`deposits/${path.depositAccountId}/templates/${path.templateId}/pdf`, {
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
     * GET /loans/{loanAccountId}/templates/{templateId}/pdf
     *
     * Download loan account document PDF
     */
    public getPdfDocument1({
        path,
        query,
    }: { path: { loanAccountId: string; templateId: string }; query?: { startDate?: string; endDate?: string } }): Promise<
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
            this.client.get(`loans/${path.loanAccountId}/templates/${path.templateId}/pdf`, {
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
        ) as ReturnType<this['getPdfDocument1']>
    }

    /**
     * POST /loans:previewSchedule
     *
     * Preview loan account schedule for non-existent loan account
     */
    public getPreviewLoanAccountSchedule({
        body,
    }: { body: PreviewLoanAccountSchedule }): Promise<
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
            this.client.post('loans:previewSchedule', {
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
     * GET /clients/{clientId}/role
     *
     * Get client role for client
     */
    public getRoleByClientId({
        path,
    }: { path: { clientId: string } }): Promise<
        | SuccessResponse<'200', ClientRole>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403' | '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`clients/${path.clientId}/role`, {
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
     * GET /creditarrangements/{creditArrangementId}/schedule
     *
     * Get credit arrangement schedule
     */
    public getSchedule({
        path,
        query,
    }: { path: { creditArrangementId: string }; query?: { detailsLevel?: string } }): Promise<
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
            this.client.get(`creditarrangements/${path.creditArrangementId}/schedule`, {
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
     * GET /deposits/{depositAccountId}/funding/{loanAccountId}/schedule
     *
     * Allows retrieval of the loan account schedule for a loan account with the given id or encodedKey and funded by the deposit account with the given id or encodedKey.
     */
    public getScheduleForFundedAccount({
        path,
    }: { path: { depositAccountId: string; loanAccountId: string } }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
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
            this.client.get(`deposits/${path.depositAccountId}/funding/${path.loanAccountId}/schedule`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getScheduleForFundedAccount']>
    }

    /**
     * GET /loans/{loanAccountId}/schedule
     *
     * Get loan account schedule
     */
    public getScheduleForLoanAccount({
        path,
        query,
    }: { path: { loanAccountId: string }; query?: { detailsLevel?: string } }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
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
            this.client.get(`loans/${path.loanAccountId}/schedule`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getScheduleForLoanAccount']>
    }

    /**
     * GET /configuration/customfields/template.yaml
     *
     * Get custom field definitions configuration template
     */
    public getTemplate(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/customfields/template.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getTemplate']>
    }

    /**
     * GET /configuration/organization/template.yaml
     *
     * Get organization details configuration template
     */
    public getTemplate1(): Promise<
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
            this.client.get('configuration/organization/template.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getTemplate1']>
    }

    /**
     * GET /configuration/userroles/template.yaml
     *
     * Get user roles configuration template
     */
    public getTemplate2(): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get('configuration/userroles/template.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getTemplate2']>
    }

    /**
     * GET /loans/{loanAccountId}/tranches
     *
     * Get loan account tranches list
     */
    public getTranches({
        path,
    }: { path: { loanAccountId: string } }): Promise<
        | SuccessResponse<'200', GetTranchesResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.client.get(`loans/${path.loanAccountId}/tranches`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetTranchesResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getTranches']>
    }

    /**
     * GET /loans/{loanAccountId}/transactions:versions
     *
     * Get loan transactions for all loan account versions
     */
    public getTransactionsForAllVersions({
        path,
        query,
    }: {
        path: { loanAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', GetTransactionsForAllVersionsResponse>
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
            this.client.get(`loans/${path.loanAccountId}/transactions:versions`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetTransactionsForAllVersionsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getTransactionsForAllVersions']>
    }

    /**
     * GET /loans/{loanAccountId}:versions
     *
     * Get all versions of loan account
     */
    public getVersionsById({
        path,
        query,
    }: { path: { loanAccountId: string }; query?: { detailsLevel?: string } }): Promise<
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
            this.client.get(`loans/${path.loanAccountId}:versions`, {
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
     * GET /deposits/{depositAccountId}/withholdingtaxes
     *
     * Get deposit account withholding tax history
     */
    public getWithholdingTaxHistory({
        path,
        query,
    }: { path: { depositAccountId: string }; query?: { from?: string; to?: string } }): Promise<
        | SuccessResponse<'200', GetWithholdingTaxHistoryResponse>
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
            this.client.get(`deposits/${path.depositAccountId}/withholdingtaxes`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetWithholdingTaxHistoryResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getWithholdingTaxHistory']>
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
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(
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
     * POST /deposits/deposit-transactions:bulk
     *
     * Create bulk deposit transactions.
     */
    public makeBulkDeposits({
        body,
        headers,
    }: { body: BulkDepositTransactionsInput; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(BulkDepositTransactionsInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits/deposit-transactions:bulk', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['makeBulkDeposits']>
    }

    /**
     * POST /deposits/interest-availabilities:bulk
     *
     * Create Interest Availabilities for a group of accounts
     */
    public makeBulkInterestAccountSettingsAvailabilities({
        body,
        headers,
    }: { body: BulkInterestAccountSettingsAvailabilityInput; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(BulkInterestAccountSettingsAvailabilityInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits/interest-availabilities:bulk', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['makeBulkInterestAccountSettingsAvailabilities']>
    }

    /**
     * POST /deposits/{depositAccountId}/deposit-transactions
     *
     * Create deposit transaction
     */
    public makeDeposit({
        body,
        path,
        headers,
    }: { body: DepositTransactionInput; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/deposit-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeDeposit']>
    }

    /**
     * POST /deposits/{depositAccountId}/transactions/deposits
     *
     * Create deposit transaction
     */
    public makeDepositAsync({
        body,
        path,
        headers,
    }: { body: DepositTransactionInput; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(DepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/transactions/deposits`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['makeDepositAsync']>
    }

    /**
     * POST /loans/{loanAccountId}/disbursement-transactions
     *
     * Make a disbursement on a loan
     */
    public makeDisbursement({
        body,
        path,
        headers,
    }: {
        body: DisbursementLoanTransactionInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(DisbursementLoanTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/disbursement-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeDisbursement']>
    }

    /**
     * POST /deposits/{depositAccountId}/transactions
     *
     * Create multiple transactions for an account
     */
    public makeMultipleTxAsync({
        body,
        path,
        headers,
    }: {
        body: MultipleAtomicGroupsInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', MultipleAtomicGroupsResponse>
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
        const _body = this.validateRequestBody(MultipleAtomicGroupsInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: MultipleAtomicGroupsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeMultipleTxAsync']>
    }

    /**
     * POST /loans/{loanAccountId}/principal-overpayment-transactions
     *
     * Make non-scheduled principal overpayment transaction on loan account
     */
    public makePrincipalOverpayment({
        body,
        path,
        headers,
    }: {
        body: PrincipalOverpaymentLoanTransactionInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(PrincipalOverpaymentLoanTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/principal-overpayment-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makePrincipalOverpayment']>
    }

    /**
     * POST /loans/{loanAccountId}/redraw-repayment-transactions
     *
     * Make a redraw repayment transaction on a loan
     */
    public makeRedrawRepayment({
        body,
        path,
        headers,
    }: {
        body: RedrawRepaymentTransactionInputDTO
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(RedrawRepaymentTransactionInputDTO, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/redraw-repayment-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeRedrawRepayment']>
    }

    /**
     * POST /loans/{loanAccountId}/refund-transactions
     *
     * Make refund transaction on loan account
     */
    public makeRefund({
        body,
        path,
        headers,
    }: { body: RefundLoanTransactionInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(RefundLoanTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/refund-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeRefund']>
    }

    /**
     * POST /loans/{loanAccountId}/repayment-transactions
     *
     * Make repayment transaction on loan account
     */
    public makeRepayment({
        body,
        path,
        headers,
    }: {
        body: RepaymentLoanTransactionInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(RepaymentLoanTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/repayment-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeRepayment']>
    }

    /**
     * POST /deposits/{depositAccountId}/seizure-transactions
     *
     * Seize a block amount on a deposit account
     */
    public makeSeizure({
        body,
        path,
        headers,
    }: { body: SeizeBlockAmount; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(SeizeBlockAmount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/seizure-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeSeizure']>
    }

    /**
     * POST /deposits/{depositAccountId}/transfer-transactions
     *
     * Create transfer transaction
     */
    public makeTransfer({
        body,
        path,
        headers,
    }: {
        body: TransferDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(TransferDepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/transfer-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeTransfer']>
    }

    /**
     * POST /deposits/{depositAccountId}/withdrawal-transactions
     *
     * Create withdrawal transaction
     */
    public makeWithdrawal({
        body,
        path,
        headers,
    }: {
        body: WithdrawalDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositTransaction>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(WithdrawalDepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/withdrawal-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeWithdrawal']>
    }

    /**
     * POST /loans/{loanAccountId}/withdrawal-transactions
     *
     * Make withdrawal from redraw balance
     */
    public makeWithdrawal1({
        body,
        path,
        headers,
    }: {
        body: WithdrawalRedrawTransactionInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', LoanTransaction>
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
        const _body = this.validateRequestBody(WithdrawalRedrawTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/withdrawal-transactions`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: LoanTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['makeWithdrawal1']>
    }

    /**
     * POST /deposits/{depositAccountId}/transactions/withdrawals
     *
     * Create withdrawal transaction
     */
    public makeWithdrawalAsync({
        body,
        path,
        headers,
    }: {
        body: WithdrawalDepositTransactionInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(WithdrawalDepositTransactionInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}/transactions/withdrawals`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['makeWithdrawalAsync']>
    }

    /**
     * PATCH /consumers/{apiConsumerId}
     *
     * Partially update API consumer
     */
    public patch({
        body,
        path,
        headers,
    }: { body: PatchRequest; path: { apiConsumerId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.patch(`consumers/${path.apiConsumerId}`, {
                json: _body.right,
                headers: headers ?? {},
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
     * PATCH /clients/{clientId}
     *
     * Partially update client
     */
    public patch1({
        body,
        path,
        query,
    }: { body: Patch1Request; path: { clientId: string }; query?: { keepAssociationForAccounts?: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch1Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`clients/${path.clientId}`, {
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
        ) as ReturnType<this['patch1']>
    }

    /**
     * PATCH /userroles/{roleId}
     *
     * Partially update user role
     */
    public patch10({
        body,
        path,
    }: { body: Patch10Request; path: { roleId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch10Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`userroles/${path.roleId}`, {
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
        ) as ReturnType<this['patch10']>
    }

    /**
     * PATCH /users/{userId}
     *
     * Partially update user
     */
    public patch11({
        body,
        path,
        headers,
    }: { body: Patch11Request; path: { userId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch11Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`users/${path.userId}`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch11']>
    }

    /**
     * PATCH /creditarrangements/{creditArrangementId}
     *
     * Partially update credit arrangement
     */
    public patch2({
        body,
        path,
    }: { body: Patch2Request; path: { creditArrangementId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch2Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`creditarrangements/${path.creditArrangementId}`, {
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
        ) as ReturnType<this['patch2']>
    }

    /**
     * PATCH /deposits/{depositAccountId}
     *
     * Partially update deposit account
     */
    public patch3({
        body,
        path,
    }: { body: Patch3Request; path: { depositAccountId: string } }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(Patch3Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`deposits/${path.depositAccountId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch3']>
    }

    /**
     * PATCH /depositproducts/{depositProductId}
     *
     * Partially update deposit product
     */
    public patch4({
        body,
        path,
    }: { body: Patch4Request; path: { depositProductId: string } }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(Patch4Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`depositproducts/${path.depositProductId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch4']>
    }

    /**
     * PATCH /glaccounts/{glAccountId}
     *
     * Partially update an existing general ledger account
     */
    public patch5({
        body,
        path,
    }: { body: Patch5Request; path: { glAccountId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch5Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`glaccounts/${path.glAccountId}`, {
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
        ) as ReturnType<this['patch5']>
    }

    /**
     * PATCH /groups/{groupId}
     *
     * Partially update group
     */
    public patch6({
        body,
        path,
    }: { body: Patch6Request; path: { groupId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch6Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`groups/${path.groupId}`, {
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
        ) as ReturnType<this['patch6']>
    }

    /**
     * PATCH /loans/{loanAccountId}
     *
     * Partially update loan account
     */
    public patch7({
        body,
        path,
    }: { body: Patch7Request; path: { loanAccountId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch7Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`loans/${path.loanAccountId}`, {
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
        ) as ReturnType<this['patch7']>
    }

    /**
     * PATCH /loanproducts/{loanProductId}
     *
     * Partially update loan product
     */
    public patch8({
        body,
        path,
    }: { body: Patch8Request; path: { loanProductId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch8Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`loanproducts/${path.loanProductId}`, {
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
        ) as ReturnType<this['patch8']>
    }

    /**
     * PATCH /tasks/{taskId}
     *
     * Partially update task
     */
    public patch9({
        body,
        path,
    }: { body: Patch9Request; path: { taskId: string } }): Promise<
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
        const _body = this.validateRequestBody(Patch9Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`tasks/${path.taskId}`, {
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
        ) as ReturnType<this['patch9']>
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
    }: {
        body: PatchAuthorizationHoldRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.patch(
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
     * PATCH /deposits/{depositAccountId}/blocks/{externalReferenceId}
     *
     * Updates the amount of an existing blocked fund on a deposit account. If the new amount equals the seized amount the block fund will transition to a seized state.
     */
    public patchBlockFund({
        body,
        path,
    }: { body: PatchBlockFundRequest; path: { depositAccountId: string; externalReferenceId: string } }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(PatchBlockFundRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.patch(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patchBlockFund']>
    }

    /**
     * PATCH /loans/{loanAccountId}/funding/{fundEncodedKey}
     *
     * Update loan account funding source
     */
    public patchFundingSource({
        body,
        path,
    }: { body: PatchFundingSourceRequest; path: { loanAccountId: string; fundEncodedKey: string } }): Promise<
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
            this.client.patch(`loans/${path.loanAccountId}/funding/${path.fundEncodedKey}`, {
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
    }: { body: LoanAccountPayOffInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:payOff`, {
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
    }: {
        body: PreviewPayOffDueAmountsInAFutureDateInput
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`loans/${path.loanAccountId}:previewPayOffAmounts`, {
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
     * POST /loans/{loanAccountId}/schedule/previewProcessPMTTransactionally
     *
     * Preview loan account schedule using transactional processing for PMT.
     */
    public previewProcessPmtTransactionally({
        path,
        headers,
    }: { path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | SuccessResponse<'200', LoanAccountPreviewProcessPMTTransactionally>
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
            this.client.post(`loans/${path.loanAccountId}/schedule/previewProcessPMTTransactionally`, {
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                200: LoanAccountPreviewProcessPMTTransactionally,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['previewProcessPmtTransactionally']>
    }

    /**
     * POST /loans/schedule:preview
     *
     * Preview loan account schedule for non-existent loan account
     */
    public previewSchedule({
        body,
        headers,
    }: { body: PreviewLoanAccountSchedule; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post('loans/schedule:preview', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['previewSchedule']>
    }

    /**
     * POST /loans/{loanAccountId}/schedule:previewTranches
     *
     * Preview loan account schedule for non-existent loan account
     */
    public previewTranchesOnSchedule({
        body,
        path,
        headers,
    }: {
        body: PreviewTranchesOnScheduleRequest
        path: { loanAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
    }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(PreviewTranchesOnScheduleRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`loans/${path.loanAccountId}/schedule:previewTranches`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['previewTranchesOnSchedule']>
    }

    /**
     * POST /loans:reevaluateCollateral
     *
     * Update collateral asset amounts
     */
    public reevaluateCollateralAssets({
        body,
        headers,
    }: { body: CollateralAssetFilter; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post('loans:reevaluateCollateral', {
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
    }: { body: RefinanceLoanAccountAction; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:refinance`, {
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
     * POST /creditarrangements/{creditArrangementId}:removeAccount
     *
     * Remove account from credit arrangement
     */
    public removeAccount({
        body,
        path,
        headers,
    }: {
        body: RemoveCreditArrangementAccountInput
        path: { creditArrangementId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(`creditarrangements/${path.creditArrangementId}:removeAccount`, {
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
     * POST /deposits/{depositAccountId}:reopen
     *
     * Reopen a deposit account
     */
    public reopen({
        body,
        path,
        headers,
    }: { body: ReopenDepositAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
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
        const _body = this.validateRequestBody(ReopenDepositAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:reopen`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['reopen']>
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
    }: { body: RescheduleLoanAccountAction; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:reschedule`, {
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
     * POST /communications/messages:resend
     *
     * Resend failed communication message(s)
     */
    public resend({
        body,
        headers,
    }: { body: CommunicationMessageAction; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(CommunicationMessageAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages:resend', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['resend']>
    }

    /**
     * DELETE /cards/{cardReferenceToken}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Reverse a card authorization hold.
     */
    public reverseAuthorizationHold({
        path,
    }: { path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string } }): Promise<
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
            this.client.delete(
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
     * DELETE /deposits/{depositAccountId}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Reverse account authorization hold
     */
    public reverseAuthorizationHold1({
        path,
    }: { path: { depositAccountId: string; authorizationHoldExternalReferenceId: string } }): Promise<
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
            this.client.delete(
                `deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
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
        ) as ReturnType<this['reverseAuthorizationHold1']>
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
    }: {
        body: CardTransactionReversal
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        headers?: { 'Idempotency-Key'?: string }
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
            this.client.post(
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

    /**
     * POST /apikey/rotation
     *
     * Rotate API key
     */
    public rotateKey({
        body,
        headers,
    }: { body: ApiKey; headers: { secretkey: string } }): Promise<
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
            this.client.post('apikey/rotation', {
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

    /**
     * POST /crons/eod:run
     *
     * Trigger hourly and end of day Processing
     */
    public runHourlyAndEndOfDayCrons(): Promise<
        | SuccessResponse<'202', TriggerHourlyAndEndOfDayProcessingResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'500', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '500'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.client.post('crons/eod:run', {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                202: TriggerHourlyAndEndOfDayProcessingResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                500: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['runHourlyAndEndOfDayCrons']>
    }

    /**
     * POST /archive/deposits/transactions/customfields:search
     *
     * Search Archived Deposit Transactions
     */
    public search({
        body,
        query,
    }: { body: FilterCriteriaValueDateBetweenDTO; query?: { cursor?: string; limit?: string } }): Promise<
        | SuccessResponse<'200', SearchResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(FilterCriteriaValueDateBetweenDTO, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('archive/deposits/transactions/customfields:search', {
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
     * POST /clients:search
     *
     * Search clients
     */
    public search1({
        body,
        query,
    }: {
        body: ClientSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search1Response>
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
            this.client.post('clients:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search1Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search1']>
    }

    /**
     * POST /accounting/interestaccrual:search
     *
     * Allows search of interest accrual breakdown entries by various criteria.
     */
    public search10({
        body,
        query,
    }: {
        body: InterestAccrualSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search10Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(InterestAccrualSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('accounting/interestaccrual:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search10Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search10']>
    }

    /**
     * POST /loans:search
     *
     * Search loan accounts
     */
    public search11({
        body,
        query,
    }: {
        body: LoanAccountSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search11Response>
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
            this.client.post('loans:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search11Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search11']>
    }

    /**
     * POST /loans/transactions:search
     *
     * Search loan transactions
     */
    public search13({
        body,
        query,
    }: {
        body: LoanTransactionSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<'409', unknown, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(LoanTransactionSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('loans/transactions:search', {
                json: _body.right,
                searchParams: query ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                409: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['search13']>
    }

    /**
     * POST /communications/messages:search
     *
     * Searching communication messages
     */
    public search2({
        body,
        query,
    }: {
        body: Search2Request
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search2Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(Search2Request, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search2Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search2']>
    }

    /**
     * POST /communications/messages:searchSorted
     *
     * Searching sorted communication messages
     */
    public search3({
        body,
        query,
    }: {
        body: CommunicationMessagesSearchSortCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search3Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(CommunicationMessagesSearchSortCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages:searchSorted', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search3Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search3']>
    }

    /**
     * POST /creditarrangements:search
     *
     * Search credit arrangements
     */
    public search4({
        body,
        query,
    }: {
        body: CreditArrangementSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search4Response>
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
            this.client.post('creditarrangements:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search4Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search4']>
    }

    /**
     * POST /deposits/balanceSummary:search
     *
     * Search deposit account balance summary
     */
    public search5({
        body,
        query,
    }: {
        body: DepositAccountBalanceSummarySearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string }
    }): Promise<
        | SuccessResponse<'200', Search5Response>
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
        const _body = this.validateRequestBody(DepositAccountBalanceSummarySearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits/balanceSummary:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search5Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search5']>
    }

    /**
     * POST /deposits:search
     *
     * Search deposit accounts
     */
    public search6({
        body,
        query,
    }: {
        body: DepositAccountSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search6Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(DepositAccountSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search6Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search6']>
    }

    /**
     * POST /deposits/transactions:search
     *
     * Search deposit transactions for deposit accounts by various criteria
     */
    public search7({
        body,
        query,
    }: {
        body: DepositTransactionSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search7Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(DepositTransactionSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('deposits/transactions:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search7Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search7']>
    }

    /**
     * POST /gljournalentries:search
     *
     * Search for general ledger journal entries
     */
    public search8({
        body,
        query,
    }: {
        body: GLJournalEntrySearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string }
    }): Promise<
        | SuccessResponse<'200', Search8Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(GLJournalEntrySearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('gljournalentries:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search8Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search8']>
    }

    /**
     * POST /groups:search
     *
     * Search groups
     */
    public search9({
        body,
        query,
    }: {
        body: GroupSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
    }): Promise<
        | SuccessResponse<'200', Search9Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(GroupSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('groups:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search9Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search9']>
    }

    /**
     * POST /fundingsources/{fundingSourceId}:sell
     *
     * Performs the sell of a funding share owned by an investor. Investors can sell the total share or only a part of the investment. In case of a partial sale, multiple operations can be performed until the entire investment is sold. For the seller, money will be deposited in the funding account, for the buyers money will be withdrawn from provided accounts.
     */
    public sell({
        body,
        path,
        headers,
    }: { body: SellFundingSourceAction; path: { fundingSourceId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', SellResponse>
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
        const _body = this.validateRequestBody(SellFundingSourceAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`fundingsources/${path.fundingSourceId}:sell`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: SellResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['sell']>
    }

    /**
     * POST /communications/messages
     *
     * Send communication message
     */
    public send({
        body,
        headers,
    }: { body: CommunicationMessage; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CommunicationMessage>
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
        const _body = this.validateRequestBody(CommunicationMessage, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('communications/messages', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CommunicationMessage,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['send']>
    }

    /**
     * POST /deposits/{depositAccountId}:startMaturity
     *
     * Represents information to start the maturity period for the specified deposit account.
     */
    public startMaturity({
        body,
        path,
        headers,
    }: { body: StartMaturityAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
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
        const _body = this.validateRequestBody(StartMaturityAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:startMaturity`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['startMaturity']>
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
    }: { body: TerminateLoanAccountInput; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:terminate`, {
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
     * POST /deposits/{depositAccountId}:transferOwnership
     *
     * Transfer the account ownership from current account holder to a new one (client/group).
     */
    public transferOwnership({
        body,
        path,
        headers,
    }: { body: TransferOwnershipAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
        const _body = this.validateRequestBody(TransferOwnershipAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:transferOwnership`, {
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
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['transferOwnership']>
    }

    /**
     * POST /database/backup
     *
     * Trigger database backup
     */
    public triggerBackup({
        body,
        headers,
    }: { body: TriggerDatabaseBackupRequest; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', TriggerDatabaseBackupResponse>
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
        const _body = this.validateRequestBody(TriggerDatabaseBackupRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post('database/backup', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: TriggerDatabaseBackupResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['triggerBackup']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/blocks/{externalReferenceId}
     *
     * Unblock a previously blocked fund for a deposit account
     */
    public unblockFund({
        path,
    }: { path: { depositAccountId: string; externalReferenceId: string } }): Promise<
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
            this.client.delete(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['unblockFund']>
    }

    /**
     * POST /deposits/{depositAccountId}:undoMaturity
     *
     * Represents the action to undo the maturity period for the specified deposit account.
     */
    public undoMaturity({
        body,
        path,
        headers,
    }: { body: UndoMaturityAction; path: { depositAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
        const _body = this.validateRequestBody(UndoMaturityAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.post(`deposits/${path.depositAccountId}:undoMaturity`, {
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
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['undoMaturity']>
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
    }: { body: LoanActionDetails; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:undoRefinance`, {
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
    }: { body: LoanActionDetails; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:undoReschedule`, {
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
    }: { body: LoanActionDetails; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:undoWriteOff`, {
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
     * PUT /consumers/{apiConsumerId}
     *
     * Update API consumer
     */
    public update({
        body,
        path,
        headers,
    }: { body: ApiConsumer; path: { apiConsumerId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', ApiConsumer>
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
        const _body = this.validateRequestBody(ApiConsumer, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`consumers/${path.apiConsumerId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: ApiConsumer,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update']>
    }

    /**
     * PUT /backgroundprocess/{encodedKey}
     *
     * Cancel manual or automatic end of day (EOD) processes using the encoded key
     */
    public update1({
        body,
        path,
    }: { body: string; path: { encodedKey: string } }): Promise<
        | SuccessResponse<'200', BackgroundProcess>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'500', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '500'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.client.put(`backgroundprocess/${path.encodedKey}`, {
                body: body,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: BackgroundProcess,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                500: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update1']>
    }

    /**
     * PUT /organization/transactionChannels/{transactionChannelId}
     *
     * Update transaction channel
     */
    public update10({
        body,
        path,
    }: { body: TransactionChannel; path: { transactionChannelId: string } }): Promise<
        | SuccessResponse<'200', unknown>
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
        const _body = this.validateRequestBody(TransactionChannel, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`organization/transactionChannels/${path.transactionChannelId}`, {
                json: _body.right,
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['update10']>
    }

    /**
     * PUT /userroles/{roleId}
     *
     * Update user role
     */
    public update11({
        body,
        path,
        headers,
    }: { body: Role; path: { roleId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', Role>
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
        const _body = this.validateRequestBody(Role, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`userroles/${path.roleId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: Role,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update11']>
    }

    /**
     * PUT /users/{userId}
     *
     * Update user
     */
    public update12({
        body,
        path,
        headers,
    }: { body: User; path: { userId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', User>
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
        const _body = this.validateRequestBody(User, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`users/${path.userId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: User,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update12']>
    }

    /**
     * PUT /configuration/accountingrules.yaml
     *
     * Update the current accounting rules configuration
     */
    public update13(): Promise<
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
            this.client.put('configuration/accountingrules.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update13']>
    }

    /**
     * PUT /configuration/authorizationholds.yaml
     *
     * Update authorization holds configuration
     */
    public update14(): Promise<
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
            this.client.put('configuration/authorizationholds.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update14']>
    }

    /**
     * PUT /configuration/branches.yaml
     *
     * Update branch configuration
     */
    public update15(): Promise<
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
            this.client.put('configuration/branches.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update15']>
    }

    /**
     * PUT /configuration/centres.yaml
     *
     * Update centres configuration
     */
    public update16(): Promise<
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
            this.client.put('configuration/centres.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update16']>
    }

    /**
     * PUT /configuration/clientroles.yaml
     *
     * Update client roles configuration
     */
    public update17(): Promise<
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
            this.client.put('configuration/clientroles.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update17']>
    }

    /**
     * PUT /configuration/currencies.yaml
     *
     * Update currencies configuration
     */
    public update18(): Promise<
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
            this.client.put('configuration/currencies.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update18']>
    }

    /**
     * PUT /configuration/customfields.yaml
     *
     * Update custom field definitions configuration
     */
    public update19({
        headers,
    }: { headers?: { 'X-Mambu-Async'?: string; 'X-Mambu-Callback'?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | SuccessResponse<'202', unknown>
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
            this.client.put('configuration/customfields.yaml', {
                headers: headers ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update19']>
    }

    /**
     * PUT /clients/{clientId}
     *
     * Update client
     */
    public update2({
        body,
        path,
        query,
    }: { body: Client; path: { clientId: string }; query?: { keepAssociationForAccounts?: string } }): Promise<
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
            this.client.put(`clients/${path.clientId}`, {
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
        ) as ReturnType<this['update2']>
    }

    /**
     * PUT /configuration/depositproducts.yaml
     *
     * Update all deposit products configuration
     */
    public update20({
        headers,
    }: { headers?: { 'X-Mambu-Async'?: string; 'X-Mambu-Callback'?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | SuccessResponse<'202', unknown>
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
            this.client.put('configuration/depositproducts.yaml', {
                headers: headers ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update20']>
    }

    /**
     * PUT /configuration/endofdayprocessing.yaml
     *
     * Update end of day processing configuration
     */
    public update21(): Promise<
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
            this.client.put('configuration/endofdayprocessing.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update21']>
    }

    /**
     * PUT /configuration/grouprolenames.yaml
     *
     * Update group role names configuration
     */
    public update22(): Promise<
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
            this.client.put('configuration/grouprolenames.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update22']>
    }

    /**
     * PUT /configuration/holidays.yaml
     *
     * Update holidays configuration
     */
    public update23(): Promise<
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
            this.client.put('configuration/holidays.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update23']>
    }

    /**
     * PUT /configuration/iddocumenttemplates.yaml
     *
     * Update ID templates configuration
     */
    public update24(): Promise<
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
            this.client.put('configuration/iddocumenttemplates.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update24']>
    }

    /**
     * PUT /configuration/indexrates.yaml
     *
     * Update index rates configuration
     */
    public update25(): Promise<
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
            this.client.put('configuration/indexrates.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update25']>
    }

    /**
     * PUT /configuration/internalcontrols.yaml
     *
     * Update internal controls configuration
     */
    public update26(): Promise<
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
            this.client.put('configuration/internalcontrols.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update26']>
    }

    /**
     * PUT /configuration/labels.yaml
     *
     * Update object labels configuration
     */
    public update27(): Promise<
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
            this.client.put('configuration/labels.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update27']>
    }

    /**
     * PUT /configuration/loanproducts.yaml
     *
     * Update loan products configuration
     */
    public update28({
        headers,
    }: { headers?: { 'X-Mambu-Async'?: string; 'X-Mambu-Callback'?: string } } = {}): Promise<
        | SuccessResponse<'200', unknown>
        | SuccessResponse<'202', unknown>
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
            this.client.put('configuration/loanproducts.yaml', {
                headers: headers ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update28']>
    }

    /**
     * PUT /configuration/loanrisklevels.yaml
     *
     * Update loan risk levels configuration
     */
    public update29(): Promise<
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
            this.client.put('configuration/loanrisklevels.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update29']>
    }

    /**
     * PUT /creditarrangements/{creditArrangementId}
     *
     * Update credit arrangement
     */
    public update3({
        body,
        path,
    }: { body: CreditArrangement; path: { creditArrangementId: string } }): Promise<
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
            this.client.put(`creditarrangements/${path.creditArrangementId}`, {
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
        ) as ReturnType<this['update3']>
    }

    /**
     * PUT /configuration/organization.yaml
     *
     * Update organization details configuration
     */
    public update30(): Promise<
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
            this.client.put('configuration/organization.yaml', {
                headers: { Accept: 'application/vnd.mambu.v2+yaml' },
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update30']>
    }

    /**
     * PUT /configuration/userroles.yaml
     *
     * Update user roles configuration
     */
    public update31({
        headers,
    }: { headers?: { 'X-Mambu-Async'?: string; 'X-Mambu-Callback'?: string } } = {}): Promise<
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
            this.client.put('configuration/userroles.yaml', {
                headers: headers ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update31']>
    }

    /**
     * PUT /configuration/transactionchannels.yaml
     *
     * Update transaction channels configuration
     */
    public update32(): Promise<
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
            this.client.put('configuration/transactionchannels.yaml', {}),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['update32']>
    }

    /**
     * PUT /currencies/{currencyCode}
     *
     * Update currency by code
     */
    public update33({
        body,
        path,
    }: { body: CurrencyDetails; path: { currencyCode: string } }): Promise<
        | SuccessResponse<'200', CurrencyDetails>
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
        const _body = this.validateRequestBody(CurrencyDetails, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`currencies/${path.currencyCode}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CurrencyDetails,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update33']>
    }

    /**
     * PUT /organization/holidays
     *
     * Update holidays
     */
    public update34({
        body,
    }: { body: Holidays }): Promise<
        | SuccessResponse<'200', Holidays>
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
        const _body = this.validateRequestBody(Holidays, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put('organization/holidays', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Holidays,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update34']>
    }

    /**
     * PUT /deposits/{depositAccountId}
     *
     * Update deposit account
     */
    public update4({
        body,
        path,
    }: { body: DepositAccount; path: { depositAccountId: string } }): Promise<
        | SuccessResponse<'200', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`deposits/${path.depositAccountId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update4']>
    }

    /**
     * PUT /depositproducts/{depositProductId}
     *
     * Update deposit product
     */
    public update5({
        body,
        path,
    }: { body: DepositProduct; path: { depositProductId: string } }): Promise<
        | SuccessResponse<'200', DepositProduct>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositProduct, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`depositproducts/${path.depositProductId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update5']>
    }

    /**
     * PUT /groups/{groupId}
     *
     * Update group
     */
    public update6({
        body,
        path,
    }: { body: Group; path: { groupId: string } }): Promise<
        | SuccessResponse<'200', Group>
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
        const _body = this.validateRequestBody(Group, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`groups/${path.groupId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Group,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update6']>
    }

    /**
     * PUT /loans/{loanAccountId}
     *
     * Update loan account
     */
    public update7({
        body,
        path,
    }: { body: LoanAccount; path: { loanAccountId: string } }): Promise<
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
            this.client.put(`loans/${path.loanAccountId}`, {
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
        ) as ReturnType<this['update7']>
    }

    /**
     * PUT /loanproducts/{loanProductId}
     *
     * Update loan product
     */
    public update8({
        body,
        path,
    }: { body: LoanProduct; path: { loanProductId: string } }): Promise<
        | SuccessResponse<'200', LoanProduct>
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
        const _body = this.validateRequestBody(LoanProduct, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`loanproducts/${path.loanProductId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanProduct,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update8']>
    }

    /**
     * PUT /tasks/{taskId}
     *
     * Update task
     */
    public update9({
        body,
        path,
    }: { body: Task; path: { taskId: string } }): Promise<
        | SuccessResponse<'200', Task>
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
        const _body = this.validateRequestBody(Task, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`tasks/${path.taskId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Task,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update9']>
    }

    /**
     * PUT /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Update Interest Availability
     */
    public updateInterestAvailability({
        body,
        path,
    }: {
        body: InterestAccountSettingsAvailabilityUpdate
        path: { depositAccountId: string; interestAvailabilityKey: string }
    }): Promise<
        | SuccessResponse<'200', InterestAccountSettingsAvailabilityResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(InterestAccountSettingsAvailabilityUpdate, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put(`deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updateInterestAvailability']>
    }

    /**
     * PUT /loans/{loanAccountId}/funding
     *
     * Update loan account funding sources
     */
    public updateLoanAccountFundingSources({
        body,
        path,
    }: { body: UpdateLoanAccountFundingSourcesRequest; path: { loanAccountId: string } }): Promise<
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
            this.client.put(`loans/${path.loanAccountId}/funding`, {
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
     * PUT /organization/holidays/nonworkingdays
     *
     * Update non-working days
     */
    public updateNonWorkingDays({
        body,
    }: { body: NonWorkingDays }): Promise<
        | SuccessResponse<'200', NonWorkingDays>
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
        const _body = this.validateRequestBody(NonWorkingDays, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put('organization/holidays/nonworkingdays', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: NonWorkingDays,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updateNonWorkingDays']>
    }

    /**
     * PUT /setup/organization
     *
     * Update organization details
     */
    public updateOrganizationSetup({
        body,
    }: { body: OrganizationSetup }): Promise<
        | SuccessResponse<'200', OrganizationSetup>
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
        const _body = this.validateRequestBody(OrganizationSetup, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.client.put('setup/organization', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: OrganizationSetup,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updateOrganizationSetup']>
    }

    /**
     * PUT /loans/{loanAccountId}/plannedfees
     *
     * Update planned fees
     */
    public updatePlannedFees({
        body,
        path,
    }: { body: UpdatePlannedFeesRequest; path: { loanAccountId: string } }): Promise<
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
            this.client.put(`loans/${path.loanAccountId}/plannedfees`, {
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
    }: { body: LoanActionDetails; path: { loanAccountId: string }; headers?: { 'Idempotency-Key'?: string } }): Promise<
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
            this.client.post(`loans/${path.loanAccountId}:writeOff`, {
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
            if (chosen === 'basic') {
                chosenClient = this.buildBasicClient(chosenClient)
            } else if (chosen === 'secretkey') {
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
    error: ZodError<T> | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`
