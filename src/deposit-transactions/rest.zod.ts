/**
 * Generated by @skyleague/therefore
 * Do not manually touch this
 */
// biome-ignore-all lint: this file is generated
/* eslint-disable */

import { z } from 'zod/v4'

export const CreditorReferenceInformation = z
    .object({
        reference: z.string().describe(`The reference information of the creditor's underlying documents`).optional(),
        referenceIssuer: z.string().describe('The entity that assigns the reference type').optional(),
        referenceType: z.string().describe('The type of creditor reference').optional(),
    })
    .describe('Represents the reference to the underlying documents of the payment.')

export type CreditorReferenceInformation = z.infer<typeof CreditorReferenceInformation>

export const OtherAccountIdentification = z
    .object({
        identification: z.string().describe('The identification of the payer/payee').optional(),
        scheme: z.string().describe('The identification scheme').optional(),
    })
    .describe('Represents other way of identification for the account.')

export type OtherAccountIdentification = z.infer<typeof OtherAccountIdentification>

export const Structured = z
    .object({
        creditorReferenceInformation: CreditorReferenceInformation.optional(),
    })
    .describe('The information specifying the payment items that are intended to settle')

export type Structured = z.infer<typeof Structured>

export const ServiceLevel = z
    .object({
        code: z.string().describe('The code for a pre-agreed service or level of service between the parties').optional(),
    })
    .describe('The rules under which the transaction should be processed')

export type ServiceLevel = z.infer<typeof ServiceLevel>

export const FinancialInstitutionIdentification = z
    .object({
        bic: z.string().describe('Business identifier code').optional(),
    })
    .describe('The identification of the financial institution')

export type FinancialInstitutionIdentification = z.infer<typeof FinancialInstitutionIdentification>

export const AccountIdentification = z
    .object({
        iban: z.string().describe('The account unique identifier').optional(),
        other: OtherAccountIdentification.optional(),
    })
    .describe('The account identification details')

export type AccountIdentification = z.infer<typeof AccountIdentification>

export const RemittanceInformation = z
    .object({
        structured: Structured.optional(),
        unstructured: z
            .string()
            .describe('Information supplied to match the items of the payment in an unstructured form')
            .optional(),
    })
    .describe('The information specifying the payment items that are intended to settle')

export type RemittanceInformation = z.infer<typeof RemittanceInformation>

export const PaymentTypeInformation = z
    .object({
        serviceLevel: ServiceLevel.optional(),
    })
    .describe('The information specifying the type of transaction')

export type PaymentTypeInformation = z.infer<typeof PaymentTypeInformation>

export const PaymentIdentification = z
    .object({
        endToEndIdentification: z.string().describe('Identifier assigned by the initiating party to the transaction').optional(),
        instructionIdentification: z.string().describe('Identifier of a payment instruction').optional(),
        transactionIdentification: z
            .string()
            .describe('Identifier unique for a period assigned by the first initiating party to the transaction')
            .optional(),
    })
    .describe('The payment identification details')

export type PaymentIdentification = z.infer<typeof PaymentIdentification>

export const Agent = z
    .object({
        financialInstitutionIdentification: FinancialInstitutionIdentification.optional(),
    })
    .describe('The agent details for a party')

export type Agent = z.infer<typeof Agent>

export const AccountDetails = z
    .object({
        currency: z.string().describe('The currency of the account').optional(),
        identification: AccountIdentification.optional(),
    })
    .describe('The account currency and identification')

export type AccountDetails = z.infer<typeof AccountDetails>

export const Party = z
    .object({
        name: z.string().describe('The name of the party').optional(),
    })
    .describe('The details of the party for a transaction')

export type Party = z.infer<typeof Party>

export const DepositOverdraftSettings = z
    .object({
        overdraftLimit: z.number().describe('The overdraft limit that was set or changed in this transaction').optional(),
    })
    .describe('Holds the deposit overdraft settings for a transaction')

export type DepositOverdraftSettings = z.infer<typeof DepositOverdraftSettings>

export const DepositOverdraftInterestSettings = z
    .object({
        indexInterestRate: z
            .number()
            .describe('The value of the index interest rate set or changed in this transaction')
            .optional(),
        interestRate: z
            .number()
            .describe(
                'The interest rate that was set or changed in this transaction. Used on product interest rate changes or interest tier switches',
            )
            .optional(),
    })
    .describe('Holds the deposit overdraft interest settings')

