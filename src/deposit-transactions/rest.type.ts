/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Represents the request payload for creating a transaction of type DEPOSIT.
 */
export interface DepositTransactionInput {
    transactionDetails?: TransactionDetailsInput
    /**
     * The amount that was added to an account
     */
    amount: number
    /**
     * Extra notes about this deposit transaction
     */
    notes?: string
    /**
     * The payment order id of the deposit transaction, customizable
     */
    paymentOrderId?: string
    /**
     * The external id of the deposit transaction, customizable, unique
     */
    externalId?: string
    /**
     * Flag indicating that a maximum balance validation should be skipped
     */
    skipMaximumBalanceValidation?: boolean
    /**
     * The date of Journal Entry (as Organization Time)
     */
    bookingDate?: string
    /**
     * The entry date of the deposit (as Organization Time)
     */
    valueDate?: string
    paymentDetails?: PaymentDetails
    /**
     * The external id of an account authorization hold
     */
    holdExternalReferenceId?: string
}

export const DepositTransactionInput = {
    validate: require('./schemas/deposit-transaction-input.schema.js') as ValidateFunction<DepositTransactionInput>,
    get schema() {
        return DepositTransactionInput.validate.schema
    },
    is: (o: unknown): o is DepositTransactionInput => DepositTransactionInput.validate(o) === true,
    assert: (o: unknown) => {
        if (!DepositTransactionInput.validate(o)) {
            throw new AjvValidator.ValidationError(DepositTransactionInput.validate.errors ?? [])
        }
    },
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
 * Represents the input for a withdrawal transaction.
 */
export interface WithdrawalDepositTransactionInput {
    transactionDetails?: TransactionDetailsInput
    /**
     * The amount to withdraw from account
     */
    amount: number
    /**
     * Extra notes about this deposit transaction
     */
    notes?: string
    /**
     * The payment order id of the withdrawal transaction, customizable
     */
    paymentOrderId?: string
    /**
     * The external id of the withdrawal transaction, customizable, unique
     */
    externalId?: string
    /**
     * The date of the withdrawal when the transaction is logged into accounting. If not specified it is considered the value date
     */
    bookingDate?: string
    /**
     * The entry date of the withdrawal. If not specified it is considered the current date (as Organization Time)
     */
    valueDate?: string
    paymentDetails?: PaymentDetails
    /**
     * The external id of an account authorization hold
     */
    holdExternalReferenceId?: string
}

export const WithdrawalDepositTransactionInput = {
    validate:
        require('./schemas/withdrawal-deposit-transaction-input.schema.js') as ValidateFunction<WithdrawalDepositTransactionInput>,
    get schema() {
        return WithdrawalDepositTransactionInput.validate.schema
    },
    is: (o: unknown): o is WithdrawalDepositTransactionInput => WithdrawalDepositTransactionInput.validate(o) === true,
    assert: (o: unknown) => {
        if (!WithdrawalDepositTransactionInput.validate(o)) {
            throw new AjvValidator.ValidationError(WithdrawalDepositTransactionInput.validate.errors ?? [])
        }
    },
} as const

/**
 * Contains the details about transaction including fields like transaction channel key and channel ID
 */
export interface TransactionDetailsInput {
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

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
