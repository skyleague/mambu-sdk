/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

type GeneralSetupAssignmentConstraintsArray = 'BRANCH' | 'CENTRE' | 'CREDIT_OFFICER' | 'GROUP'

type GeneralSetupEnabledComponentsArray =
    | 'LOANS'
    | 'DEPOSITS'
    | 'BRANCHES'
    | 'CENTRES'
    | 'CLIENTS'
    | 'GROUPS'
    | 'ACCOUNTING'
    | 'CREDIT_OFFICERS'

/**
 * Represents the general setup for an organization which can be modified by the organization's users
 */
export interface GeneralSetup {
    /**
     * The pattern for generating client IDs
     */
    clientIdFormat?: string
    /**
     * The key of the GL Account which will be used for inter-branch transfers
     */
    interBranchTransferGLAccountKey?: string
    /**
     * The list of required assignments for Clients and Groups
     */
    assignmentConstraints?: GeneralSetupAssignmentConstraintsArray[]
    /**
     * The maximum allowed ID document attachments
     */
    maxAllowedIdDocumentAttachments?: number
    /**
     * Symbol used to mark the border between the integral and the fractional parts of a decimal numeral
     */
    decimalSeparator?: 'COMMA' | 'POINT'
    /**
     * The maximum group size allowed; null values causes ignoring of the limit
     */
    maxGroupSizeLimit?: number
    /**
     * Specifies whether the other id documents are enabled or not.
     */
    otherIdDocumentsEnabled?: boolean
    /**
     * The group size limitation type
     */
    groupSizeLimitType?: 'HARD' | 'WARNING' | 'NONE'
    /**
     * The EOD processing settings whether are automatic, runs every midnight or manual, runs when the client initiates the action from the interface.
     */
    eodProcessingMethod?: 'AUTOMATIC' | 'MANUAL'
    /**
     * The client default state
     */
    defaultClientState?: 'PENDING_APPROVAL' | 'INACTIVE' | 'ACTIVE' | 'EXITED' | 'BLACKLISTED' | 'REJECTED'
    /**
     * The maximum allowed journal entry attachments
     */
    maxAllowedJournalEntryDocumentAttachments?: number
    /**
     * The date (dd-MM-yyyy) or date time (dd-MM-yyyy HH:mm:ss) formats
     */
    dateFormats?: {
        [k: string]: string
    }
    /**
     * Specifies whether separate users are required for approval and disbursal
     */
    approvalDisbursalTwoManRuleEnabled?: boolean
    /**
     * The maximum of days we allow users to undo of close obligations met for an loan account
     */
    maxAllowedUndoClosurePeriod?: number
    /**
     * The date used when computing overdraft interest for savings accounts.
     */
    overdraftInterestEodBalanceDate?: string
    /**
     * The maximum exposure is a hard cap of how much a client can have in outstanding loans with the organization at any time
     */
    exposureType?: 'UNLIMITED' | 'SUM_OF_LOANS' | 'SUM_OF_LOANS_MINUS_SAVINGS'
    /**
     * The unique pattern after which all the till IDs should be created
     */
    tillIdFormat?: string
    /**
     * The client role used as default
     */
    defaultClientRoleKey?: string
    /**
     * The accounting cut off time
     */
    accountingCutOffTime?: string
    /**
     * The encoded key of the general setup, auto generated, unique
     */
    encodedKey?: string
    /**
     * The minimum group size allowed; null values causes ignoring of the limit
     */
    minGroupSizeLimit?: number
    /**
     * The number of days that are required before an account can be written off
     */
    arrearsDaysBeforeWriteOff?: number
    /**
     * The interval (number of days) between the execution of automated accounting closures. If this number is 0, automated closure is performed
     */
    automatedAccountingClosuresInterval?: number
    /**
     * The list of duplicate client constraints that are available in the administration and can be performed
     */
    duplicateClientChecks?: DuplicateFieldConstraint[]
    /**
     * The list of all the enabled components for the current tenant
     */
    enabledComponents?: GeneralSetupEnabledComponentsArray[]
    /**
     * The line of credit default state
     */
    defaultLineOfCreditState?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED'
    /**
     * The transaction channel that it be used as default
     */
    defaultTransactionChannelKey?: string
    /**
     * The maximum exposure amount
     */
    exposureAmount?: number
    /**
     * The dashboard configuration
     */
    dashboardConfigurations?: DashboardConfiguration[]
    /**
     * The pattern for generating group client IDs
     */
    groupIdFormat?: string
    /**
     * The action to be taken when the duplicate client validation fails
     */
    duplicateClientConstraintAction?: 'NONE' | 'WARNING' | 'ERROR'
    /**
     * The constraint on whether clients can belong to more than one group or not
     */
    multipleGroupMemberships?: 'UNLIMITED' | 'ONE_GROUP'
    /**
     * The group role used as default
     */
    defaultGroupRoleKey?: string
    /**
     * The option that shows if multiple loans are allowed or not
     */
    multipleLoans?: 'UNLIMITED' | 'ONE_LOAN'
    /**
     * The unique pattern after which all the lines of credit IDs should be created
     */
    lineOfCreditIdFormat?: string
}

export const GeneralSetup = {
    validate: (await import('./schemas/general-setup.schema.js')).validate10 as unknown as ValidateFunction<GeneralSetup>,
    get schema() {
        return GeneralSetup.validate.schema
    },
    get errors() {
        return GeneralSetup.validate.errors ?? undefined
    },
    is: (o: unknown): o is GeneralSetup => GeneralSetup.validate(o) === true,
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate10 as unknown as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    assert: (o: unknown) => {
        if (!ErrorResponse.validate(o)) {
            throw new AjvValidator.ValidationError(ErrorResponse.errors ?? [])
        }
    },
} as const

/**
 * Represents a duplicate constraint which needs to apply when saving entities
 */
export interface DuplicateFieldConstraint {
    /**
     * The ENUM data field when the field is an ENUM
     */
    dataField?: string
    /**
     * The check will be performed if the field is true
     */
    active?: boolean
    /**
     * The encoded key of the duplicate field constraint, auto generated, unique
     */
    encodedKey?: string
    /**
     * Used for creating an AND clause between constraints
     */
    groupIndex?: number
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
        | 'REVOLVING_ACCOUNT'
}

/**
 * Response representation of the dashboard configuration
 */
export interface DashboardConfiguration {
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
    /**
     * The encoded key of the dashboard configuration, auto generated, unique
     */
    encodedKey?: string
    /**
     * The date dashboard configuration was created
     */
    creationDate?: string
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
