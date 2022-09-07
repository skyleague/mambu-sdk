/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'

/**
 * Represents a single loan account schedule structure.
 */
export interface LoanAccountSchedule {
    /**
     * The loan account schedule installments' list.
     */
    installments?: Installment[]
    currency?: Currency
}

export const LoanAccountSchedule = {
    validate: require('./schemas/loan-account-schedule.schema.js') as ValidateFunction<LoanAccountSchedule>,
    get schema() {
        return LoanAccountSchedule.validate.schema
    },
    is: (o: unknown): o is LoanAccountSchedule => LoanAccountSchedule.validate(o) === true,
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
 * Represents a single installment details structure.
 */
export interface Installment {
    penalty?: InstallmentAllocationElementTaxableAmount
    /**
     * The installment due date.
     */
    dueDate?: string
    fee?: InstallmentFee
    /**
     * The installment repaid date.
     */
    repaidDate?: string
    principal?: InstallmentAllocationElementAmount
    /**
     * The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date.
     */
    number?: string
    /**
     * The installment last paid date.
     */
    lastPaidDate?: string
    /**
     * The parent account key of the installment
     */
    parentAccountKey?: string
    interest?: InstallmentAllocationElementTaxableAmount
    /**
     * The breakdown of the fees amounts that have been applied for the loan account.
     */
    feeDetails?: InstallmentFeeDetails[]
    /**
     * The encoded key of the installment, auto generated, unique.
     */
    encodedKey?: string
    /**
     * The installment state.
     */
    state?: 'PENDING' | 'LATE' | 'PAID' | 'PARTIALLY_PAID' | 'GRACE'
    /**
     * Whether the payment holiday is offered for the installment.
     */
    isPaymentHoliday?: boolean
}

/**
 * Represents an installment allocation element taxable amount structure.
 */
export interface InstallmentAllocationElementTaxableAmount {
    amount?: Amount
    tax?: Amount
}

/**
 * Represents a simple installment amount structure.
 */
export interface Amount {
    /**
     * The paid amount.
     */
    paid?: number
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
}

/**
 * Represents an installment fee structure.
 */
export interface InstallmentFee {
    amount?: FeeAmount
    tax?: Amount
}

/**
 * Represents a fee amount.
 */
export interface FeeAmount {
    /**
     * The paid amount.
     */
    paid?: number
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
    /**
     * The expected amount, which is the sum of unapplied fee and planned fee due amounts.
     */
    expectedUnapplied?: number
}

/**
 * Represents an installment allocation element amount structure.
 */
export interface InstallmentAllocationElementAmount {
    amount?: Amount
}

/**
 * Represents fee details for an installment.
 */
export interface InstallmentFeeDetails {
    /**
     * The name of the fee
     */
    name?: string
    amount?: AmountWithReduced
    tax?: AmountWithReduced
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the fee, provided by the client
     */
    id?: string
}

/**
 * Represents a simple installment amount structure.
 */
export interface AmountWithReduced {
    /**
     * The paid amount.
     */
    paid?: number
    /**
     * The reduced amount.
     */
    reduced?: number
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
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

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
