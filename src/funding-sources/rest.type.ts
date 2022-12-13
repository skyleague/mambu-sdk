/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Allows specifying sell function source action details
 */
export interface SellFundingSourceAction {
    /**
     * Funding source purchase list
     */
    purchases?: FundingSourcePurchase[]
}

export const SellFundingSourceAction = {
    validate: require('./schemas/sell-funding-source-action.schema.js') as ValidateFunction<SellFundingSourceAction>,
    get schema() {
        return SellFundingSourceAction.validate.schema
    },
    get errors() {
        return SellFundingSourceAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is SellFundingSourceAction => SellFundingSourceAction.validate(o) === true,
    assert: (o: unknown) => {
        if (!SellFundingSourceAction.validate(o)) {
            throw new AjvValidator.ValidationError(SellFundingSourceAction.errors ?? [])
        }
    },
} as const

export type SellResponse = DepositTransaction[]

export const SellResponse = {
    validate: require('./schemas/sell-response.schema.js') as ValidateFunction<SellResponse>,
    get schema() {
        return SellResponse.validate.schema
    },
    get errors() {
        return SellResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SellResponse => SellResponse.validate(o) === true,
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
 * Funding source purchase, hold information about a funding source purchase (buyer, price, amount)
 */
export interface FundingSourcePurchase {
    /**
     * The buyer funding account (savings account) key
     */
    depositAccountKey?: string
    /**
     * The amount bought (a portion of the whole fraction being sold)
     */
    amount: number
    /**
     * The price paid for the amount
     */
    price: number
}

/**
 * Represents the action performed on an Deposit Account after which the account's amount changes its value.
 */
export interface DepositTransaction {
    /**
     * The migration event encoded key associated with this deposit account. If this account was imported, track which 'migration event' they came from
     */
    migrationEventKey?: string
    transactionDetails?: TransactionDetails
    /**
     * All the amounts that have been applied or paid within this transaction and involved predefined fees
     */
    fees?: DepositFee[]
    /**
     * Extra notes about this deposit transaction
     */
    notes?: string
    affectedAmounts?: DepositAffectedAmounts
    cardTransaction?: CardTransaction
    taxes?: DepositTaxes
    /**
     * The till key associated with this transaction
     */
    tillKey?: string
    /**
     * The key of the deposit transaction where the adjustment for this transaction was made (if any adjustment was involved)
     */
    adjustmentTransactionKey?: string
    /**
     * The type of the deposit transaction
     */
    type?:
        | 'IMPORT'
        | 'WRITE_OFF'
        | 'WRITE_OFF_ADJUSTMENT'
        | 'DEPOSIT'
        | 'ADJUSTMENT'
        | 'WITHDRAWAL'
        | 'WITHDRAWAL_ADJUSTMENT'
        | 'CARD_TRANSACTION_REVERSAL'
        | 'CARD_TRANSACTION_REVERSAL_ADJUSTMENT'
        | 'TRANSFER'
        | 'TRANSFER_ADJUSTMENT'
        | 'FEE_APPLIED'
        | 'FEE_ADJUSTED'
        | 'FEES_DUE_REDUCED'
        | 'INTEREST_APPLIED'
        | 'INTEREST_APPLIED_ADJUSTMENT'
        | 'NET_DIFF_INTEREST'
        | 'FEE_REDUCTION_ADJUSTMENT'
        | 'WITHHOLDING_TAX'
        | 'WITHHOLDING_TAX_ADJUSTMENT'
        | 'INTEREST_RATE_CHANGED'
        | 'OVERDRAFT_INTEREST_RATE_CHANGED'
        | 'OVERDRAFT_LIMIT_CHANGED'
        | 'BRANCH_CHANGED'
        | 'LOAN_FUNDED'
        | 'LOAN_FUNDED_ADJUSTMENT'
        | 'LOAN_REPAID'
        | 'LOAN_REPAID_ADJUSTMENT'
        | 'LOAN_FRACTION_BOUGHT'
        | 'LOAN_FRACTION_BOUGHT_ADJUSTMENT'
        | 'LOAN_FRACTION_SOLD'
        | 'LOAN_FRACTION_SOLD_ADJUSTMENT'
        | 'SEIZED_AMOUNT'
    /**
     * The branch where the transaction was performed
     */
    branchKey?: string
    terms?: DepositTerms
    transferDetails?: TransferDetails
    /**
     * The payment order id of the deposit transaction, customizable
     */
    paymentOrderId?: string
    /**
     * The encoded key of the deposit transaction, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the deposit transaction, auto generated, unique
     */
    id?: string
    paymentDetails?: PaymentDetails
    interestAccruedAmounts?: DepositInterestAccruedAmounts
    /**
     * The encodedKey of the transaction that was adjusted as part of this one. Available only for adjustment transactions
     */
    originalTransactionKey?: string
    /**
     * How much was added/removed in account
     */
    amount?: number
    /**
     * The center where the transaction was performed
     */
    centreKey?: string
    /**
     * The external id of the deposit transaction, customizable, unique
     */
    externalId?: string
    /**
     * Date of the entry (eg date of repayment or disbursal, etc.) (as Organization Time)
     */
    valueDate?: string
    /**
     * The date when this deposit transaction was created
     */
    creationDate?: string
    /**
     * The person that performed the transaction
     */
    userKey?: string
    /**
     * The block fund id associated with the transaction
     */
    blockId?: string
    /**
     * The key of the parent deposit account
     */
    parentAccountKey?: string
    accountBalances?: DepositTransactionBalances
    /**
     * The date when corresponding JE is booked (as Organization Time)
     */
    bookingDate?: string
    /**
     * The external id of an account authorization hold
     */
    holdExternalReferenceId?: string
    /**
     * The currency in which this transaction was posted
     */
    currencyCode?: string
}

/**
 * Contains the details about transaction including fields like transaction channel key and channel id
 */
export interface TransactionDetails {
    /**
     * The id of the transaction channel associated with the transaction details.
     */
    transactionChannelId?: string
    /**
     * The encoded key of the transaction channel associated with the transaction details.
     */
    transactionChannelKey?: string
}

/**
 * An amount of predefined fee that was applied or paid on an account.
 */
export interface DepositFee {
    /**
     * The name of the predefined fee
     */
    name?: string
    /**
     * The amount of the fee that was applied/paid in the transaction for the given predefined fee.
     */
    amount?: number
    /**
     * Shows the event that will trigger a fee
     */
    trigger?: 'MANUAL' | 'MONTHLY_FEE' | 'ARBITRARY'
    /**
     * The amount of the taxes on fee that was applied/paid in the transaction.
     */
    taxAmount?: number
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    predefinedFeeKey: string
}

/**
 * The amounts affected after completing the deposit transaction
 */
export interface DepositAffectedAmounts {
    /**
     * Amount of fees involved in a transaction that affects an account with positive balance
     */
    feesAmount?: number
    /**
     * Interest amount involved in a transaction that affects an overdraft
     */
    overdraftInterestAmount?: number
    /**
     * Fees amount involved in a transaction that affects an overdraft
     */
    overdraftFeesAmount?: number
    /**
     * In the case of an LOAN_FRACTION_BOUGHT this represent the fraction amount which was bought from another investor
     */
    fractionAmount?: number
    /**
     * The amount of money that was added/subtracted from the account by this transaction as technical overdraft
     */
    technicalOverdraftAmount?: number
    /**
     * The amount of money that was added/subtracted from the account by this transaction as overdraft
     */
    overdraftAmount?: number
    /**
     * Amount of interest involved in a transaction that affects an account with positive balance
     */
    interestAmount?: number
    /**
     * The amount of money that was added/subtracted from the account by this transaction as technical overdraft interest
     */
    technicalOverdraftInterestAmount?: number
    /**
     * Balance change amount involved in a transaction that affects an account with positive balance
     */
    fundsAmount?: number
}

/**
 * A card transaction entry which will have a corresponding a financial transaction performed.
 */
export interface CardTransaction {
    /**
     * The external reference ID to be used to reference the card transaction in subsequent requests.
     */
    externalReferenceId: string
    /**
     * The amount of money to be withdrawn in the financial transaction.
     */
    amount: number
    /**
     * Whether the given request should be accepted without balance validations.
     */
    advice: boolean
    /**
     * The external authorization hold reference ID, which relates this card transaction to a previous authorization hold.
     */
    externalAuthorizationReferenceId?: string
    cardAcceptor?: CardAcceptor
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The formatted time at which the user made this card transaction.
     */
    userTransactionTime?: string
    /**
     * The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency.
     */
    currencyCode?: string
    /**
     * The reference token of the card.
     */
    cardToken?: string
}

/**
 * The details of the card acceptor (merchant) in a transaction hold.
 */
export interface CardAcceptor {
    /**
     * The ZIP code of the location in which the card acceptor has the business.
     */
    zip?: string
    /**
     * The country in which the card acceptor has the business.
     */
    country?: string
    /**
     * The city in which the card acceptor has the business.
     */
    city?: string
    /**
     * The street in which the card acceptor has the business.
     */
    street?: string
    /**
     * The name of the card acceptor.
     */
    name?: string
    /**
     * The state in which the card acceptor has the business.
     */
    state?: string
    /**
     * The Merchant Category Code of the card acceptor.
     */
    mcc?: number
}

/**
 * The taxes applied within a transaction
 */
export interface DepositTaxes {
    /**
     * The tax rate that was set or changed in this transaction
     */
    taxRate?: number
}

/**
 * The deposit transaction terms
 */
export interface DepositTerms {
    interestSettings?: DepositTransactionInterestSettings
    overdraftSettings?: DepositOverdraftSettings
    overdraftInterestSettings?: DepositOverdraftInterestSettings
}

/**
 * The interest settings, holds all the properties regarding interests for the deposit account
 */
export interface DepositTransactionInterestSettings {
    /**
     * The interest rate for the deposit account
     */
    interestRate?: number
    /**
     * The value of the index interest rate set or changed in this transaction
     */
    indexInterestRate?: number
}

/**
 * Holds the deposit overdraft settings for a transaction
 */
export interface DepositOverdraftSettings {
    /**
     * The overdraft limit that was set or changed in this transaction
     */
    overdraftLimit?: number
}

/**
 * Holds the deposit overdraft interest settings
 */
export interface DepositOverdraftInterestSettings {
    /**
     * The interest rate that was set or changed in this transaction. Used on product interest rate changes or interest tier switches
     */
    interestRate?: number
    /**
     * The value of the index interest rate set or changed in this transaction
     */
    indexInterestRate?: number
}

/**
 * Represents the transfer details, such as the linked transaction key
 */
export interface TransferDetails {
    /**
     * The key of the related loan transaction
     */
    linkedLoanTransactionKey?: string
    /**
     * The key of the related deposit transaction
     */
    linkedDepositTransactionKey?: string
}

/**
 * The payment information including account identification details
 */
export interface PaymentDetails {
    paymentIdentification?: PaymentIdentification
    debtorAccount?: AccountDetails
    debtor?: Party
    debtorAgent?: Agent
    creditorAgent?: Agent
    remittanceInformation?: RemittanceInformation
    creditorAccount?: AccountDetails
    creditor?: Party
    paymentTypeInformation?: PaymentTypeInformation
}

/**
 * The payment identification details
 */
export interface PaymentIdentification {
    /**
     * Identifier of a payment instruction
     */
    instructionIdentification?: string
    /**
     * Identifier assigned by the initiating party to the transaction
     */
    endToEndIdentification?: string
    /**
     * Identifier unique for a period assigned by the first initiating party to the transaction
     */
    transactionIdentification?: string
}

/**
 * The account currency and identification
 */
export interface AccountDetails {
    /**
     * The currency of the account
     */
    currency?: string
    identification?: AccountIdentification
}

/**
 * The account identification details
 */
export interface AccountIdentification {
    other?: OtherAccountIdentification
    /**
     * The account unique identifier
     */
    iban?: string
}

/**
 * Represents other way of identification for the account.
 */
export interface OtherAccountIdentification {
    /**
     * The identification scheme
     */
    scheme?: string
    /**
     * The identification of the payer/payee
     */
    identification?: string
}

/**
 * The details of the party for a transaction
 */
export interface Party {
    /**
     * The name of the party
     */
    name?: string
}

/**
 * The agent details for a party
 */
export interface Agent {
    financialInstitutionIdentification?: FinancialInstitutionIdentification
}

/**
 * The identification of the financial institution
 */
export interface FinancialInstitutionIdentification {
    /**
     * Business identifier code
     */
    bic?: string
}

/**
 * The information specifying the payment items that are intended to settle
 */
export interface RemittanceInformation {
    structured?: Structured
    /**
     * Information supplied to match the items of the payment in an unstructured form
     */
    unstructured?: string
}

/**
 * The information specifying the payment items that are intended to settle
 */
export interface Structured {
    creditorReferenceInformation?: CreditorReferenceInformation
}

/**
 * Represents the reference to the underlying documents of the payment.
 */
export interface CreditorReferenceInformation {
    /**
     * The reference information of the creditor's underlying documents
     */
    reference?: string
    /**
     * The type of creditor reference
     */
    referenceType?: string
    /**
     * The entity that assigns the reference type
     */
    referenceIssuer?: string
}

/**
 * The information specifying the type of transaction
 */
export interface PaymentTypeInformation {
    serviceLevel?: ServiceLevel
}

/**
 * The rules under which the transaction should be processed
 */
export interface ServiceLevel {
    /**
     * The code for a pre-agreed service or level of service between the parties
     */
    code?: string
}

/**
 * Represents the accrued interest amounts for an Interest Applied deposit transaction.
 */
export interface DepositInterestAccruedAmounts {
    /**
     * The amount of overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    overdraftInterestAccrued?: number
    /**
     * The amount of positive interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    interestAccrued?: number
    /**
     * The amount of technical overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    technicalOverdraftInterestAccrued?: number
    /**
     * The amount of negative interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    negativeInterestAccrued?: number
}

/**
 * The balances changed within a transaction.
 */
export interface DepositTransactionBalances {
    /**
     * The running balance owed by deposit
     */
    totalBalance?: number
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
