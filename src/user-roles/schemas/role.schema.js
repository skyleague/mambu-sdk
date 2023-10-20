/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Role","type":"object","description":"Represents a user role.","properties":{"notes":{"type":"string","title":"notes","description":"The notes about the role."},"access":{"title":"access","$ref":"#/$defs/BaseUserAccessaf30"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last time the role was modified in UTC.","format":"date-time"},"name":{"type":"string","title":"name","description":"The unique name of the role."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated automatically, globally unique."},"id":{"type":"string","title":"id","description":"The ID of the role, which can be generated and customized, but must be unique."},"creationDate":{"type":"string","title":"creationDate","description":"The date when the role was created in UTC.","format":"date-time"}},"required":["name"],"additionalProperties":true,"$defs":{"BaseUserAccessaf30":{"type":"object","title":"BaseUserAccessaf30","description":"Represents the user permissions and access rights.","properties":{"mambuAccess":{"type":"boolean","title":"mambuAccess","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"administratorAccess":{"type":"boolean","title":"administratorAccess","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","title":"apiAccess","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"permissions":{"type":"array","title":"permissions","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_CURRENT_USER_DETAILS","VIEW_PROFIT_SHARING_CLASSES","CREATE_PROFIT_SHARING_CLASSES","EDIT_PROFIT_SHARING_CLASSES","DELETE_PROFIT_SHARING_CLASSES","VIEW_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_INCOME_CATEGORIES","CREATE_PROFIT_SHARING_INCOME_CATEGORIES","EDIT_PROFIT_SHARING_INCOME_CATEGORIES","DELETE_PROFIT_SHARING_INCOME_CATEGORIES","VIEW_PROFIT_SHARING_PROPOSALS","EDIT_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_PROPOSALS","APPROVE_PROFIT_SHARING_PROPOSALS","ADJUST_PROFIT_SHARING_PROPOSALS","VIEW_PROFIT_SHARING_SYSTEM_OPTIONS","CREATE_PROFIT_SHARING_SYSTEM_OPTIONS","EDIT_PROFIT_SHARING_SYSTEM_OPTIONS","DELETE_PROFIT_SHARING_SYSTEM_OPTIONS","VIEW_PROFIT_SHARING_DEPOSIT_PRODUCTS","EDIT_PROFIT_SHARING_DEPOSIT_PRODUCT_LINK","VIEW_PROFIT_SHARING_ACCOUNTS_SETTINGS","CREATE_PROFIT_SHARING_ACCOUNT_SETTINGS","EDIT_PROFIT_SHARING_ACCOUNT_SETTINGS"]}},"deliveryAccess":{"type":"boolean","title":"deliveryAccess","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"creditOfficerAccess":{"type":"boolean","title":"creditOfficerAccess","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"supportAccess":{"type":"boolean","title":"supportAccess","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","title":"tellerAccess","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"BaseUserAccessaf30","description":"Represents the user permissions and access rights.","properties":{"mambuAccess":{"type":"boolean","title":"mambuAccess","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"administratorAccess":{"type":"boolean","title":"administratorAccess","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","title":"apiAccess","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"permissions":{"type":"array","title":"permissions","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_CURRENT_USER_DETAILS","VIEW_PROFIT_SHARING_CLASSES","CREATE_PROFIT_SHARING_CLASSES","EDIT_PROFIT_SHARING_CLASSES","DELETE_PROFIT_SHARING_CLASSES","VIEW_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_INCOME_CATEGORIES","CREATE_PROFIT_SHARING_INCOME_CATEGORIES","EDIT_PROFIT_SHARING_INCOME_CATEGORIES","DELETE_PROFIT_SHARING_INCOME_CATEGORIES","VIEW_PROFIT_SHARING_PROPOSALS","EDIT_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_PROPOSALS","APPROVE_PROFIT_SHARING_PROPOSALS","ADJUST_PROFIT_SHARING_PROPOSALS","VIEW_PROFIT_SHARING_SYSTEM_OPTIONS","CREATE_PROFIT_SHARING_SYSTEM_OPTIONS","EDIT_PROFIT_SHARING_SYSTEM_OPTIONS","DELETE_PROFIT_SHARING_SYSTEM_OPTIONS","VIEW_PROFIT_SHARING_DEPOSIT_PRODUCTS","EDIT_PROFIT_SHARING_DEPOSIT_PRODUCT_LINK","VIEW_PROFIT_SHARING_ACCOUNTS_SETTINGS","CREATE_PROFIT_SHARING_ACCOUNT_SETTINGS","EDIT_PROFIT_SHARING_ACCOUNT_SETTINGS"]}},"deliveryAccess":{"type":"boolean","title":"deliveryAccess","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"creditOfficerAccess":{"type":"boolean","title":"creditOfficerAccess","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"supportAccess":{"type":"boolean","title":"supportAccess","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","title":"tellerAccess","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.name === undefined) && (missing0 = "name")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.notes !== undefined){const _errs2 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.access !== undefined){let data1 = data.access;const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.mambuAccess !== undefined){const _errs8 = errors;if(typeof data1.mambuAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/mambuAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/mambuAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data1.administratorAccess !== undefined){const _errs10 = errors;if(typeof data1.administratorAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/administratorAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/administratorAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data1.apiAccess !== undefined){const _errs12 = errors;if(typeof data1.apiAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/apiAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/apiAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data1.permissions !== undefined){let data5 = data1.permissions;const _errs14 = errors;if(errors === _errs14){if(Array.isArray(data5)){var valid3 = true;const len0 = data5.length;for(let i0=0; i0<len0; i0++){const _errs16 = errors;let valid4;valid4 = false;for(const v0 of schema12.properties.permissions.items.enum){if(func0(data5[i0], v0)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/access/permissions/" + i0,schemaPath:"#/$defs/BaseUserAccessaf30/properties/permissions/items/enum",keyword:"enum",params:{allowedValues: schema12.properties.permissions.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs16 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/access/permissions",schemaPath:"#/$defs/BaseUserAccessaf30/properties/permissions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data1.deliveryAccess !== undefined){const _errs17 = errors;if(typeof data1.deliveryAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/deliveryAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/deliveryAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data1.creditOfficerAccess !== undefined){const _errs19 = errors;if(typeof data1.creditOfficerAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/creditOfficerAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/creditOfficerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data1.supportAccess !== undefined){const _errs21 = errors;if(typeof data1.supportAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/supportAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/supportAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}if(valid2){if(data1.tellerAccess !== undefined){const _errs23 = errors;if(typeof data1.tellerAccess !== "boolean"){validate10.errors = [{instancePath:instancePath+"/access/tellerAccess",schemaPath:"#/$defs/BaseUserAccessaf30/properties/tellerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs23 === errors;}else {var valid2 = true;}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/access",schemaPath:"#/$defs/BaseUserAccessaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs25 = errors;if(errors === _errs25){if(errors === _errs25){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs27 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs29 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs31 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs33 = errors;if(errors === _errs33){if(errors === _errs33){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs33 === errors;}else {var valid0 = true;}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;