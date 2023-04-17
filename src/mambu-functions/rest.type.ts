/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetAllResponse = MambuFunction[]

export const GetAllResponse = {
    validate: (await import('./schemas/get-all-response.schema.js')).validate10 as unknown as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate10 as unknown as ValidateFunction<ErrorResponse>,
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
 * Mambu Function create data.
 */
export interface MambuFunctionCreate {
    /**
     * Mambu function name
     */
    name?: string
    /**
     * The id of the extension point
     */
    extensionPointId?: string
    functionCode?: MambuFunctionCode
    /**
     * Mambu function version
     */
    version?: string
}

export const MambuFunctionCreate = {
    validate: (await import('./schemas/mambu-function-create.schema.js'))
        .validate10 as unknown as ValidateFunction<MambuFunctionCreate>,
    get schema() {
        return MambuFunctionCreate.validate.schema
    },
    get errors() {
        return MambuFunctionCreate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionCreate => MambuFunctionCreate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionCreate.validate(o)) {
            throw new AjvValidator.ValidationError(MambuFunctionCreate.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function information.
 */
export interface MambuFunction {
    /**
     * Mambu function name
     */
    name?: string
    /**
     * The id of the extension point
     */
    extensionPointId?: string
    /**
     * Mambu function state
     */
    state?: 'CREATE_PENDING' | 'UPDATE_PENDING' | 'ACTIVE' | 'FAILED' | 'REMOVING' | 'REMOVED'
    /**
     * Mambu function version
     */
    version?: string
    /**
     * The last date the Mambu function was updated (as UTC)
     */
    lastModifiedDate?: string
}

export const MambuFunction = {
    validate: (await import('./schemas/mambu-function.schema.js')).validate10 as unknown as ValidateFunction<MambuFunction>,
    get schema() {
        return MambuFunction.validate.schema
    },
    get errors() {
        return MambuFunction.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunction => MambuFunction.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunction.validate(o)) {
            throw new AjvValidator.ValidationError(MambuFunction.errors ?? [])
        }
    },
} as const

/**
 * Mambu Function update data.
 */
export interface MambuFunctionUpdate {
    functionCode?: MambuFunctionCode
    /**
     * Mambu function version
     */
    version?: string
}

export const MambuFunctionUpdate = {
    validate: (await import('./schemas/mambu-function-update.schema.js'))
        .validate10 as unknown as ValidateFunction<MambuFunctionUpdate>,
    get schema() {
        return MambuFunctionUpdate.validate.schema
    },
    get errors() {
        return MambuFunctionUpdate.validate.errors ?? undefined
    },
    is: (o: unknown): o is MambuFunctionUpdate => MambuFunctionUpdate.validate(o) === true,
    assert: (o: unknown) => {
        if (!MambuFunctionUpdate.validate(o)) {
            throw new AjvValidator.ValidationError(MambuFunctionUpdate.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * Represents a Mambu function code
 */
export interface MambuFunctionCode {
    /**
     * Mambu function programming language
     */
    languageId?: 'es2020'
    /**
     * Mambu function code (as Base64)
     */
    code?: string
}