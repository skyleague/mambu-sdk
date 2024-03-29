/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Describes the application status regarding the data access
 */
export interface ApplicationStatus {
    dataAccessState?: 'READ_ONLY_STATE' | 'WRITE_READ_STATE'
}

export const ApplicationStatus = {
    validate: (await import('./schemas/application-status.schema.js')).validate as ValidateFunction<ApplicationStatus>,
    get schema() {
        return ApplicationStatus.validate.schema
    },
    get errors() {
        return ApplicationStatus.validate.errors ?? undefined
    },
    is: (o: unknown): o is ApplicationStatus => ApplicationStatus.validate(o) === true,
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
    errorReason?: string
    errorSource?: string
}
