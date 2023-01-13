/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetTranchesResponse = LoanTranche[]

export const GetTranchesResponse = {
    validate: require('./schemas/get-tranches-response.schema.js') as ValidateFunction<GetTranchesResponse>,
    get schema() {
        return GetTranchesResponse.validate.schema
    },
    get errors() {
        return GetTranchesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetTranchesResponse => GetTranchesResponse.validate(o) === true,
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

export type EditTranchesRequest = LoanTranche[]

export const EditTranchesRequest = {
    validate: require('./schemas/edit-tranches-request.schema.js') as ValidateFunction<EditTranchesRequest>,
    get schema() {
        return EditTranchesRequest.validate.schema
    },
    get errors() {
        return EditTranchesRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is EditTranchesRequest => EditTranchesRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!EditTranchesRequest.validate(o)) {
            throw new AjvValidator.ValidationError(EditTranchesRequest.errors ?? [])
        }
    },
} as const

export type EditTranchesResponse = LoanTranche[]

export const EditTranchesResponse = {
    validate: require('./schemas/edit-tranches-response.schema.js') as ValidateFunction<EditTranchesResponse>,
    get schema() {
        return EditTranchesResponse.validate.schema
    },
    get errors() {
        return EditTranchesResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is EditTranchesResponse => EditTranchesResponse.validate(o) === true,
} as const

/**
 * In some cases organizations may approve loans but not disburse the full amount initially. They would like to spread the disbursement (and risk) over time. Likewise for the client, they may not need the full loan amount up front. They may want to have a loan to buy some equipment for their business but will make one purchase today and another purchase in a few months.  In these cases, they don't need the full amount and wouldn't want to pay interest on cash they don't need yet. A solution for this matter is the usage of disbursement in tranches. This class holds the information required for one of this tranche.
 */
export interface LoanTranche {
    /**
     * The encoded key of the transaction details , auto generated, unique.
     */
    encodedKey?: string
    /**
     * The amount this tranche has available for disburse
     */
    amount: number
    /**
     * Fees that are associated with this tranche
     */
    fees?: CustomPredefinedFee[]
    disbursementDetails?: TrancheDisbursementDetails
    /**
     * Index indicating the tranche number
     */
    trancheNumber?: number
}

/**
 * The custom predefined fees, they may be used as the expected predefined fees that will be applied on the disbursement.
 */
export interface CustomPredefinedFee {
    /**
     * The encoded key of the predefined fee
     */
    predefinedFeeEncodedKey?: string
    /**
     * The encoded key of the custom predefined fee, auto generated, unique.
     */
    encodedKey?: string
    /**
     * The amount of the custom fee.
     */
    amount?: number
}

/**
 * The disbursement details regarding a loan tranche.
 */
export interface TrancheDisbursementDetails {
    /**
     * The date when this tranche is supposed to be disbursed (as Organization Time)
     */
    expectedDisbursementDate?: string
    /**
     * The key of the disbursement transaction logged when this tranche was disbursed. This field will be null until the tranche disbursement
     */
    disbursementTransactionKey?: string
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}