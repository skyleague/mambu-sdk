/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for Interest Accrual Breakdown
 */
export interface InterestAccrualSearchCriteria {
    sortingCriteria?: InterestAccrualSortingCriteria
    /**
     * The list of filtering criteria
     */
    filterCriteria?: InterestAccrualFilterCriteria[]
}

export const InterestAccrualSearchCriteria = {
    validate: require('./schemas/interest-accrual-search-criteria.schema.js') as ValidateFunction<InterestAccrualSearchCriteria>,
    get schema() {
        return InterestAccrualSearchCriteria.validate.schema
    },
    is: (o: unknown): o is InterestAccrualSearchCriteria => InterestAccrualSearchCriteria.validate(o) === true,
    assert: (o: unknown) => {
        if (!InterestAccrualSearchCriteria.validate(o)) {
            throw new AjvValidator.ValidationError(InterestAccrualSearchCriteria.validate.errors ?? [])
        }
    },
} as const

export type SearchResponse = InterestAccrualBreakdown[]

export const SearchResponse = {
    validate: require('./schemas/search-response.schema.js') as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
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
 * The sorting criteria used for Interest Accrual Breakdown
 */
export interface InterestAccrualSortingCriteria {
    /**
     * Contains the field that can be used as sorting criteria
     */
    field:
        | 'entryId'
        | 'parentEntryId'
        | 'bookingDate'
        | 'creationDate'
        | 'transactionId'
        | 'glAccountType'
        | 'debit'
        | 'credit'
        | 'accountId'
        | 'foreignCredit'
        | 'foreignDebit'
        | 'foreignCurrencyCode'
    /**
     * The sorting order: ASC or DESC. The default order is DESC.
     */
    order?: 'ASC' | 'DESC'
}

/**
 * The unit that composes the list used for Interest Accrual Breakdown searching
 */
export interface InterestAccrualFilterCriteria {
    /**
     * Contains the actual searching fields
     */
    field:
        | 'entryId'
        | 'glAccountKey'
        | 'parentEntryId'
        | 'productType'
        | 'bookingDate'
        | 'creationDate'
        | 'transactionId'
        | 'glAccountId'
        | 'glAccountType'
        | 'debit'
        | 'credit'
        | 'branchKey'
        | 'accountKey'
        | 'productKey'
        | 'accountId'
        | 'foreignCredit'
        | 'foreignDebit'
        | 'foreignCurrencyCode'
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

/**
 * Represents an interest accrual breakdown entry
 */
export interface InterestAccrualBreakdown {
    /**
     * Debit or Credit
     */
    entryType?: string
    /**
     * The interest accrued amount for the account referred in this entry
     */
    amount?: number
    /**
     * The name of GL Account
     */
    glAccountName?: string
    /**
     * The id of the account's product
     */
    productId?: string
    /**
     * The id of GL Account
     */
    glAccountId?: string
    /**
     * The name for branch of the account
     */
    branchName?: string
    /**
     * The encoded key of the account's product
     */
    productKey?: string
    /**
     * The creation datetime of the entry, in UTC
     */
    creationDate?: string
    /**
     * The Id of the Journal Entry transaction
     */
    transactionId?: string
    /**
     * The encoded key of the loan/deposit account for which the interest accrual amount is retrieved
     */
    accountKey?: string
    /**
     * Generated Id for the interest accrual per account entry
     */
    entryId?: number
    foreignAmount?: ForeignAmount
    /**
     * The encoded Key for branch of the account
     */
    branchKey?: string
    /**
     * The loan/deposit account ID for which the interest accrued amount is retrieved
     */
    accountId?: string
    /**
     * The type of GL Account: ASSET / LIABILITY / EQUITY / INCOME / EXPENSE
     */
    glAccountType?: string
    /**
     * The encoded key of the GL Account used for logging the interest accrual
     */
    glAccountKey?: string
    /**
     * The booking date, in Organization Time Zone
     */
    bookingDate?: string
    /**
     * The Id of the GL Journal Entry that represents the interest accrual sum logged for all of the very same product
     */
    parentEntryId?: number
    /**
     * The type of Product (Loan or Deposit)
     */
    productType?: string
}

/**
 * Representation of details of GL Journal Entries posted in foreign currency.
 */
export interface ForeignAmount {
    accountingRate?: AccountingRate
    /**
     * Amount in foreign currency
     */
    amount?: number
    currency?: Currency
}

/**
 * Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency
 */
export interface AccountingRate {
    /**
     * Value of rate to be used for accounting conversions
     */
    rate?: number
    /**
     * Rate validity end date (as Organization Time)
     */
    endDate?: string
    /**
     * Foreign currency code
     */
    toCurrencyCode?: string
    /**
     * The encoded key of the accounting rate, auto generated, unique
     */
    encodedKey?: string
    /**
     * Organisation currency code
     */
    fromCurrencyCode?: string
    /**
     * Rate validity start date (as Organization Time)
     */
    startDate?: string
}

/**
 * Represents a currency eg. USD, EUR.
 */
export interface Currency {
    /**
     * Code of the currency.
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
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
