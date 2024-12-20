/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"User","type":"object","description":"Represents a user.","properties":{"access":{"$ref":"#/$defs/UserAccess"},"assignedBranchKey":{"type":"string","description":"The encoded key of the branch this user is assigned to."},"creationDate":{"type":"string","description":"The date the user was created in UTC.","format":"date-time"},"email":{"type":"string","description":"The user email address. Used by Mambu for sending automated notifications or for getting passwords."},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"firstName":{"type":"string","description":"The first name of the user."},"homePhone":{"type":"string","description":"The user's home phone number, which can also contain characters."},"id":{"type":"string","description":"The ID of the user, which is generated automatically, but must be unique."},"language":{"description":"The Mambu display language for the user. The Mambu UI will be displayed in the selected language. Please note: for portuguese, you must use the incorrect spelling `PORTUGESE`.","enum":["ENGLISH","PORTUGESE","SPANISH","RUSSIAN","FRENCH","GEORGIAN","CHINESE","INDONESIAN","ROMANIAN","BURMESE","GERMAN","PORTUGUESE_BRAZIL","VIETNAMESE","ITALIAN","THAI","NORWEGIAN","PHRASE"]},"lastLoggedInDate":{"type":"string","description":"The last time the user logged in in UTC.","format":"date-time"},"lastModifiedDate":{"type":"string","description":"The last time the user was modified in UTC.","format":"date-time"},"lastName":{"type":"string","description":"The last name of the user."},"mobilePhone":{"type":"string","description":"The user's mobile phone number, which can also contain characters."},"notes":{"type":"string","description":"The additional information for the user."},"role":{"$ref":"#/$defs/RoleIdentifier"},"title":{"type":"string","description":"The user title."},"transactionLimits":{"type":"object","description":"The user transaction limits.","additionalProperties":{"type":"number"}},"twoFactorAuthentication":{"type":"boolean","description":"`TRUE` if the user has two-factor authentication setup, `FALSE` otherwise. If two-factor authentication is enabled, a user will be sent an SMS to their registered mobile number, which they will need to enter in the Mambu login screen, in addition to their password."},"username":{"type":"string","description":"The Mambu login user name."},"userState":{"description":"The current state of the user.","enum":["ACTIVE","INACTIVE","LOCKED"]}},"required":["access","firstName","username"],"additionalProperties":true,"$defs":{"UserAccess":{"type":"object","description":"Represents the user permissions and access rights.","properties":{"administratorAccess":{"type":"boolean","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"canManageAllBranches":{"type":"boolean","description":"`TRUE` if the user has access to all branches, `FALSE` if the user only has access to specific branches."},"canManageEntitiesAssignedToOtherOfficers":{"type":"boolean","description":"`TRUE` if a credit officer user can access entities (for example, clients or accounts) assigned to other credit officers, `FALSE` otherwise."},"creditOfficerAccess":{"type":"boolean","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"deliveryAccess":{"type":"boolean","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"mambuAccess":{"type":"boolean","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"managedBranches":{"type":"array","description":"The list of branches that can be managed by the user. If the user has the `canManageAllBranches` property set to `TRUE`, this list does not apply.","items":{"$ref":"#/$defs/UserManagedBranch"}},"permissions":{"type":"array","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","ENTER_REFUND","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","MANAGE_DEPOSIT_ACCOUNT_RECIPIENT","MANAGE_DEPOSIT_ASSOCIATION","BYPASS_ACCOUNT_OWNERSHIP_TRANSFER_VIEW_RESTRICTION","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","MANAGE_INTERBRANCH_GLACCOUNT_RULES","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_MAMBU_FUNCTIONS_SECRETS","CREATE_MAMBU_FUNCTIONS_SECRETS","EDIT_MAMBU_FUNCTIONS_SECRETS","DELETE_MAMBU_FUNCTIONS_SECRETS","VIEW_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_CASH_FLOWS","VIEW_PROFIT_SHARING_CASH_FLOWS","EDIT_PROFIT_SHARING_CASH_FLOWS","DELETE_PROFIT_SHARING_CASH_FLOWS","CREATE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_PRODUCT_SETTINGS","VIEW_PROFIT_SHARING_PRODUCT_SETTINGS","EDIT_PROFIT_SHARING_PRODUCT_SETTINGS","DELETE_PROFIT_SHARING_PRODUCT_SETTINGS","MAKE_BULK_CHANGE_INTEREST_AVAILABILITY"]}},"supportAccess":{"type":"boolean","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"required":["canManageAllBranches","canManageEntitiesAssignedToOtherOfficers"],"additionalProperties":true},"UserManagedBranch":{"type":"object","description":"Represents a branch that can be managed by the user or API consumer.","properties":{"branchKey":{"type":"string","description":"The encoded key of the branch, it is automatically generated."}},"additionalProperties":true},"RoleIdentifier":{"type":"object","description":"Represents the role identifier.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the entity, generated automatically, globally unique."},"id":{"type":"string","description":"The ID of the role, which can be generated and customized, but must be unique."}},"additionalProperties":true}}};const schema14 = {"type":"object","description":"Represents the role identifier.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the entity, generated automatically, globally unique."},"id":{"type":"string","description":"The ID of the role, which can be generated and customized, but must be unique."}},"additionalProperties":true};const schema12 = {"type":"object","description":"Represents the user permissions and access rights.","properties":{"administratorAccess":{"type":"boolean","description":"`TRUE` if the user has the administrator user type, `FALSE` otherwise. Administrators (admins) have all permissions and can perform any action in Mambu."},"apiAccess":{"type":"boolean","description":"`TRUE` if the user can authenticate and interact with Mambu APIs, `FALSE` otherwise. The user may still require additional permissions for specific API requests."},"canManageAllBranches":{"type":"boolean","description":"`TRUE` if the user has access to all branches, `FALSE` if the user only has access to specific branches."},"canManageEntitiesAssignedToOtherOfficers":{"type":"boolean","description":"`TRUE` if a credit officer user can access entities (for example, clients or accounts) assigned to other credit officers, `FALSE` otherwise."},"creditOfficerAccess":{"type":"boolean","description":"`TRUE` if the user has the credit officer user type, `FALSE` otherwise. Credit officers have the option of having clients and groups assigned to them."},"deliveryAccess":{"type":"boolean","description":"`TRUE` if the user is part of the Mambu delivery team, `FALSE` otherwise."},"mambuAccess":{"type":"boolean","description":"TRUE` if the user can log in to the Mambu UI using their login credentials, `FALSE` otherwise."},"managedBranches":{"type":"array","description":"The list of branches that can be managed by the user. If the user has the `canManageAllBranches` property set to `TRUE`, this list does not apply.","items":{"$ref":"#/$defs/UserManagedBranch"}},"permissions":{"type":"array","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Permissions may be relevant for the API and/or the Mambu UI.","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","GET_MANAGE_CONFIGURATION_AS_CODE","PUT_MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_INDEX_RATES","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_CURRENCIES","MANAGE_AUTHORIZATION_HOLDS_SETUP","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","ENTER_REFUND","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_BULK_DEPOSITS","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","MANAGE_DEPOSIT_ACCOUNT_RECIPIENT","MANAGE_DEPOSIT_ASSOCIATION","BYPASS_ACCOUNT_OWNERSHIP_TRANSFER_VIEW_RESTRICTION","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_JASPER_REPORTS","CREATE_JASPER_REPORTS","EDIT_JASPER_REPORTS","DELETE_JASPER_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","MANAGE_INTERBRANCH_GLACCOUNT_RULES","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_TWO_FACTOR_AUTHENTICATION","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD","VIEW_MAMBU_FUNCTIONS","CREATE_MAMBU_FUNCTIONS","EDIT_MAMBU_FUNCTIONS","DELETE_MAMBU_FUNCTIONS","VIEW_MAMBU_FUNCTIONS_SECRETS","CREATE_MAMBU_FUNCTIONS_SECRETS","EDIT_MAMBU_FUNCTIONS_SECRETS","DELETE_MAMBU_FUNCTIONS_SECRETS","VIEW_PROFIT_SHARING_PROPOSALS","CREATE_PROFIT_SHARING_CASH_FLOWS","VIEW_PROFIT_SHARING_CASH_FLOWS","EDIT_PROFIT_SHARING_CASH_FLOWS","DELETE_PROFIT_SHARING_CASH_FLOWS","CREATE_PROFIT_SHARING_POOLS","VIEW_PROFIT_SHARING_POOLS","EDIT_PROFIT_SHARING_POOLS","DELETE_PROFIT_SHARING_POOLS","CREATE_PROFIT_SHARING_PRODUCT_SETTINGS","VIEW_PROFIT_SHARING_PRODUCT_SETTINGS","EDIT_PROFIT_SHARING_PRODUCT_SETTINGS","DELETE_PROFIT_SHARING_PRODUCT_SETTINGS","MAKE_BULK_CHANGE_INTEREST_AVAILABILITY"]}},"supportAccess":{"type":"boolean","description":"`TRUE` if the user can provide Mambu technical support, `FALSE` otherwise."},"tellerAccess":{"type":"boolean","description":"`TRUE` if the user has the teller user type, `FALSE` otherwise. Tellers have access to the teller module and specific tellering permissions, which allow them to take actions such as opening or closing tills, posting transactions on a till, and adding and removing cash from a till."}},"required":["canManageAllBranches","canManageEntitiesAssignedToOtherOfficers"],"additionalProperties":true};const schema13 = {"type":"object","description":"Represents a branch that can be managed by the user or API consumer.","properties":{"branchKey":{"type":"string","description":"The encoded key of the branch, it is automatically generated."}},"additionalProperties":true};const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.canManageAllBranches === undefined) && (missing0 = "canManageAllBranches")) || ((data.canManageEntitiesAssignedToOtherOfficers === undefined) && (missing0 = "canManageEntitiesAssignedToOtherOfficers"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.administratorAccess !== undefined){const _errs2 = errors;if(typeof data.administratorAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/administratorAccess",schemaPath:"#/properties/administratorAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.apiAccess !== undefined){const _errs4 = errors;if(typeof data.apiAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/apiAccess",schemaPath:"#/properties/apiAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.canManageAllBranches !== undefined){const _errs6 = errors;if(typeof data.canManageAllBranches !== "boolean"){validate11.errors = [{instancePath:instancePath+"/canManageAllBranches",schemaPath:"#/properties/canManageAllBranches/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.canManageEntitiesAssignedToOtherOfficers !== undefined){const _errs8 = errors;if(typeof data.canManageEntitiesAssignedToOtherOfficers !== "boolean"){validate11.errors = [{instancePath:instancePath+"/canManageEntitiesAssignedToOtherOfficers",schemaPath:"#/properties/canManageEntitiesAssignedToOtherOfficers/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.creditOfficerAccess !== undefined){const _errs10 = errors;if(typeof data.creditOfficerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/creditOfficerAccess",schemaPath:"#/properties/creditOfficerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.deliveryAccess !== undefined){const _errs12 = errors;if(typeof data.deliveryAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/deliveryAccess",schemaPath:"#/properties/deliveryAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.mambuAccess !== undefined){const _errs14 = errors;if(typeof data.mambuAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/mambuAccess",schemaPath:"#/properties/mambuAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.managedBranches !== undefined){let data7 = data.managedBranches;const _errs16 = errors;if(errors === _errs16){if(Array.isArray(data7)){var valid1 = true;const len0 = data7.length;for(let i0=0; i0<len0; i0++){let data8 = data7[i0];const _errs18 = errors;const _errs19 = errors;if(errors === _errs19){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.branchKey !== undefined){if(typeof data8.branchKey !== "string"){validate11.errors = [{instancePath:instancePath+"/managedBranches/" + i0+"/branchKey",schemaPath:"#/$defs/UserManagedBranch/properties/branchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/managedBranches/" + i0,schemaPath:"#/$defs/UserManagedBranch/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs18 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/managedBranches",schemaPath:"#/properties/managedBranches/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.permissions !== undefined){let data10 = data.permissions;const _errs24 = errors;if(errors === _errs24){if(Array.isArray(data10)){var valid4 = true;const len1 = data10.length;for(let i1=0; i1<len1; i1++){const _errs26 = errors;let valid5;valid5 = false;for(const v0 of schema12.properties.permissions.items.enum){if(func0(data10[i1], v0)){valid5 = true;break;}}if(!valid5){validate11.errors = [{instancePath:instancePath+"/permissions/" + i1,schemaPath:"#/properties/permissions/items/enum",keyword:"enum",params:{allowedValues: schema12.properties.permissions.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs26 === errors;if(!valid4){break;}}}else {validate11.errors = [{instancePath:instancePath+"/permissions",schemaPath:"#/properties/permissions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.supportAccess !== undefined){const _errs27 = errors;if(typeof data.supportAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/supportAccess",schemaPath:"#/properties/supportAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.tellerAccess !== undefined){const _errs29 = errors;if(typeof data.tellerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/tellerAccess",schemaPath:"#/properties/tellerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.access === undefined) && (missing0 = "access")) || ((data.firstName === undefined) && (missing0 = "firstName"))) || ((data.username === undefined) && (missing0 = "username"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.access !== undefined){const _errs2 = errors;if(!(validate11(data.access, {instancePath:instancePath+"/access",parentData:data,parentDataProperty:"access",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedBranchKey !== undefined){const _errs3 = errors;if(typeof data.assignedBranchKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedBranchKey",schemaPath:"#/properties/assignedBranchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs5 = errors;if(errors === _errs5){if(errors === _errs5){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.email !== undefined){const _errs7 = errors;if(typeof data.email !== "string"){validate10.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs9 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.firstName !== undefined){const _errs11 = errors;if(typeof data.firstName !== "string"){validate10.errors = [{instancePath:instancePath+"/firstName",schemaPath:"#/properties/firstName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.homePhone !== undefined){const _errs13 = errors;if(typeof data.homePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/homePhone",schemaPath:"#/properties/homePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs15 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.language !== undefined){const _errs17 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.language.enum){if(func0(data.language, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/language",schemaPath:"#/properties/language/enum",keyword:"enum",params:{allowedValues: schema11.properties.language.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.lastLoggedInDate !== undefined){const _errs18 = errors;if(errors === _errs18){if(errors === _errs18){if(!(typeof data.lastLoggedInDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastLoggedInDate",schemaPath:"#/properties/lastLoggedInDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs20 = errors;if(errors === _errs20){if(errors === _errs20){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.lastName !== undefined){const _errs22 = errors;if(typeof data.lastName !== "string"){validate10.errors = [{instancePath:instancePath+"/lastName",schemaPath:"#/properties/lastName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.mobilePhone !== undefined){const _errs24 = errors;if(typeof data.mobilePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/mobilePhone",schemaPath:"#/properties/mobilePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs26 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.role !== undefined){let data14 = data.role;const _errs28 = errors;const _errs29 = errors;if(errors === _errs29){if(data14 && typeof data14 == "object" && !Array.isArray(data14)){if(data14.encodedKey !== undefined){const _errs32 = errors;if(typeof data14.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/role/encodedKey",schemaPath:"#/$defs/RoleIdentifier/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs32 === errors;}else {var valid3 = true;}if(valid3){if(data14.id !== undefined){const _errs34 = errors;if(typeof data14.id !== "string"){validate10.errors = [{instancePath:instancePath+"/role/id",schemaPath:"#/$defs/RoleIdentifier/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs34 === errors;}else {var valid3 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/role",schemaPath:"#/$defs/RoleIdentifier/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.title !== undefined){const _errs36 = errors;if(typeof data.title !== "string"){validate10.errors = [{instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionLimits !== undefined){let data18 = data.transactionLimits;const _errs38 = errors;if(errors === _errs38){if(data18 && typeof data18 == "object" && !Array.isArray(data18)){for(const key0 in data18){let data19 = data18[key0];const _errs41 = errors;if(!((typeof data19 == "number") && (isFinite(data19)))){validate10.errors = [{instancePath:instancePath+"/transactionLimits/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/transactionLimits/additionalProperties/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs41 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionLimits",schemaPath:"#/properties/transactionLimits/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.twoFactorAuthentication !== undefined){const _errs43 = errors;if(typeof data.twoFactorAuthentication !== "boolean"){validate10.errors = [{instancePath:instancePath+"/twoFactorAuthentication",schemaPath:"#/properties/twoFactorAuthentication/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.username !== undefined){const _errs45 = errors;if(typeof data.username !== "string"){validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs45 === errors;}else {var valid0 = true;}if(valid0){if(data.userState !== undefined){let data22 = data.userState;const _errs47 = errors;if(!(((data22 === "ACTIVE") || (data22 === "INACTIVE")) || (data22 === "LOCKED"))){validate10.errors = [{instancePath:instancePath+"/userState",schemaPath:"#/properties/userState/enum",keyword:"enum",params:{allowedValues: schema11.properties.userState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs47 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;