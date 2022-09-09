/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetAllResponse = Group[]

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
 * Represents a group of clients. A group is a type of client composed of at least two members who also need to have an individual profile in Mambu.
 */
export interface Group {
    /**
     * The members of this group.
     */
    groupMembers?: GroupMember[]
    /**
     * The migration event encoded key associated with this group.
     */
    migrationEventKey?: string
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
        | 'PHRASE'
    /**
     * The addresses associated with this group information like street, city etc.
     */
    addresses?: Address[]
    /**
     * Extra notes about this group
     */
    notes?: string
    /**
     * The last date the group was updated
     */
    lastModifiedDate?: string
    /**
     * The home phone number associated with the group
     */
    homePhone?: string
    /**
     * The date this group was created
     */
    creationDate?: string
    /**
     * Key of the branch this group is assigned to
     */
    assignedBranchKey?: string
    /**
     * Number of paid and closed (with 'obligations met') accounts for this client, when the closing operation is reverted, this is reduced
     */
    loanCycle?: number
    /**
     * Key of the centre this group is assigned to
     */
    assignedCentreKey?: string
    /**
     * The name of the group
     */
    groupName: string
    /**
     * The e-mail address associated with the group
     */
    emailAddress?: string
    /**
     * The mobile phone number associated with the group
     */
    mobilePhone?: string
    /**
     * A role which describes the intended use of a group in the system
     */
    groupRoleKey?: string
    /**
     * The encoded key of the group, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the group, can be generated and customized, unique
     */
    id?: string
    /**
     * Key of the user this group is assigned to
     */
    assignedUserKey?: string
}

export const Group = {
    validate: require('./schemas/group.schema.js') as ValidateFunction<Group>,
    get schema() {
        return Group.validate.schema
    },
    is: (o: unknown): o is Group => Group.validate(o) === true,
    assert: (o: unknown) => {
        if (!Group.validate(o)) {
            throw new AjvValidator.ValidationError(Group.validate.errors ?? [])
        }
    },
} as const

export type GetCreditArrangementsByGroupIdOrKeyResponse = CreditArrangement[]

export const GetCreditArrangementsByGroupIdOrKeyResponse = {
    validate:
        require('./schemas/get-credit-arrangements-by-group-id-or-key-response.schema.js') as ValidateFunction<GetCreditArrangementsByGroupIdOrKeyResponse>,
    get schema() {
        return GetCreditArrangementsByGroupIdOrKeyResponse.validate.schema
    },
    is: (o: unknown): o is GetCreditArrangementsByGroupIdOrKeyResponse =>
        GetCreditArrangementsByGroupIdOrKeyResponse.validate(o) === true,
} as const

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: require('./schemas/patch-request.schema.js') as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new AjvValidator.ValidationError(PatchRequest.validate.errors ?? [])
        }
    },
} as const

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for Groups client directed query
 */
export interface GroupSearchCriteria {
    sortingCriteria?: GroupSortingCriteria
    /**
     * The list of filtering criteria
     */
    filterCriteria?: GroupFilterCriteria[]
}

export const GroupSearchCriteria = {
    validate: require('./schemas/group-search-criteria.schema.js') as ValidateFunction<GroupSearchCriteria>,
    get schema() {
        return GroupSearchCriteria.validate.schema
    },
    is: (o: unknown): o is GroupSearchCriteria => GroupSearchCriteria.validate(o) === true,
    assert: (o: unknown) => {
        if (!GroupSearchCriteria.validate(o)) {
            throw new AjvValidator.ValidationError(GroupSearchCriteria.validate.errors ?? [])
        }
    },
} as const

export type SearchResponse = Group[]

export const SearchResponse = {
    validate: require('./schemas/search-response.schema.js') as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * A group member is person that uses the services of the bank and is member of a group. Group members may have associated information such as their client key and a list of roles they have within the group
 */
export interface GroupMember {
    /**
     * The encoded key of the client assigned as member of the group
     */
    clientKey: string
    /**
     * The roles associated with this group member
     */
    roles?: GroupRole[]
}

/**
 * A group role is the role of a group member within the group (i.e. Money Collector). One member could have many roles within a group.
 */
export interface GroupRole {
    /**
     * The group role name
     */
    roleName?: string
    /**
     * The encoded key of the group role, auto generated, unique
     */
    encodedKey?: string
    /**
     * The group role name key
     */
    groupRoleNameKey: string
    /**
     * The group role name id
     */
    roleNameId?: string
}

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

/**
 * A maximum amount a client (individual, group or company) can take in loans and overdrafts.
 */
export interface CreditArrangement {
    /**
     * The available amount of the credit arrangement
     */
    availableCreditAmount?: number
    /**
     * The maximum credit amount the client can be exposed to
     */
    amount: number
    /**
     * The notes/description of credit arrangement
     */
    notes?: string
    /**
     * The last date when credit arrangement was modified
     */
    lastModifiedDate?: string
    /**
     * The encodedKey of the client or group (a.k.a holder)
     */
    holderKey?: string
    /**
     * The consumed amount of the credit arrangement (calculated as the difference between the amount and available amount
     */
    consumedCreditAmount?: number
    /**
     * The date when credit arrangement was created
     */
    creationDate?: string
    /**
     * The date when credit arrangement was approved
     */
    approvedDate?: string
    /**
     * The substate of credit arrangement can be Withdrawn or Rejected when state is Closed
     */
    subState?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED'
    /**
     * The date when credit arrangement was closed
     */
    closedDate?: string
    /**
     * The type of exposure limit calculation method used
     */
    exposureLimitType?: 'APPROVED_AMOUNT' | 'OUTSTANDING_AMOUNT'
    /**
     * The encoded key of credit arrangement, auto generated, unique
     */
    encodedKey?: string
    /**
     * The date when credit arrangement expires
     */
    expireDate: string
    currency?: Currency
    /**
     * The id of credit arrangement, can be generated and customized, unique
     */
    id?: string
    /**
     * The state of credit arrangement can be Pending Approval, Approved, Active or Closed
     */
    state?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED'
    /**
     * The type of the credit arrangement holder (client or group)
     */
    holderType: 'CLIENT' | 'GROUP'
    /**
     * The start date from which the credit arrangement becomes active
     */
    startDate: string
}

/**
 * Represents a currency eg. USD, EUR.
 */
export interface Currency {
    /**
     * Currency code for NON_FIAT currency.
     */
    currencyCode?: string
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
        | 'BTC'
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
        | 'ZMK'
        | 'ZWL'
        | 'ZMW'
        | 'SSP'
        | 'NON_FIAT'
}

/**
 * A single change that needs to be made to a resource
 */
export interface PatchOperation {
    /**
     * The change to perform
     */
    op: 'ADD' | 'REPLACE' | 'REMOVE' | 'MOVE'
    /**
     * The field to perform the operation on
     */
    path: string
    /**
     * The field from where a value should be moved, when using move
     */
    from?: string
    /**
     * The value of the field, can be null
     */
    value?: unknown
}

/**
 * The sorting criteria used for Groups search
 */
export interface GroupSortingCriteria {
    /**
     * Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
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
     * The sorting order: ASC or DESC. The default order is DESC.
     */
    order?: 'ASC' | 'DESC'
}

/**
 * The unit that composes the list used for Groups searching
 */
export interface GroupFilterCriteria {
    /**
     * Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
     */
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
    /**
     * The value to match the searching criteria
     */
    value?: string
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
     * The second value to match the searching criteria, when using BETWEEN, together with value
     */
    secondValue?: string
    /**
     * List of values when operator is IN.
     */
    values?: string[]
}