export type DepositOverdraftInterestSettings = z.infer<typeof DepositOverdraftInterestSettings>

export const DepositTransactionInterestSettings = z
    .object({
        indexInterestRate: z
            .number()
            .describe('The value of the index interest rate set or changed in this transaction')
            .optional(),
        interestRate: z.number().describe('The interest rate for the deposit account').optional(),
    })
    .describe('The interest settings, holds all the properties regarding interests for the deposit account')

export type DepositTransactionInterestSettings = z.infer<typeof DepositTransactionInterestSettings>

export const CardAcceptor = z
    .object({
        city: z.string().describe('The city in which the card acceptor has the business.').optional(),
        country: z.string().describe('The country in which the card acceptor has the business.').optional(),
        mcc: z.number().int().describe('The Merchant Category Code of the card acceptor.').optional(),
        name: z.string().describe('The name of the card acceptor.').optional(),
        state: z.string().describe('The state in which the card acceptor has the business.').optional(),
        street: z.string().describe('The street in which the card acceptor has the business.').optional(),
        zip: z.string().describe('The ZIP code of the location in which the card acceptor has the business.').optional(),
    })
    .describe('The details of the card acceptor (merchant) in a transaction hold.')

export type CardAcceptor = z.infer<typeof CardAcceptor>

export const TransactionDetailsInput = z
    .object({
        transactionChannelId: z
            .string()
            .describe('The id of the transaction channel associated with the transaction details.')
            .optional(),
        transactionChannelKey: z
            .string()
            .describe('The encoded key of the transaction channel associated with the transaction details.')
            .optional(),
    })
    .describe('Contains the details about transaction including fields like transaction channel key and channel ID')

export type TransactionDetailsInput = z.infer<typeof TransactionDetailsInput>

export const PaymentDetails = z
    .object({
        creditor: Party.optional(),
        creditorAccount: AccountDetails.optional(),
        creditorAgent: Agent.optional(),
        debtor: Party.optional(),
        debtorAccount: AccountDetails.optional(),
        debtorAgent: Agent.optional(),
        paymentIdentification: PaymentIdentification.optional(),
        paymentTypeInformation: PaymentTypeInformation.optional(),
        remittanceInformation: RemittanceInformation.optional(),
    })
    .describe('The payment information including account identification details')

export type PaymentDetails = z.infer<typeof PaymentDetails>

export const TransferDetails = z
    .object({
        linkedDepositTransactionKey: z.string().describe('The key of the related deposit transaction').optional(),
        linkedLoanTransactionKey: z.string().describe('The key of the related loan transaction').optional(),
    })
    .describe('Represents the transfer details, such as the linked transaction key')

export type TransferDetails = z.infer<typeof TransferDetails>

export const TransactionDetails = z
    .object({
        transactionChannelId: z
            .string()
            .describe('The id of the transaction channel associated with the transaction details.')
            .optional(),
        transactionChannelKey: z
            .string()
            .describe('The encoded key of the transaction channel associated with the transaction details.')
            .optional(),
    })
    .describe('Contains the details about transaction including fields like transaction channel key and channel id')

export type TransactionDetails = z.infer<typeof TransactionDetails>

export const DepositTerms = z
    .object({
        interestSettings: DepositTransactionInterestSettings.optional(),
        overdraftInterestSettings: DepositOverdraftInterestSettings.optional(),
        overdraftSettings: DepositOverdraftSettings.optional(),
    })
    .describe('The deposit transaction terms')

export type DepositTerms = z.infer<typeof DepositTerms>

export const DepositTaxes = z
    .object({
        taxRate: z.number().describe('The tax rate that was set or changed in this transaction').optional(),
    })
    .describe('The taxes applied within a transaction')

export type DepositTaxes = z.infer<typeof DepositTaxes>

export const DepositInterestAccruedAmounts = z
    .object({
        interestAccrued: z
            .number()
            .describe(
                'The amount of positive interest accrued since last interest application/activation date and applied within Interest Applied transaction',
            )
            .optional(),
        negativeInterestAccrued: z
            .number()
            .describe(
                'The amount of negative interest accrued since last interest application/activation date and applied within Interest Applied transaction',
            )
            .optional(),
        overdraftInterestAccrued: z
            .number()
            .describe(
                'The amount of overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction',
            )
            .optional(),
        technicalOverdraftInterestAccrued: z
            .number()
            .describe(
                'The amount of technical overdraft interest accrued since last interest application/activation date and applied within Interest Applied transaction',
            )
            .optional(),
    })
    .describe('Represents the accrued interest amounts for an Interest Applied deposit transaction.')

