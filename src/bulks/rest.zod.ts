/**
 * Generated by @skyleague/therefore
 * Do not manually touch this
 */
// biome-ignore-all lint: this file is generated
/* eslint-disable */

import { z } from 'zod/v4'

export const BulkProcessingSuccess = z
    .object({
        externalId: z.string().describe('Optional field populated only when request payload contains an externalId').optional(),
        id: z.string().describe('Unique identifier for the newly created resource').optional(),
        indexInRequest: z
            .number()
            .int()
            .describe('The index of the entity/item from bulk request that failed on processing')
            .optional(),
    })
    .describe('Holds details about successful processed item')

export type BulkProcessingSuccess = z.infer<typeof BulkProcessingSuccess>

export const BulkProcessingError = z
    .object({
        errorCode: z.number().int().describe('Numeric value associated to the error reason').optional(),
        errorReason: z.string().describe('Error reason').optional(),
        errorSource: z.string().describe('Details about the error').optional(),
        externalId: z.string().describe('Optional field populated only when request payload contains an externalId').optional(),
        indexInRequest: z
            .number()
            .int()
            .describe('The index of the entity/item from bulk request that failed on processing')
            .optional(),
    })
    .describe('Holds information about the error encountered processing an item in bulk')

export type BulkProcessingError = z.infer<typeof BulkProcessingError>

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export type RestError = z.infer<typeof RestError>

export const BulkProcessStatus = z
    .object({
        errors: BulkProcessingError.array().describe('List of errors').optional(),
        processedItems: BulkProcessingSuccess.array().describe('List of successful processed items').optional(),
        status: z
            .enum([
                'QUEUED',
                'IN_PROGRESS',
                'COMPLETE',
                'NOT_FOUND',
                'CANCEL',
                'TO_BE_CANCELED',
                'TIMED_OUT',
                'ERROR',
                'TRANSIENT_ERROR',
                'OVERRIDDEN',
                'RECOVERABLE_ERROR',
            ])
            .describe('Bulk process status')
            .optional(),
    })
    .describe('Holds information about the status of a bulk process')

export type BulkProcessStatus = z.infer<typeof BulkProcessStatus>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>
