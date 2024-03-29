/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Represents information about the accounting report.
 */
export interface AccountingReport {
    /**
     * The list of the accounting report items.
     */
    items?: AccountingReportItem[]
    /**
     * The encoded key of the generated accounting report.
     */
    reportKey?: string
    /**
     * The accounting report generation status.
     */
    status?:
        | 'QUEUED'
        | 'IN_PROGRESS'
        | 'COMPLETE'
        | 'NOT_FOUND'
        | 'CANCEL'
        | 'TO_BE_CANCELED'
        | 'TIMED_OUT'
        | 'ERROR'
        | 'TRANSIENT_ERROR'
        | 'OVERRIDDEN'
        | 'RECOVERABLE_ERROR'
}

export const AccountingReport = {
    validate: (await import('./schemas/accounting-report.schema.js')).validate as ValidateFunction<AccountingReport>,
    get schema() {
        return AccountingReport.validate.schema
    },
    get errors() {
        return AccountingReport.validate.errors ?? undefined
    },
    is: (o: unknown): o is AccountingReport => AccountingReport.validate(o) === true,
} as const

/**
 * Represents information about the accounting report amounts.
 */
export interface AccountingReportAmounts {
    /**
     * The closing balance amount of the general ledger account.
     */
    closingBalance?: number
    /**
     * The credit amount of the general ledger account.
     */
    credits?: number
    /**
     * The debit amount of the general ledger account.
     */
    debits?: number
    /**
     * The net change amount of the general ledger account.
     */
    netChange?: number
    /**
     * The opening balance amount of the general ledger account.
     */
    openingBalance?: number
}

/**
 * Represents the input for the accounting report generation.
 */
export interface AccountingReportGenerationInput {
    /**
     * The balance types to include in the generated report.
     */
    balanceTypes?: ('OPENING_BALANCE' | 'NET_CHANGE' | 'CLOSING_BALANCE')[]
    /**
     * The branch ID  or encoded key to filter general ledger journal entries by.
     */
    branchId?: string
    /**
     * The ISO currency code to filter general ledger accounts by.
     */
    currencyCode?: string
    /**
     * The inclusive end date in the organization time format and timezone that the general ledger journal entries' entry date is filtered to.
     */
    endDate: string
    /**
     * The account types to filter general ledger accounts by. For header general ledger accounts the report will reflect the sum of the detail general ledger accounts that match the given filters used.
     */
    glTypes?: AccountingReportGenerationInputGlTypesArray[]
    /**
     * The inclusive start date in the organization time format and timezone that the general ledger journal entries' entry date is filtered from.
     */
    startDate: string
}

export const AccountingReportGenerationInput = {
    validate: (await import('./schemas/accounting-report-generation-input.schema.js'))
        .validate as ValidateFunction<AccountingReportGenerationInput>,
    get schema() {
        return AccountingReportGenerationInput.validate.schema
    },
    get errors() {
        return AccountingReportGenerationInput.validate.errors ?? undefined
    },
    is: (o: unknown): o is AccountingReportGenerationInput => AccountingReportGenerationInput.validate(o) === true,
    assert: (o: unknown) => {
        if (!AccountingReportGenerationInput.validate(o)) {
            throw new ValidationError(AccountingReportGenerationInput.errors ?? [])
        }
    },
} as const

type AccountingReportGenerationInputGlTypesArray = 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE'

/**
 * Represents the information about the accounting report generation status.
 */
export interface AccountingReportGenerationResponse {
    /**
     * The encoded key of the generated report.
     */
    reportKey?: string
    /**
     * The accounting report generation status.
     */
    status?:
        | 'QUEUED'
        | 'IN_PROGRESS'
        | 'COMPLETE'
        | 'NOT_FOUND'
        | 'CANCEL'
        | 'TO_BE_CANCELED'
        | 'TIMED_OUT'
        | 'ERROR'
        | 'TRANSIENT_ERROR'
        | 'OVERRIDDEN'
        | 'RECOVERABLE_ERROR'
}

export const AccountingReportGenerationResponse = {
    validate: (await import('./schemas/accounting-report-generation-response.schema.js'))
        .validate as ValidateFunction<AccountingReportGenerationResponse>,
    get schema() {
        return AccountingReportGenerationResponse.validate.schema
    },
    get errors() {
        return AccountingReportGenerationResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is AccountingReportGenerationResponse => AccountingReportGenerationResponse.validate(o) === true,
} as const

/**
 * Represents the accounting report information about general ledger accounts and their amounts in both the organization's currency and foreign currencies.
 */
export interface AccountingReportItem {
    amounts?: AccountingReportAmounts
    foreignAmounts?: AccountingReportAmounts
    glAccount?: GLAccount
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
        | 'ZMK'
        | 'ZWL'
        | 'ZMW'
        | 'SSP'
        | 'NON_FIAT'
    /**
     * Currency code for NON_FIAT currency.
     */
    currencyCode?: string
}

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

/**
 * Represents a general ledger account.
 */
export interface GLAccount {
    /**
     * `TRUE` if the account is activated and may be used, `FALSE` otherwise.
     */
    activated?: boolean
    /**
     * `TRUE` if manual journal entries are allowed, `FALSE` otherwise.
     */
    allowManualJournalEntries?: boolean
    /**
     * The balance of the general ledger account, which is only populated for the GET /glaccounts endpoint.
     */
    balance?: number
    /**
     * The creation date for this account, which is stored as UTC.
     */
    creationDate?: string
    currency?: Currency
    /**
     * A description of the general ledger account.
     */
    description?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The general ledger code used to identify different account types. Also used for grouping and categorizing accounts. For example: an account code of '3201' is considered a subtype of '3200'.
     */
    glCode?: string
    /**
     * The last modification date and time, which is stored as UTC.
     */
    lastModifiedDate?: string
    /**
     * The data migration event key if the general ledger account was created as a part of a data migration event.
     */
    migrationEventKey?: string
    /**
     * The name of the general ledger account.
     */
    name?: string
    /**
     * `TRUE` if trailing zeros are stripped, `FALSE` otherwise.
     */
    stripTrailingZeros?: boolean
    /**
     * The general ledger account type.
     */
    type?: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE'
    /**
     * The usage type of the general ledger account. `DETAIL` accounts are used to stores transaction balances. `HEADER` accounts are used to organise and group detail accounts for reporting purposes.
     */
    usage?: 'DETAIL' | 'HEADER'
}

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
