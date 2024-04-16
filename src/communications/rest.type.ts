/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as CommunicationMessageActionValidator } from './schemas/communication-message-action.schema.js'
import { validate as CommunicationMessageEnqueueActionValidator } from './schemas/communication-message-enqueue-action.schema.js'
import { validate as CommunicationMessageValidator } from './schemas/communication-message.schema.js'
import { validate as CommunicationMessagesSearchSortCriteriaValidator } from './schemas/communication-messages-search-sort-criteria.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as SearchRequestValidator } from './schemas/search-request.schema.js'
import { validate as SearchResponseValidator } from './schemas/search-response.schema.js'
import { validate as Search1ResponseValidator } from './schemas/search1-response.schema.js'

/**
 * Represents a communication message.
 */
export interface CommunicationMessage {
    /**
     * The contents of the message.
     */
    body?: string | undefined
    /**
     * The client the message was sent to.
     */
    clientKey?: string | undefined
    /**
     * The date the communication message was created in UTC.
     */
    creationDate?: string | undefined
    /**
     * The deposit account that triggered this message.
     */
    depositAccountKey?: string | undefined
    /**
     * The destination (phone number or email address) this message was sent to.
     */
    destination?: string | undefined
    /**
     * The encoded key of the communication message, which is generated automatically, and must be unique.
     */
    encodedKey?: string | undefined
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
        | 'REAPPLIED_SAVINGS_DEPOSIT'
        | 'SAVINGS_APPROVAL'
        | 'SAVINGS_ACCOUNT_ACTIVATED'
        | 'SAVINGS_ACCOUNT_CLOSURE'
        | 'SAVINGS_ACCOUNT_REJECTION'
        | 'SAVINGS_WITHDRAWAL'
        | 'SAVINGS_WITHDRAWAL_REVERSAL'
        | 'REAPPLIED_SAVINGS_WITHDRAWAL'
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
        | 'CARD_WITHDRAWAL_REVERSAL'
        | 'CARD_DEPOSIT_REVERSAL'
        | undefined
    /**
     * The failure code if the message failed to send.
     */
    failureCause?: string | undefined
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
        | 'MAX_MESSAGE_SIZE_LIMIT_EXCEEDED'
        | 'UNDEFINED_DESTINATION'
        | 'INVALID_HTTP_PROTOCOL'
        | 'BLACKLISTED_URL'
        | 'INVALID_SMS_GATEWAY_CREDENTIALS'
        | 'MISSING_SMS_RECIPIENT'
        | 'SMS_GATEWAY_ERROR'
        | 'MISSING_EMAIL_RECIPIENT_ADDRESS'
        | 'OTHER'
        | undefined
    /**
     * The group the message was sent to.
     */
    groupKey?: string | undefined
    /**
     * The loan account that triggered this message.
     */
    loanAccountKey?: string | undefined
    /**
     * The number of retries to send the message.
     */
    numRetries?: number | undefined
    /**
     * The reference ID of the communication message, generated by the SMS dispatcher.
     */
    referenceId?: string | undefined
    /**
     * The repayment that triggered this message.
     */
    repaymentKey?: string | undefined
    /**
     * The date the communication message was sent in UTC.
     */
    sendDate?: string | undefined
    /**
     * The encoded key of the sender. If specified, it should be the encoded key of the current user.
     */
    senderKey?: string | undefined
    /**
     * The state of the message.
     */
    state?: 'SENT' | 'QUEUED' | 'QUEUED_FOR_STREAM' | 'WAITING' | 'SENDING_ASYNC' | 'FAILED' | undefined
    /**
     * The subject of the message.
     */
    subject?: string | undefined
    /**
     * The communication message template key.
     */
    templateKey?: string | undefined
    /**
     * The type of communication message.
     */
    type?: 'EMAIL' | 'SMS' | 'WEB_HOOK' | 'EVENT_STREAM' | 'TASK' | undefined
    /**
     * The user the message was sent to.
     */
    userKey?: string | undefined
}

