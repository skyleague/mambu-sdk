/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Represents a communication message.
 */
export interface CommunicationMessage {
    /**
     * The contents of the message.
     */
    body?: string
    /**
     * The client the message was sent to.
     */
    clientKey?: string
    /**
     * The date the communication message was created in UTC.
     */
    creationDate?: string
    /**
     * The deposit account that triggered this message.
     */
    depositAccountKey?: string
    /**
     * The destination (phone number or email address) this message was sent to.
     */
    destination?: string
    /**
     * The encoded key of the communication message, which is generated automatically, and must be unique.
     */
    encodedKey?: string
    /**
     * The event that triggered this message.
     */
    event?:
        | 'MANUAL'
        | 'DO_NOTHING'
        | 'CLIENT_CREATED'
        | 'CLIENT_APPROVED'
        | 'GROUP_ACTIVITY'
        | 'GROUP_CREATED'
        | 'LOAN_CREATED'
        | 'INTEREST_RATE_CHANGED'
        | 'CLIENT_REJECTED'
        | 'CLIENT_ACTIVITY'
        | 'LOAN_REPAYMENT'
        | 'LOAN_REPAYMENT_REVERSAL'
        | 'FEE_APPLIED'
        | 'FEE_ADJUSTED'
        | 'FEE_CHARGED'
        | 'PENALTY_APPLIED'
        | 'PENALTY_ADJUSTMENT'
        | 'FEES_DUE_REDUCED'
        | 'FEE_REDUCTION_ADJUSTMENT'
        | 'LOAN_APPROVAL'
        | 'LOAN_ACCOUNT_CLOSURE'
        | 'LOAN_ACCOUNT_WRITE_OFF'
        | 'LOAN_ACCOUNT_REJECTION'
        | 'LOAN_ACCOUNT_RESCHEDULED'
        | 'LOAN_ACCOUNT_REFINANCED'
        | 'REPAYMENT_REMINDER'
        | 'ACCOUNT_IN_ARREARS'
        | 'LOAN_DISBURSEMENT'
        | 'LOAN_DISBURSEMENT_REVERSAL'
        | 'LOAN_ACCOUNT_ACTIVITY'
        | 'LOAN_ANTICIPATED_DISBURSEMENT'
        | 'SAVINGS_CREATED'
        | 'SAVINGS_DEPOSIT'
        | 'SAVINGS_DEPOSIT_REVERSAL'
        | 'SAVINGS_APPROVAL'
        | 'SAVINGS_ACCOUNT_ACTIVATED'
        | 'SAVINGS_ACCOUNT_CLOSURE'
        | 'SAVINGS_ACCOUNT_REJECTION'
        | 'SAVINGS_WITHDRAWAL'
        | 'SAVINGS_WITHDRAWAL_REVERSAL'
        | 'SAVINGS_ACCOUNT_ACTIVITY'
        | 'DEPOSIT_INTEREST_APPLIED'
        | 'DEPOSIT_INTEREST_APPLIED_ADJUSTMENT'
        | 'ACCOUNT_AUTHORISATION_HOLD_CREATED'
        | 'ACCOUNT_AUTHORISATION_HOLD_REVERSED'
        | 'ACCOUNT_AUTHORISATION_HOLD_SETTLED'
        | 'CARDS_AUTHORISATION_HOLD_CREATED'
        | 'CARDS_AUTHORISATION_HOLD_SETTLED'
        | 'CARDS_AUTHORISATION_HOLD_AMOUNT_DECREASED'
        | 'CARDS_AUTHORISATION_HOLD_AMOUNT_INCREASED'
        | 'CARDS_AUTHORISATION_HOLD_EXPIRED'
        | 'CARDS_AUTHORISATION_HOLD_REVERSED'
        | 'PORTAL_ACTIVATED'
        | 'PORTAL_PASSWORD_RESET'
        | 'END_OF_DAY_PROCESSING_COMPLETED'
        | 'DATA_ACCESS_STATE_CHANGED'
        | 'CREDIT_ARRANGEMENT_CREATED'
        | 'CREDIT_ARRANGEMENT_CLOSED'
        | 'CREDIT_ARRANGEMENT_APPROVED'
        | 'CREDIT_ARRANGEMENT_REJECTED'
        | 'CREDIT_ARRANGEMENT_WITHDRAWN'
        | 'CREDIT_ARRANGEMENT_DELETED'
        | 'CREDIT_ARRANGEMENT_ACCOUNT_ADDED'
        | 'CREDIT_ARRANGEMENT_ACCOUNT_REMOVED'
        | 'CREDIT_ARRANGEMENT_EDITED'
        | 'PAYMENT_ORDER_ACTIVITY'
        | 'COLLECTION_ORDER_ACTIVITY'
        | 'JOURNAL_ENTRY_ADDED'
        | 'JOURNAL_ENTRY_ADJUSTED'
        | 'SAVINGS_TRANSACTION_EDITED'
    /**
     * The failure code if the message failed to send.
     */
    failureCause?: string
    /**
     * The reason for the communication message failure.
     */
    failureReason?:
        | 'MESSAGING_EXCEPTION'
        | 'INVALID_SMTP_CREDENTIALS'
        | 'UNSUPPORTED_ENCODING_EXCEPTION'
        | 'EMAIL_SERVICE_NOT_ENABLED'
        | 'SMS_TOO_LONG'
        | 'SMS_SERVICE_NOT_ENABLED'
        | 'SMS_NOT_SENT'
        | 'SMS_SERVICE_ERROR'
        | 'SMS_CONNECTION_EXCEPTION'
        | 'WEBHOOK_NOTIFICATIONS_DISABLED'
        | 'INVALID_HTTP_RESPONSE'
        | 'HTTP_ERROR_WHILE_SENDING'
        | 'INVALID_JSON_BODY_SYNTAX'
        | 'MISSING_TEMPLATE_KEY'
        | 'UNDEFINED_DESTINATION'
        | 'INVALID_HTTP_PROTOCOL'
        | 'BLACKLISTED_URL'
        | 'INVALID_SMS_GATEWAY_CREDENTIALS'
        | 'MISSING_SMS_RECIPIENT'
        | 'SMS_GATEWAY_ERROR'
        | 'MISSING_EMAIL_RECIPIENT_ADDRESS'
        | 'OTHER'
    /**
     * The group the message was sent to.
     */
    groupKey?: string
    /**
     * The loan account that triggered this message.
     */
    loanAccountKey?: string
    /**
     * The number of retries to send the message.
     */
    numRetries?: number
    /**
     * The reference ID of the communication message, generated by the SMS dispatcher.
     */
    referenceId?: string
    /**
     * The repayment that triggered this message.
     */
    repaymentKey?: string
    /**
     * The date the communication message was sent in UTC.
     */
    sendDate?: string
    /**
     * The encoded key of the sender. If specified, it should be the encoded key of the current user.
     */
    senderKey?: string
    /**
     * The state of the message.
     */
    state?: 'SENT' | 'QUEUED' | 'QUEUED_FOR_STREAM' | 'WAITING' | 'SENDING_ASYNC' | 'FAILED'
    /**
     * The subject of the message.
     */
    subject?: string
    /**
     * The communication message template key.
     */
    templateKey?: string
    /**
     * The type of communication message.
     */
    type?: 'EMAIL' | 'SMS' | 'WEB_HOOK' | 'EVENT_STREAM' | 'TASK'
    /**
     * The user the message was sent to.
     */
    userKey?: string
}