export type DepositInterestAccruedAmounts = z.infer<typeof DepositInterestAccruedAmounts>

export const DepositFee = z
    .object({
        amount: z
            .number()
            .describe('The amount of the fee that was applied/paid in the transaction for the given predefined fee.')
            .optional(),
        name: z.string().describe('The name of the predefined fee').optional(),
        predefinedFeeKey: z.string().describe('The encoded key of the predefined fee, auto generated, unique'),
        taxAmount: z.number().describe('The amount of the taxes on fee that was applied/paid in the transaction.').optional(),
        trigger: z.enum(['MANUAL', 'MONTHLY_FEE', 'ARBITRARY']).describe('Shows the event that will trigger a fee').optional(),
    })
    .describe('An amount of predefined fee that was applied or paid on an account.')

export type DepositFee = z.infer<typeof DepositFee>

export const CardTransaction = z
    .object({
        advice: z.boolean().describe('Whether the given request should be accepted without balance validations.'),
        amount: z.number().describe('The amount of money to be withdrawn in the financial transaction.'),
        cardAcceptor: CardAcceptor.optional(),
        cardToken: z.string().describe('The reference token of the card.').optional(),
        currencyCode: z
            .string()
            .describe(
                'The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency.',
            )
            .optional(),
        encodedKey: z.string().describe('The encoded key of the entity, generated, globally unique').optional(),
        externalAuthorizationReferenceId: z
            .string()
            .describe(
                'The external authorization hold reference ID, which relates this card transaction to a previous authorization hold.',
            )
            .optional(),
        externalReferenceId: z
            .string()
            .describe('The external reference ID to be used to reference the card transaction in subsequent requests.'),
        userTransactionTime: z.string().describe('The formatted time at which the user made this card transaction.').optional(),
    })
    .describe('A card transaction entry which will have a corresponding a financial transaction performed.')

export type CardTransaction = z.infer<typeof CardTransaction>

export const DepositAffectedAmounts = z
    .object({
        feesAmount: z
            .number()
            .describe('Amount of fees involved in a transaction that affects an account with positive balance')
            .optional(),
        fractionAmount: z
            .number()
            .describe(
                'In the case of an LOAN_FRACTION_BOUGHT this represent the fraction amount which was bought from another investor',
            )
            .optional(),
        fundsAmount: z
            .number()
            .describe('Balance change amount involved in a transaction that affects an account with positive balance')
            .optional(),
        interestAmount: z
            .number()
            .describe('Amount of interest involved in a transaction that affects an account with positive balance')
            .optional(),
        overdraftAmount: z
            .number()
            .describe('The amount of money that was added/subtracted from the account by this transaction as overdraft')
            .optional(),
        overdraftFeesAmount: z.number().describe('Fees amount involved in a transaction that affects an overdraft').optional(),
        overdraftInterestAmount: z
            .number()
            .describe('Interest amount involved in a transaction that affects an overdraft')
            .optional(),
        technicalOverdraftAmount: z
            .number()
            .describe('The amount of money that was added/subtracted from the account by this transaction as technical overdraft')
            .optional(),
        technicalOverdraftInterestAmount: z
            .number()
            .describe(
                'The amount of money that was added/subtracted from the account by this transaction as technical overdraft interest',
            )
            .optional(),
    })
    .describe('The amounts affected after completing the deposit transaction')

export type DepositAffectedAmounts = z.infer<typeof DepositAffectedAmounts>

export const DepositTransactionBalances = z
    .object({
        totalBalance: z.number().describe('The running balance owed by deposit').optional(),
    })
    .describe('The balances changed within a transaction.')

export type DepositTransactionBalances = z.infer<typeof DepositTransactionBalances>

