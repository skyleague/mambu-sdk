/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'

/**
 * Custom Field Date Transfer Object
 */
export interface CustomFieldMeta {
    displaySettings?: CustomFieldDisplaySettings
    /**
     * Date at which the latest update was performed for this field
     */
    lastModifiedDate?: string
    /**
     * Information on what record types the custom field is available for.
     */
    usage?: CustomFieldUsage[]
    /**
     * Indicates that the field has predefined selections and only those can be used to populate it
     */
    selectionOptions?: CustomFieldSelectionOption[]
    editRights?: CustomFieldEditRights
    /**
     * Date at which the custom field was created
     */
    creationDate?: string
    /**
     * Supported input type
     */
    type?: 'FREE_TEXT' | 'SELECTION' | 'NUMBER' | 'CHECKBOX' | 'DATE' | 'DATE_TIME' | 'CLIENT_LINK' | 'GROUP_LINK' | 'USER_LINK'
    viewRights?: CustomFieldViewRights
    valueValidationSettings?: CustomFieldValueValidationSettings
    /**
     * Indicates with what object the custom field is associated
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
     * Indicates the master field on which the dependency is based upon.
     */
    dependentFieldKey?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * User-defined ID, globally unique.
     */
    id?: string
    /**
     * Indicates whether the field is active or inactive
     */
    state?: 'ACTIVE' | 'INACTIVE'
}

export const CustomFieldMeta = {
    validate: require('./schemas/custom-field-meta.schema.js') as ValidateFunction<CustomFieldMeta>,
    get schema() {
        return CustomFieldMeta.validate.schema
    },
    is: (o: unknown): o is CustomFieldMeta => CustomFieldMeta.validate(o) === true,
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
 * Groups all fields related to a custom field's display settings
 */
export interface CustomFieldDisplaySettings {
    /**
     * Free-text description of the field.
     */
    description?: string
    /**
     * Field display size in the UI.
     */
    fieldSize?: 'SHORT' | 'LONG'
    /**
     * Custom field position in the custom field set.
     */
    position?: number
    /**
     * Shows the original id of the built in custom field
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
     * User-defined name, displayed in the UI.
     */
    displayName?: string
}

/**
 * Information on what record types the custom field is available for.
 */
export interface CustomFieldUsage {
    /**
     * Indicates whether the field is displayed by default on create/edit page for this record type.
     */
    default?: boolean
    /**
     * Indicates the key of the record type (eg client type)
     */
    objectKey?: string
    /**
     * Indicates whether the field is mandatory or not for this record type.
     */
    required?: boolean
}

/**
 * Groups all fields related to a custom field's selection option
 */
export interface CustomFieldSelectionOption {
    /**
     * Indicates the key for the value on the master field.
     */
    forSelectionKey?: string
    /**
     * Indicates the value of the master field.
     */
    forValue?: string
    /**
     * List of values that can be used in the slave field based on current master selection.
     */
    availableOptions?: CustomFieldAvailableOption[]
}

/**
 * Groups the fields related to one option available within a selection
 */
export interface CustomFieldAvailableOption {
    /**
     * Selection score
     */
    score?: number
    /**
     * System-generated ID of the predefined value
     */
    selectionKey?: string
    /**
     * Predefined value name
     */
    value?: string
}

/**
 * Settings that indicate the defined editing rights by role for the custom field
 */
export interface CustomFieldEditRights {
    /**
     * Indicates whether the field can be edited by all users or by roles
     */
    allUsers?: boolean
    /**
     * Lists the IDs of the roles that have edit rights for this field when it's not accessible by all users
     */
    roles?: string[]
}

/**
 * Settings that indicate the defined view rights by role for the custom field
 */
export interface CustomFieldViewRights {
    /**
     * Indicates whether the field can be viewed by all users or by roles
     */
    allUsers?: boolean
    /**
     * Lists the IDs of the roles that have view rights for this field when it's not accessible by all users
     */
    roles?: string[]
}

/**
 * Settings for field input validation.
 */
export interface CustomFieldValueValidationSettings {
    /**
     * Indicates if a validation is set in terms of expected character type/format
     */
    validationPattern?: string
    /**
     * Indicates whether this field allows duplicate values or not
     */
    unique?: boolean
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}