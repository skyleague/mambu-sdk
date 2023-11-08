/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

export type GetAllResponse = CurrencyDetails[]

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
 * Represents a currency.
 */
export interface CurrencyDetails {
    /**
     * The currency symbol.
     */
    symbol: string
    /**
     * The currency code, which cannot be changed once the currency is created.
     */
    code: string
    /**
     * The number of digits that are supported for a given currency.
     */
    digitsAfterDecimal?: number
    /**
     * The last date this currency was modified. It's updated automatically and it's a read-only field not required for update operations.
     */
    lastModifiedDate?: string
    /**
     * The currency symbol position.
     */
    currencySymbolPosition: 'BEFORE_NUMBER' | 'AFTER_NUMBER'
    /**
     * The name of the currency.
     */
    name: string
    /**
     * The type of the currency.
     */
    type: 'FIAT_CURRENCY' | 'CRYPTOCURRENCY' | 'NON_TRADITIONAL_CURRENCY'
    /**
     * The date this currency was created. It cannot be changed and it's a read-only field not required for update operations.
     */
    creationDate?: string
    /**
     * `TRUE` if the currency is the base currency, `FALSE` otherwise. It cannot be changed and it's a read-only field not required for update operations.
     */
    baseCurrency: boolean
    /**
     * The currency numeric code.
     */
    numericCode?: string
}

export const CurrencyDetails = {
    validate: (await import('./schemas/currency-details.schema.js')).validate as ValidateFunction<CurrencyDetails>,
    get schema() {
        return CurrencyDetails.validate.schema
    },
    get errors() {
        return CurrencyDetails.validate.errors ?? undefined
    },
    is: (o: unknown): o is CurrencyDetails => CurrencyDetails.validate(o) === true,
    assert: (o: unknown) => {
        if (!CurrencyDetails.validate(o)) {
            throw new ValidationError(CurrencyDetails.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
