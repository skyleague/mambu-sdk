/**
 * Generated by @skyleague/therefore
 * Do not manually touch this
 */
// biome-ignore-all lint: this file is generated
/* eslint-disable */

import { z } from 'zod/v4'

export const DataImportErrorColumn = z
    .object({
        index: z.number().int().describe('Column index').optional(),
        name: z.string().describe('Column name').optional(),
    })
    .describe('Holds basic information for an error column: the index and the corresponding name')

export type DataImportErrorColumn = z.infer<typeof DataImportErrorColumn>

export const DataImportError = z
    .object({
        column: DataImportErrorColumn.optional(),
        errorMessage: z.string().describe('Error message').optional(),
        row: z.number().int().describe('Row index').optional(),
        sheet: z.string().describe('Sheet name').optional(),
    })
    .describe('Holds information about the data import error')

export type DataImportError = z.infer<typeof DataImportError>

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export type RestError = z.infer<typeof RestError>

export const DataImportAction = z
    .object({
        type: z.enum(['APPROVE', 'REJECT']).describe('Type of the data import action'),
    })
    .describe('Holds information about the data import action')

export type DataImportAction = z.infer<typeof DataImportAction>

export const DataImportRequest = z.object({
    file: z.string().describe('The file to import'),
})

export type DataImportRequest = z.infer<typeof DataImportRequest>

export const DataImportResponse = z
    .object({
        importKey: z.string().describe('Import key').optional(),
        state: z
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
            .describe('Background process state')
            .optional(),
    })
    .describe('Holds information about the response of the data import action')

export type DataImportResponse = z.infer<typeof DataImportResponse>

export const DataImportStatus = z
    .object({
        errors: DataImportError.array().describe('List of errors').optional(),
        eventKey: z.string().describe('Event key').optional(),
        state: z
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
            .describe('Background process state')
            .optional(),
    })
    .describe('Holds information about the data import status')

export type DataImportStatus = z.infer<typeof DataImportStatus>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>
