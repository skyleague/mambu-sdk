/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetAllResponse = IndexRateSource[]

export const GetAllResponse = {
    validate: require('./schemas/get-all-response.schema.js') as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: require('./schemas/error-response.schema.js') as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
} as const

/**
 * An index rate source used for dynamic interest rates e.g. EURIBOR
 */
export interface IndexRateSource {
    /**
     * The name of the index rate source
     */
    name?: string
    /**
     * The encoded key of the index rate source, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the index rate source, can be generated and customized, unique
     */
    id?: string
    /**
     * Any custom text to be associated with the index rate source
     */
    notes?: string
    /**
     * The type of this index rate source
     */
    type?: 'INTEREST_RATE' | 'TAX_RATE' | 'WITHHOLDING_TAX_RATE' | 'PRINCIPAL_TAX_RATE'
}

export const IndexRateSource = {
    validate: require('./schemas/index-rate-source.schema.js') as ValidateFunction<IndexRateSource>,
    get schema() {
        return IndexRateSource.validate.schema
    },
    is: (o: unknown): o is IndexRateSource => IndexRateSource.validate(o) === true,
    assert: (o: unknown) => {
        if (!IndexRateSource.validate(o)) {
            throw new AjvValidator.ValidationError(IndexRateSource.validate.errors ?? [])
        }
    },
} as const

export type GetAll1Response = IndexRate[]

export const GetAll1Response = {
    validate: require('./schemas/get-all1-response.schema.js') as ValidateFunction<GetAll1Response>,
    get schema() {
        return GetAll1Response.validate.schema
    },
    is: (o: unknown): o is GetAll1Response => GetAll1Response.validate(o) === true,
} as const

/**
 * An index rate object with a rate and a start date when it becomes valid
 */
export interface IndexRate {
    /**
     * Any custom text to be associated with this index rate
     */
    notes?: string
    /**
     * The percentage value of the index rate
     */
    rate?: number
    /**
     * The interest index rate source to which this rate is associated
     */
    assignedIndexRateSourceKey?: string
    /**
     * The encoded key of the index rate, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the index rate, can be generated and customized, unique
     */
    id?: string
    /**
     * The user key
     */
    userKey?: string
    /**
     * The date when this index rate starts being the active rate for its source
     */
    startDate?: string
}

export const IndexRate = {
    validate: require('./schemas/index-rate.schema.js') as ValidateFunction<IndexRate>,
    get schema() {
        return IndexRate.validate.schema
    },
    is: (o: unknown): o is IndexRate => IndexRate.validate(o) === true,
    assert: (o: unknown) => {
        if (!IndexRate.validate(o)) {
            throw new AjvValidator.ValidationError(IndexRate.validate.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}