export const DepositTransactionBulkableInputDTO = z
    .object({
        accountId: z.string().describe('The id of the account'),
        amount: z.number().describe('The amount that was added to an account'),
        externalId: z.string().describe('The external id of the deposit transaction, customizable, unique').optional(),
        holdExternalReferenceId: z.string().describe('The external id of an account authorization hold').optional(),
        notes: z.string().describe('Extra notes about this deposit transaction').optional(),
        paymentDetails: PaymentDetails.optional(),
        paymentOrderId: z.string().describe('The payment order id of the deposit transaction, customizable').optional(),
        skipMaximumBalanceValidation: z
            .boolean()
            .describe('Flag indicating that a maximum balance validation should be skipped')
            .optional(),
        transactionDetails: TransactionDetailsInput.optional(),
    })
    .describe('Represents the request payload for creating a deposit transactions when sent in bulk.')

export type DepositTransactionBulkableInputDTO = z.infer<typeof DepositTransactionBulkableInputDTO>

export const DepositTransactionSortingCriteria = z
    .object({
        field: z
            .enum([
                'id',
                'externalId',
                'parentAccountId',
                'productId',
                'valueDate',
                'creationDate',
                'amount',
                'branchId',
                'centreId',
                'tillId',
                'fees.name',
                'transactionDetails.transactionChannelId',
                'taxes.taxRate',
                'terms.interestSettings.interestRate',
                'terms.overdraftInterestSettings.interestRate',
                'terms.overdraftSettings.overdraftLimit',
                'affectedAmounts.interestAmount',
                'affectedAmounts.feesAmount',
                'accountBalances.totalBalance',
            ])
            .describe(
                'The field to use to sort the selection. The field can be an enumerated value or a custom field using the format [customFieldSetId].[customFieldId].',
            ),
        order: z.enum(['ASC', 'DESC']).describe('The sorting order: `ASC` or `DESC`. The default order is `DESC`.').optional(),
    })
    .describe('The sorting criteria used for Deposit transactions client directed query')

export type DepositTransactionSortingCriteria = z.infer<typeof DepositTransactionSortingCriteria>

export const DepositTransactionFilterCriteria = z
    .object({
        field: z.union([
            z
                .enum([
                    'encodedKey',
                    'id',
                    'externalId',
                    'holdExternalReferenceId',
                    'productID',
                    'currencyCode',
                    'branchID',
                    'branchKey',
                    'centreID',
                    'centreKey',
                    'tillID',
                    'tillKey',
                    'amount',
                    'affectedAmounts.fundsAmount',
                    'affectedAmounts.interestAmount',
                    'affectedAmounts.feesAmount',
                    'parentAccountKey',
                    'parentAccountID',
                    'productTypeKey',
                    'paymentOrderId',
                    'userKey',
                    'adjustmentTransactionID',
                    'adjustmentTransactionKey',
                    'originalTransactionKey',
                    'originalTransactionID',
                    'transactionDetails.transactionChannelKey',
                    'transactionDetails.transactionChannelId',
                    'type',
                    'creationDate',
                    'accountBalances.totalBalance',
                    'valueDate',
                    'taxes.taxRate',
                    'terms.interestSettings.interestRate',
                    'fees.trigger',
                    'fees.name',
                    'fees.predefinedFeeKey',
                    'wasAdjusted',
                    'typeIsAdjustment',
                    'affectedAmounts.overdraftAmount',
                    'affectedAmounts.overdraftInterestAmount',
                    'affectedAmounts.overdraftFeesAmount',
                    'affectedAmounts.technicalOverdraftAmount',
                    'affectedAmounts.technicalOverdraftInterestAmount',
                    'terms.overdraftInterestSettings.interestRate',
                    'terms.overdraftInterestSettings.indexInterestRate',
                ])
                .describe(
                    'The fields to search can be the enumerated values or a custom field using the format [customFieldSetId].[customFieldId].\\n|Field with limited capabilities          |Data Type |Operators   |\\n|-----------------------------------------|----------|------------|\\n|originalTransactionKey                   |KEY       |EQUALS, IN  |\\n|transactionDetails.transactionChannelId  |STRING    |EQUALS      |\\n|originalTransactionID                    |STRING    |EQUALS      |\\n',
                ),
            z.string(),
        ]),
        operator: z
            .enum([
                'EQUALS',
                'EQUALS_CASE_SENSITIVE',
                'DIFFERENT_THAN',
                'MORE_THAN',
                'LESS_THAN',
                'BETWEEN',
                'ON',
                'AFTER',
                'AFTER_INCLUSIVE',
                'BEFORE',
                'BEFORE_INCLUSIVE',
                'STARTS_WITH',
                'STARTS_WITH_CASE_SENSITIVE',
                'IN',
                'TODAY',
                'THIS_WEEK',
                'THIS_MONTH',
                'THIS_YEAR',
                'LAST_DAYS',
                'EMPTY',
                'NOT_EMPTY',
            ])
            .describe(
                '| **Operator**                | **Affected values**  | **Available for**                                                    |\\n|---------------               |----------------------|----------------------------------------------------------------------|\\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |\\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\\n| IN                           | LIST                 | ENUM,KEY                                                             |\\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |',
            ),
        secondValue: z
            .string()
            .describe('The second value to match the searching criteria, when the `BETWEEN` operator is used.')
            .optional(),
        value: z.string().describe('The value to match the searching criteria.').optional(),
        values: z.string().array().describe('List of values when the `IN` operator is used.').optional(),
    })
    .describe('The unit that composes the list used for Deposit transactions client directed searching')

