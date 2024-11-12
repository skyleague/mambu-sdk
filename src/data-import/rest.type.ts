/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as DataImportActionValidator } from './schemas/data-import-action.schema.js'
import { validate as DataImportRequestValidator } from './schemas/data-import-request.schema.js'
import { validate as DataImportResponseValidator } from './schemas/data-import-response.schema.js'
import { validate as DataImportStatusValidator } from './schemas/data-import-status.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'

/**
 * Holds information about the data import action
 */
export interface DataImportAction {
    /**
     * Type of the data import action
     */
    type: 'APPROVE' | 'REJECT'
}

export const DataImportAction = {
    validate: DataImportActionValidator as ValidateFunction<DataImportAction>,
    get schema() {
        return DataImportAction.validate.schema
    },
    get errors() {
        return DataImportAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is DataImportAction => DataImportAction.validate(o) === true,
    parse: (o: unknown): { right: DataImportAction } | { left: DefinedError[] } => {
        if (DataImportAction.is(o)) {
            return { right: o }
        }
        return { left: (DataImportAction.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Holds information about the data import error
 */
export interface DataImportError {
    column?: DataImportErrorColumn | undefined
    /**
     * Error message
     */
    errorMessage?: string | undefined
    /**
     * Row index
     */
    row?: number | undefined
    /**
     * Sheet name
     */
    sheet?: string | undefined
}

/**
 * Holds basic information for an error column: the index and the corresponding name
 */
export interface DataImportErrorColumn {
    /**
     * Column index
     */
    index?: number | undefined
    /**
     * Column name
     */
    name?: string | undefined
}

export interface DataImportRequest {
    /**
     * The file to import
     */
    file: string
}

export const DataImportRequest = {
    validate: DataImportRequestValidator as ValidateFunction<DataImportRequest>,
    get schema() {
        return DataImportRequest.validate.schema
    },
    get errors() {
        return DataImportRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is DataImportRequest => DataImportRequest.validate(o) === true,
    parse: (o: unknown): { right: DataImportRequest } | { left: DefinedError[] } => {
        if (DataImportRequest.is(o)) {
            return { right: o }
        }
        return { left: (DataImportRequest.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Holds information about the response of the data import action
 */
export interface DataImportResponse {
    /**
     * Import key
     */
    importKey?: string | undefined
    /**
     * Background process state
     */
    state?:
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
        | 'RECOVERABLE_ERROR'
        | undefined
}

export const DataImportResponse = {
    validate: DataImportResponseValidator as ValidateFunction<DataImportResponse>,
    get schema() {
        return DataImportResponse.validate.schema
    },
    get errors() {
        return DataImportResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is DataImportResponse => DataImportResponse.validate(o) === true,
    parse: (o: unknown): { right: DataImportResponse } | { left: DefinedError[] } => {
        if (DataImportResponse.is(o)) {
            return { right: o }
        }
        return { left: (DataImportResponse.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Holds information about the data import status
 */
export interface DataImportStatus {
    /**
     * List of errors
     */
    errors?: DataImportError[] | undefined
    /**
     * Event key
     */
    eventKey?: string | undefined
    /**
     * Background process state
     */
    state?:
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
        | 'RECOVERABLE_ERROR'
        | undefined
}

export const DataImportStatus = {
    validate: DataImportStatusValidator as ValidateFunction<DataImportStatus>,
    get schema() {
        return DataImportStatus.validate.schema
    },
    get errors() {
        return DataImportStatus.validate.errors ?? undefined
    },
    is: (o: unknown): o is DataImportStatus => DataImportStatus.validate(o) === true,
    parse: (o: unknown): { right: DataImportStatus } | { left: DefinedError[] } => {
        if (DataImportStatus.is(o)) {
            return { right: o }
        }
        return { left: (DataImportStatus.errors ?? []) as DefinedError[] }
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
