/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Represents one option of a selection custom field definition.
 */
export interface CustomFieldAvailableOption {
    /**
     * The score of the option.
     */
    score?: number
    /**
     * The system-generated ID of the option.
     */
    selectionKey?: string
    /**
     * The name of the option.
     */
    value?: string
}

/**
 * Represents the display settings of a custom field definition.
 */
export interface CustomFieldDisplaySettings {
    /**
     * The original ID of the built-in custom field definition.
     */
    builtInId?:
        | 'FIRST_NAME'
        | 'MIDDLE_NAME'
        | 'LAST_NAME'
        | 'BIRTHDATE'
        | 'GENDER'
        | 'MOBILE_PHONE'
        | 'MOBILE_PHONE_2'
        | 'HOME_PHONE'
        | 'EMAIL_ADDRESS'
    /**
     * The user-provided description of the custom field definition.
     */
    description?: string
    /**
     * The user-provided name of the custom field definition.
     */
    displayName?: string
    /**
     * The custom field value display size in the UI.
     */
    fieldSize?: 'SHORT' | 'LONG'
    /**
     * The custom field definition position in the custom field set.
     */
    position?: number
}

/**
 * Represents the edit rights for custom field values for a particular custom field definition.
 */
export interface CustomFieldEditRights {
    /**
     * `TRUE` if custom field values of a custom field definition can be edited by all users, `FALSE` if custom field values of a custom field definition can only be edited by users with the specified roles.
     */
    allUsers?: boolean
    /**
     * The list of IDs of the roles that have edit rights for the custom field values of a custom field definition if it is not accessible by all users.
     */
    roles?: string[]
}

/**
 * Represents a custom field definition.
 */
export interface CustomFieldMeta {
    /**
     * The entity type the custom field definition is associated with.
     */
    availableFor?:
        | 'CLIENT'
        | 'GROUP'
        | 'CREDIT_ARRANGEMENT'
        | 'LOAN_ACCOUNT'
        | 'GUARANTOR'
        | 'ASSET'
        | 'DEPOSIT_ACCOUNT'
        | 'DEPOSIT_PRODUCT'
        | 'TRANSACTION_CHANNEL'
        | 'TRANSACTION_TYPE'
        | 'BRANCH'
        | 'CENTRE'
        | 'USER'
    /**
     * The date the custom field definition was created.
     */
    creationDate?: string
    /**
     * Can be defined only for selection custom field definitions. Indicates the parent custom field definition on which the dependency is based upon.
     */
    dependentFieldKey?: string
    displaySettings?: CustomFieldDisplaySettings
    editRights?: CustomFieldEditRights
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * The user-defined ID, which is globally unique.
     */
    id?: string
    /**
     * The date the latest update was performed for this custom field definition.
     */
    lastModifiedDate?: string
    /**
     * Can be defined only for selection custom field definitions. Indicates that the field has predefined selections and only those can be used to populate it.
     */
    selectionOptions?: CustomFieldSelectionOption[]
    /**
     * Indicates whether the custom field definition is active or inactive.
     */
    state?: 'ACTIVE' | 'INACTIVE'
    /**
     * The type of custom field definition.
     */
    type?: 'FREE_TEXT' | 'SELECTION' | 'NUMBER' | 'CHECKBOX' | 'DATE' | 'DATE_TIME' | 'CLIENT_LINK' | 'GROUP_LINK' | 'USER_LINK'
    /**
     * Represents the usage settings of a custom field definition.
     */
    usage?: CustomFieldUsage[]
    valueValidationSettings?: CustomFieldValueValidationSettings
    viewRights?: CustomFieldViewRights
}

export const CustomFieldMeta = {
    validate: (await import('./schemas/custom-field-meta.schema.js')).validate as ValidateFunction<CustomFieldMeta>,
    get schema() {
        return CustomFieldMeta.validate.schema
    },
    get errors() {
        return CustomFieldMeta.validate.errors ?? undefined
    },
    is: (o: unknown): o is CustomFieldMeta => CustomFieldMeta.validate(o) === true,
} as const

/**
 * Represents the information related to the options of a selection custom field definition.
 */
export interface CustomFieldSelectionOption {
    /**
     * The list of options that that are available for the dependent selection custom field value based on the selected parent custom field value.
     */
    availableOptions?: CustomFieldAvailableOption[]
    /**
     * The key for the parent selection custom field value.
     */
    forSelectionKey?: string
    /**
     * The parent selection custom field value.
     */
    forValue?: string
}

/**
 * Represents the usage settings of the custom field definition.
 */
export interface CustomFieldUsage {
    /**
     * `TRUE` if the field is displayed by default on create or edit pages for this record type, `FALSE` otherwise.
     */
    default?: boolean
    /**
     * The key of the record type.
     */
    objectKey?: string
    /**
     * `TRUE` if the field is required for this record type, `FALSE` otherwise.
     */
    required?: boolean
}

/**
 * Represents the settings for field input validation.
 */
export interface CustomFieldValueValidationSettings {
    /**
     * `TRUE` if this field does not allow duplicate values, `FALSE` otherwise.
     */
    unique?: boolean
    /**
     * The expected format for the input.
     */
    validationPattern?: string
}

/**
 * Represents the view rights for custom field values for a particular custom field definition.
 */
export interface CustomFieldViewRights {
    /**
     * `TRUE` if custom field values of a custom field definition can be viewed by all users, `FALSE` if custom field values of a custom field definition can only be viewed by users with the specified roles.
     */
    allUsers?: boolean
    /**
     * Lists the IDs of the roles that have view rights for the custom field values of a custom field definition if it is not accessible by all users.
     */
    roles?: string[]
}

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    assert: (o: unknown) => {
        if (!ErrorResponse.validate(o)) {
            throw new ValidationError(ErrorResponse.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
