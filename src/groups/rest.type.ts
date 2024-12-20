/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as GetAllResponseValidator } from './schemas/get-all-response.schema.js'
import { validate as GetCreditArrangementsByGroupIdOrKeyResponseValidator } from './schemas/get-credit-arrangements-by-group-id-or-key-response.schema.js'
import { validate as GroupSearchCriteriaValidator } from './schemas/group-search-criteria.schema.js'
import { validate as GroupValidator } from './schemas/group.schema.js'
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

export type GetAllResponse = Group[]

export const GetCreditArrangementsByGroupIdOrKeyResponse = {
    validate:
        GetCreditArrangementsByGroupIdOrKeyResponseValidator as ValidateFunction<GetCreditArrangementsByGroupIdOrKeyResponse>,
    get schema() {
        return GetCreditArrangementsByGroupIdOrKeyResponse.validate.schema
    },
    get errors() {
        return GetCreditArrangementsByGroupIdOrKeyResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetCreditArrangementsByGroupIdOrKeyResponse =>
        GetCreditArrangementsByGroupIdOrKeyResponse.validate(o) === true,
    parse: (o: unknown): { right: GetCreditArrangementsByGroupIdOrKeyResponse } | { left: DefinedError[] } => {
        if (GetCreditArrangementsByGroupIdOrKeyResponse.is(o)) {
            return { right: o }
        }
        return { left: (GetCreditArrangementsByGroupIdOrKeyResponse.errors ?? []) as DefinedError[] }
    },
} as const

export type GetCreditArrangementsByGroupIdOrKeyResponse = CreditArrangement[]

export const Group = {
    validate: GroupValidator as ValidateFunction<Group>,
    get schema() {
        return Group.validate.schema
    },
    get errors() {
        return Group.validate.errors ?? undefined
    },
    is: (o: unknown): o is Group => Group.validate(o) === true,
    parse: (o: unknown): { right: Group } | { left: DefinedError[] } => {
        if (Group.is(o)) {
            return { right: o }
        }
        return { left: (Group.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Represents a group. A group is a type of client that can represent a non-physical person such as a company client or a grouping of individual clients. A group can have its own accounts and can optionally have individual clients as members, in which case they also need to have an individual profile in Mambu.
 */
export interface Group {
    /**
     * The addresses associated with this group.
     */
    addresses?: Address[] | undefined
    /**
     * Key of the branch this group is assigned to.
     */
    assignedBranchKey?: string | undefined
    /**
     * Key of the centre this group is assigned to.
     */
    assignedCentreKey?: string | undefined
    /**
     * Key of the user this group is assigned to.
     */
    assignedUserKey?: string | undefined
    /**
     * The date the group was created.
     */
    creationDate?: string | undefined
    /**
     * The email address associated with the group.
     */
    emailAddress?: string | undefined
    /**
     * The encoded key of the group, which is auto generated, and must be unique.
     */
    encodedKey?: string | undefined
    /**
     * The members of this group.
     */
    groupMembers?: GroupMember[] | undefined
    /**
     * The name of the group.
     */
    groupName: string
    /**
     * A role which describes the intended use of a group in the system.
     */
    groupRoleKey?: string | undefined
    /**
     * The home phone number associated with the group.
     */
    homePhone?: string | undefined
    /**
     * The ID of the group, which can be generated and customized, but must be unique.
     */
    id?: string | undefined
    /**
     * The last date the group was updated.
     */
    lastModifiedDate?: string | undefined
    /**
     * Number of paid and closed (with 'obligations met') accounts for this client. When the closing operation is reverted, this is reduced.
     */
    loanCycle?: number | undefined
    /**
     * The migration event encoded key associated with this group.
     */
    migrationEventKey?: string | undefined
    /**
     * The mobile phone number associated with the group.
     */
    mobilePhone?: string | undefined
    /**
     * Extra notes about this group.
     */
    notes?: string | undefined
    /**
     * The preferred language associated with the group (used for the notifications).
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
}

/**
 * The unit that composes the list used for Groups searching
 */
export interface GroupFilterCriteria {
    field:
        | 'encodedKey'
        | 'id'
        | 'creationDate'
        | 'groupRoleKey'
        | 'branchKey'
        | 'centreKey'
        | 'creditOfficerKey'
        | 'groupName'
        | 'lastModifiedDate'
        | 'preferredLanguage'
        | 'depositsBalance'
        | 'loansBalance'
        | 'totalBalance'
        | 'numberOfMembers'
        | 'loanCycle'
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
 * Represents a group member. A group member is person that uses the services of the bank and is member of a group. Group members may have associated information, such as their client key and a list of roles they have within the group.
 */
export interface GroupMember {
    /**
     * The encoded key of the client assigned as member of the group.
     */
    clientKey: string
    /**
     * The group role name associated with a group member.
     */
    roles?: GroupRole[] | undefined
}

/**
 * Represents a group role. A group role, or group role name, is the role of a group member within the group - for example, money collector. One member could have many roles within a group.
 */
export interface GroupRole {
    /**
     * The encoded key of the group role name, which is auto generated, and unique.
     */
    encodedKey?: string | undefined
    /**
     * The group role name key.
     */
    groupRoleNameKey: string
    /**
     * The group role name.
     */
    roleName?: string | undefined
    /**
     * The group role name ID.
     */
    roleNameId?: string | undefined
}

export const GroupSearchCriteria = {
    validate: GroupSearchCriteriaValidator as ValidateFunction<GroupSearchCriteria>,
    get schema() {
        return GroupSearchCriteria.validate.schema
    },
    get errors() {
        return GroupSearchCriteria.validate.errors ?? undefined
    },
    is: (o: unknown): o is GroupSearchCriteria => GroupSearchCriteria.validate(o) === true,
    parse: (o: unknown): { right: GroupSearchCriteria } | { left: DefinedError[] } => {
        if (GroupSearchCriteria.is(o)) {
            return { right: o }
        }
        return { left: (GroupSearchCriteria.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for Groups client directed query
 */
export interface GroupSearchCriteria {
    /**
     * The list of filtering criteria
     */
    filterCriteria: GroupFilterCriteria[]
    sortingCriteria?: GroupSortingCriteria | undefined
}

/**
 * The sorting criteria used for Groups search
 */
export interface GroupSortingCriteria {
    /**
     * The field to sort by. It can be a native field (one from the provided list) or otherwise can specify a custom field definitionusing the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'encodedKey'
        | 'id'
        | 'creationDate'
        | 'groupName'
        | 'lastModifiedDate'
        | 'depositsBalance'
        | 'loansBalance'
        | 'totalBalance'
        | 'loanCycle'
    /**
     * The sorting order: `ASC` or `DESC`. The default order is `DESC`.
     */
    order?: 'ASC' | 'DESC' | undefined
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

export type PatchRequest = PatchOperation[]

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

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

export type SearchResponse = Group[]
