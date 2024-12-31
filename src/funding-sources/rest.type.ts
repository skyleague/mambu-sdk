/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'
import { validate as SellFundingSourceActionValidator } from './schemas/sell-funding-source-action.schema.js'
import { validate as SellResponseValidator } from './schemas/sell-response.schema.js'

/**
 * The account currency and identification
 */
export interface AccountDetails {
    /**
     * The currency of the account
     */
    currency?: string | undefined
    identification?: AccountIdentification | undefined
}

/**
 * The account identification details
 */
export interface AccountIdentification {
    /**
     * The account unique identifier
     */
    iban?: string | undefined
    other?: OtherAccountIdentification | undefined
}

/**
 * The agent details for a party
 */
export interface Agent {
    financialInstitutionIdentification?: FinancialInstitutionIdentification | undefined
}

/**
 * The details of the card acceptor (merchant) in a transaction hold.
 */
export interface CardAcceptor {
    /**
     * The city in which the card acceptor has the business.
     */
    city?: string | undefined
    /**
     * The country in which the card acceptor has the business.
     */
    country?: string | undefined
    /**
     * The Merchant Category Code of the card acceptor.
     */
    mcc?: number | undefined
    /**
     * The name of the card acceptor.
     */
    name?: string | undefined
    /**
     * The state in which the card acceptor has the business.
     */
    state?: string | undefined
    /**
     * The street in which the card acceptor has the business.
     */
    street?: string | undefined
    /**
     * The ZIP code of the location in which the card acceptor has the business.
     */
    zip?: string | undefined
}

/**
 * A card transaction entry which will have a corresponding a financial transaction performed.
 */
export interface CardTransaction {
    /**
     * Whether the given request should be accepted without balance validations.
     */
    advice: boolean
    /**
     * The amount of money to be withdrawn in the financial transaction.
     */
    amount: number
    cardAcceptor?: CardAcceptor | undefined
    /**
     * The reference token of the card.
     */
    cardToken?: string | undefined
    /**
     * The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency.
     */
    currencyCode?: string | undefined
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string | undefined
    /**
     * The external authorization hold reference ID, which relates this card transaction to a previous authorization hold.
     */
    externalAuthorizationReferenceId?: string | undefined
    /**
     * The external reference ID to be used to reference the card transaction in subsequent requests.
     */
    externalReferenceId: string
    /**
     * The formatted time at which the user made this card transaction.
     */
    userTransactionTime?: string | undefined
}

/**
 * Represents the reference to the underlying documents of the payment.
 */
export interface CreditorReferenceInformation {
    /**
     * The reference information of the creditor's underlying documents
     */
    reference?: string | undefined
    /**
     * The entity that assigns the reference type
     */
    referenceIssuer?: string | undefined
    /**
     * The type of creditor reference
     */
    referenceType?: string | undefined
}

/**
 * The amounts affected after completing the deposit transaction
 */
export interface DepositAffectedAmounts {
    /**
     * Amount of fees involved in a transaction that affects an account with positive balance
     */
    feesAmount?: number | undefined
    /**
     * In the case of an LOAN_FRACTION_BOUGHT this represent the fraction amount which was bought from another investor
     */
    fractionAmount?: number | undefined
    /**
     * Balance change amount involved in a transaction that affects an account with positive balance
     */
    fundsAmount?: number | undefined
    /**
     * Amount of interest involved in a transaction that affects an account with positive balance
     */
    interestAmount?: number | undefined
    /**
     * The amount of money that was added/subtracted from the account by this transaction as overdraft
     */
    overdraftAmount?: number | undefined
    /**
     * Fees amount involved in a transaction that affects an overdraft
     */
    overdraftFeesAmount?: number | undefined
    /**
     * Interest amount involved in a transaction that affects an overdraft
     */
    overdraftInterestAmount?: number | undefined
    /**
     * The amount of money that was added/subtracted from the account by this transaction as technical overdraft
     */
    technicalOverdraftAmount?: number | undefined
    /**
     * The amount of money that was added/subtracted from the account by this transaction as technical overdraft interest
     */
    technicalOverdraftInterestAmount?: number | undefined
}

/**
 * An amount of predefined fee that was applied or paid on an account.
 */
export interface DepositFee {
    /**
     * The amount of the fee that was applied/paid in the transaction for the given predefined fee.
     */
    amount?: number | undefined
    /**
     * The name of the predefined fee
     */
    name?: string | undefined
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    predefinedFeeKey: string
    /**
     * The amount of the taxes on fee that was applied/paid in the transaction.
     */
    taxAmount?: number | undefined
    /**
     * Shows the event that will trigger a fee
     */
    trigger?: 'MANUAL' | 'MONTHLY_FEE' | 'ARBITRARY' | undefined
}

/**
 * Represents the accrued interest amounts for an Interest Applied deposit transaction.
 */
