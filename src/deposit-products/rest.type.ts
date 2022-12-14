/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Allows specifying the batch update action details for a deposit product
 */
export interface DepositProductAction {
    /**
     * The action type to be applied. When UPDATE_INTEREST_SETTINGS action type is used, all the existing deposit accounts will be updated with the latest interest-related fields at the end of day job execution
     */
    action: 'UPDATE_INTEREST_SETTINGS'
}

export const DepositProductAction = {
    validate: require('./schemas/deposit-product-action.schema.js') as ValidateFunction<DepositProductAction>,
    get schema() {
        return DepositProductAction.validate.schema
    },
    get errors() {
        return DepositProductAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProductAction => DepositProductAction.validate(o) === true,
    assert: (o: unknown) => {
        if (!DepositProductAction.validate(o)) {
            throw new AjvValidator.ValidationError(DepositProductAction.errors ?? [])
        }
    },
} as const

/**
 * Represents a response for executing batch update action for a deposit product
 */
export interface DepositProductActionResponse {
    /**
     * The state of the deposit product action
     */
    state?: 'QUEUED'
}

export const DepositProductActionResponse = {
    validate: require('./schemas/deposit-product-action-response.schema.js') as ValidateFunction<DepositProductActionResponse>,
    get schema() {
        return DepositProductActionResponse.validate.schema
    },
    get errors() {
        return DepositProductActionResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProductActionResponse => DepositProductActionResponse.validate(o) === true,
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

export type GetAllResponse = DepositProduct[]

export const GetAllResponse = {
    validate: require('./schemas/get-all-response.schema.js') as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

/**
 * A deposit product defines the terms and constraints on deposit accounts
 */
export interface DepositProduct {
    /**
     * Some notes/a description about the product
     */
    notes?: string
    /**
     * The last date the product was updated
     */
    lastModifiedDate?: string
    availabilitySettings?: DepositProductAvailabilitySettings
    feesSettings?: DepositProductFeeSettings
    /**
     * Template documents of the product.
     */
    templates?: DocumentTemplate[]
    taxSettings?: DepositProductTaxSettings
    offsetSettings?: DepositProductOffsetSettings
    /**
     * The date this product was created
     */
    creationDate?: string
    /**
     * Indicates the type of product.
     */
    type: 'CURRENT_ACCOUNT' | 'REGULAR_SAVINGS' | 'FIXED_DEPOSIT' | 'SAVINGS_PLAN' | 'INVESTOR_ACCOUNT'
    creditArrangementSettings?: CreditArrangementSettings
    currencySettings?: DepositProductCurrencySettings
    maturitySettings?: DepositMaturitySettings
    newAccountSettings: DepositNewAccountSettings
    interestSettings?: DepositProductInterestSettings
    accountingSettings: DepositProductAccountingSettings
    /**
     * The name of the product
     */
    name: string
    /**
     * The encoded key of the deposit product, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the product, can be generated and customized, unique
     */
    id: string
    /**
     * Indicates the current state of the product
     */
    state: 'ACTIVE' | 'INACTIVE'
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
    overdraftSettings?: DepositProductOverdraftSettings
    internalControls?: DepositProductInternalControls
    overdraftInterestSettings?: OverdraftInterestSettings
}

export const DepositProduct = {
    validate: require('./schemas/deposit-product.schema.js') as ValidateFunction<DepositProduct>,
    get schema() {
        return DepositProduct.validate.schema
    },
    get errors() {
        return DepositProduct.validate.errors ?? undefined
    },
    is: (o: unknown): o is DepositProduct => DepositProduct.validate(o) === true,
    assert: (o: unknown) => {
        if (!DepositProduct.validate(o)) {
            throw new AjvValidator.ValidationError(DepositProduct.errors ?? [])
        }
    },
} as const

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: require('./schemas/patch-request.schema.js') as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    get errors() {
        return PatchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new AjvValidator.ValidationError(PatchRequest.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * Holds information about product availability.
 */
export interface DepositProductAvailabilitySettings {
    branchSettings?: BranchSettings
    /**
     * Holds the entities this product is available for. i.e Individuals
     */
    availableFor?: ('INDIVIDUALS' | 'PURE_GROUPS')[]
}

/**
 * Holds information about branch availability for the product.
 */
export interface BranchSettings {
    /**
     * Indicates if this product should be available for all branches
     */
    forAllBranches?: boolean
    /**
     * Holds the encoded keys of the branches this product should be available for.
     */
    availableProductBranches?: string[]
}

/**
 * Defines fees settings for the product.
 */
export interface DepositProductFeeSettings {
    /**
     * List of all fees that can be applied for accounts of this loan product.
     */
    fees?: DepositProductPredefinedFee[]
    /**
     * Only if true users will be able to apply fees, for current object, of type 'Other'; these fees can have any amount.
     */
    allowArbitraryFees?: boolean
}

/**
 * The response representation of the PredefinedFee. Represents a fee with a defined name and a fixed value.
 */
export interface DepositProductPredefinedFee {
    /**
     * The amount of the fee
     */
    amount?: number
    /**
     * Shows the last modified date of the fee
     */
    lastModifiedDate?: string
    /**
     * The amount from which the fee is calculated using percentageAmount
     */
    amountCalculationMethod?: 'FLAT'
    /**
     * Shows the event that will trigger a fee
     */
    trigger: 'MANUAL' | 'MONTHLY_FEE' | 'ARBITRARY'
    /**
     * Shows the creation date of the fee
     */
    creationDate?: string
    /**
     * A list of accounting rules defined for this fee. If null, product default rules are selected.
     */
    accountingRules?: DepositGLAccountingRule[]
    /**
     * The name of the fee
     */
    name?: string
    /**
     * The type of fee application when disbursement is applied
     */
    feeApplication: 'REQUIRED' | 'OPTIONAL'
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the fee
     */
    id?: string
    /**
     * Indicates the state of the fee
     */
    state: 'ACTIVE' | 'INACTIVE'
    /**
     * Shows when a fee should be applied; to be used with monthly deposit fees
     */
    applyDateMethod?: 'MONTHLY_FROM_ACTIVATION' | 'FIRST_OF_EVERY_MONTH'
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
     * The encoded key of the account that is mapped to the financialResource
     */
    glAccountKey: string
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
}

/**
 * Template documents of the product.
 */
export interface DocumentTemplate {
    /**
     * The name the document
     */
    name?: string
    /**
     * The document encodedKey
     */
    encodedKey?: string
    /**
     * The creation date of the document
     */
    creationDate?: string
    /**
     * The type of the template
     */
    type?: 'ACCOUNT' | 'TRANSACTION' | 'ACCOUNT_WITH_TRANSACTIONS'
    /**
     * The last modified date of the document
     */
    lastModifiedDate?: string
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
 * The offset settings, holds information about offset.
 */
export interface DepositProductOffsetSettings {
    /**
     * Specify if the product allow to create accounts which can be used as offset for loans
     */
    allowOffset?: boolean
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
 * Currency settings for the product.
 */
export interface DepositProductCurrencySettings {
    /**
     * Currencies that can be used by accounts of this product
     */
    currencies?: Currency[]
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
 * The maturity settings for the product.
 */
export interface DepositMaturitySettings {
    /**
     * maturity period measurement unit
     */
    maturityPeriodUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    maturityPeriod?: IntegerInterval
}

/**
 * Decimal integer, like min/max/default.
 */
export interface IntegerInterval {
    /**
     * The minimum value.
     */
    minValue?: number
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
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
 * The interest settings, defines constraints regarding interest that will be used on the deposit account based on this product.
 */
export interface DepositProductInterestSettings {
    interestRateSettings?: DepositProductInterestRateSettings
    /**
     * Whether locked accounts still collect Interest or not
     */
    collectInterestWhenLocked?: boolean
    /**
     * The balance which is used for the Interest calculation
     */
    interestCalculationBalance?: 'MINIMUM' | 'AVERAGE' | 'END_OF_DAY' | 'MINIMUM_TO_END_OF_DAY'
    /**
     * If interest should be payed into the deposit account
     */
    interestPaidIntoAccount?: boolean
    /**
     * The maximum balance used for Interest calculation
     */
    maximumBalance?: number
    /**
     * How many days in a year should be used for interest calculations
     */
    daysInYear?: 'ACTUAL_365_FIXED' | 'ACTUAL_360' | 'ACTUAL_ACTUAL_ISDA' | 'E30_360' | 'E30_42_365' | 'BUS_252'
    interestPaymentSettings?: InterestPaymentSettings
}

/**
 * The interest settings, defines constraints regarding interest that will be used on the deposit created based on this product.
 */
export interface DepositProductInterestRateSettings {
    interestRate?: DecimalInterval
    /**
     * Interest rate review frequency measurement unit
     */
    interestRateReviewUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    /**
     * Indicator whether the deposit product allows negative values for interest rate
     */
    allowNegativeInterestRate?: boolean
    /**
     * Interest calculation method: fixed or (interest spread + active organization index interest rate)
     */
    interestRateSource?: 'FIXED_INTEREST_RATE' | 'INDEX_INTEREST_RATE'
    /**
     * The interval used for determining how often is interest charged
     */
    interestChargeFrequency?: 'ANNUALIZED' | 'EVERY_MONTH' | 'EVERY_FOUR_WEEKS' | 'EVERY_WEEK' | 'EVERY_DAY' | 'EVERY_X_DAYS'
    /**
     * If the product supports this option, specify if the interest should be accrued after the account maturity date
     */
    accrueInterestAfterMaturity?: boolean
    /**
     * The option for how is the interest rate determined when being accrued for an account
     */
    interestRateTerms?: 'FIXED' | 'TIERED' | 'TIERED_PERIOD' | 'TIERED_BAND'
    /**
     * the count of units to apply over the interval
     */
    interestChargeFrequencyCount?: number
    /**
     * Interest rate review frequency unit count
     */
    interestRateReviewCount?: number
    /**
     * Index rate source key.
     */
    indexSourceKey?: string
    /**
     * The list of interest rate tiers available for the current settings instance
     */
    interestRateTiers?: DepositProductInterestRateTier[]
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
}

/**
 * Decimal constraints, like min/max/default.
 */
export interface DecimalInterval {
    /**
     * The minimum value.
     */
    minValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
}

/**
 * Used or TIERED interest rates, holds the values to define how the interest is computed
 */
export interface DepositProductInterestRateTier {
    /**
     * The top-limit value for the account balance in order to determine if this tier is used or not
     */
    endingBalance?: number
    /**
     * The rate used for computing the interest for an account which has the balance less than the ending balance
     */
    interestRate: number
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
    /**
     * The top-limit value for the account period since activation in order to determine if this tier is used or not
     */
    endingDay?: number
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
     * The month of the year
     */
    month?: number
    /**
     * The day in the month
     */
    day?: number
}

/**
 * Accounting settings, defines the accounting settings for the product.
 */
export interface DepositProductAccountingSettings {
    /**
     * A list of accounting rules for the product.
     */
    accountingMethod: 'NONE' | 'CASH' | 'ACCRUAL'
    /**
     * A list of accounting rules for the product.
     */
    accountingRules?: DepositGLAccountingRule[]
    /**
     * A list of accounting rules for the product.
     */
    interestAccruedAccountingMethod?: 'NONE' | 'DAILY' | 'END_OF_MONTH'
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
 * Constraints and automated actions and that will be applied on the accounts.
 */
export interface DepositProductInternalControls {
    /**
     * Specifies the number of days for an account to be fully paid in order to auto close it.
     */
    dormancyPeriodDays?: number
    /**
     * Recommended amount for a deposit
     */
    recommendedDepositAmount?: number
    openingBalance?: AmountDecimalInterval
    /**
     * Max amount per withdrawal
     */
    maxWithdrawalAmount?: number
}

/**
 * Decimal constraints, like min/max/default.
 */
export interface AmountDecimalInterval {
    /**
     * The minimum value.
     */
    minValue?: number
    /**
     * The maximum value.
     */
    maxValue?: number
    /**
     * The default value, will be used in case no other value was filled in by the user.
     */
    defaultValue?: number
}

/**
 * Overdraft settings for the product
 */
export interface OverdraftInterestSettings {
    interestRateSettings?: DepositProductOverdraftInterestRateSettings
    /**
     * How many days in a year should be used for interest calculations
     */
    daysInYear?: 'ACTUAL_365_FIXED' | 'ACTUAL_360' | 'ACTUAL_ACTUAL_ISDA' | 'E30_360' | 'E30_42_365' | 'BUS_252'
    /**
     * The balance which is used for the overdraft interest calculation. Default value is MINIMUM. If set to null on a PUT call and the product allows overdrafts, the null value is ignored and not changed.
     */
    interestCalculationBalance?: 'MINIMUM' | 'AVERAGE' | 'END_OF_DAY' | 'MINIMUM_TO_END_OF_DAY'
}

/**
 * The overdraft interest settings, defines constraints regarding interest that will be used on the account created based on this product.
 */
export interface DepositProductOverdraftInterestRateSettings {
    interestRate?: DecimalInterval
    /**
     * Interest rate review frequency measurement unit
     */
    interestRateReviewUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    /**
     * Interest calculation method: fixed or (interest spread + active organization index interest rate)
     */
    interestRateSource?: 'FIXED_INTEREST_RATE' | 'INDEX_INTEREST_RATE'
    /**
     * Interest rate review frequency unit count
     */
    interestRateReviewCount?: number
    /**
     * Index rate source key.
     */
    indexSourceKey?: string
    /**
     * The list of interest rate tiers available for the current settings instance
     */
    interestRateTiers?: DepositProductOverdraftInterestRateTier[]
    /**
     * The interval used for determining how often is interest charged
     */
    interestChargeFrequency?: 'ANNUALIZED' | 'EVERY_MONTH' | 'EVERY_FOUR_WEEKS' | 'EVERY_WEEK' | 'EVERY_DAY' | 'EVERY_X_DAYS'
    /**
     * The option for how is the interest rate determined when being accrued for an account
     */
    interestRateTerms?: 'FIXED' | 'TIERED' | 'TIERED_PERIOD' | 'TIERED_BAND'
    /**
     * the count of units to apply over the interval
     */
    interestChargeFrequencyCount?: number
}

/**
 * Used or TIERED interest rates, holds the values to define how the interest is computed
 */
export interface DepositProductOverdraftInterestRateTier {
    /**
     * The top-limit value for the account balance in order to determine if this tier is used or not
     */
    endingBalance?: number
    /**
     * The rate used for computing the interest for an account which has the balance less than the ending balance
     */
    interestRate: number
    /**
     * The encoded key of the interest rate tier, auto generated, unique
     */
    encodedKey?: string
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
    value?: {
        [k: string]: unknown | undefined
    }
}
