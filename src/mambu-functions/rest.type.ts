/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

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

export type GetAllResponse = MambuFunction[]

export const GetAllResponse = {
    validate: (await import('./schemas/get-all-response.schema.js')).validate as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

export type GetLogsResponse = MFunctionLogs[]

export const GetLogsResponse = {
    validate: (await import('./schemas/get-logs-response.schema.js')).validate as ValidateFunction<GetLogsResponse>,
    get schema() {
        return GetLogsResponse.validate.schema
    },
    get errors() {
        return GetLogsResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetLogsResponse => GetLogsResponse.validate(o) === true,
} as const

export type ListFunctionSubscriptionsResponse = MambuFunctionSubscriptionListItem[]

export const ListFunctionSubscriptionsResponse = {
    validate: (await import('./schemas/list-function-subscriptions-response.schema.js'))
        .validate as ValidateFunction<ListFunctionSubscriptionsResponse>,
    get schema() {
        return ListFunctionSubscriptionsResponse.validate.schema
    },
    get errors() {
        return ListFunctionSubscriptionsResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ListFunctionSubscriptionsResponse => ListFunctionSubscriptionsResponse.validate(o) === true,
} as const

/**
 * Mambu Function information.
 */
export interface MambuFunction {
    /**
     * The id of the extension point
     */
    extensionPointId?: string
    /**
     * The last date the Mambu function was updated (as UTC)
     */
    lastModifiedDate?: string
    /**
     * Mambu function name
     */
    name?: string
    /**
     * Mambu function state
     */
    state?: string
    /**
     * Mambu function version
     */
    version?: string
}

export const MambuFunction = {
    validate: (await import('./schemas/mambu-function.schema.js')).validate as ValidateFunction<MambuFunction>,
    get schema() {
        return MambuFunction.validate.schema
    },
    get errors() {
        return MambuFunction.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunction => MambuFunction.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunction.validate(o)) {
            throw new ValidationError(MambuFunction.errors ?? [])
        }
    },
} as const

/**
 * Represents a Mambu function code
 */
export interface MambuFunctionCode {
    /**
     * Mambu function code (as Base64)
     */
    code?: string
    /**
     * Mambu function programming language
     */
    languageId?: 'es2020'
}

/**
 * Mambu Function create data.
 */
export interface MambuFunctionCreate {
    /**
     * The id of the extension point
     */
    extensionPointId?: string
    functionCode?: MambuFunctionCode
    /**
     * Mambu function name
     */
    name?: string
    /**
     * Mambu function version
     */
    version?: string
}

export const MambuFunctionCreate = {
    validate: (await import('./schemas/mambu-function-create.schema.js')).validate as ValidateFunction<MambuFunctionCreate>,
    get schema() {
        return MambuFunctionCreate.validate.schema
    },
    get errors() {
        return MambuFunctionCreate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionCreate => MambuFunctionCreate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionCreate.validate(o)) {
            throw new ValidationError(MambuFunctionCreate.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function Subscription information.
 */
export interface MambuFunctionSubscription {
    /**
     * subscription batch size, define the maximum number of records in each batch that subscription pulls from your stream
     */
    batchSize?: number
    /**
     * subscription batch window in seconds, define the maximum time range subscription pulls from your stream
     */
    batchWindow?: number
    /**
     * Mambu function subscription name
     */
    name?: string
    /**
     * Mambu function subscription state
     */
    state?: string
    /**
     * subscription topic name, source of stream for the subscription
     */
    topicName?: string
}

export const MambuFunctionSubscription = {
    validate: (await import('./schemas/mambu-function-subscription.schema.js'))
        .validate as ValidateFunction<MambuFunctionSubscription>,
    get schema() {
        return MambuFunctionSubscription.validate.schema
    },
    get errors() {
        return MambuFunctionSubscription.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionSubscription => MambuFunctionSubscription.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionSubscription.validate(o)) {
            throw new ValidationError(MambuFunctionSubscription.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function Subscription create data.
 */
export interface MambuFunctionSubscriptionCreate {
    /**
     * subscription batch size, define the maximum number of records in each batch that subscription pulls from your stream
     */
    batchSize?: number
    /**
     * subscription batch window in seconds, define the maximum time range subscription pulls from your stream
     */
    batchWindow?: number
    /**
     * Mambu function subscription name
     */
    name?: string
    /**
     * subscription topic name, source of stream for the subscription
     */
    topicName?: string
}

export const MambuFunctionSubscriptionCreate = {
    validate: (await import('./schemas/mambu-function-subscription-create.schema.js'))
        .validate as ValidateFunction<MambuFunctionSubscriptionCreate>,
    get schema() {
        return MambuFunctionSubscriptionCreate.validate.schema
    },
    get errors() {
        return MambuFunctionSubscriptionCreate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionSubscriptionCreate => MambuFunctionSubscriptionCreate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionSubscriptionCreate.validate(o)) {
            throw new ValidationError(MambuFunctionSubscriptionCreate.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function Subscription list item for list of subscriptions.
 */
export interface MambuFunctionSubscriptionListItem {
    /**
     * Mambu function subscription name
     */
    name?: string
}

/**
 * Mambu Function Subscription update data.
 */
export interface MambuFunctionSubscriptionUpdate {
    /**
     * subscription batch size, define the maximum number of records in each batch that subscription pulls from your stream
     */
    batchSize?: number
    /**
     * subscription batch window in seconds, define the maximum time range subscription pulls from your stream
     */
    batchWindow?: number
}

export const MambuFunctionSubscriptionUpdate = {
    validate: (await import('./schemas/mambu-function-subscription-update.schema.js'))
        .validate as ValidateFunction<MambuFunctionSubscriptionUpdate>,
    get schema() {
        return MambuFunctionSubscriptionUpdate.validate.schema
    },
    get errors() {
        return MambuFunctionSubscriptionUpdate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionSubscriptionUpdate => MambuFunctionSubscriptionUpdate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionSubscriptionUpdate.validate(o)) {
            throw new ValidationError(MambuFunctionSubscriptionUpdate.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function update data.
 */
export interface MambuFunctionUpdate {
    functionCode?: MambuFunctionCode
    /**
     * Mambu function version
     */
    version?: string
}

export const MambuFunctionUpdate = {
    validate: (await import('./schemas/mambu-function-update.schema.js')).validate as ValidateFunction<MambuFunctionUpdate>,
    get schema() {
        return MambuFunctionUpdate.validate.schema
    },
    get errors() {
        return MambuFunctionUpdate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionUpdate => MambuFunctionUpdate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionUpdate.validate(o)) {
            throw new ValidationError(MambuFunctionUpdate.errors ?? [])
        }
    },
} as const

/**
 * Represents a Mambu function log
 */
export interface MFunctionLog {
    /**
     * Mambu function log level
     */
    logLevel?: number
    /**
     * Mambu function message
     */
    message?: string
    /**
     * The ID of the specific request to the function
     */
    requestId?: string
    /**
     * Mambu function log time
     */
    time?: number
}

/**
 * Represents a Mambu function logs list
 */
export interface MFunctionLogs {
    logs?: MFunctionLog[]
}

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
