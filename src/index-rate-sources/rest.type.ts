/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetAllIndexRateSourcesResponseValidator } from './schemas/get-all-index-rate-sources-response.schema.js'
import { validate as GetAllIndexRatesResponseValidator } from './schemas/get-all-index-rates-response.schema.js'
import { validate as IndexRateSourceValidator } from './schemas/index-rate-source.schema.js'
import { validate as IndexRateValidator } from './schemas/index-rate.schema.js'

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

export const GetAllIndexRateSourcesResponse = {
    validate: GetAllIndexRateSourcesResponseValidator as ValidateFunction<GetAllIndexRateSourcesResponse>,
    get schema() {
        return GetAllIndexRateSourcesResponse.validate.schema
    },
    get errors() {
        return GetAllIndexRateSourcesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllIndexRateSourcesResponse => GetAllIndexRateSourcesResponse.validate(o) === true,
    parse: (o: unknown): { right: GetAllIndexRateSourcesResponse } | { left: DefinedError[] } => {
        if (GetAllIndexRateSourcesResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetAllIndexRateSourcesResponse.errors ?? []) as DefinedError[] }
    },
} as const

export type GetAllIndexRateSourcesResponse = IndexRateSource[]

export const GetAllIndexRatesResponse = {
    validate: GetAllIndexRatesResponseValidator as ValidateFunction<GetAllIndexRatesResponse>,
    get schema() {
        return GetAllIndexRatesResponse.validate.schema
    },
    get errors() {
        return GetAllIndexRatesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllIndexRatesResponse => GetAllIndexRatesResponse.validate(o) === true,
    parse: (o: unknown): { right: GetAllIndexRatesResponse } | { left: DefinedError[] } => {
        if (GetAllIndexRatesResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetAllIndexRatesResponse.errors ?? []) as DefinedError[] }
    },
} as const

export type GetAllIndexRatesResponse = IndexRate[]

export const IndexRate = {
    validate: IndexRateValidator as ValidateFunction<IndexRate>,
    get schema() {
        return IndexRate.validate.schema
    },
    get errors() {
        return IndexRate.validate.errors ?? undefined
    },
    is: (o: unknown): o is IndexRate => IndexRate.validate(o) === true,
    parse: (o: unknown): { right: IndexRate } | { left: DefinedError[] } => {
        if (IndexRate.is(o)) {
            return { right: o }
        }
        return { left: (IndexRate.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Represents an index rate.
 */
export interface IndexRate {
    /**
     * The index rate source that the index rate belongs to.
     */
    assignedIndexRateSourceKey?: string | undefined
    /**
     * The encoded key of the index rate, which is auto generated, and unique.
     */
    encodedKey?: string | undefined
    /**
     * The ID of the index rate, which can be generated and customized, and must be unique.
     */
    id?: string | undefined
    /**
     * The notes or description attached to this object.
     */
    notes?: string | undefined
    /**
     * The percentage value of the index rate.
     */
    rate?: number | undefined
    /**
     * The date when the index rate starts being the active rate for its source.
     */
    startDate?: string | undefined
    /**
     * The key for the user that last modified the index rate.
     */
    userKey?: string | undefined
}

export const IndexRateSource = {
    validate: IndexRateSourceValidator as ValidateFunction<IndexRateSource>,
    get schema() {
        return IndexRateSource.validate.schema
    },
    get errors() {
        return IndexRateSource.validate.errors ?? undefined
    },
    is: (o: unknown): o is IndexRateSource => IndexRateSource.validate(o) === true,
    parse: (o: unknown): { right: IndexRateSource } | { left: DefinedError[] } => {
        if (IndexRateSource.is(o)) {
            return { right: o }
        }
        return { left: (IndexRateSource.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Represents an index rate source.
 */
export interface IndexRateSource {
    /**
     * The creation date of the index rate source
     */
    creationDate?: string | undefined
    /**
     * The encoded key of the index rate source, which is auto generated, and unique.
     */
    encodedKey?: string | undefined
    /**
     * The ID of the index rate source, which can be generated and customized, and must be unique.
     */
    id?: string | undefined
    /**
     * The last date this rate source was modified
     */
    lastModifiedDate?: string | undefined
    /**
     * The name of the index rate source.
     */
    name?: string | undefined
    /**
     * The notes about the the index rate source.
     */
    notes?: string | undefined
    /**
     * The type of index rate source.
     */
    type?: 'INTEREST_RATE' | 'TAX_RATE' | 'WITHHOLDING_TAX_RATE' | 'PRINCIPAL_TAX_RATE' | undefined
}

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}