export type DepositTransactionFilterCriteria = z.infer<typeof DepositTransactionFilterCriteria>

export const PatchOperation = z
    .object({
        from: z.string().describe('The field from where a value should be moved, when using move').optional(),
        op: z.enum(['ADD', 'REPLACE', 'REMOVE', 'MOVE']).describe('The change to perform'),
        path: z.string().describe('The field to perform the operation on'),
        value: z.unknown().describe('The value of the field, can be null').optional(),
    })
    .describe('A single change that needs to be made to a resource')

export type PatchOperation = z.infer<typeof PatchOperation>

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export type RestError = z.infer<typeof RestError>

export const DepositTransaction = z
    .looseObject({
        accountBalances: DepositTransactionBalances.optional(),
        adjustmentTransactionKey: z
            .string()
            .describe(
                'The key of the deposit transaction where the adjustment for this transaction was made (if any adjustment was involved)',
            )
            .optional(),
        affectedAmounts: DepositAffectedAmounts.optional(),
        amount: z.number().describe('How much was added/removed in account').optional(),
        blockId: z.string().describe('The block fund id associated with the transaction').optional(),
        bookingDate: z.iso
            .datetime({ offset: true })
            .describe('The date when corresponding JE is booked (as Organization Time)')
            .optional(),
        branchKey: z.string().describe('The branch where the transaction was performed').optional(),
        cardTransaction: CardTransaction.optional(),
        centreKey: z.string().describe('The center where the transaction was performed').optional(),
        creationDate: z.iso.datetime({ offset: true }).describe('The date when this deposit transaction was created').optional(),
        currencyCode: z.string().describe('The currency in which this transaction was posted').optional(),
        customFieldsArchived: z.boolean().describe('Whether the custom fields of the transaction are archived').optional(),
        encodedKey: z.string().describe('The encoded key of the deposit transaction, auto generated, unique').optional(),
        externalId: z.string().describe('The external id of the deposit transaction, customizable, unique').optional(),
        fees: DepositFee.array()
            .describe('All the amounts that have been applied or paid within this transaction and involved predefined fees')
            .optional(),
        holdExternalReferenceId: z.string().describe('The external id of an account authorization hold').optional(),
        id: z.string().describe('The id of the deposit transaction, auto generated, unique').optional(),
        interestAccruedAmounts: DepositInterestAccruedAmounts.optional(),
        migrationEventKey: z
            .string()
            .describe(
                `The migration event encoded key associated with this deposit account. If this account was imported, track which 'migration event' they came from`,
            )
            .optional(),
        notes: z.string().describe('Extra notes about this deposit transaction').optional(),
        originalTransactionKey: z
            .string()
            .describe(
                'The encodedKey of the transaction that was adjusted as part of this one. Available only for adjustment transactions',
            )
            .optional(),
        parentAccountKey: z.string().describe('The key of the parent deposit account').optional(),
        paymentDetails: PaymentDetails.optional(),
        paymentOrderId: z.string().describe('The payment order id of the deposit transaction, customizable').optional(),
        taxes: DepositTaxes.optional(),
        terms: DepositTerms.optional(),
        tillKey: z.string().describe('The till key associated with this transaction').optional(),
        transactionDetails: TransactionDetails.optional(),
        transferDetails: TransferDetails.optional(),
        type: z
            .enum([
                'IMPORT',
                'WRITE_OFF',
                'WRITE_OFF_ADJUSTMENT',
                'DEPOSIT',
                'ADJUSTMENT',
                'WITHDRAWAL',
                'WITHDRAWAL_ADJUSTMENT',
                'CARD_TRANSACTION_REVERSAL',
                'CARD_TRANSACTION_REVERSAL_ADJUSTMENT',
                'TRANSFER',
                'TRANSFER_ADJUSTMENT',
                'FEE_APPLIED',
                'FEE_ADJUSTED',
                'FEES_DUE_REDUCED',
                'INTEREST_APPLIED',
                'INTEREST_APPLIED_ADJUSTMENT',
                'NET_DIFF_INTEREST',
                'PROFIT_APPLIED',
                'PROFIT_APPLIED_ADJUSTMENT',
                'FEE_REDUCTION_ADJUSTMENT',
                'WITHHOLDING_TAX',
                'WITHHOLDING_TAX_ADJUSTMENT',
                'INTEREST_RATE_CHANGED',
                'OVERDRAFT_INTEREST_RATE_CHANGED',
                'OVERDRAFT_LIMIT_CHANGED',
                'BRANCH_CHANGED',
                'ACCOUNT_HOLDER_CHANGED',
                'LOAN_FUNDED',
                'LOAN_FUNDED_ADJUSTMENT',
                'LOAN_REPAID',
                'LOAN_REPAID_ADJUSTMENT',
                'LOAN_FRACTION_BOUGHT',
                'LOAN_FRACTION_BOUGHT_ADJUSTMENT',
                'LOAN_FRACTION_SOLD',
                'LOAN_FRACTION_SOLD_ADJUSTMENT',
                'SEIZED_AMOUNT',
            ])
            .describe('The type of the deposit transaction')
            .optional(),
        userKey: z.string().describe('The person that performed the transaction').optional(),
        valueDate: z.iso
            .datetime({ offset: true })
            .describe('Date of the entry (eg date of repayment or disbursal, etc.) (as Organization Time)')
            .optional(),
    })
    .describe(`Represents the action performed on an Deposit Account after which the account's amount changes its value.`)

