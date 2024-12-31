/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GeneralSetupValidator } from './schemas/general-setup.schema.js'

/**
 * Response representation of the dashboard configuration
 */
export interface DashboardConfiguration {
    /**
     * The date dashboard configuration was created
     */
    creationDate?: string | undefined
    /**
     * The encoded key of the dashboard configuration, auto generated, unique
     */
    encodedKey?: string | undefined
    /**
     * The Dashboard option name
     */
    name?:
        | 'LATEST_ACTIVITY'
        | 'TASKS'
        | 'FAVOURITE_VIEWS'
        | 'INDICATORS'
        | 'CURRENT_TILLS'
        | 'CLIENTS'
        | 'UPCOMING_REPAYMENTS'
        | 'NONE'
        | undefined
}

/**
 * Represents a duplicate constraint which needs to apply when saving entities
 */
export interface DuplicateFieldConstraint {
    /**
     * The check will be performed if the field is true
     */
    active?: boolean | undefined
    /**
     * The ENUM data field when the field is an ENUM
     */
    dataField?: string | undefined
    /**
     * The type of the owner (entity) to whom a data field belongs to
     */
    dataItemType?:
        | 'LOANS'
        | 'SAVINGS'
        | 'CLIENT'
        | 'CLIENT_ROLE'
        | 'GROUP'
        | 'GROUP_ROLE'
        | 'TRANSACTION'
        | 'JOURNAL_ENTRY'
        | 'INTEREST_ACCRUAL_BREAKDOWN'
        | 'BRANCH'
        | 'CENTRE'
        | 'USER'
        | 'LOAN_PRODUCT'
        | 'SAVINGS_PRODUCT'
        | 'NOTIFICATION_MESSAGE'
        | 'NOTIFICATION_TEMPLATE'
        | 'REPAYMENT'
        | 'REPAYMENT_COLLECTION'
        | 'ACTIVITY'
        | 'LINE_OF_CREDIT'
        | 'IDENTIFICATION_DOCUMENT'
        | 'ATTACHMENT'
        | 'CURRENCY'
        | 'PRODUCT'
        | 'REVENUE'
        | 'EXPENSE'
        | 'OUTSTANDING_PORTFOLIO_ACCOUNTS'
        | 'OUTSTANDING_PORTFOLIO_AMOUNTS'
        | 'CREATED_ACCOUNTS'
        | 'WRITTEN_OFF_LOANS'
        | 'DISBURSED_LOANS'
        | 'LOAN_GROUP'
        | 'TRANCHE'
        | 'DISBURSEMENT_DETAILS'
        | 'TRANSACTION_DETAILS'
        | 'TRANSACTION_CHANNEL'
        | 'CUSTOM_PREDEFINED_FEE'
        | 'CUSTOM_FIELD_SELECTION'
        | 'PREDEFINED_FEE'
        | 'LOAN_TRANSACTION'
        | 'SAVINGS_TRANSACTION'
        | 'CARD_TRANSACTION_REVERSAL'
        | 'COMPOSED_TRANSACTIONS'
        | 'UNION_TRANSACTIONS'
        | 'INVESTOR_FUND'
        | 'PRINCIPAL_PAYMENT_SETTINGS'
        | 'LOAN_ACCOUNT_GUARANTY'
        | 'TASK'
        | 'DOCUMENT_TEMPLATE'
        | 'INDEX_RATE'
        | 'INDEX_RATE_SOURCE'
        | 'INTEREST_PRODUCT_SETTINGS'
        | 'MCC_EXPIRATION'
        | 'PRODUCT_ARREARS_SETTINGS'
        | 'ACCOUNT_INTEREST_RATE_SETTINGS'
        | 'LENDING_ACCOUNT_CONTRACT'
        | 'REVOLVING_ACCOUNT'
        | 'LENDING_PRODUCT_CONTRACT'
        | undefined
    /**
     * The encoded key of the duplicate field constraint, auto generated, unique
     */
    encodedKey?: string | undefined
    /**
     * Used for creating an AND clause between constraints
     */
    groupIndex?: number | undefined
}

type EnabledComponents = 'LOANS' | 'DEPOSITS' | 'BRANCHES' | 'CENTRES' | 'CLIENTS' | 'GROUPS' | 'ACCOUNTING' | 'CREDIT_OFFICERS'

export interface ErrorResponse {
    errors?: RestError[] | undefined
}

