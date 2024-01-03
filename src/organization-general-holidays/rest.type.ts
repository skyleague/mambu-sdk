/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

export type CreateRequest = Holiday[]

export const CreateRequest = {
    validate: (await import('./schemas/create-request.schema.js')).validate as ValidateFunction<CreateRequest>,
    get schema() {
        return CreateRequest.validate.schema
    },
    get errors() {
        return CreateRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is CreateRequest => CreateRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!CreateRequest.validate(o)) {
            throw new ValidationError(CreateRequest.errors ?? [])
        }
    },
} as const

export type CreateResponse = Holiday[]

export const CreateResponse = {
    validate: (await import('./schemas/create-response.schema.js')).validate as ValidateFunction<CreateResponse>,
    get schema() {
        return CreateResponse.validate.schema
    },
    get errors() {
        return CreateResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is CreateResponse => CreateResponse.validate(o) === true,
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

/**
 * Represents the holiday.
 */
export interface Holiday {
    /**
     * The date when the holiday was created.
     */
    creationDate?: string
    /**
     * The date the holiday takes place.
     */
    date?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The ID of the holiday.
     */
    id?: number
    /**
     * `TRUE` if a holiday is annually recurring, `FALSE` otherwise.
     */
    isAnnuallyRecurring?: boolean
    /**
     * The name of the holiday.
     */
    name?: string
}

export const Holiday = {
    validate: (await import('./schemas/holiday.schema.js')).validate as ValidateFunction<Holiday>,
    get schema() {
        return Holiday.validate.schema
    },
    get errors() {
        return Holiday.validate.errors ?? undefined
    },
    is: (o: unknown): o is Holiday => Holiday.validate(o) === true,
} as const

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
