/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetAllResponse","type":"array","items":{"$ref":"#/$defs/Role"},"$defs":{"Role":{"type":"object","description":"Represents a user role.","properties":{"access":{"$ref":"#/$defs/BaseUserAccess"},"creationDate":{"type":"string","description":"The date when the role was created in UTC.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated automatically, globally unique."},"id":{"type":"string","description":"The ID of the role, which can be generated and customized, but must be unique."},"lastModifiedDate":{"type":"string","description":"The last time the role was modified in UTC.","format":"date-time"},"name":{"type":"string","description":"The unique name of the role."},"notes":{"type":"string","description":"The notes about the role."}},"required":["name"],"additionalProperties":true},"BaseUserAccess":{"type":"object","description":"Represents the user permissions and access rights.","properties":{"administratorAccess":{"type":"boolean","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"creditOfficerAccess":{"type":"boolean","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"deliveryAccess":{"type":"boolean","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"mambuAccess":{"type":"boolean","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"permissions":{"type":"array","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","MANAGE_DEPOSIT_ACCOUNT_RECIPIENT","MANAGE_DEPOSIT_ASSOCIATION","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","MANAGE_INTERBRANCH_GLACCOUNT_RULES","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_MAMBU_FUNCTIONS_SECRETS","CREATE_MAMBU_FUNCTIONS_SECRETS","EDIT_MAMBU_FUNCTIONS_SECRETS","DELETE_MAMBU_FUNCTIONS_SECRETS","VIEW_CURRENT_USER_DETAILS","VIEW_PROFIT_SHARING_CLASSES","CREATE_PROFIT_SHARING_CLASSES","EDIT_PROFIT_SHARING_CLASSES","DELETE_PROFIT_SHARING_CLASSES","VIEW_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_INCOME_CATEGORIES","CREATE_PROFIT_SHARING_INCOME_CATEGORIES","EDIT_PROFIT_SHARING_INCOME_CATEGORIES","DELETE_PROFIT_SHARING_INCOME_CATEGORIES","VIEW_PROFIT_SHARING_EXPENSES","CREATE_PROFIT_SHARING_EXPENSES","EDIT_PROFIT_SHARING_EXPENSES","DELETE_PROFIT_SHARING_EXPENSES","VIEW_PROFIT_SHARING_DEDUCTIONS","CREATE_PROFIT_SHARING_DEDUCTIONS","EDIT_PROFIT_SHARING_DEDUCTIONS","DELETE_PROFIT_SHARING_DEDUCTIONS","VIEW_PROFIT_SHARING_PROPOSALS","EDIT_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_PROPOSALS","APPROVE_PROFIT_SHARING_PROPOSALS","ADJUST_PROFIT_SHARING_PROPOSALS","TRIGGER_COMPUTATION","VIEW_PROFIT_SHARING_SYSTEM_OPTIONS","CREATE_PROFIT_SHARING_SYSTEM_OPTIONS","EDIT_PROFIT_SHARING_SYSTEM_OPTIONS","DELETE_PROFIT_SHARING_SYSTEM_OPTIONS","VIEW_PROFIT_SHARING_DEPOSIT_PRODUCTS","EDIT_PROFIT_SHARING_DEPOSIT_PRODUCT_LINK","VIEW_PROFIT_SHARING_ACCOUNTS_SETTINGS","CREATE_PROFIT_SHARING_ACCOUNT_SETTINGS","EDIT_PROFIT_SHARING_ACCOUNT_SETTINGS","VIEW_PROFIT_SHARING_GL_ACCOUNTS","VIEW_PROFIT_SHARING_BRANCHES","MAKE_BULK_CHANGE_INTEREST_AVAILABILITY"]}},"supportAccess":{"type":"boolean","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents a user role.","properties":{"access":{"$ref":"#/$defs/BaseUserAccess"},"creationDate":{"type":"string","description":"The date when the role was created in UTC.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated automatically, globally unique."},"id":{"type":"string","description":"The ID of the role, which can be generated and customized, but must be unique."},"lastModifiedDate":{"type":"string","description":"The last time the role was modified in UTC.","format":"date-time"},"name":{"type":"string","description":"The unique name of the role."},"notes":{"type":"string","description":"The notes about the role."}},"required":["name"],"additionalProperties":true};const schema13 = {"type":"object","description":"Represents the user permissions and access rights.","properties":{"administratorAccess":{"type":"boolean","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"creditOfficerAccess":{"type":"boolean","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"deliveryAccess":{"type":"boolean","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"mambuAccess":{"type":"boolean","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"permissions":{"type":"array","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","MANAGE_DEPOSIT_ACCOUNT_RECIPIENT","MANAGE_DEPOSIT_ASSOCIATION","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","MANAGE_INTERBRANCH_GLACCOUNT_RULES","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_MAMBU_FUNCTIONS_SECRETS","CREATE_MAMBU_FUNCTIONS_SECRETS","EDIT_MAMBU_FUNCTIONS_SECRETS","DELETE_MAMBU_FUNCTIONS_SECRETS","VIEW_CURRENT_USER_DETAILS","VIEW_PROFIT_SHARING_CLASSES","CREATE_PROFIT_SHARING_CLASSES","EDIT_PROFIT_SHARING_CLASSES","DELETE_PROFIT_SHARING_CLASSES","VIEW_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_INCOME_CATEGORIES","CREATE_PROFIT_SHARING_INCOME_CATEGORIES","EDIT_PROFIT_SHARING_INCOME_CATEGORIES","DELETE_PROFIT_SHARING_INCOME_CATEGORIES","VIEW_PROFIT_SHARING_EXPENSES","CREATE_PROFIT_SHARING_EXPENSES","EDIT_PROFIT_SHARING_EXPENSES","DELETE_PROFIT_SHARING_EXPENSES","VIEW_PROFIT_SHARING_DEDUCTIONS","CREATE_PROFIT_SHARING_DEDUCTIONS","EDIT_PROFIT_SHARING_DEDUCTIONS","DELETE_PROFIT_SHARING_DEDUCTIONS","VIEW_PROFIT_SHARING_PROPOSALS","EDIT_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_PROPOSALS","APPROVE_PROFIT_SHARING_PROPOSALS","ADJUST_PROFIT_SHARING_PROPOSALS","TRIGGER_COMPUTATION","VIEW_PROFIT_SHARING_SYSTEM_OPTIONS","CREATE_PROFIT_SHARING_SYSTEM_OPTIONS","EDIT_PROFIT_SHARING_SYSTEM_OPTIONS","DELETE_PROFIT_SHARING_SYSTEM_OPTIONS","VIEW_PROFIT_SHARING_DEPOSIT_PRODUCTS","EDIT_PROFIT_SHARING_DEPOSIT_PRODUCT_LINK","VIEW_PROFIT_SHARING_ACCOUNTS_SETTINGS","CREATE_PROFIT_SHARING_ACCOUNT_SETTINGS","EDIT_PROFIT_SHARING_ACCOUNT_SETTINGS","VIEW_PROFIT_SHARING_GL_ACCOUNTS","VIEW_PROFIT_SHARING_BRANCHES","MAKE_BULK_CHANGE_INTEREST_AVAILABILITY"]}},"supportAccess":{"type":"boolean","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"additionalProperties":true};const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.name === undefined) && (missing0 = "name")){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.access !== undefined){let data0 = data.access;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.administratorAccess !== undefined){const _errs6 = errors;if(typeof data0.administratorAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/administratorAccess",schemaPath:"#/$defs/BaseUserAccess/properties/administratorAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.apiAccess !== undefined){const _errs8 = errors;if(typeof data0.apiAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/apiAccess",schemaPath:"#/$defs/BaseUserAccess/properties/apiAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.creditOfficerAccess !== undefined){const _errs10 = errors;if(typeof data0.creditOfficerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/creditOfficerAccess",schemaPath:"#/$defs/BaseUserAccess/properties/creditOfficerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.deliveryAccess !== undefined){const _errs12 = errors;if(typeof data0.deliveryAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/deliveryAccess",schemaPath:"#/$defs/BaseUserAccess/properties/deliveryAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data0.mambuAccess !== undefined){const _errs14 = errors;if(typeof data0.mambuAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/mambuAccess",schemaPath:"#/$defs/BaseUserAccess/properties/mambuAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data0.permissions !== undefined){let data6 = data0.permissions;const _errs16 = errors;if(errors === _errs16){if(Array.isArray(data6)){var valid3 = true;const len0 = data6.length;for(let i0=0; i0<len0; i0++){const _errs18 = errors;let valid4;valid4 = false;for(const v0 of schema13.properties.permissions.items.enum){if(func0(data6[i0], v0)){valid4 = true;break;}}if(!valid4){validate11.errors = [{instancePath:instancePath+"/access/permissions/" + i0,schemaPath:"#/$defs/BaseUserAccess/properties/permissions/items/enum",keyword:"enum",params:{allowedValues: schema13.properties.permissions.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs18 === errors;if(!valid3){break;}}}else {validate11.errors = [{instancePath:instancePath+"/access/permissions",schemaPath:"#/$defs/BaseUserAccess/properties/permissions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid2 = _errs16 === errors;}else {var valid2 = true;}if(valid2){if(data0.supportAccess !== undefined){const _errs19 = errors;if(typeof data0.supportAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/supportAccess",schemaPath:"#/$defs/BaseUserAccess/properties/supportAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data0.tellerAccess !== undefined){const _errs21 = errors;if(typeof data0.tellerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/access/tellerAccess",schemaPath:"#/$defs/BaseUserAccess/properties/tellerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/access",schemaPath:"#/$defs/BaseUserAccess/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs23 = errors;if(errors === _errs23){if(errors === _errs23){if(!(typeof data.creationDate === "string")){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs25 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs27 = errors;if(typeof data.id !== "string"){validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs29 = errors;if(errors === _errs29){if(errors === _errs29){if(!(typeof data.lastModifiedDate === "string")){validate11.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs31 = errors;if(typeof data.name !== "string"){validate11.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs33 = errors;if(typeof data.notes !== "string"){validate11.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;