/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * In order to have access to mobile Mambu, Mambu provides a name and password that can be used for logging in or for accessing the APIs. This model contains the user information, but it hides certain fields like password for security reasons.
 */
export interface User {
    /**
     * The user last name
     */
    lastName?: string
    access: UserAccess
    /**
     * Additional information for the user.
     */
    notes?: string
    role?: RoleIdentifier
    /**
     * The last time the user logged in, as UTC
     */
    lastLoggedInDate?: string
    /**
     * The last time the user was modified, as UTC
     */
    lastModifiedDate?: string
    /**
     * The user home phone number, can also contain characters
     */
    homePhone?: string
    /**
     * The user language, the user interface will be displayed in the selected language
     */
    language?:
        | 'ENGLISH'
        | 'PORTUGESE'
        | 'SPANISH'
        | 'RUSSIAN'
        | 'FRENCH'
        | 'GEORGIAN'
        | 'CHINESE'
        | 'INDONESIAN'
        | 'ROMANIAN'
        | 'BURMESE'
        | 'GERMAN'
        | 'PORTUGUESE_BRAZIL'
        | 'VIETNAMESE'
        | 'ITALIAN'
        | 'PHRASE'
    /**
     * Date when the user was created, as UTC
     */
    creationDate?: string
    /**
     * The user title
     */
    title?: string
    /**
     * The encoded key of the branch this user is assigned to.
     */
    assignedBranchKey?: string
    /**
     * The user first name
     */
    firstName: string
    /**
     * The user mobile phone number, can also contain characters
     */
    mobilePhone?: string
    /**
     * The user current state
     */
    userState?: 'ACTIVE' | 'INACTIVE' | 'LOCKED'
    /**
     * For additional security two-factor authentication can be added to users. When this setting is enabled, users will be sent an SMS on their registered mobile number, which they will need to enter in the Mambu login screen, in addition to their password..
     */
    twoFactorAuthentication?: boolean
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * Id of the user, unique, generated, should not be confused with the username field
     */
    id?: string
    /**
     * Map of specifying user transaction limits.
     */
    transactionLimits?: {
        [k: string]: number
    }
    /**
     * The user email address. Used by Mambu for sending automated notifications or for password retrieval
     */
    email?: string
    /**
     * Mambu login user name
     */
    username: string
}

export const User = {
    validate: require('./schemas/user.schema.js') as ValidateFunction<User>,
    get schema() {
        return User.validate.schema
    },
    get errors() {
        return User.validate.errors ?? undefined
    },
    is: (o: unknown): o is User => User.validate(o) === true,
    assert: (o: unknown) => {
        if (!User.validate(o)) {
            throw new AjvValidator.ValidationError(User.errors ?? [])
        }
    },
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: require('./schemas/error-response.schema.js') as ValidateFunction<ErrorResponse>,
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

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: require('./schemas/patch-request.schema.js') as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    get errors() {
        return PatchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new AjvValidator.ValidationError(PatchRequest.errors ?? [])
        }
    },
} as const

export type GetAllResponse = User[]

export const GetAllResponse = {
    validate: require('./schemas/get-all-response.schema.js') as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

/**
 * Allows the creation of a user
 */
export interface UserRequest {
    /**
     * The user last name
     */
    lastName?: string
    access: UserAccess
    /**
     * Additional information for the user.
     */
    notes?: string
    role?: RoleIdentifier
    /**
     * The user home phone number, can also contain characters
     */
    homePhone?: string
    /**
     * The user language, the user interface will be displayed in the selected language
     */
    language?:
        | 'ENGLISH'
        | 'PORTUGESE'
        | 'SPANISH'
        | 'RUSSIAN'
        | 'FRENCH'
        | 'GEORGIAN'
        | 'CHINESE'
        | 'INDONESIAN'
        | 'ROMANIAN'
        | 'BURMESE'
        | 'GERMAN'
        | 'PORTUGUESE_BRAZIL'
        | 'VIETNAMESE'
        | 'ITALIAN'
        | 'PHRASE'
    /**
     * The user title
     */
    title?: string
    /**
     * The encoded key of the branch this user is assigned to.
     */
    assignedBranchKey?: string
    /**
     * The user first name
     */
    firstName: string
    /**
     * Password used by the user
     */
    password: string
    /**
     * The user mobile phone number, can also contain characters
     */
    mobilePhone?: string
    /**
     * For additional security two-factor authentication can be added to users. When this setting is enabled, users will be sent an SMS on their registered mobile number, which they will need to enter in the Mambu login screen, in addition to their password..
     */
    twoFactorAuthentication?: boolean
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * Map of specifying user transaction limits.
     */
    transactionLimits?: {
        [k: string]: number
    }
    /**
     * The user email address. Used by Mambu for sending automated notifications or for password retrieval
     */
    email?: string
    /**
     * Mambu login user name
     */
    username: string
}

export const UserRequest = {
    validate: require('./schemas/user_request.schema.js') as ValidateFunction<UserRequest>,
    get schema() {
        return UserRequest.validate.schema
    },
    get errors() {
        return UserRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is UserRequest => UserRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!UserRequest.validate(o)) {
            throw new AjvValidator.ValidationError(UserRequest.errors ?? [])
        }
    },
} as const

