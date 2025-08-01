/**
 * Generated by @skyleague/therefore
 * Do not manually touch this
 */
// biome-ignore-all lint: this file is generated
/* eslint-disable */

import { z } from 'zod/v4'

export const CustomFilterConstraint = z
    .object({
        dataFieldEntityType: z
            .enum([
                'CLIENT',
                'GROUP',
                'CENTRE',
                'BRANCH',
                'SAVINGS_TRANSACTION',
                'SAVINGS_ACCOUNT',
                'SAVINGS_PRODUCT',
                'LOAN_TRANSACTION',
                'LOAN_ACCOUNT',
                'USER',
                'GUARANTY',
                'LINE_OF_CREDIT',
                'DISBURSEMENT_DETAILS',
                'UNKNOWN',
            ])
            .describe('The custom filter constraint data field entity type.'),
        dataFieldType: z
            .enum(['NATIVE', 'CUSTOM'])
            .describe('The custom filter constraint data field type, which must be not null.'),
        dataFieldValue: z.string().describe('The custom filter constraint data field value.'),
        dataType: z
            .enum([
                'BIG_DECIMAL',
                'DATE',
                'DATE_UTC',
                'ENUM',
                'KEY',
                'LONG',
                'MONEY',
                'PERCENT',
                'NUMBER',
                'OBJECT',
                'STRING',
                'BOOLEAN',
                'JAVA_BLOB',
            ])
            .describe('The custom filter constraint data type, which must be not null.'),
        filterElement: z
            .enum(['EQUALS', 'EMPTY', 'NOT_EMPTY', 'MORE_THAN', 'LESS_THAN', 'BETWEEN', 'IN'])
            .describe('The custom filter constraint filter element, which must be not null.'),
        groupNumber: z.number().int().describe('The custom filter constraint group number.').optional(),
        id: z.string().describe('The custom filter constraint ID, which must be unique.').optional(),
        index: z.number().int().describe('The custom filter constraint index.').optional(),
        secondValue: z.string().describe('The custom filter constraint second value.').optional(),
        value: z.string().describe('The custom filter constraint value, which must be not null.'),
    })
    .describe('Represents a custom filter constraint.')

export type CustomFilterConstraint = z.infer<typeof CustomFilterConstraint>

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export type RestError = z.infer<typeof RestError>

export const PatchOperation = z
    .object({
        from: z.string().describe('The field from where a value should be moved, when using move').optional(),
        op: z.enum(['ADD', 'REPLACE', 'REMOVE', 'MOVE']).describe('The change to perform'),
        path: z.string().describe('The field to perform the operation on'),
        value: z.unknown().describe('The value of the field, can be null').optional(),
    })
    .describe('A single change that needs to be made to a resource')

export type PatchOperation = z.infer<typeof PatchOperation>

