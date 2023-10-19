/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Represents a branch.
 */
export interface Branch {
    /**
     * The branch email address.
     */
    emailAddress?: string
    /**
     * The list of branch addresses.
     */
    addresses?: Address[]
    /**
     * The branch phone number.
     */
    phoneNumber?: string
    /**
     * The notes or description attached to this object.
     */
    notes?: string
    /**
     * The last date when the branch was modified.
     */
    lastModifiedDate?: string
    /**
     * The branch name.
     */
    name: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The branch ID, which must be unique.
     */
    id: string
    /**
     * The branch state.
     */
    state?: 'ACTIVE' | 'INACTIVE'
    /**
     * The creation date of the branch.
     */
    creationDate?: string
    /**
     * The list of branch holidays.
     */
    branchHolidays?: Holiday[]
}

export const Branch = {
    validate: (await import('./schemas/branch.schema.js')).validate as ValidateFunction<Branch>,
    get schema() {
        return Branch.validate.schema
    },
    get errors() {
        return Branch.validate.errors ?? undefined
    },
    is: (o: unknown): o is Branch => Branch.validate(o) === true,
    assert: (o: unknown) => {
        if (!Branch.validate(o)) {
            throw new ValidationError(Branch.errors ?? [])
        }
    },
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

export type GetAllResponse = Branch[]

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

/**
 * Represents an address.
 */
export interface Address {
    /**
     * The country.
     */
    country?: string
    /**
     * The address parent key indicating the object owning this address. For example: client, centre, or branch.
     */
    parentKey?: string
    /**
     * The city for the address.
     */
    city?: string
    /**
     * The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90.
     */
    latitude?: number
    /**
     * The post code.
     */
    postcode?: string
    /**
     * The index of this address in the list of addresses.
     */
    indexInList?: number
    /**
     * The address encoded key, which is unique and generated.
     */
    encodedKey?: string
    /**
     * The region for the address.
     */
    region?: string
    /**
     * The second line of the address.
     */
    line2?: string
    /**
     * The first line of the address.
     */
    line1?: string
    /**
     * The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180.
     */
    longitude?: number
}

/**
 * Represents the holiday.
 */
export interface Holiday {
    /**
     * The date the holiday takes place.
     */
    date?: string
    /**
     * `TRUE` if a holiday is annually recurring, `FALSE` otherwise.
     */
    isAnnuallyRecurring?: boolean
    /**
     * The name of the holiday.
     */
    name?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The ID of the holiday.
     */
    id?: number
    /**
     * The date when the holiday was created.
     */
    creationDate?: string
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
