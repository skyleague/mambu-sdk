/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Represents details of the Background Process
 */
export interface BackgroundProcess {
    /**
     * When this process was ended. Stored as Organization Time
     */
    endDate?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The current status of this process
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
    /**
     * The type of the background process
     */
    type?: 'CRON_JOBS' | 'MANUAL_CRON_JOBS_TRIGGER'
    /**
     * When this process was created. Stored as Organization Time
     */
    creationDate?: string
    /**
     * When this process was started. Stored as Organization Time
     */
    startDate?: string
}

export const BackgroundProcess = {
    validate: (await import('./schemas/background-process.schema.js')).validate as ValidateFunction<BackgroundProcess>,
    get schema() {
        return BackgroundProcess.validate.schema
    },
    get errors() {
        return BackgroundProcess.validate.errors ?? undefined
    },
    is: (o: unknown): o is BackgroundProcess => BackgroundProcess.validate(o) === true,
    assert: (o: unknown) => {
        if (!BackgroundProcess.validate(o)) {
            throw new ValidationError(BackgroundProcess.errors ?? [])
        }
    },
} as const

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
    errorSource?: string
    errorReason?: string
}