/**
 * Wrapper containing the available user permissions and access rights
 */
export interface UserAccess {
    /**
     * Flag specific to Credit Officers determining the access to entities assigned to other Credit Officers (eg clients, accounts)
     */
    canManageEntitiesAssignedToOtherOfficers: boolean
    /**
     * Mambu access allows the user to log in to Mambu via the regular web user interface, using their login credentials. If an user does not have this access right, login to Mambu via the web user interface will not be possible.
     */
    mambuAccess?: boolean
    /**
     * Whether the user is an administrator in Mambu. The administrators in mambu are having full permissions for all entities and for Mambu settings.
     */
    administratorAccess?: boolean
    /**
     * API access allows the user to authenticate and interact with Mambu using Mambu's APIs, this means that most of the time such an user is not an actual person, but a piece of software that is programmed to interact with Mambu. The API user would still require the right user permissions, depending on what it is required to do in the system, and transactions posted by that user are kept in the logs in the same way as user actions from regular users.
     */
    apiAccess?: boolean
    /**
     * Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Note that not all this permissions are used for validating API calls, some are used only for UI validations
     */
    permissions?: Local0[]
    /**
     * Flag indicating the user is part of the Delivery team
     */
    deliveryAccess?: boolean
    /**
     * Whether the user is a credit officer or not. Credit Officers have the option of having clients and groups assigned to them, this relationship allows for better reporting and client management.
     */
    creditOfficerAccess?: boolean
    /**
     * Whether the user permissions apply to all branches or only for some branches
     */
    canManageAllBranches: boolean
    /**
     * The list of branches that can be managed by current user. If the user has the canManageAllBranches true, this list is not taken in consideration.
     */
    managedBranches?: UserManagedBranch[]
    /**
     * Flag indicating the user is in charge with the Mambu technical support.
     */
    supportAccess?: boolean
    /**
     * Whether the user is a teller or not. Tellers have access to the teller module, special tellering permissions give them access to the different actions available on this module, such as opening/closing tills, posting transactions on a till, adding and removing cash from a till etc.
     */
    tellerAccess?: boolean
}

