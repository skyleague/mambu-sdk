/**
 * Generated by @skyleague/therefore
 * Do not manually touch this
 */
// biome-ignore-all lint: this file is generated
/* eslint-disable */

import { z } from 'zod/v4'

export const Holiday = z
    .object({
        creationDate: z.iso.datetime({ offset: true }).describe('The date when the holiday was created.').optional(),
        date: z.iso.date().describe('The date the holiday takes place.').optional(),
        encodedKey: z.string().describe('The encoded key of the entity, generated, globally unique').optional(),
        id: z.number().int().describe('The ID of the holiday.').optional(),
        isAnnuallyRecurring: z.boolean().describe('`TRUE` if a holiday is annually recurring, `FALSE` otherwise.').optional(),
        name: z.string().describe('The name of the holiday.').optional(),
    })
    .describe('Represents the holiday.')

export type Holiday = z.infer<typeof Holiday>

export const Address = z
    .object({
        city: z.string().describe('The city for the address.').optional(),
        country: z.string().describe('The country.').optional(),
        encodedKey: z.string().describe('The address encoded key, which is unique and generated.').optional(),
        indexInList: z.number().int().describe('The index of this address in the list of addresses.').optional(),
        latitude: z
            .number()
            .describe(
                'The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90.',
            )
            .optional(),
        line1: z.string().describe('The first line of the address.').optional(),
        line2: z.string().describe('The second line of the address.').optional(),
        longitude: z
            .number()
            .describe(
                'The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180.',
            )
            .optional(),
        parentKey: z
            .string()
            .describe('The address parent key indicating the object owning this address. For example: client, centre, or branch.')
            .optional(),
        postcode: z.string().describe('The post code.').optional(),
        region: z.string().describe('The region for the address.').optional(),
    })
    .describe('Represents an address.')

export type Address = z.infer<typeof Address>

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export type RestError = z.infer<typeof RestError>

export const Branch = z
    .looseObject({
        addresses: Address.array().describe('The list of branch addresses.').optional(),
        branchHolidays: Holiday.array().describe('The list of branch holidays.').optional(),
        creationDate: z.iso.datetime({ offset: true }).describe('The creation date of the branch.').optional(),
        emailAddress: z.string().describe('The branch email address.').optional(),
        encodedKey: z.string().describe('The encoded key of the entity, generated, globally unique').optional(),
        id: z.string().describe('The branch ID, which must be unique.'),
        lastModifiedDate: z.iso.datetime({ offset: true }).describe('The last date when the branch was modified.').optional(),
        name: z.string().describe('The branch name.'),
        notes: z.string().describe('The notes or description attached to this object.').optional(),
        phoneNumber: z.string().describe('The branch phone number.').optional(),
        state: z.enum(['ACTIVE', 'INACTIVE']).describe('The branch state.').optional(),
    })
    .describe('Represents a branch.')

export type Branch = z.infer<typeof Branch>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

export const GetAllResponse = Branch.array()

export type GetAllResponse = z.infer<typeof GetAllResponse>
