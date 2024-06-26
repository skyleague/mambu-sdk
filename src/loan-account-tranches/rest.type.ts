/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as EditTranchesRequestValidator } from './schemas/edit-tranches-request.schema.js'
import { validate as EditTranchesResponseValidator } from './schemas/edit-tranches-response.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetTranchesResponseValidator } from './schemas/get-tranches-response.schema.js'

/**
 * The custom predefined fees, they may be used as the expected predefined fees that will be applied on the disbursement.
 */
export interface CustomPredefinedFee {
    /**
     * The amount of the custom fee.
     */
    amount?: number | undefined
    /**
     * The encoded key of the custom predefined fee, auto generated, unique.
     */
    encodedKey?: string | undefined
    /**
     * The percentage of the custom fee.
     */
    percentage?: number | undefined
    /**
     * The encoded key of the predefined fee
     */
    predefinedFeeEncodedKey?: string | undefined
}

export type EditTranchesRequest = LoanTranche[]

export const EditTranchesRequest = {
    validate: EditTranchesRequestValidator as ValidateFunction<EditTranchesRequest>,
    get schema() {
        return EditTranchesRequest.validate.schema
    },
    get errors() {
        return EditTranchesRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is EditTranchesRequest => EditTranchesRequest.validate(o) === true,
    parse: (o: unknown): { right: EditTranchesRequest } | { left: DefinedError[] } => {
        if (EditTranchesRequest.is(o)) {
            return { right: o }
        }
        return { left: (EditTranchesRequest.errors ?? []) as DefinedError[] }
    },
} as const

export type EditTranchesResponse = LoanTranche[]

export const EditTranchesResponse = {
    validate: EditTranchesResponseValidator as ValidateFunction<EditTranchesResponse>,
    get schema() {
        return EditTranchesResponse.validate.schema
    },
    get errors() {
        return EditTranchesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is EditTranchesResponse => EditTranchesResponse.validate(o) === true,
    parse: (o: unknown): { right: EditTranchesResponse } | { left: DefinedError[] } => {
        if (EditTranchesResponse.is(o)) {
            return { right: o }
        }
        return { left: (EditTranchesResponse.errors ?? []) as DefinedError[] }
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

export type GetTranchesResponse = LoanTranche[]

export const GetTranchesResponse = {
    validate: GetTranchesResponseValidator as ValidateFunction<GetTranchesResponse>,
    get schema() {
        return GetTranchesResponse.validate.schema
    },
    get errors() {
        return GetTranchesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetTranchesResponse => GetTranchesResponse.validate(o) === true,
    parse: (o: unknown): { right: GetTranchesResponse } | { left: DefinedError[] } => {
        if (GetTranchesResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetTranchesResponse.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * In some cases organizations may approve loans but not disburse the full amount initially. They would like to spread the disbursement (and risk) over time. Likewise for the client, they may not need the full loan amount up front. They may want to have a loan to buy some equipment for their business but will make one purchase today and another purchase in a few months.  In these cases, they don't need the full amount and wouldn't want to pay interest on cash they don't need yet. A solution for this matter is the usage of disbursement in tranches. This class holds the information required for one of this tranche.
 */
export interface LoanTranche {
    /**
     * The amount this tranche has available for disburse
     */
    amount: number
    disbursementDetails?: TrancheDisbursementDetails | undefined
    /**
     * The encoded key of the transaction details , auto generated, unique.
     */
    encodedKey?: string | undefined
    /**
     * Fees that are associated with this tranche
     */
    fees?: CustomPredefinedFee[] | undefined
    /**
     * Index indicating the tranche number
     */
    trancheNumber?: number | undefined
}

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

/**
 * The disbursement details regarding a loan tranche.
 */
export interface TrancheDisbursementDetails {
    /**
     * The key of the disbursement transaction logged when this tranche was disbursed. This field will be null until the tranche disbursement
     */
    disbursementTransactionKey?: string | undefined
    /**
     * The date when this tranche is supposed to be disbursed (as Organization Time)
     */
    expectedDisbursementDate?: string | undefined
}