export interface DepositInterestAccruedAmounts {
    /**
     * The amount of positive interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    interestAccrued?: number | undefined
    /**
     * The amount of negative interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    negativeInterestAccrued?: number | undefined
    /**
     * The amount of overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    overdraftInterestAccrued?: number | undefined
    /**
     * The amount of technical overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction
     */
    technicalOverdraftInterestAccrued?: number | undefined
}

/**
 * Holds the deposit overdraft interest settings
 */
export interface DepositOverdraftInterestSettings {
    /**
     * The value of the index interest rate set or changed in this transaction
     */
    indexInterestRate?: number | undefined
    /**
     * The interest rate that was set or changed in this transaction. Used on product interest rate changes or interest tier switches
     */
    interestRate?: number | undefined
}

/**
 * Holds the deposit overdraft settings for a transaction
 */
export interface DepositOverdraftSettings {
    /**
     * The overdraft limit that was set or changed in this transaction
     */
    overdraftLimit?: number | undefined
}

/**
 * The taxes applied within a transaction
 */
export interface DepositTaxes {
    /**
     * The tax rate that was set or changed in this transaction
     */
    taxRate?: number | undefined
}

/**
 * The deposit transaction terms
 */
export interface DepositTerms {
    interestSettings?: DepositTransactionInterestSettings | undefined
    overdraftInterestSettings?: DepositOverdraftInterestSettings | undefined
    overdraftSettings?: DepositOverdraftSettings | undefined
}

/**
 * Represents the action performed on an Deposit Account after which the account's amount changes its value.
 */
export interface DepositTransaction {
    accountBalances?: DepositTransactionBalances | undefined
    /**
     * The key of the deposit transaction where the adjustment for this transaction was made (if any adjustment was involved)
     */
    adjustmentTransactionKey?: string | undefined
    affectedAmounts?: DepositAffectedAmounts | undefined
    /**
     * How much was added/removed in account
     */
    amount?: number | undefined
    /**
     * The block fund id associated with the transaction
     */
    blockId?: string | undefined
    /**
     * The date when corresponding JE is booked (as Organization Time)
     */
    bookingDate?: string | undefined
    /**
     * The branch where the transaction was performed
     */
    branchKey?: string | undefined
    cardTransaction?: CardTransaction | undefined
    /**
     * The center where the transaction was performed
     */
    centreKey?: string | undefined
    /**
     * The date when this deposit transaction was created
     */
    creationDate?: string | undefined
    /**
     * The currency in which this transaction was posted
     */
    currencyCode?: string | undefined
    /**
     * Whether the custom fields of the transaction are archived
     */
    customFieldsArchived?: boolean | undefined
    /**
     * The encoded key of the deposit transaction, auto generated, unique
     */
    encodedKey?: string | undefined
    /**
     * The external id of the deposit transaction, customizable, unique
     */
    externalId?: string | undefined
    /**
     * All the amounts that have been applied or paid within this transaction and involved predefined fees
     */
    fees?: DepositFee[] | undefined
    /**
     * The external id of an account authorization hold
     */
    holdExternalReferenceId?: string | undefined
    /**
     * The id of the deposit transaction, auto generated, unique
     */
    id?: string | undefined
    interestAccruedAmounts?: DepositInterestAccruedAmounts | undefined
    /**
     * The migration event encoded key associated with this deposit account. If this account was imported, track which 'migration event' they came from
     */
    migrationEventKey?: string | undefined
    /**
     * Extra notes about this deposit transaction
     */
    notes?: string | undefined
    /**
     * The encodedKey of the transaction that was adjusted as part of this one. Available only for adjustment transactions
     */
    originalTransactionKey?: string | undefined
    /**
     * The key of the parent deposit account
     */
    parentAccountKey?: string | undefined
    paymentDetails?: PaymentDetails | undefined
    /**
     * The payment order id of the deposit transaction, customizable
     */
    paymentOrderId?: string | undefined
    taxes?: DepositTaxes | undefined
    terms?: DepositTerms | undefined
    /**
     * The till key associated with this transaction
     */
    tillKey?: string | undefined
    transactionDetails?: TransactionDetails | undefined
    transferDetails?: TransferDetails | undefined
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
        | 'ACCOUNT_HOLDER_CHANGED'
        | 'LOAN_FUNDED'
        | 'LOAN_FUNDED_ADJUSTMENT'
        | 'LOAN_REPAID'
        | 'LOAN_REPAID_ADJUSTMENT'
        | 'LOAN_FRACTION_BOUGHT'
        | 'LOAN_FRACTION_BOUGHT_ADJUSTMENT'
        | 'LOAN_FRACTION_SOLD'
        | 'LOAN_FRACTION_SOLD_ADJUSTMENT'
        | 'SEIZED_AMOUNT'
        | undefined
    /**
     * The person that performed the transaction
     */
    userKey?: string | undefined
    /**
     * Date of the entry (eg date of repayment or disbursal, etc.) (as Organization Time)
     */
    valueDate?: string | undefined
}

/**
 * The balances changed within a transaction.
 */
export interface DepositTransactionBalances {
    /**
     * The running balance owed by deposit
     */
    totalBalance?: number | undefined
}