export const ErrorResponse = {
    validate: ErrorResponseValidator as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    parse: (o: unknown): { right: ErrorResponse } | { left: DefinedError[] } => {
        if (ErrorResponse.is(o)) {
            return { right: o }
        }
        return { left: (ErrorResponse.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Represents the general setup for an organization.
 */
export interface GeneralSetup {
    /**
     * The accounting cut off time.
     */
    accountingCutOffTime?: string | undefined
    /**
     * `TRUE` if separate users are required for approval and disbursal, `FALSE` otherwise.
     */
    approvalDisbursalTwoManRuleEnabled?: boolean | undefined
    /**
     * The number of days that are required before an account can be written off.
     */
    arrearsDaysBeforeWriteOff?: number | undefined
    /**
     * The list of required assignments for clients and groups.
     */
    assignmentConstraints?: ('BRANCH' | 'CENTRE' | 'CREDIT_OFFICER' | 'GROUP')[] | undefined
    /**
     * The interval (number of days) between the execution of automated accounting closures. If this number is 0, automated closure is performed.
     */
    automatedAccountingClosuresInterval?: number | undefined
    /**
     * The pattern for generating individual client IDs.
     */
    clientIdFormat?: string | undefined
    /**
     * The dashboard configuration.
     */
    dashboardConfigurations?: DashboardConfiguration[] | undefined
    /**
     * The date (dd-MM-yyyy) or date time (dd-MM-yyyy HH:mm:ss) formats.
     */
    dateFormats?:
        | {
              [k: string]: string | undefined
          }
        | undefined
    /**
     * The symbol used to mark the border between the integral and the fractional parts of a decimal numeral.
     */
    decimalSeparator?: 'COMMA' | 'POINT' | undefined
    /**
     * The client role used as default.
     */
    defaultClientRoleKey?: string | undefined
    /**
     * The client default state.
     */
    defaultClientState?: 'PENDING_APPROVAL' | 'INACTIVE' | 'ACTIVE' | 'EXITED' | 'BLACKLISTED' | 'REJECTED' | undefined
    /**
     * The group role used as default.
     */
    defaultGroupRoleKey?: string | undefined
    /**
     * The line of credit default state.
     */
    defaultLineOfCreditState?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED' | undefined
    /**
     * The transaction channel that is used as the default.
     */
    defaultTransactionChannelKey?: string | undefined
    /**
     * The list of duplicate client constraints that are available in the administration and can be performed.
     */
    duplicateClientChecks?: DuplicateFieldConstraint[] | undefined
    /**
     * The action to be taken when the duplicate client validation fails.
     */
    duplicateClientConstraintAction?: 'NONE' | 'WARNING' | 'ERROR' | undefined
    /**
     * The list of all the enabled components for the current tenant.
     */
    enabledComponents?: EnabledComponents[] | undefined
    /**
     * The encoded key of the general setup, which is auto generated, and unique.
     */
    encodedKey?: string | undefined
    /**
     * The end of day (EOD) processing settings. The `AUTOMATIC` EOD processing runs every midnight. The `MANUAL` EOD processing runs when the client initiates the action from the Mambu UI.
     */
    eodProcessingMethod?: 'AUTOMATIC' | 'MANUAL' | undefined
    /**
     * The maximum exposure amount.
     */
    exposureAmount?: number | undefined
    /**
     * The maximum exposure a client can have in outstanding loans at any time.
     */
    exposureType?: 'UNLIMITED' | 'SUM_OF_LOANS' | 'SUM_OF_LOANS_MINUS_SAVINGS' | undefined
    /**
     * The pattern for generating group client IDs.
     */
    groupIdFormat?: string | undefined
    /**
     * The group size limitation type.
     */
    groupSizeLimitType?: 'HARD' | 'WARNING' | 'NONE' | undefined
    /**
     * The key of the general ledger (GL) account which will be used for inter-branch transfers.
     */
    interBranchTransferGLAccountKey?: string | undefined
    /**
     * The unique pattern after which all the lines of credit IDs should be created.
     */
    lineOfCreditIdFormat?: string | undefined
    /**
     * The maximum allowed ID document attachments.
     */
    maxAllowedIdDocumentAttachments?: number | undefined
    /**
     * The maximum allowed journal entry attachments.
     */
    maxAllowedJournalEntryDocumentAttachments?: number | undefined
    /**
     * The maximum number of days users are allowed to undo of close obligations met for a loan account.
     */
    maxAllowedUndoClosurePeriod?: number | undefined
    /**
     * The maximum group size allowed. A null value means the limit is ignored.
     */
    maxGroupSizeLimit?: number | undefined
    /**
     * The minimum group size allowed. A null value means the limit is ignored.
     */
    minGroupSizeLimit?: number | undefined
    /**
     * The constraint on whether clients can belong to more than one group or not.
     */
    multipleGroupMemberships?: 'UNLIMITED' | 'ONE_GROUP' | undefined
    /**
     * The option that shows if multiple loans are allowed or not.
     */
    multipleLoans?: 'UNLIMITED' | 'ONE_LOAN' | undefined
    /**
     * `TRUE` if other ID documents are enabled, `FALSE` otherwise.
     */
    otherIdDocumentsEnabled?: boolean | undefined
    /**
     * The date used when computing overdraft interest for savings accounts.
     */
    overdraftInterestEodBalanceDate?: string | undefined
    /**
     * The unique pattern after which all the till IDs should be created.
     */
    tillIdFormat?: string | undefined
}

export const GeneralSetup = {
    validate: GeneralSetupValidator as ValidateFunction<GeneralSetup>,
    get schema() {
        return GeneralSetup.validate.schema
    },
    get errors() {
        return GeneralSetup.validate.errors ?? undefined
    },
    is: (o: unknown): o is GeneralSetup => GeneralSetup.validate(o) === true,
    parse: (o: unknown): { right: GeneralSetup } | { left: DefinedError[] } => {
        if (GeneralSetup.is(o)) {
            return { right: o }
        }
        return { left: (GeneralSetup.errors ?? []) as DefinedError[] }
    },
} as const

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}