type Local0 =
    | 'AUDIT_TRANSACTIONS'
    | 'VIEW_COMMENTS'
    | 'CREATE_COMMENTS'
    | 'EDIT_COMMENTS'
    | 'DELETE_COMMENTS'
    | 'CREATE_INDEX_RATE'
    | 'DOWNLOAD_BACKUPS'
    | 'IMPORT_DATA'
    | 'VIEW_BACKGROUND_TASKS'
    | 'VIEW_EXCHANGE_RATES'
    | 'CREATE_EXCHANGE_RATE'
    | 'VIEW_CENTRE_DETAILS'
    | 'CREATE_CENTRE'
    | 'EDIT_CENTRE'
    | 'DELETE_CENTRE'
    | 'MANAGE_CONFIGURATION_AS_CODE'
    | 'VIEW_BRANCH_DETAILS'
    | 'CREATE_BRANCH'
    | 'EDIT_BRANCH'
    | 'CREATE_COMMUNICATION_TEMPLATES'
    | 'EDIT_COMMUNICATION_TEMPLATES'
    | 'SEND_MANUAL_SMS'
    | 'SEND_MANUAL_EMAIL'
    | 'VIEW_COMMUNICATION_HISTORY'
    | 'RESEND_FAILED_MESSAGES'
    | 'VIEW_TRANSACTION_CHANNELS'
    | 'CREATE_TRANSACTION_CHANNELS'
    | 'EDIT_TRANSACTION_CHANNELS'
    | 'DELETE_TRANSACTION_CHANNELS'
    | 'MANAGE_HOLIDAYS'
    | 'MANAGE_EOD_PROCESSING'
    | 'MANAGE_INTERNAL_CONTROLS'
    | 'MANAGE_RISK_LEVELS'
    | 'VIEW_LOAN_PRODUCT_DETAILS'
    | 'CREATE_LOAN_PRODUCT'
    | 'EDIT_LOAN_PRODUCT'
    | 'DELETE_LOAN_PRODUCTS'
    | 'VIEW_SAVINGS_PRODUCT_DETAILS'
    | 'CREATE_SAVINGS_PRODUCT'
    | 'EDIT_SAVINGS_PRODUCT'
    | 'DELETE_SAVINGS_PRODUCT'
    | 'CREATE_PRODUCT_DOCUMENT_TEMPLATES'
    | 'EDIT_PRODUCT_DOCUMENT_TEMPLATES'
    | 'DELETE_PRODUCT_DOCUMENT_TEMPLATES'
    | 'VIEW_CLIENT_DETAILS'
    | 'CREATE_CLIENT'
    | 'EDIT_CLIENT'
    | 'DELETE_CLIENTS'
    | 'APPROVE_CLIENT'
    | 'REJECT_CLIENT'
    | 'EXIT_CLIENT'
    | 'ANONYMIZE_CLIENT'
    | 'BLACKLIST_CLIENT'
    | 'UNDO_CLIENT_STATE_CHANGED'
    | 'EDIT_CLIENT_ID'
    | 'EDIT_BLACKLISTED_CLIENT_CFV'
    | 'EDIT_GROUP_ID'
    | 'CHANGE_CLIENT_TYPE'
    | 'VIEW_GROUP_DETAILS'
    | 'CREATE_GROUP'
    | 'EDIT_GROUP'
    | 'DELETE_GROUP'
    | 'CHANGE_GROUP_TYPE'
    | 'VIEW_LINE_OF_CREDIT_DETAILS'
    | 'CREATE_LINES_OF_CREDIT'
    | 'EDIT_LINES_OF_CREDIT'
    | 'ADD_ACCOUNTS_TO_LINE_OF_CREDIT'
    | 'REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT'
    | 'APPROVE_LINE_OF_CREDIT'
    | 'UNDO_APPROVE_LINE_OF_CREDIT'
    | 'WITHDRAW_LINE_OF_CREDIT'
    | 'UNDO_WITHDRAW_LINE_OF_CREDIT'
    | 'REJECT_LINE_OF_CREDIT'
    | 'UNDO_REJECT_LINE_OF_CREDIT'
    | 'CLOSE_LINES_OF_CREDIT'
    | 'DELETE_LINES_OF_CREDIT'
    | 'VIEW_LOAN_ACCOUNT_DETAILS'
    | 'CREATE_LOAN_ACCOUNT'
    | 'EDIT_LOAN_ACCOUNT'
    | 'DELETE_LOAN_ACCOUNT'
    | 'ENTER_REPAYMENT'
    | 'EDIT_REPAYMENT_SCHEDULE'
    | 'APPROVE_LOANS'
    | 'REQUEST_LOAN_APPROVAL'
    | 'DIBURSE_LOANS'
    | 'WITHDRAW_LOAN_ACCOUNTS'
    | 'UNDO_WITHDRAW_LOAN_ACCOUNTS'
    | 'SET_LOAN_INCOMPLETE'
    | 'REJECT_LOANS'
    | 'UNDO_REJECT_LOANS'
    | 'CLOSE_LOAN_ACCOUNTS'
    | 'WRITE_OFF_LOAN_ACCOUNTS'
    | 'TERMINATE_LOAN_ACCOUNTS'
    | 'PAY_OFF_LOAN'
    | 'UNDO_LOAN_ACCOUNT_CLOSURE'
    | 'REVERSE_LOAN_ACCOUNT_WRITE_OFF'
    | 'REFINANCE_LOAN_ACCOUNT'
    | 'RESCHEDULE_LOAN_ACCOUNT'
    | 'APPLY_ACCRUED_LOAN_INTEREST'
    | 'APPLY_LOAN_FEES'
    | 'APPLY_LOAN_ADJUSTMENTS'
    | 'EDIT_PLANNED_FEES'
    | 'BACKDATE_LOAN_TRANSACTIONS'
    | 'LINK_ACCOUNTS'
    | 'COLLECT_GUARANTIES'
    | 'VIEW_SECURITIES_DETAILS'
    | 'CREATE_SECURITIES'
    | 'EDIT_SECURITIES'
    | 'DELETE_SECURITIES'
    | 'LOCK_LOAN_ACCOUNTS'
    | 'POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS'
    | 'EDIT_LOAN_TRANCHES'
    | 'EDIT_PENALTY_RATE'
    | 'SET_DISBURSEMENT_CONDITIONS'
    | 'EDIT_LOAN_TRANSACTIONS'
    | 'BULK_LOAN_CORRECTIONS'
    | 'EDIT_INTEREST_RATE'
    | 'EDIT_REPAYMENT_METHOD_VALUE'
    | 'EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT'
    | 'MANAGE_LOAN_ASSOCIATION'
    | 'MAKE_WITHDRAWAL_REDRAW'
    | 'VIEW_SAVINGS_ACCOUNT_DETAILS'
    | 'CREATE_SAVINGS_ACCOUNT'
    | 'EDIT_SAVINGS_ACCOUNT'
    | 'DELETE_SAVINGS_ACCOUNT'
    | 'MAKE_DEPOSIT'
    | 'MAKE_WITHDRAWAL'
    | 'MAKE_EARLY_WITHDRAWALS'
    | 'APPROVE_SAVINGS'
    | 'ACTIVATE_MATURITY'
    | 'UNDO_MATURITY'
    | 'CLOSE_SAVINGS_ACCOUNTS'
    | 'APPLY_SAVINGS_FEES'
    | 'REOPEN_SAVINGS_ACCOUNT'
    | 'APPLY_SAVINGS_ADJUSTMENTS'
    | 'LOCK_SAVINGS_ACCOUNT'
    | 'UNLOCK_SAVINGS_ACCOUNT'
    | 'REVERSE_SAVINGS_ACCOUNT_WRITE_OFF'
    | 'BACKDATE_SAVINGS_TRANSACTIONS'
    | 'MAKE_TRANSFER'
    | 'MAKE_INTER_CLIENTS_TRANSFERS'
    | 'POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS'
    | 'APPLY_ACCRUED_SAVINGS_INTEREST'
    | 'EDIT_SAVINGS_TRANSACTIONS'
    | 'BULK_DEPOSIT_CORRECTIONS'
    | 'BLOCK_AND_SEIZE_FUNDS'
    | 'WITHDRAW_BLOCKED_FUNDS'
    | 'CREATE_CARDS'
    | 'VIEW_CARDS'
    | 'DELETE_CARDS'
    | 'REVERSE_CARD_WITHDRAWAL_TRANSACTION'
    | 'REVERSE_CARD_TRANSACTION'
    | 'CARD_BALANCE_INQUIRY'
    | 'CREATE_AUTHORIZATION_HOLD'
    | 'UPDATE_AUTHORIZATION_HOLD'
    | 'VIEW_AUTHORIZATION_HOLD'
    | 'CREATE_CARD_TRANSACTION'
    | 'CREATE_ACCOUNT_HOLD'
    | 'UPDATE_ACCOUNT_HOLD'
    | 'VIEW_ACCOUNT_HOLD'
    | 'VIEW_DOCUMENTS'
    | 'CREATE_DOCUMENTS'
    | 'EDIT_DOCUMENTS'
    | 'DELETE_DOCUMENTS'
    | 'VIEW_TASK'
    | 'CREATE_TASK'
    | 'EDIT_TASK'
    | 'DELETE_TASK'
    | 'VIEW_INTELLIGENCE'
    | 'VIEW_REPORTS'
    | 'CREATE_REPORTS'
    | 'EDIT_REPORTS'
    | 'DELETE_REPORTS'
    | 'VIEW_CHART_OF_ACCOUNTS'
    | 'MANAGE_ACCOUNTS'
    | 'VIEW_JOURNAL_ENTRIES'
    | 'LOG_JOURNAL_ENTRIES'
    | 'VIEW_ACCOUNTING_REPORTS'
    | 'MAKE_ACCOUNTING_CLOSURE'
    | 'APPLY_ACCOUNTING_ADJUSTMENTS'
    | 'BOOKING_DATE_LOANS_GL'
    | 'BOOKING_DATE_SAVINGS_GL'
    | 'RECTIFY_ADJUSTMENT'
    | 'VIEW_ACCOUNTING_RATES'
    | 'CREATE_ACCOUNTING_RATES'
    | 'OPEN_TILL'
    | 'CLOSE_TILL'
    | 'ADD_CASH'
    | 'REMOVE_CASH'
    | 'POST_TRANSACTIONS_WITHOUT_OPENED_TILL'
    | 'VIEW_INVESTOR_FUNDS_DETAILS'
    | 'CREATE_INVESTOR_FUNDS'
    | 'EDIT_INVESTOR_FUNDS'
    | 'DELETE_INVESTOR_FUNDS'
    | 'SELL_LOAN_FRACTION'
    | 'CREATE_USER'
    | 'EDIT_USER'
    | 'VIEW_USER_DETAILS'
    | 'DELETE_USER'
    | 'MANAGE_TWO_FACTOR_AUTHENTICATION'
    | 'MANAGE_CLIENT_ASSOCIATION'
    | 'MANAGE_GROUP_ASSOCIATION'
    | 'EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT'
    | 'PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION'
    | 'EXPORT_TO_EXCEL'
    | 'VIEW_ADMINISTRATION_DETAILS'
    | 'MANAGE_EVENTS_STREAMING'
    | 'MANAGE_PAYMENTS'
    | 'MANAGE_AUDIT_TRAIL'
    | 'MANAGE_APPS'
    | 'MANAGE_CARDS_CAPABILITY'
    | 'MANAGE_NOTIFICATIONS'
    | 'ADMIN'
    | 'CREATE_ROLE'
    | 'EDIT_ROLE'
    | 'DELETE_ROLE'
    | 'VIEW_ROLE'
    | 'MANAGE_FEDERATED_AUTHENTICATION'
    | 'MANAGE_ACCESS_PREFERENCES'
    | 'VIEW_API_CONSUMERS_AND_KEYS'
    | 'CREATE_API_CONSUMERS_AND_KEYS'
    | 'EDIT_API_CONSUMERS_AND_KEYS'
    | 'DELETE_API_CONSUMERS_AND_KEYS'
    | 'VIEW_CUSTOM_FIELD'
    | 'CREATE_CUSTOM_FIELD'
    | 'EDIT_CUSTOM_FIELD'
    | 'DELETE_CUSTOM_FIELD'
    | 'VIEW_MAMBU_FUNCTIONS'
    | 'CREATE_MAMBU_FUNCTIONS'
    | 'EDIT_MAMBU_FUNCTIONS'
    | 'DELETE_MAMBU_FUNCTIONS'

/**
 * Branch that can be managed by the user or API Consumer
 */
export interface UserManagedBranch {
    /**
     * The encoded key of the branch, generated
     */
    branchKey?: string
}

/**
 * The user role identifier
 */
export interface RoleIdentifier {
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * Id of the role, unique, can be generated and customized
     */
    id?: string
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * A single change that needs to be made to a resource
 */
export interface PatchOperation {
    /**
     * The change to perform
     */
    op: 'ADD' | 'REPLACE' | 'REMOVE' | 'MOVE'
    /**
     * The field to perform the operation on
     */
    path: string
    /**
     * The field from where a value should be moved, when using move
     */
    from?: string
    /**
     * The value of the field, can be null
     */
    value?: {
        [k: string]: unknown | undefined
    }
}
