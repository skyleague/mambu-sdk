/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Decimal constraints, like min/max/default.
 */
export interface AmountDecimalInterval {
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
    /**
     * The minimum value.
     */
    minValue?: number
}

/**
 * Holds information about branch availability for the product.
 */
export interface BranchSettings {
    /**
     * Holds the encoded keys of the branches this product should be available for.
     */
    availableProductBranches?: string[]
    /**
     * Indicates if this product should be available for all branches
     */
    forAllBranches?: boolean
}

/**
 * The funding settings, holds the settings regarding the funding for the loan product.
 */
export interface CreditArrangementSettings {
    /**
     * Shows whether accounts created after this product can/should be part of a line of credit.
     */
    creditArrangementRequirement?: 'OPTIONAL' | 'REQUIRED' | 'NOT_REQUIRED'
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

/**
 * Decimal constraints, like min/max/default.
 */
export interface DecimalInterval {
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
    /**
     * The minimum value.
     */
    minValue?: number
}

/**
 * The GL accounting rule, it maps a financial resource with a GL account for a specific product (i.e loan or saving).
 */
export interface DepositGLAccountingRule {
    /**
     * The encoded key of the accounting rule, auto generated, unique.
     */
    encodedKey?: string
    /**
     * General Ledger Financial Resources used to setup the product accounting rules and determine the credit and debit accounts when logging journal entries
     */
    financialResource:
        | 'PORTFOLIO_CONTROL'
        | 'FUND_SOURCE'
        | 'WRITE_OFF_EXPENSE'
        | 'INTEREST_INCOME'
        | 'TAXES_PAYABLE'
        | 'FEE_INCOME'
        | 'PENALTY_INCOME'
        | 'NEGATIVE_INTEREST_PAYABLE_RECEIVABLE'
        | 'NEGATIVE_INTEREST_PAYABLE'
        | 'INTEREST_RECEIVABLE'
        | 'FEE_RECEIVABLE'
        | 'PENALTY_RECEIVABLE'
        | 'TAXES_RECEIVABLE'
        | 'DEFERRED_INTERESTS_INCOME'
        | 'DEFERRED_FEE_INCOME'
        | 'DEFERRED_TAXES'
        | 'DEPOSIT_REFERENCE'
        | 'SAVINGS_CONTROL'
        | 'INTEREST_EXPENSE'
        | 'INTEREST_PAYABLE'
        | 'NEGATIVE_INTEREST_INCOME'
        | 'NEGATIVE_INTEREST_RECEIVABLE'
        | 'OVERDRAFT_PORTFOLIO_CONTROL'
        | 'OVERDRAFT_INTEREST_INCOME'
        | 'OVERDRAFT_WRITE_OFF_EXPENSE'
        | 'OVERDRAFT_INTEREST_RECEIVABLE'
        | 'INTER_BRANCH_TRANSFER'
    /**
     * The encoded key of the account that is mapped to the financialResource
     */
    glAccountKey: string
}

/**
 * The maturity settings for the product.
 */
export interface DepositMaturitySettings {
    maturityPeriod?: IntegerInterval
    /**
     * maturity period measurement unit
     */
    maturityPeriodUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
}

/**
 * New Account settings for deposit accounts
 */
export interface DepositNewAccountSettings {
    /**
     * The type of generator used for IDs creation.
     */
    idGeneratorType: 'INCREMENTAL_NUMBER' | 'RANDOM_PATTERN'
    /**
     * The pattern that will be used for ID validation (as referred to as an input mask).
     */
    idPattern: string
}

/**
 * A deposit product defines the terms and constraints on deposit accounts
 */
export interface DepositProduct {
    accountingSettings: DepositProductAccountingSettings
    availabilitySettings?: DepositProductAvailabilitySettings
    /**
     * Indicates the category that the product belongs to
     */
    category?:
        | 'PERSONAL_DEPOSIT'
        | 'BUSINESS_DEPOSIT'
        | 'DAILY_BANKING_ACCOUNTS'
        | 'BUSINESS_BANKING_ACCOUNTS'
        | 'STORED_VALUE_ACCOUNTS'
        | 'UNCATEGORIZED'
    /**
     * The date this product was created
     */
    creationDate?: string
    creditArrangementSettings?: CreditArrangementSettings
    currencySettings?: DepositProductCurrencySettings
    /**
     * The encoded key of the deposit product, auto generated, unique
     */
    encodedKey?: string
    feesSettings?: DepositProductFeeSettings
    /**
     * The id of the product, can be generated and customized, unique
     */
    id: string
    interestSettings?: DepositProductInterestSettings
    internalControls?: DepositProductInternalControls
    /**
     * The last date the product was updated
     */
    lastModifiedDate?: string
    maturitySettings?: DepositMaturitySettings
    /**
     * The name of the product
     */
    name: string
    newAccountSettings: DepositNewAccountSettings
    /**
     * Some notes/a description about the product
     */
    notes?: string
    offsetSettings?: DepositProductOffsetSettings
    overdraftInterestSettings?: OverdraftInterestSettings
    overdraftSettings?: DepositProductOverdraftSettings
    /**
     * Indicates the current state of the product
     */
    state: 'ACTIVE' | 'INACTIVE'
    taxSettings?: DepositProductTaxSettings
    /**
     * Template documents of the product.
     */
    templates?: DocumentTemplate[]
    /**
     * Indicates the type of product.
     */
    type: 'CURRENT_ACCOUNT' | 'REGULAR_SAVINGS' | 'FIXED_DEPOSIT' | 'SAVINGS_PLAN' | 'INVESTOR_ACCOUNT'
}

export const DepositProduct = {
    validate: (await import('./schemas/deposit-product.schema.js')).validate as ValidateFunction<DepositProduct>,
    get schema() {
        return DepositProduct.validate.schema
    },
    get errors() {
        return DepositProduct.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProduct => DepositProduct.validate(o) === true,
    assert: (o: unknown) => {
        if (!DepositProduct.validate(o)) {
            throw new ValidationError(DepositProduct.errors ?? [])
        }
    },
} as const

/**
 * Accounting settings, defines the accounting settings for the product.
 */
export interface DepositProductAccountingSettings {
    /**
     * A list of accounting rules for a product.
     */
    accountingMethod: 'NONE' | 'CASH' | 'ACCRUAL'
    /**
     * A list of accounting rules for the product.
     */
    accountingRules?: DepositGLAccountingRule[]
    /**
     * A list of accounting rules for a product.
     */
    interestAccruedAccountingMethod?: 'NONE' | 'DAILY' | 'END_OF_MONTH'
}

/**
 * Specify the batch update action details for a deposit product.
 */
export interface DepositProductAction {
    /**
     * The action type to be applied. When UPDATE_INTEREST_SETTINGS action type is used, all the existing deposit accounts will be updated with the latest interest-related fields at the end of day job execution
     */
    action: 'UPDATE_INTEREST_SETTINGS'
}

export const DepositProductAction = {
    validate: (await import('./schemas/deposit-product-action.schema.js')).validate as ValidateFunction<DepositProductAction>,
    get schema() {
        return DepositProductAction.validate.schema
    },
    get errors() {
        return DepositProductAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProductAction => DepositProductAction.validate(o) === true,
    assert: (o: unknown) => {
        if (!DepositProductAction.validate(o)) {
            throw new ValidationError(DepositProductAction.errors ?? [])
        }
    },
} as const

/**
 * Represents the response returned after a batch update action for a deposit product.
 */
export interface DepositProductActionResponse {
    /**
     * The state of the deposit product action
     */
    state?: 'QUEUED'
}

export const DepositProductActionResponse = {
    validate: (await import('./schemas/deposit-product-action-response.schema.js'))
        .validate as ValidateFunction<DepositProductActionResponse>,
    get schema() {
        return DepositProductActionResponse.validate.schema
    },
    get errors() {
        return DepositProductActionResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProductActionResponse => DepositProductActionResponse.validate(o) === true,
} as const

/**
 * Holds information about product availability.
 */
export interface DepositProductAvailabilitySettings {
    /**
     * Holds the entities this product is available for. i.e Individuals
     */
    availableFor?: ('INDIVIDUALS' | 'PURE_GROUPS')[]
    branchSettings?: BranchSettings
}

/**
 * Currency settings for the product.
 */
export interface DepositProductCurrencySettings {
    /**
     * Currencies that can be used by accounts of this product
     */
    currencies?: Currency[]
}

/**
 * Defines fees settings for the product.
 */
export interface DepositProductFeeSettings {
    /**
     * Only if true users will be able to apply fees, for current object, of type 'Other'; these fees can have any amount.
     */
    allowArbitraryFees?: boolean
    /**
     * List of all fees that can be applied for accounts of this loan product.
     */
    fees?: DepositProductPredefinedFee[]
}

/**
 * The interest settings, defines constraints regarding interest that will be used on the deposit created based on this product.
 */
export interface DepositProductInterestRateSettings {
    /**
     * If the product supports this option, specify if the interest should be accrued after the account maturity date
     */
    accrueInterestAfterMaturity?: boolean
    /**
     * Indicator whether the deposit product allows negative values for interest rate
     */
    allowNegativeInterestRate?: boolean
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
    /**
     * Index rate source key.
     */
    indexSourceKey?: string
    /**
     * The interval used for determining how often is interest charged
     */
    interestChargeFrequency?: 'ANNUALIZED' | 'EVERY_MONTH' | 'EVERY_FOUR_WEEKS' | 'EVERY_WEEK' | 'EVERY_DAY' | 'EVERY_X_DAYS'
    /**
     * the count of units to apply over the interval
     */
    interestChargeFrequencyCount?: number
    interestRate?: DecimalInterval
    /**
     * Interest rate review frequency unit count
     */
    interestRateReviewCount?: number
    /**
     * Interest rate review frequency measurement unit
     */
    interestRateReviewUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    /**
     * Interest calculation method: fixed or (interest spread + active organization index interest rate)
     */
    interestRateSource?: 'FIXED_INTEREST_RATE' | 'INDEX_INTEREST_RATE'
    /**
     * The option for how is the interest rate determined when being accrued for an account
     */
    interestRateTerms?: 'FIXED' | 'TIERED' | 'TIERED_PERIOD' | 'TIERED_BAND'
    /**
     * The list of interest rate tiers available for the current settings instance
     */
    interestRateTiers?: DepositProductInterestRateTier[]
}

/**
 * Used or TIERED interest rates, holds the values to define how the interest is computed
 */
export interface DepositProductInterestRateTier {
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
    /**
     * The top-limit value for the account balance in order to determine if this tier is used or not
     */
    endingBalance?: number
    /**
     * The top-limit value for the account period since activation in order to determine if this tier is used or not
     */
    endingDay?: number
    /**
     * The rate used for computing the interest for an account which has the balance less than the ending balance
     */
    interestRate: number
}

/**
 * The interest settings, defines constraints regarding interest that will be used on the deposit account based on this product.
 */
export interface DepositProductInterestSettings {
    /**
     * Whether locked accounts still collect Interest or not
     */
    collectInterestWhenLocked?: boolean
    /**
     * How many days in a year should be used for interest calculations
     */
    daysInYear?: 'ACTUAL_365_FIXED' | 'ACTUAL_360' | 'ACTUAL_ACTUAL_ISDA' | 'E30_360' | 'E30_42_365' | 'BUS_252'
    /**
     * The balance which is used for the Interest calculation
     */
    interestCalculationBalance?: 'MINIMUM' | 'AVERAGE' | 'END_OF_DAY' | 'MINIMUM_TO_END_OF_DAY' | 'FRENCH_INTEREST_ACCRUAL'
    /**
     * The date when the accounts under this product, will no longer have interest gains provided
     */
    interestGainsProvidedEndDate?: string
    /**
     * The date when the accounts of this product will start to have interest gains provided. Starting with this date 0 interest rate is enforced on the accounts of this product.
     */
    interestGainsProvidedStartDate?: string
    /**
     * If interest should be payed into the deposit account
     */
    interestPaidIntoAccount?: boolean
    interestPaymentSettings?: InterestPaymentSettings
    interestRateSettings?: DepositProductInterestRateSettings
    /**
     * The maximum balance used for Interest calculation
     */
    maximumBalance?: number
}

/**
 * Constraints and automated actions and that will be applied on the accounts.
 */
export interface DepositProductInternalControls {
    /**
     * Specifies the number of days for an account to be fully paid in order to auto close it.
     */
    dormancyPeriodDays?: number
    /**
     * Max amount per withdrawal
     */
    maxWithdrawalAmount?: number
    openingBalance?: AmountDecimalInterval
    /**
     * Recommended amount for a deposit
     */
    recommendedDepositAmount?: number
}

/**
 * The offset settings, holds information about offset.
 */
export interface DepositProductOffsetSettings {
    /**
     * Specify if the product allow to create accounts which can be used as offset for loans
     */
    allowOffset?: boolean
}

/**
 * The overdraft interest settings, defines constraints regarding interest that will be used on the account created based on this product.
 */
export interface DepositProductOverdraftInterestRateSettings {
    /**
     * Index rate source key.
     */
    indexSourceKey?: string
    /**
     * The interval used for determining how often is interest charged
     */
    interestChargeFrequency?: 'ANNUALIZED' | 'EVERY_MONTH' | 'EVERY_FOUR_WEEKS' | 'EVERY_WEEK' | 'EVERY_DAY' | 'EVERY_X_DAYS'
    /**
     * the count of units to apply over the interval
     */
    interestChargeFrequencyCount?: number
    interestRate?: DecimalInterval
    /**
     * Interest rate review frequency unit count
     */
    interestRateReviewCount?: number
    /**
     * Interest rate review frequency measurement unit
     */
    interestRateReviewUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    /**
     * Interest calculation method: fixed or (interest spread + active organization index interest rate)
     */
    interestRateSource?: 'FIXED_INTEREST_RATE' | 'INDEX_INTEREST_RATE'
    /**
     * The option for how is the interest rate determined when being accrued for an account
     */
    interestRateTerms?: 'FIXED' | 'TIERED' | 'TIERED_PERIOD' | 'TIERED_BAND'
    /**
     * The list of interest rate tiers available for the current settings instance
     */
    interestRateTiers?: DepositProductOverdraftInterestRateTier[]
}

/**
 * Used for TIERED interest rates, holds the values to define how the interest is computed
 */
export interface DepositProductOverdraftInterestRateTier {
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
    /**
     * The top-limit value for the account balance in order to determine if this tier is used or not
     */
    endingBalance?: number
    /**
     * The rate used for computing the interest for an account which has the balance less than the ending balance
     */
    interestRate: number
}

/**
 * The overdraft settings of the deposit product
 */
export interface DepositProductOverdraftSettings {
    /**
     * Whether the accounts for this product may have overdraft
     */
    allowOverdraft?: boolean
    /**
     * Whether the accounts for this product may have technical overdraft
     */
    allowTechnicalOverdraft?: boolean
    /**
     * How much money may be taken out for the account to go negative
     */
    maxOverdraftLimit?: number
}

/**
 * The response representation of the PredefinedFee. Represents a fee with a defined name and a fixed value.
 */
export interface DepositProductPredefinedFee {
    /**
     * A list of accounting rules defined for this fee. If null, product default rules are selected.
     */
    accountingRules?: DepositGLAccountingRule[]
    /**
     * The amount of the fee
     */
    amount?: number
    /**
     * External function
     */
    amountCalculationFunctionName?: string
    /**
     * The amount from which the fee is calculated using percentageAmount
     */
    amountCalculationMethod?: 'FLAT' | 'MAMBU_FUNCTION'
    /**
     * Shows when a fee should be applied; to be used with monthly deposit fees
     */
    applyDateMethod?: 'MONTHLY_FROM_ACTIVATION' | 'FIRST_OF_EVERY_MONTH'
    /**
     * Shows the creation date of the fee
     */
    creationDate?: string
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    encodedKey?: string
    /**
     * The type of fee application when disbursement is applied
     */
    feeApplication: 'REQUIRED' | 'OPTIONAL'
    /**
     * The id of the fee
     */
    id?: string
    /**
     * Shows the last modified date of the fee
     */
    lastModifiedDate?: string
    /**
     * The name of the fee
     */
    name?: string
    /**
     * Indicates the state of the fee
     */
    state: 'ACTIVE' | 'INACTIVE'
    /**
     * Shows the event that will trigger a fee
     */
    trigger: 'MANUAL' | 'MONTHLY_FEE' | 'ARBITRARY'
}

/**
 * Tax settings, defines some settings for taxes on the loan product
 */
export interface DepositProductTaxSettings {
    /**
     * Whether withholding taxes are enabled for this product or not
     */
    withholdingTaxEnabled?: boolean
}

/**
 * Template documents of the product.
 */
export interface DocumentTemplate {
    /**
     * The creation date of the document
     */
    creationDate?: string
    /**
     * The document encodedKey
     */
    encodedKey?: string
    /**
     * The last modified date of the document
     */
    lastModifiedDate?: string
    /**
     * The name the document
     */
    name?: string
    /**
     * The type of the template
     */
    type?: 'ACCOUNT' | 'TRANSACTION' | 'ACCOUNT_WITH_TRANSACTIONS'
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

export type GetAllResponse = DepositProduct[]

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
 * Decimal integer, like min/max/default.
 */
export interface IntegerInterval {
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
    /**
     * The minimum value.
     */
    minValue?: number
}

/**
 * Defines the interest payment settings for the deposit product and for deposits created based on this product
 */
export interface InterestPaymentSettings {
    /**
     * List of all dates on which the interest is payed into deposit account
     */
    interestPaymentDates?: MonthAndDay[]
    /**
     * Specifies when the interest should be paid to the deposit account
     */
    interestPaymentPoint?:
        | 'FIRST_DAY_OF_MONTH'
        | 'EVERY_WEEK'
        | 'EVERY_OTHER_WEEK'
        | 'EVERY_MONTH'
        | 'EVERY_3_MONTHS'
        | 'ON_FIXED_DATES'
        | 'DAILY'
        | 'ANNUALLY'
        | 'BI_ANNUALLY'
        | 'ON_ACCOUNT_MATURITY'
}

/**
 * Wrapper for month and day for instances where the year isn't needed
 */
export interface MonthAndDay {
    /**
     * The day in the month
     */
    day?: number
    /**
     * The month of the year
     */
    month?: number
}

/**
 * Overdraft settings for the product
 */
export interface OverdraftInterestSettings {
    /**
     * How many days in a year should be used for interest calculations
     */
    daysInYear?: 'ACTUAL_365_FIXED' | 'ACTUAL_360' | 'ACTUAL_ACTUAL_ISDA' | 'E30_360' | 'E30_42_365' | 'BUS_252'
    /**
     * The balance which is used for the overdraft interest calculation. Default value is MINIMUM. If set to null on a PUT call and the product allows overdrafts, the null value is ignored and not changed.
     */
    interestCalculationBalance?: 'MINIMUM' | 'AVERAGE' | 'END_OF_DAY' | 'MINIMUM_TO_END_OF_DAY' | 'FRENCH_INTEREST_ACCRUAL'
    interestRateSettings?: DepositProductOverdraftInterestRateSettings
}

/**
 * A single change that needs to be made to a resource
 */
export interface PatchOperation {
    /**
     * The field from where a value should be moved, when using move
     */
    from?: string
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
    value?: {
        [k: string]: unknown | undefined
    }
}

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: (await import('./schemas/patch-request.schema.js')).validate as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    get errors() {
        return PatchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new ValidationError(PatchRequest.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