export const BaseTemplateConfiguration = z
    .object({
        activated: z.boolean().describe('The template activation state. If empty, default is false.').optional(),
        body: z.string().describe('The template body'),
        event: z
            .enum([
                'DO_NOTHING',
                'MANUAL',
                'CLIENT_CREATED',
                'CLIENT_APPROVED',
                'GROUP_ACTIVITY',
                'GROUP_CREATED',
                'LOAN_CREATED',
                'INTEREST_RATE_CHANGED',
                'CLIENT_REJECTED',
                'CLIENT_ACTIVITY',
                'LOAN_REPAYMENT',
                'LOAN_REPAYMENT_REVERSAL',
                'FEE_APPLIED',
                'FEE_ADJUSTED',
                'FEE_CHARGED',
                'FEES_DUE_REDUCED',
                'FEE_REDUCTION_ADJUSTMENT',
                'PENALTY_APPLIED',
                'PENALTY_ADJUSTMENT',
                'LOAN_APPROVAL',
                'LOAN_ACCOUNT_CLOSURE',
                'LOAN_ACCOUNT_WRITE_OFF',
                'LOAN_ACCOUNT_REJECTION',
                'LOAN_ACCOUNT_RESCHEDULED',
                'LOAN_ACCOUNT_REFINANCED',
                'REPAYMENT_REMINDER',
                'ACCOUNT_IN_ARREARS',
                'LOAN_DISBURSEMENT',
                'LOAN_DISBURSEMENT_REVERSAL',
                'LOAN_ACCOUNT_ACTIVITY',
                'LOAN_ANTICIPATED_DISBURSEMENT',
                'SAVINGS_CREATED',
                'SAVINGS_DEPOSIT',
                'REAPPLIED_SAVINGS_DEPOSIT',
                'SAVINGS_DEPOSIT_REVERSAL',
                'SAVINGS_APPROVAL',
                'SAVINGS_ACCOUNT_ACTIVATED',
                'SAVINGS_ACCOUNT_CLOSURE',
                'SAVINGS_ACCOUNT_REJECTION',
                'SAVINGS_WITHDRAWAL',
                'REAPPLIED_SAVINGS_WITHDRAWAL',
                'SAVINGS_WITHDRAWAL_REVERSAL',
                'SAVINGS_ACCOUNT_ACTIVITY',
                'DEPOSIT_INTEREST_APPLIED',
                'DEPOSIT_INTEREST_APPLIED_ADJUSTMENT',
                'ACCOUNT_AUTHORISATION_HOLD_CREATED',
                'ACCOUNT_AUTHORISATION_HOLD_SETTLED',
                'CARDS_AUTHORISATION_HOLD_CREATED',
                'CARDS_AUTHORISATION_HOLD_SETTLED',
                'CARDS_AUTHORISATION_HOLD_AMOUNT_DECREASED',
                'CARDS_AUTHORISATION_HOLD_AMOUNT_INCREASED',
                'CARDS_AUTHORISATION_HOLD_EXPIRED',
                'CARDS_AUTHORISATION_HOLD_REVERSED',
                'CARD_WITHDRAWAL_REVERSAL',
                'CARD_DEPOSIT_REVERSAL',
                'ACCOUNT_AUTHORISATION_HOLD_REVERSED',
                'PORTAL_ACTIVATED',
                'PORTAL_PASSWORD_RESET',
                'END_OF_DAY_PROCESSING_COMPLETED',
                'DATA_ACCESS_STATE_CHANGED',
                'PAYMENT_ORDER_ACTIVITY',
                'COLLECTION_ORDER_ACTIVITY',
                'CREDIT_ARRANGEMENT_CREATED',
                'CREDIT_ARRANGEMENT_CLOSED',
                'CREDIT_ARRANGEMENT_APPROVED',
                'CREDIT_ARRANGEMENT_REJECTED',
                'CREDIT_ARRANGEMENT_WITHDRAWN',
                'CREDIT_ARRANGEMENT_DELETED',
                'CREDIT_ARRANGEMENT_ACCOUNT_ADDED',
                'CREDIT_ARRANGEMENT_ACCOUNT_REMOVED',
                'CREDIT_ARRANGEMENT_EDITED',
                'JOURNAL_ENTRY_ADDED',
                'JOURNAL_ENTRY_ADJUSTED',
                'SAVINGS_TRANSACTION_EDITED',
            ])
            .describe('The template event, which must be not null'),
        filterConstraints: CustomFilterConstraint.array().describe('The template filter constraints.').optional(),
        filtersLinkingOperator: z.enum(['MATCH_ALL', 'MATCH_ANY']).describe('The template filters linking operator.').optional(),
        id: z.string().describe('The template ID, which must be unique.').optional(),
        name: z.string().describe('The template name, which must be unique'),
        subscriptionOption: z
            .enum(['OPT_IN', 'OPT_OUT'])
            .describe('The template subscription option. If empty, default is OPT_IN')
            .optional(),
        target: z
            .enum(['CLIENT', 'GROUP', 'LOANS', 'SAVINGS', 'BACKGROUND_PROCESS', 'DATA_ACCESS', 'PAYMENT_ORDER', 'ACCOUNTING'])
            .describe('The template target, which must be not null.'),
        trigger: z
            .enum(['AUTOMATIC', 'MANUAL'])
            .describe('The template trigger type. If empty, default is AUTOMATIC.')
            .optional(),
        triggerDays: z.number().int().describe('The template trigger days period. If empty, default is 0').optional(),
        type: z.literal('WEB_HOOK').describe('The template type, which must be not null'),
    })
    .describe('Represents a simple template.')

export type BaseTemplateConfiguration = z.infer<typeof BaseTemplateConfiguration>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

export const UpdateTemplateRequest = PatchOperation.array()

export type UpdateTemplateRequest = z.infer<typeof UpdateTemplateRequest>
