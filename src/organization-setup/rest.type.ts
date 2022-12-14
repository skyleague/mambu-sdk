/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Response representation of the organization setup details
 */
export interface OrganizationSetup {
    /**
     * The email address of the organization
     */
    emailAddress?: string
    /**
     * The phone number of the organization
     */
    phoneNumber?: string
    address?: Address
    /**
     * The format used to represent the time and date
     */
    dateTimeFormat: string
    /**
     * Symbol used to mark the border between the integral and the fractional parts of a decimal numeral
     */
    decimalSeparator: 'COMMA' | 'POINT'
    /**
     * The last modified date of the organization
     */
    lastModifiedDate?: string
    /**
     * The format used to represent the date
     */
    dateFormat: string
    /**
     * The timezone id, must be the same as the existing one
     */
    timeZoneID?: string
    /**
     * The name of the organization
     */
    institutionName: string
    /**
     * The currency of the organization, must be the same as the existing one
     */
    currency?: string
    /**
     * The creation date of the organization
     */
    creationDate?: string
}

export const OrganizationSetup = {
    validate: require('./schemas/organization-setup.schema.js') as ValidateFunction<OrganizationSetup>,
    get schema() {
        return OrganizationSetup.validate.schema
    },
    get errors() {
        return OrganizationSetup.validate.errors ?? undefined
    },
    is: (o: unknown): o is OrganizationSetup => OrganizationSetup.validate(o) === true,
    assert: (o: unknown) => {
        if (!OrganizationSetup.validate(o)) {
            throw new AjvValidator.ValidationError(OrganizationSetup.errors ?? [])
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
 * Address Data Transfer Object
 */
export interface Address {
    /**
     * The country
     */
    country?: string
    /**
     * Address parent key, the object owning this address, client, centre, branch
     */
    parentKey?: string
    /**
     * The city for this address
     */
    city?: string
    /**
     * The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90
     */
    latitude?: number
    /**
     * The post code
     */
    postcode?: string
    /**
     * Index of this address in the list of addresses
     */
    indexInList?: number
    /**
     * Address encoded key, unique, generated
     */
    encodedKey?: string
    /**
     * The region that is part of the address
     */
    region?: string
    /**
     * The second line for the address, in case the first one doesn't fit the information, this is completely optional
     */
    line2?: string
    /**
     * The first line of the address
     */
    line1?: string
    /**
     * The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180
     */
    longitude?: number
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