export type DepositTransaction = z.infer<typeof DepositTransaction>

export const TransferDetailsInput = z
    .object({
        linkedAccountId: z.string().describe('The id of the linked account').optional(),
        linkedAccountKey: z.string().describe('The encoded key of the linked account').optional(),
        linkedAccountType: z.enum(['LOAN', 'DEPOSIT']).describe('The type of the linked account. Can be LOAN or DEPOSIT'),
    })
    .describe('Represents the input for the transfer details for a transfer transaction')

export type TransferDetailsInput = z.infer<typeof TransferDetailsInput>

export const BulkDepositTransactionsInput = z
    .object({
        transactions: DepositTransactionBulkableInputDTO.array().describe('The list of transactions').optional(),
    })
    .describe('Represents the request payload for creating a bulk deposit transactions.')

export type BulkDepositTransactionsInput = z.infer<typeof BulkDepositTransactionsInput>

export const DepositTransactionAdjustmentDetails = z
    .object({
        bookingDate: z.iso
            .datetime({ offset: true })
            .describe(
                'Date when the adjustment transaction is logged into accounting. Can be null. Available only for DEPOSIT and WITHDRAWAL',
            )
            .optional(),
        notes: z.string().describe('Notes detailing why the transaction is adjusted').optional(),
    })
    .describe('Contains the details of the transaction adjustment')

export type DepositTransactionAdjustmentDetails = z.infer<typeof DepositTransactionAdjustmentDetails>

export const DepositTransactionInput = z
    .object({
        amount: z.number().describe('The amount that was added to an account'),
        bookingDate: z.iso.datetime({ offset: true }).describe('The date of Journal Entry (as Organization Time)').optional(),
        externalId: z.string().describe('The external id of the deposit transaction, customizable, unique').optional(),
        holdExternalReferenceId: z.string().describe('The external id of an account authorization hold').optional(),
        notes: z.string().describe('Extra notes about this deposit transaction').optional(),
        paymentDetails: PaymentDetails.optional(),
        paymentOrderId: z.string().describe('The payment order id of the deposit transaction, customizable').optional(),
        skipMaximumBalanceValidation: z
            .boolean()
            .describe('Flag indicating that a maximum balance validation should be skipped')
            .optional(),
        transactionDetails: TransactionDetailsInput.optional(),
        valueDate: z.iso.datetime({ offset: true }).describe('The entry date of the deposit (as Organization Time)').optional(),
    })
    .describe('Represents the request payload for creating a transaction of type DEPOSIT.')

