/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetAllResponseValidator } from './schemas/get-all-response.schema.js'
import { validate as TransactionChannelValidator } from './schemas/transaction-channel.schema.js'

/**
 * The constraints applied to the transaction channel
 */
export interface Constraint {
    /**
     * Holds the custom constraints, only for the limited usage case. For the unconstrainedcase, no constraints are applied
     */
    constraints?: TransactionChannelConstraint[] | undefined
    /**
     * Holds the match filter option for the constraints. It can be ALL so all the constraints must match, or ANY so at least one must match
     */
    matchFiltersOption?: 'ALL' | 'ANY' | undefined
    /**
     * States the limited/unconstrained usage of the transaction channel
     */
    usage?: 'UNCONSTRAINED' | 'LIMITED' | undefined
}

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

export type GetAllResponse = TransactionChannel[]

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

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

/**
 * Represents a transaction channel.
 */
export interface TransactionChannel {
    /**
     * `TRUE` if the transaction channel is available for all users, `FALSE` otherwise.
     */
    availableForAll?: boolean | undefined
    depositConstraints: Constraint
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string | undefined
    /**
     * The general ledger (GL) account associated with the transaction channel.
     */
    glAccount?: string | undefined
    /**
     * The ID of the transaction channel.
     */
    id: string
    /**
     * `TRUE` if the transaction channel is set as the default, `FALSE` otherwise.
     */
    isDefault?: boolean | undefined
    loanConstraints: Constraint
    /**
     * The name of the transaction channel.
     */
    name: string
    /**
     * The state of the transaction channel.
     */
    state?: 'ACTIVE' | 'INACTIVE' | undefined
    /**
     * The usage rights that describe the transaction channel.
     */
    usageRights?: string[] | undefined
}

export const TransactionChannel = {
    validate: TransactionChannelValidator as ValidateFunction<TransactionChannel>,
    get schema() {
        return TransactionChannel.validate.schema
    },
    get errors() {
        return TransactionChannel.validate.errors ?? undefined
    },
    is: (o: unknown): o is TransactionChannel => TransactionChannel.validate(o) === true,
    parse: (o: unknown): { right: TransactionChannel } | { left: DefinedError[] } => {
        if (TransactionChannel.is(o)) {
            return { right: o }
        }
        return { left: (TransactionChannel.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * The constraints applied on the transaction channel
 */
export interface TransactionChannelConstraint {
    /**
     * Defines the criteria on which the constraint is applied
     */
    criteria: 'AMOUNT' | 'TYPE' | 'PRODUCT'
    /**
     * Defines the constraint operator. Example: in 'Amount Equals 100' it is the 'Equals'
     */
    operator: 'EQUALS' | 'EMPTY' | 'NOT_EMPTY' | 'MORE_THAN' | 'LESS_THAN' | 'BETWEEN' | 'IN'
    /**
     * The second filtering value of the filter parameter (constraint). It might not exist. Example: it represents '500' from 'Amount Between 100 and 500'
     */
    secondValue?: string | undefined
    /**
     * The first filtering value of the filter constraint. Example: it represents 'Disbursement' from 'Type equals Disbursement' and it also represents 100 from 'Amount Between 100 and 500'
     */
    value?: string | undefined
    /**
     * Filtering values used for the Product and Type criteria, where filtering might be applied on one or more values
     */
    values?: string[] | undefined
}
