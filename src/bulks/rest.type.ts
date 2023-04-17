/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Holds information about the status of a bulk process
 */
export interface BulkProcessStatus {
    /**
     * List of errors
     */
    errors?: BulkProcessingError[]
    /**
     * List of successful processed items
     */
    processedItems?: BulkProcessingSuccess[]
    /**
     * Bulk process status
     */
    status?:
        | 'QUEUED'
        | 'IN_PROGRESS'
        | 'COMPLETE'
        | 'NOT_FOUND'
        | 'CANCEL'
        | 'TO_BE_CANCELED'
        | 'TIMED_OUT'
        | 'ERROR'
        | 'TRANSIENT_ERROR'
        | 'OVERRIDDEN'
}

export const BulkProcessStatus = {
    validate: (await import('./schemas/bulk-process-status.schema.js'))
        .validate10 as unknown as ValidateFunction<BulkProcessStatus>,
    get schema() {
        return BulkProcessStatus.validate.schema
    },
    get errors() {
        return BulkProcessStatus.validate.errors ?? undefined
    },
    is: (o: unknown): o is BulkProcessStatus => BulkProcessStatus.validate(o) === true,
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
 * Holds information about the error encountered processing an item in bulk
 */
export interface BulkProcessingError {
    /**
     * Optional field populated only when request payload contains an externalId
     */
    externalId?: string
    /**
     * Numeric value associated to the error reason
     */
    errorCode?: number
    /**
     * The index of the entity/item from bulk request that failed on processing
     */
    indexInRequest?: number
    /**
     * Details about the error
     */
    errorSource?: string
    /**
     * Error reason
     */
    errorReason?: string
}

/**
 * Holds details about successful processed item
 */
export interface BulkProcessingSuccess {
    /**
     * Optional field populated only when request payload contains an externalId
     */
    externalId?: string
    /**
     * Unique identifier for the newly created resource
     */
    id?: string
    /**
     * The index of the entity/item from bulk request that failed on processing
     */
    indexInRequest?: number
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}