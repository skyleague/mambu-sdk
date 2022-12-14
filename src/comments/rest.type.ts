/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetCommentsResponse = Comment[]

export const GetCommentsResponse = {
    validate: require('./schemas/get-comments-response.schema.js') as ValidateFunction<GetCommentsResponse>,
    get schema() {
        return GetCommentsResponse.validate.schema
    },
    get errors() {
        return GetCommentsResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetCommentsResponse => GetCommentsResponse.validate(o) === true,
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
 * Comment Data Transfer Object
 */
export interface Comment {
    /**
     * The type of the entity that owns this comment
     */
    ownerType?:
        | 'CLIENT'
        | 'GROUP'
        | 'LOAN_PRODUCT'
        | 'SAVINGS_PRODUCT'
        | 'CENTRE'
        | 'BRANCH'
        | 'USER'
        | 'LOAN_ACCOUNT'
        | 'DEPOSIT_ACCOUNT'
        | 'ID_DOCUMENT'
        | 'LINE_OF_CREDIT'
        | 'GL_JOURNAL_ENTRY'
    /**
     * The last date this comment was modified
     */
    lastModifiedDate?: string
    /**
     * The encoded key of the comment, auto generated, unique
     */
    encodedKey?: string
    /**
     * The message in the comment
     */
    text?: string
    /**
     * The creation date of the comment
     */
    creationDate?: string
    /**
     * The owner key of the comment, representing the encoded key of the entity owning this comment
     */
    ownerKey?: string
    /**
     * The key of the user
     */
    userKey?: string
}

export const Comment = {
    validate: require('./schemas/comment.schema.js') as ValidateFunction<Comment>,
    get schema() {
        return Comment.validate.schema
    },
    get errors() {
        return Comment.validate.errors ?? undefined
    },
    is: (o: unknown): o is Comment => Comment.validate(o) === true,
    assert: (o: unknown) => {
        if (!Comment.validate(o)) {
            throw new AjvValidator.ValidationError(Comment.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
