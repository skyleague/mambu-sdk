/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as ExchangeRateInputValidator } from './schemas/exchange-rate-input.schema.js'
import { validate as ExchangeRateValidator } from './schemas/exchange-rate.schema.js'
import { validate as GetAllResponseValidator } from './schemas/get-all-response.schema.js'

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

export interface ErrorResponse {
    errors?: RestError[] | undefined
}

export const ExchangeRate = {
    validate: ExchangeRateValidator as ValidateFunction<ExchangeRate>,
    get schema() {
        return ExchangeRate.validate.schema
    },
    get errors() {
        return ExchangeRate.validate.errors ?? undefined
    },
    is: (o: unknown): o is ExchangeRate => ExchangeRate.validate(o) === true,
    parse: (o: unknown): { right: ExchangeRate } | { left: DefinedError[] } => {
        if (ExchangeRate.is(o)) {
            return { right: o }
        }
        return { left: (ExchangeRate.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Model representation of an exchange rates.
 */
export interface ExchangeRate {
    /**
     * The buy exchange rate.
     */
    buyRate?: number | undefined
    /**
     * The exchange rate applies starting with this date.
     */
    endDate?: string | undefined
    /**
     * Organisation currency code
     */
    fromCurrencyCode?: string | undefined
    /**
     * The sell exchange rate.
     */
    sellRate?: number | undefined
    /**
     * The exchange rate applies starting with this date.
     */
    startDate?: string | undefined
    /**
     * Foreign currency code
     */
    toCurrencyCode?: string | undefined
    /**
     * The key for the user that last modified the exchange rate.
     */
    userKey?: string | undefined
}

export const ExchangeRateInput = {
    validate: ExchangeRateInputValidator as ValidateFunction<ExchangeRateInput>,
    get schema() {
        return ExchangeRateInput.validate.schema
    },
    get errors() {
        return ExchangeRateInput.validate.errors ?? undefined
    },
    is: (o: unknown): o is ExchangeRateInput => ExchangeRateInput.validate(o) === true,
    parse: (o: unknown): { right: ExchangeRateInput } | { left: DefinedError[] } => {
        if (ExchangeRateInput.is(o)) {
            return { right: o }
        }
        return { left: (ExchangeRateInput.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Model representation of an exchange rate inputs for filtering.
 */
export interface ExchangeRateInput {
    /**
     * The buy exchange rate.
     */
    buyRate: number
    /**
     * The sell exchange rate.
     */
    sellRate: number
    /**
     * The exchange rate applies starting with this date.
     */
    startDate?: string | undefined
}

export const GetAllResponse = {
    validate: GetAllResponseValidator as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
    parse: (o: unknown): { right: GetAllResponse } | { left: DefinedError[] } => {
        if (GetAllResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetAllResponse.errors ?? []) as DefinedError[] }
    },
} as const

export type GetAllResponse = ExchangeRate[]

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}
