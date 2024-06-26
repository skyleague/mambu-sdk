/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as CentreValidator } from './schemas/centre.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetAllResponseValidator } from './schemas/get-all-response.schema.js'

/**
 * Represents an address.
 */
export interface Address {
    /**
     * The city for the address.
     */
    city?: string | undefined
    /**
     * The country.
     */
    country?: string | undefined
    /**
     * The address encoded key, which is unique and generated.
     */
    encodedKey?: string | undefined
    /**
     * The index of this address in the list of addresses.
     */
    indexInList?: number | undefined
    /**
     * The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90.
     */
    latitude?: number | undefined
    /**
     * The first line of the address.
     */
    line1?: string | undefined
    /**
     * The second line of the address.
     */
    line2?: string | undefined
    /**
     * The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180.
     */
    longitude?: number | undefined
    /**
     * The address parent key indicating the object owning this address. For example: client, centre, or branch.
     */
    parentKey?: string | undefined
    /**
     * The post code.
     */
    postcode?: string | undefined
    /**
     * The region for the address.
     */
    region?: string | undefined
}

/**
 * Represents a centre. A centre is a common meeting area that credit officers and the individual and group clients go to. Each centre is assigned to a branch (a branch can have multiple centres) and might have a specific meeting day and location.
 */
export interface Centre {
    /**
     * The addresses of this centre.
     */
    addresses?: Address[] | undefined
    /**
     * The encoded key of the branch this centre is assigned to.
     */
    assignedBranchKey?: string | undefined
    /**
     * The date the centre was created.
     */
    creationDate?: string | undefined
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string | undefined
    /**
     * The ID of the centre, which must be unique, and can be generated and customized.
     */
    id?: string | undefined
    /**
     * The last time the centre was modified.
     */
    lastModifiedDate?: string | undefined
    /**
     * The day of the week when repayments are collected. This influences the repayments schedule, upon update all repayments are updated to this day of the week.
     */
    meetingDay?: string | undefined
    /**
     * The name of the centre.
     */
    name?: string | undefined
    /**
     * The notes or description attached to this object.
     */
    notes?: string | undefined
    /**
     * The state of the centre.
     */
    state?: 'ACTIVE' | 'INACTIVE' | undefined
}

export const Centre = {
    validate: CentreValidator as ValidateFunction<Centre>,
    get schema() {
        return Centre.validate.schema
    },
    get errors() {
        return Centre.validate.errors ?? undefined
    },
    is: (o: unknown): o is Centre => Centre.validate(o) === true,
    parse: (o: unknown): { right: Centre } | { left: DefinedError[] } => {
        if (Centre.is(o)) {
            return { right: o }
        }
        return { left: (Centre.errors ?? []) as DefinedError[] }
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

export type GetAllResponse = Centre[]

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
