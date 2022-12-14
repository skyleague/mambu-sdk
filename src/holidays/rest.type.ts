/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

type HolidaysNonWorkingDaysArray = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

/**
 * Represents the holidays of the organization.
 */
export interface Holidays {
    /**
     * The general holidays of the organization.
     */
    holidays?: Holiday[]
    /**
     * The non working days of the organization.
     */
    nonWorkingDays?: HolidaysNonWorkingDaysArray[]
}

export const Holidays = {
    validate: require('./schemas/holidays.schema.js') as ValidateFunction<Holidays>,
    get schema() {
        return Holidays.validate.schema
    },
    get errors() {
        return Holidays.validate.errors ?? undefined
    },
    is: (o: unknown): o is Holidays => Holidays.validate(o) === true,
    assert: (o: unknown) => {
        if (!Holidays.validate(o)) {
            throw new AjvValidator.ValidationError(Holidays.errors ?? [])
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

/**
 * Holiday Date Transfer Object
 */
export interface Holiday {
    /**
     * holiday date
     */
    date?: string
    /**
     * if is annually recurring
     */
    isAnnuallyRecurring?: boolean
    /**
     * holiday name
     */
    name?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * holiday id
     */
    id?: number
    /**
     * holiday creation date
     */
    creationDate?: string
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
