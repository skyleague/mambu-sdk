/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ClientRoleValidator } from './schemas/client-role.schema.js'
import { validate as ClientSearchCriteriaValidator } from './schemas/client-search-criteria.schema.js'
import { validate as ClientValidator } from './schemas/client.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetAllResponseValidator } from './schemas/get-all-response.schema.js'
import { validate as GetCreditArrangementsByClientIdOrKeyResponseValidator } from './schemas/get-credit-arrangements-by-client-id-or-key-response.schema.js'
import { validate as PatchRequestValidator } from './schemas/patch-request.schema.js'
import { validate as SearchResponseValidator } from './schemas/search-response.schema.js'

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
 * Represents a client.
 */
export interface Client {
    /**
     * The date when a client was set as active for the first time.
     */
    activationDate?: string | undefined
    /**
     * The addresses associated with this client.
     */
    addresses?: Address[] | undefined
    /**
     * The date when a client was approved.
     */
    approvedDate?: string | undefined
    /**
     * The encoded key of the branch a client is assigned to.
     */
    assignedBranchKey?: string | undefined
    /**
     * The encoded key of the centre a client is assigned to.
     */
    assignedCentreKey?: string | undefined
    /**
     * The encoded key of the user a client is assigned to.
     */
    assignedUserKey?: string | undefined
    /**
     * The client's date of birth.
     */
    birthDate?: string | undefined
    /**
     * A role which describes the intended use of a client in the system.
     */
    clientRoleKey?: string | undefined
    /**
     * The date when the client state was changed to closed.
     */
    closedDate?: string | undefined
    /**
     * The date a client was created.
     */
    creationDate?: string | undefined
    /**
     * The client's email address.
     */
    emailAddress?: string | undefined
    /**
     * The encoded key of the client, which is unique and generated.
     */
    encodedKey?: string | undefined
    /**
     * The first name, personal name, given name, or forename of the client.
     */
    firstName: string
    /**
     * The client's gender, the options are male or female.
     */
    gender?: 'MALE' | 'FEMALE' | undefined
    /**
     * The groups to which this client belongs.
     */
    groupKeys?: string[] | undefined
    /**
     * Number of paid and closed (with 'obligations met') accounts for a client's group; when the closing operation is reverted, this is reduced.
     */
    groupLoanCycle?: number | undefined
    /**
     * The client's home phone number.
     */
    homePhone?: string | undefined
    /**
     * The ID of the client, which can be generated and customized - but must be unique.
     */
    id?: string | undefined
    /**
     * The identification documents for this client.
     */
    idDocuments?: IdentificationDocument[] | undefined
    /**
     * The last date a client was modified.
     */
    lastModifiedDate?: string | undefined
    /**
     * The last name, surname, or family name of the client.
     */
    lastName: string
    /**
     * Number of paid and closed (with 'obligations met') accounts for a client; when the closing operation is reverted, this is reduced.
     */
    loanCycle?: number | undefined
    /**
     * The middle name of the client.
     */
    middleName?: string | undefined
    /**
     * The migration event encoded key associated with a client.
     */
    migrationEventKey?: string | undefined
    /**
     * The client's mobile phone number.
     */
    mobilePhone?: string | undefined
    /**
     * The client's second mobile phone number.
     */
    mobilePhone2?: string | undefined
    /**
     * The additional notes about a client.
     */
    notes?: string | undefined
    portalSettings?: PortalSettings | undefined
    /**
     * The client's preferred language. This will determine the language for the reports, schedules, and account statements you generate for the client.
     */
    preferredLanguage?:
        | 'ENGLISH'
        | 'PORTUGESE'
        | 'SPANISH'
        | 'RUSSIAN'
        | 'FRENCH'
        | 'GEORGIAN'
        | 'CHINESE'
        | 'INDONESIAN'
        | 'ROMANIAN'
        | 'BURMESE'
        | 'GERMAN'
        | 'PORTUGUESE_BRAZIL'
        | 'VIETNAMESE'
        | 'ITALIAN'
        | 'THAI'
        | 'NORWEGIAN'
        | 'PHRASE'
        | undefined
    /**
     * The encoded key of a client's profile picture.
     */
    profilePictureKey?: string | undefined
    /**
     * The encoded key of the client's profile signature.
     */
    profileSignatureKey?: string | undefined
    /**
     * The state of a client. It shows where the client is in the client life cycle.
     */
    state?: 'PENDING_APPROVAL' | 'INACTIVE' | 'ACTIVE' | 'EXITED' | 'BLACKLISTED' | 'REJECTED' | undefined
}