export const CommunicationMessage = {
    validate: (await import('./schemas/communication-message.schema.js')).validate as ValidateFunction<CommunicationMessage>,
    get schema() {
        return CommunicationMessage.validate.schema
    },
    get errors() {
        return CommunicationMessage.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessage => CommunicationMessage.validate(o) === true,
    assert: (o: unknown) => {
        if (!CommunicationMessage.validate(o)) {
            throw new ValidationError(CommunicationMessage.errors ?? [])
        }
    },
} as const

/**
 * Represents a list of failed communication messages to resend.
 */
export interface CommunicationMessageAction {
    /**
     * The list of failed communication messages to resend.
     */
    messages: string[]
}

export const CommunicationMessageAction = {
    validate: (await import('./schemas/communication-message-action.schema.js'))
        .validate as ValidateFunction<CommunicationMessageAction>,
    get schema() {
        return CommunicationMessageAction.validate.schema
    },
    get errors() {
        return CommunicationMessageAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessageAction => CommunicationMessageAction.validate(o) === true,
    assert: (o: unknown) => {
        if (!CommunicationMessageAction.validate(o)) {
            throw new ValidationError(CommunicationMessageAction.errors ?? [])
        }
    },
} as const

/**
 * Represents the time interval to resend messages.
 */
export interface CommunicationMessageEnqueueAction {
    /**
     * The upper limit until which created messages will be enqueued.
     */
    endDate: string
    /**
     * The lower limit from which created messages will be enqueued.
     */
    startDate: string
    /**
     * The list of template message types to enqueue.
     */
    templateTypes?: CommunicationMessageEnqueueActionTemplateTypesArray[]
}

export const CommunicationMessageEnqueueAction = {
    validate: (await import('./schemas/communication-message-enqueue-action.schema.js'))
        .validate as ValidateFunction<CommunicationMessageEnqueueAction>,
    get schema() {
        return CommunicationMessageEnqueueAction.validate.schema
    },
    get errors() {
        return CommunicationMessageEnqueueAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessageEnqueueAction => CommunicationMessageEnqueueAction.validate(o) === true,
    assert: (o: unknown) => {
        if (!CommunicationMessageEnqueueAction.validate(o)) {
            throw new ValidationError(CommunicationMessageEnqueueAction.errors ?? [])
        }
    },
} as const

type CommunicationMessageEnqueueActionTemplateTypesArray = 'EMAIL' | 'SMS' | 'WEB_HOOK' | 'EVENT_STREAM' | 'TASK'

/**
 * The unit that composes the list used for communication messages client directed searching
 */
export interface CommunicationMessageFilterCriteria {
    field:
        | 'encodedKey'
        | 'creationDate'
        | 'sendDate'
        | 'senderKey'
        | 'clientKey'
        | 'groupKey'
        | 'userKey'
        | 'state'
        | 'failureReason'
        | 'failureCause'
        | 'destination'
        | 'type'
        | 'event'
        | string
    /**
     * | **Operator**                | **Affected values**  | **Available for**                                                    |
     * |---------------               |----------------------|----------------------------------------------------------------------|
     * | EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |
     * | EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |
     * | MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |
     * | ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | STARTS_WITH                  | ONE_VALUE            | STRING                                                               |
     * | STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |
     * | IN                           | LIST                 | ENUM,KEY                                                             |
     * | TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |
     * | EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     * | NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     */
    operator:
        | 'EQUALS'
        | 'EQUALS_CASE_SENSITIVE'
        | 'DIFFERENT_THAN'
        | 'MORE_THAN'
        | 'LESS_THAN'
        | 'BETWEEN'
        | 'ON'
        | 'AFTER'
        | 'AFTER_INCLUSIVE'
        | 'BEFORE'
        | 'BEFORE_INCLUSIVE'
        | 'STARTS_WITH'
        | 'STARTS_WITH_CASE_SENSITIVE'
        | 'IN'
        | 'TODAY'
        | 'THIS_WEEK'
        | 'THIS_MONTH'
        | 'THIS_YEAR'
        | 'LAST_DAYS'
        | 'EMPTY'
        | 'NOT_EMPTY'
    /**
     * The second value to match the searching criteria, when the `BETWEEN` operator is used.
     */
    secondValue?: string
    /**
     * The value to match the searching criteria.
     */
    value?: string
    /**
     * List of values when the `IN` operator is used.
     */
    values?: string[]
}

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    assert: (o: unknown) => {
        if (!ErrorResponse.validate(o)) {
            throw new ValidationError(ErrorResponse.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}

export type SearchRequest = CommunicationMessageFilterCriteria[]

export const SearchRequest = {
    validate: (await import('./schemas/search-request.schema.js')).validate as ValidateFunction<SearchRequest>,
    get schema() {
        return SearchRequest.validate.schema
    },
    get errors() {
        return SearchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchRequest => SearchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!SearchRequest.validate(o)) {
            throw new ValidationError(SearchRequest.errors ?? [])
        }
    },
} as const

export type SearchResponse = CommunicationMessage[]

export const SearchResponse = {
    validate: (await import('./schemas/search-response.schema.js')).validate as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    get errors() {
        return SearchResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
} as const