export type DepositTransactionInput = z.infer<typeof DepositTransactionInput>

export const DepositTransactionSearchCriteria = z
    .object({
        filterCriteria: DepositTransactionFilterCriteria.array().describe('The list of filtering criteria'),
        sortingCriteria: DepositTransactionSortingCriteria.optional(),
    })
    .describe(
        'Wrapper that holds a list of filtering criteria and a sorting criteria for Deposit transaction client directed query',
    )

export type DepositTransactionSearchCriteria = z.infer<typeof DepositTransactionSearchCriteria>

export const EditTransactionDetailsRequest = PatchOperation.array()

export type EditTransactionDetailsRequest = z.infer<typeof EditTransactionDetailsRequest>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

export const FeeAppliedDepositTransactionInput = z
    .object({
        amount: z.number().describe('The value of the fee applied on the account').optional(),
        externalId: z.string().describe('The external id of the current transaction, customizable, unique').optional(),
        notes: z.string().describe('Extra notes about the current transaction').optional(),
        predefinedFeeKey: z.string().describe('The encodedKey of the predefined fee that defines the current fee').optional(),
    })
    .describe('Represents the request payload for creating a transaction of type FEE_APPLIED.')

export type FeeAppliedDepositTransactionInput = z.infer<typeof FeeAppliedDepositTransactionInput>

export const GetAllResponse = DepositTransaction.array()

export type GetAllResponse = z.infer<typeof GetAllResponse>

export const GetDepositTransactionDocumentResponse = z.string()

export type GetDepositTransactionDocumentResponse = z.infer<typeof GetDepositTransactionDocumentResponse>

export const SearchResponse = DepositTransaction.array()

export type SearchResponse = z.infer<typeof SearchResponse>

export const SeizeBlockAmount = z
    .object({
        amount: z.number().describe('The amount of the block fund').optional(),
        blockId: z.string().describe('The id of the block fund'),
        externalId: z.string().describe('The external id of the current transaction, customizable, unique').optional(),
        notes: z.string().describe('Extra notes about the current transaction').optional(),
        transactionChannelId: z.string().describe('The id of the channel through which the transaction is done.'),
    })
    .describe('Represents the information for seizing a block amount on a deposit account.')

export type SeizeBlockAmount = z.infer<typeof SeizeBlockAmount>

export const TransferDepositTransactionInput = z
    .object({
        amount: z.number().describe('The amount to transfer from account'),
        encodedKey: z.string().describe('The encoded key of the entity, generated, globally unique').optional(),
        externalId: z.string().describe('The external id of the transfer transaction, customizable, unique').optional(),
        notes: z.string().describe('Extra notes about this deposit transaction').optional(),
        paymentDetails: PaymentDetails.optional(),
        paymentOrderId: z.string().describe('The payment order id of the transfer transaction, customizable').optional(),
        transferDetails: TransferDetailsInput,
        valueDate: z.iso
            .datetime({ offset: true })
            .describe('The entry date of the transfer. If not specified it is considered the current date (as Organization Time)')
            .optional(),
    })
    .describe('Represents the input for a transfer deposit transaction.')

export type TransferDepositTransactionInput = z.infer<typeof TransferDepositTransactionInput>

export const WithdrawalDepositTransactionInput = z
    .object({
        amount: z.number().describe('The amount to withdraw from account'),
        bookingDate: z.iso
            .datetime({ offset: true })
            .describe(
                'The date of the withdrawal when the transaction is logged into accounting. If not specified it is considered the value date',
            )
            .optional(),
        externalId: z.string().describe('The external id of the withdrawal transaction, customizable, unique').optional(),
        holdExternalReferenceId: z.string().describe('The external id of an account authorization hold').optional(),
        notes: z.string().describe('Extra notes about this deposit transaction').optional(),
        paymentDetails: PaymentDetails.optional(),
        paymentOrderId: z.string().describe('The payment order id of the withdrawal transaction, customizable').optional(),
        transactionDetails: TransactionDetailsInput.optional(),
        valueDate: z.iso
            .datetime({ offset: true })
            .describe(
                'The entry date of the withdrawal. If not specified it is considered the current date (as Organization Time)',
            )
            .optional(),
    })
    .describe('Represents the input for a withdrawal transaction.')

export type WithdrawalDepositTransactionInput = z.infer<typeof WithdrawalDepositTransactionInput>