/**
 * The interest settings, holds all the properties regarding interests for the deposit account
 */
export interface DepositTransactionInterestSettings {
    /**
     * The value of the index interest rate set or changed in this transaction
     */
    indexInterestRate?: number | undefined
    /**
     * The interest rate for the deposit account
     */
    interestRate?: number | undefined
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

/**
 * The identification of the financial institution
 */
export interface FinancialInstitutionIdentification {
    /**
     * Business identifier code
     */
    bic?: string | undefined
}

/**
 * Funding source purchase, hold information about a funding source purchase (buyer, price, amount)
 */
export interface FundingSourcePurchase {
    /**
     * The amount bought (a portion of the whole fraction being sold)
     */
    amount: number
    /**
     * The buyer funding account (savings account) key
     */
    depositAccountKey?: string | undefined
    /**
     * The price paid for the amount
     */
    price: number
}

/**
 * Represents other way of identification for the account.
 */
export interface OtherAccountIdentification {
    /**
     * The identification of the payer/payee
     */
    identification?: string | undefined
    /**
     * The identification scheme
     */
    scheme?: string | undefined
}

/**
 * The details of the party for a transaction
 */
export interface Party {
    /**
     * The name of the party
     */
    name?: string | undefined
}

/**
 * The payment information including account identification details
 */
export interface PaymentDetails {
    creditor?: Party | undefined
    creditorAccount?: AccountDetails | undefined
    creditorAgent?: Agent | undefined
    debtor?: Party | undefined
    debtorAccount?: AccountDetails | undefined
    debtorAgent?: Agent | undefined
    paymentIdentification?: PaymentIdentification | undefined
    paymentTypeInformation?: PaymentTypeInformation | undefined
    remittanceInformation?: RemittanceInformation | undefined
}

/**
 * The payment identification details
 */
export interface PaymentIdentification {
    /**
     * Identifier assigned by the initiating party to the transaction
     */
    endToEndIdentification?: string | undefined
    /**
     * Identifier of a payment instruction
     */
    instructionIdentification?: string | undefined
    /**
     * Identifier unique for a period assigned by the first initiating party to the transaction
     */
    transactionIdentification?: string | undefined
}

/**
 * The information specifying the type of transaction
 */
export interface PaymentTypeInformation {
    serviceLevel?: ServiceLevel | undefined
}

/**
 * The information specifying the payment items that are intended to settle
 */
export interface RemittanceInformation {
    structured?: Structured | undefined
    /**
     * Information supplied to match the items of the payment in an unstructured form
     */
    unstructured?: string | undefined
}

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}

/**
 * Allows specifying sell function source action details
 */
export interface SellFundingSourceAction {
    /**
     * Funding source purchase list
     */
    purchases?: FundingSourcePurchase[] | undefined
}

export const SellFundingSourceAction = {
    validate: SellFundingSourceActionValidator as ValidateFunction<SellFundingSourceAction>,
    get schema() {
        return SellFundingSourceAction.validate.schema
    },
    get errors() {
        return SellFundingSourceAction.validate.errors ?? undefined
    },
    is: (o: unknown): o is SellFundingSourceAction => SellFundingSourceAction.validate(o) === true,
    parse: (o: unknown): { right: SellFundingSourceAction } | { left: DefinedError[] } => {
        if (SellFundingSourceAction.is(o)) {
            return { right: o }
        }
        return { left: (SellFundingSourceAction.errors ?? []) as DefinedError[] }
    },
} as const

export type SellResponse = DepositTransaction[]

export const SellResponse = {
    validate: SellResponseValidator as ValidateFunction<SellResponse>,
    get schema() {
        return SellResponse.validate.schema
    },
    get errors() {
        return SellResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SellResponse => SellResponse.validate(o) === true,
    parse: (o: unknown): { right: SellResponse } | { left: DefinedError[] } => {
        if (SellResponse.is(o)) {
            return { right: o }
        }
        return { left: (SellResponse.errors ?? []) as DefinedError[] }
    },
} as const

/**
 * The rules under which the transaction should be processed
 */
export interface ServiceLevel {
    /**
     * The code for a pre-agreed service or level of service between the parties
     */
    code?: string | undefined
}

/**
 * The information specifying the payment items that are intended to settle
 */
export interface Structured {
    creditorReferenceInformation?: CreditorReferenceInformation | undefined
}

/**
 * Contains the details about transaction including fields like transaction channel key and channel id
 */
export interface TransactionDetails {
    /**
     * The id of the transaction channel associated with the transaction details.
     */
    transactionChannelId?: string | undefined
    /**
     * The encoded key of the transaction channel associated with the transaction details.
     */
    transactionChannelKey?: string | undefined
}

/**
 * Represents the transfer details, such as the linked transaction key
 */
export interface TransferDetails {
    /**
     * The key of the related deposit transaction
     */
    linkedDepositTransactionKey?: string | undefined
    /**
     * The key of the related loan transaction
     */
    linkedLoanTransactionKey?: string | undefined
}