export const CommunicationMessage = {
    validate: CommunicationMessageValidator as ValidateFunction<CommunicationMessage>,
    get schema() {
        return CommunicationMessage.validate.schema
    },
    get errors() {
        return CommunicationMessage.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessage => CommunicationMessage.validate(o) === true,
    parse: (o: unknown): { right: CommunicationMessage } | { left: DefinedError[] } => {
        if (CommunicationMessage.is(o)) {
            return { right: o }
        }
        return { left: (CommunicationMessage.errors ?? []) as DefinedError[] }
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
    validate: CommunicationMessageActionValidator as ValidateFunction<CommunicationMessageAction>,
    get schema() {
        return CommunicationMessageAction.validate.schema
    },
    get errors() {
        return CommunicationMessageAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessageAction => CommunicationMessageAction.validate(o) === true,
    parse: (o: unknown): { right: CommunicationMessageAction } | { left: DefinedError[] } => {
        if (CommunicationMessageAction.is(o)) {
            return { right: o }
        }
        return { left: (CommunicationMessageAction.errors ?? []) as DefinedError[] }
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
    templateTypes?: TemplateTypes[] | undefined
}

export const CommunicationMessageEnqueueAction = {
    validate: CommunicationMessageEnqueueActionValidator as ValidateFunction<CommunicationMessageEnqueueAction>,
    get schema() {
        return CommunicationMessageEnqueueAction.validate.schema
    },
    get errors() {
        return CommunicationMessageEnqueueAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessageEnqueueAction => CommunicationMessageEnqueueAction.validate(o) === true,
    parse: (o: unknown): { right: CommunicationMessageEnqueueAction } | { left: DefinedError[] } => {
        if (CommunicationMessageEnqueueAction.is(o)) {
            return { right: o }
        }
        return { left: (CommunicationMessageEnqueueAction.errors ?? []) as DefinedError[] }
    },
} as const

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
    secondValue?: string | undefined
    /**
     * The value to match the searching criteria.
     */
    value?: string | undefined
    /**
     * List of values when the `IN` operator is used.
     */
    values?: string[] | undefined
}

/**
 * The sorting criteria used for Messages search.
 */
export interface CommunicationMessageSearchSortingCriteria {
    /**
     * Sort Messages By
     */
    field: 'encodedKey' | 'creationDate' | 'sendDate' | 'senderKey' | 'clientKey' | 'groupKey' | 'userKey' | 'type'
    /**
     * The sorting order: `ASC` or `DESC`. The default order is `DESC`.
     */
    order?: 'ASC' | 'DESC' | undefined
}

/**
 * The unit that composes the body used used for communication messages client directed searching.
 */
export interface CommunicationMessagesSearchSortCriteria {
    /**
     * The list of filtering criteria.
     */
    filterCriteria: CommunicationMessageFilterCriteria[]
    sortingCriteria: CommunicationMessageSearchSortingCriteria
}

export const CommunicationMessagesSearchSortCriteria = {
    validate: CommunicationMessagesSearchSortCriteriaValidator as ValidateFunction<CommunicationMessagesSearchSortCriteria>,
    get schema() {
        return CommunicationMessagesSearchSortCriteria.validate.schema
    },
    get errors() {
        return CommunicationMessagesSearchSortCriteria.validate.errors ?? undefined
    },
    is: (o: unknown): o is CommunicationMessagesSearchSortCriteria =>
        CommunicationMessagesSearchSortCriteria.validate(o) === true,
    parse: (o: unknown): { right: CommunicationMessagesSearchSortCriteria } | { left: DefinedError[] } => {
        if (CommunicationMessagesSearchSortCriteria.is(o)) {
            return { right: o }
        }
        return { left: (CommunicationMessagesSearchSortCriteria.errors ?? []) as DefinedError[] }
    },
} as const

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

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

export type Search1Response = CommunicationMessage[]

export const Search1Response = {
    validate: Search1ResponseValidator as ValidateFunction<Search1Response>,
    get schema() {
        return Search1Response.validate.schema
    },
    get errors() {
        return Search1Response.validate.errors ?? undefined
    },
    is: (o: unknown): o is Search1Response => Search1Response.validate(o) === true,
    parse: (o: unknown): { right: Search1Response } | { left: DefinedError[] } => {
        if (Search1Response.is(o)) {
            return { right: o }
        }
        return { left: (Search1Response.errors ?? []) as DefinedError[] }
    },
} as const

export type SearchRequest = CommunicationMessageFilterCriteria[]

export const SearchRequest = {
    validate: SearchRequestValidator as ValidateFunction<SearchRequest>,
    get schema() {
        return SearchRequest.validate.schema
    },
    get errors() {
        return SearchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchRequest => SearchRequest.validate(o) === true,
    parse: (o: unknown): { right: SearchRequest } | { left: DefinedError[] } => {
        if (SearchRequest.is(o)) {
            return { right: o }
        }
        return { left: (SearchRequest.errors ?? []) as DefinedError[] }
    },
} as const

export type SearchResponse = CommunicationMessage[]

export const SearchResponse = {
    validate: SearchResponseValidator as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    get errors() {
        return SearchResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
    parse: (o: unknown): { right: SearchResponse } | { left: DefinedError[] } => {
        if (SearchResponse.is(o)) {
            return { right: o }
        }
        return { left: (SearchResponse.errors ?? []) as DefinedError[] }
    },
} as const

type TemplateTypes = 'EMAIL' | 'SMS' | 'WEB_HOOK' | 'EVENT_STREAM' | 'TASK'