export const Client = {
    validate: ClientValidator as ValidateFunction<Client>,
    get schema() {
        return Client.validate.schema
    },
    get errors() {
        return Client.validate.errors ?? undefined
    },
    is: (o: unknown): o is Client => Client.validate(o) === true,
    parse: (o: unknown): { right: Client } | { left: DefinedError[] } => {
        if (Client.is(o)) {
            return { right: o }
        }
        return { left: (Client.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * The unit that composes the list used for Clients searching
 */
export interface ClientFilterCriteria {
    field:
        | 'encodedKey'
        | 'creditOfficerKey'
        | 'clientRoleKey'
        | 'branchKey'
        | 'centreKey'
        | 'groupKey'
        | 'fullName'
        | 'firstName'
        | 'middleName'
        | 'lastName'
        | 'creationDate'
        | 'lastModifiedDate'
        | 'id'
        | 'depositsBalance'
        | 'loansBalance'
        | 'pendingLoanAmount'
        | 'approvedLoanAmount'
        | 'totalBalance'
        | 'totalDue'
        | 'homePhoneNumber'
        | 'mobilePhoneNumber'
        | 'mobilePhoneNumber2'
        | 'emailAddress'
        | 'clientAddress'
        | 'birthdate'
        | 'gender'
        | 'loanCycle'
        | 'groupLoanCycle'
        | 'clientState'
        | 'portalState'
        | 'preferredLanguage'
        | 'groupId'
        | string
    /**
     * | **Operator**                | **Affected values**  | **Available for**                                                    |
     * |---------------               |----------------------|----------------------------------------------------------------------|
     * | EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |
     * | EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |
     * | MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |
     * | ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | STARTS_WITH                  | ONE_VALUE            | STRING                                                               |
     * | STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |
     * | IN                           | LIST                 | ENUM,KEY                                                             |
     * | TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |
     * | EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     * | NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     */
    operator:
        | 'EQUALS'
        | 'EQUALS_CASE_SENSITIVE'
        | 'DIFFERENT_THAN'
        | 'MORE_THAN'
        | 'LESS_THAN'
        | 'BETWEEN'
        | 'ON'
        | 'AFTER'
        | 'AFTER_INCLUSIVE'
        | 'BEFORE'
        | 'BEFORE_INCLUSIVE'
        | 'STARTS_WITH'
        | 'STARTS_WITH_CASE_SENSITIVE'
        | 'IN'
        | 'TODAY'
        | 'THIS_WEEK'
        | 'THIS_MONTH'
        | 'THIS_YEAR'
        | 'LAST_DAYS'
        | 'EMPTY'
        | 'NOT_EMPTY'
    /**
     * The second value to match the searching criteria, when the `BETWEEN` operator is used.
     */
    secondValue?: string | undefined
    /**
     * The value to match the searching criteria.
     */
    value?: string | undefined
    /**
     * List of values when the `IN` operator is used.
     */
    values?: string[] | undefined
}

/**
 * Represents a client or group role.
 */
export interface ClientRole {
    /**
     * `TRUE` if clients with this client role can be used as guarantors, `FALSE` otherwise.
     */
    canGuarantee?: boolean | undefined
    /**
     * `TRUE` if new accounts for this client type can be created, `FALSE` otherwise.
     */
    canOpenAccounts?: boolean | undefined
    /**
     * The type of the client for which this role was created.
     */
    clientType?: 'CLIENT' | 'GROUP' | undefined
    /**
     * The creation date of the client role.
     */
    creationDate?: string | undefined
    /**
     * The text description for this client role.
     */
    description?: string | undefined
    /**
     * The encoded key of the client, which is unique and generated.
     */
    encodedKey?: string | undefined
    /**
     * The ID of the client role, which can be generated and customized - but must be unique.
     */
    id?: string | undefined
    /**
     * The pattern used in generating the client ID.
     */
    idPattern?: string | undefined
    /**
     * The name of the client role.
     */
    name?: string | undefined
    /**
     * `TRUE` if identification documents must be provided for the client to be created, `FALSE` otherwise. Does not apply for groups.
     */
    requireID?: boolean | undefined
    /**
     * `TRUE` if the Mambu default address section is available, `FALSE` otherwise.
     */
    useDefaultAddress?: boolean | undefined
}

export const ClientRole = {
    validate: ClientRoleValidator as ValidateFunction<ClientRole>,
    get schema() {
        return ClientRole.validate.schema
    },
    get errors() {
        return ClientRole.validate.errors ?? undefined
    },
    is: (o: unknown): o is ClientRole => ClientRole.validate(o) === true,
    parse: (o: unknown): { right: ClientRole } | { left: DefinedError[] } => {
        if (ClientRole.is(o)) {
            return { right: o }
        }
        return { left: (ClientRole.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for clients
 */
export interface ClientSearchCriteria {
    /**
     * The list of filtering criteria
     */
    filterCriteria: ClientFilterCriteria[]
    sortingCriteria?: ClientSortingCriteria | undefined
}

export const ClientSearchCriteria = {
    validate: ClientSearchCriteriaValidator as ValidateFunction<ClientSearchCriteria>,
    get schema() {
        return ClientSearchCriteria.validate.schema
    },
    get errors() {
        return ClientSearchCriteria.validate.errors ?? undefined
    },
    is: (o: unknown): o is ClientSearchCriteria => ClientSearchCriteria.validate(o) === true,
    parse: (o: unknown): { right: ClientSearchCriteria } | { left: DefinedError[] } => {
        if (ClientSearchCriteria.is(o)) {
            return { right: o }
        }
        return { left: (ClientSearchCriteria.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * The sorting criteria used for Clients
 */
export interface ClientSortingCriteria {
    /**
     * The field to sort by. It can be native (one from the provided list) or otherwise can specify a custom field definition using the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'encodedKey'
        | 'id'
        | 'fullName'
        | 'firstName'
        | 'middleName'
        | 'lastName'
        | 'creationDate'
        | 'lastModifiedDate'
        | 'depositsBalance'
        | 'loansBalance'
        | 'pendingLoanAmount'
        | 'approvedLoanAmount'
        | 'totalBalance'
        | 'totalDue'
        | 'homePhoneNumber'
        | 'mobilePhoneNumber'
        | 'mobilePhoneNumber2'
        | 'emailAddress'
        | 'birthdate'
        | 'loanCycle'
        | 'groupLoanCycle'
        | 'portalState'
    /**
     * The sorting order: `ASC` or `DESC`. The default order is `DESC`.
     */
    order?: 'ASC' | 'DESC' | undefined
}

/**
 * Represents a credit arrangement.
 */
export interface CreditArrangement {
    /**
     * The maximum credit amount the client can be exposed to.
     */
    amount: number
    /**
     * The date when the credit arrangement was approved.
     */
    approvedDate?: string | undefined
    /**
     * The available amount of the credit arrangement.
     */
    availableCreditAmount?: number | undefined
    /**
     * The date when the credit arrangement was closed.
     */
    closedDate?: string | undefined
    /**
     * The consumed amount of the credit arrangement, which is calculated as the difference between the amount and available amount.
     */
    consumedCreditAmount?: number | undefined
    /**
     * The date when the credit arrangement was created.
     */
    creationDate?: string | undefined
    currency?: Currency | undefined
    /**
     * The encoded key of the credit arrangement, it is auto generated, and unique.
     */
    encodedKey?: string | undefined
    /**
     * The date when the credit arrangement expires.
     */
    expireDate: string
    /**
     * The type of exposure limit calculation method used for the credit arrangement.
     */
    exposureLimitType?: 'APPROVED_AMOUNT' | 'OUTSTANDING_AMOUNT' | undefined
    /**
     * The encoded key of the credit arrangement holder (individual client or group).
     */
    holderKey?: string | undefined
    /**
     * The type of the credit arrangement holder (individual client or group).
     */
    holderType: 'CLIENT' | 'GROUP'
    /**
     * The ID of credit arrangement, can be generated and customized, and must be unique.
     */
    id?: string | undefined
    /**
     * The last date when the credit arrangement was modified.
     */
    lastModifiedDate?: string | undefined
    /**
     * The notes or description of the credit arrangement.
     */
    notes?: string | undefined
    /**
     * The start date from which the credit arrangement became active.
     */
    startDate: string
    /**
     * The state of the credit arrangement.
     */
    state?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED' | undefined
    /**
     * The substate of credit arrangement.
     */
    subState?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED' | undefined
}

/**
 * Represents a currency eg. USD, EUR.
 */
export interface Currency {
    /**
     * Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.
     */
    code?:
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYR'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LTL'
        | 'LVL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRO'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'STD'
        | 'STN'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UYW'
        | 'UZS'
        | 'VED'
        | 'VEF'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAG'
        | 'XAU'
        | 'XAF'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZIG'
        | 'ZMK'
        | 'ZWL'
        | 'ZMW'
        | 'SSP'
        | 'NON_FIAT'
        | undefined
    /**
     * Currency code for NON_FIAT currency.
     */
    currencyCode?: string | undefined
}

/**
 * Holds information regarding the documents uploaded as attachments
 */
export interface Document {
    /**
     * The creation date of the document, stored as UTC
     */
    creationDate?: string | undefined
    /**
     * The document encodedKey
     */
    encodedKey?: string | undefined
    /**
     * The original file name of the document
     */
    fileName?: string | undefined
    /**
     * The file size of the document
     */
    fileSize?: number | undefined
    /**
     * The document id
     */
    id: number
    /**
     * The last modified date of the document, stored as UTC
     */
    lastModifiedDate?: string | undefined
    /**
     * Location where the document can be found, eg /myfiles/mypicture.jpeg
     */
    location?: string | undefined
    /**
     * The name of the document
     */
    name: string
    /**
     * Detailed notes about the document
     */
    notes?: string | undefined
    /**
     * Represents the holder of this document. If null, means nobody is the owner of this document
     */
    ownerKey?: string | undefined
    /**
     * Determines the owner type of the document
     */
    ownerType?:
        | 'CLIENT'
        | 'GROUP'
        | 'LOAN_PRODUCT'
        | 'SAVINGS_PRODUCT'
        | 'CENTRE'
        | 'BRANCH'
        | 'USER'
        | 'LOAN_ACCOUNT'
        | 'DEPOSIT_ACCOUNT'
        | 'ID_DOCUMENT'
        | 'LINE_OF_CREDIT'
        | 'GL_JOURNAL_ENTRY'
        | undefined
    /**
     * The extension of the document
     */
    type: string
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

export type GetAllResponse = Client[]

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

export type GetCreditArrangementsByClientIdOrKeyResponse = CreditArrangement[]

export const GetCreditArrangementsByClientIdOrKeyResponse = {
    validate:
        GetCreditArrangementsByClientIdOrKeyResponseValidator as ValidateFunction<GetCreditArrangementsByClientIdOrKeyResponse>,
    get schema() {
        return GetCreditArrangementsByClientIdOrKeyResponse.validate.schema
    },
    get errors() {
        return GetCreditArrangementsByClientIdOrKeyResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetCreditArrangementsByClientIdOrKeyResponse =>
        GetCreditArrangementsByClientIdOrKeyResponse.validate(o) === true,
    parse: (o: unknown): { right: GetCreditArrangementsByClientIdOrKeyResponse } | { left: DefinedError[] } => {
        if (GetCreditArrangementsByClientIdOrKeyResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetCreditArrangementsByClientIdOrKeyResponse.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * An Id document represents a document that can be used to identify a person like a passport, a drivers license an id card etc.
 */
export interface IdentificationDocument {
    /**
     * A list containing information about the attached files for this document
     */
    attachments?: Document[] | undefined
    /**
     * The encoded key of the client that owns this document
     */
    clientKey?: string | undefined
    /**
     * The id of the document
     */
    documentId: string
    /**
     * The type of the document, Passport, Id card Drivers license, etc.
     */
    documentType: string
    /**
     * The encoded key of the document, generated, unique
     */
    encodedKey?: string | undefined
    /**
     * Encoded key of the template used for this document
     */
    identificationDocumentTemplateKey?: string | undefined
    /**
     * This document's index in the list of documents
     */
    indexInList?: number | undefined
    /**
     * Authority that issued the document, eg. Police
     */
    issuingAuthority?: string | undefined
    /**
     * Date when the validity of the document ends
     */
    validUntil?: string | undefined
}

/**
 * A single change that needs to be made to a resource
 */
export interface PatchOperation {
    /**
     * The field from where a value should be moved, when using move
     */
    from?: string | undefined
    /**
     * The change to perform
     */
    op: 'ADD' | 'REPLACE' | 'REMOVE' | 'MOVE'
    /**
     * The field to perform the operation on
     */
    path: string
    /**
     * The value of the field, can be null
     */
    value?: unknown
}

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: PatchRequestValidator as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    get errors() {
        return PatchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    parse: (o: unknown): { right: PatchRequest } | { left: DefinedError[] } => {
        if (PatchRequest.is(o)) {
            return { right: o }
        }
        return { left: (PatchRequest.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Represents portal settings for an individual client.
 */
export interface PortalSettings {
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string | undefined
    /**
     * The last date the client logged in to the portal.
     */
    lastLoggedInDate?: string | undefined
    /**
     * The state of the client's portal preferences.
     */
    portalState?: 'ENABLED' | 'DISABLED' | undefined
}

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

export type SearchResponse = Client[]

export const SearchResponse = {
    validate: SearchResponseValidator as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    get errors() {
        return SearchResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
    parse: (o: unknown): { right: SearchResponse } | { left: DefinedError[] } => {
        if (SearchResponse.is(o)) {
            return { right: o }
        }
        return { left: (SearchResponse.errors ?? []) as DefinedError[] }
    },
} as const
