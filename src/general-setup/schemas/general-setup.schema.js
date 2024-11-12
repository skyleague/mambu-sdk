/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GeneralSetup","type":"object","description":"Represents the general setup for an organization.","properties":{"accountingCutOffTime":{"type":"string","description":"The accounting cut off time."},"approvalDisbursalTwoManRuleEnabled":{"type":"boolean","description":"`TRUE` if separate users are required for approval and disbursal, `FALSE` otherwise."},"arrearsDaysBeforeWriteOff":{"type":"integer","description":"The number of days that are required before an account can be written off."},"assignmentConstraints":{"type":"array","description":"The list of required assignments for clients and groups.","items":{"enum":["BRANCH","CENTRE","CREDIT_OFFICER","GROUP"]}},"automatedAccountingClosuresInterval":{"type":"integer","description":"The interval (number of days) between the execution of automated accounting closures. If this number is 0, automated closure is performed."},"clientIdFormat":{"type":"string","description":"The pattern for generating individual client IDs."},"dashboardConfigurations":{"type":"array","description":"The dashboard configuration.","items":{"$ref":"#/$defs/DashboardConfiguration"},"uniqueItems":true},"dateFormats":{"type":"object","description":"The date (dd-MM-yyyy) or date time (dd-MM-yyyy HH:mm:ss) formats.","additionalProperties":{"type":"string"}},"decimalSeparator":{"description":"The symbol used to mark the border between the integral and the fractional parts of a decimal numeral.","enum":["COMMA","POINT"]},"defaultClientRoleKey":{"type":"string","description":"The client role used as default."},"defaultClientState":{"description":"The client default state.","enum":["PENDING_APPROVAL","INACTIVE","ACTIVE","EXITED","BLACKLISTED","REJECTED"]},"defaultGroupRoleKey":{"type":"string","description":"The group role used as default."},"defaultLineOfCreditState":{"description":"The line of credit default state.","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"defaultTransactionChannelKey":{"type":"string","description":"The transaction channel that is used as the default."},"duplicateClientChecks":{"type":"array","description":"The list of duplicate client constraints that are available in the administration and can be performed.","items":{"$ref":"#/$defs/DuplicateFieldConstraint"}},"duplicateClientConstraintAction":{"description":"The action to be taken when the duplicate client validation fails.","enum":["NONE","WARNING","ERROR"]},"enabledComponents":{"type":"array","description":"The list of all the enabled components for the current tenant.","items":{"enum":["LOANS","DEPOSITS","BRANCHES","CENTRES","CLIENTS","GROUPS","ACCOUNTING","CREDIT_OFFICERS"]}},"encodedKey":{"type":"string","description":"The encoded key of the general setup, which is auto generated, and unique."},"eodProcessingMethod":{"description":"The end of day (EOD) processing settings. The `AUTOMATIC` EOD processing runs every midnight. The `MANUAL` EOD processing runs when the client initiates the action from the Mambu UI.","enum":["AUTOMATIC","MANUAL"]},"exposureAmount":{"type":"number","description":"The maximum exposure amount."},"exposureType":{"description":"The maximum exposure a client can have in outstanding loans at any time.","enum":["UNLIMITED","SUM_OF_LOANS","SUM_OF_LOANS_MINUS_SAVINGS"]},"groupIdFormat":{"type":"string","description":"The pattern for generating group client IDs."},"groupSizeLimitType":{"description":"The group size limitation type.","enum":["HARD","WARNING","NONE"]},"interBranchTransferGLAccountKey":{"type":"string","description":"The key of the general ledger (GL) account which will be used for inter-branch transfers."},"lineOfCreditIdFormat":{"type":"string","description":"The unique pattern after which all the lines of credit IDs should be created."},"maxAllowedIdDocumentAttachments":{"type":"integer","description":"The maximum allowed ID document attachments."},"maxAllowedJournalEntryDocumentAttachments":{"type":"integer","description":"The maximum allowed journal entry attachments."},"maxAllowedUndoClosurePeriod":{"type":"integer","description":"The maximum number of days users are allowed to undo of close obligations met for a loan account."},"maxGroupSizeLimit":{"type":"integer","description":"The maximum group size allowed. A null value means the limit is ignored."},"minGroupSizeLimit":{"type":"integer","description":"The minimum group size allowed. A null value means the limit is ignored."},"multipleGroupMemberships":{"description":"The constraint on whether clients can belong to more than one group or not.","enum":["UNLIMITED","ONE_GROUP"]},"multipleLoans":{"description":"The option that shows if multiple loans are allowed or not.","enum":["UNLIMITED","ONE_LOAN"]},"otherIdDocumentsEnabled":{"type":"boolean","description":"`TRUE` if other ID documents are enabled, `FALSE` otherwise."},"overdraftInterestEodBalanceDate":{"type":"string","description":"The date used when computing overdraft interest for savings accounts.","format":"date-time"},"tillIdFormat":{"type":"string","description":"The unique pattern after which all the till IDs should be created."}},"additionalProperties":true,"$defs":{"DashboardConfiguration":{"type":"object","description":"Response representation of the dashboard configuration","properties":{"creationDate":{"type":"string","description":"The date dashboard configuration was created","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the dashboard configuration, auto generated, unique"},"name":{"description":"The Dashboard option name","enum":["LATEST_ACTIVITY","TASKS","FAVOURITE_VIEWS","INDICATORS","CURRENT_TILLS","CLIENTS","UPCOMING_REPAYMENTS","NONE"]}},"additionalProperties":true},"DuplicateFieldConstraint":{"type":"object","description":"Represents a duplicate constraint which needs to apply when saving entities","properties":{"active":{"type":"boolean","description":"The check will be performed if the field is true"},"dataField":{"type":"string","description":"The ENUM data field when the field is an ENUM"},"dataItemType":{"description":"The type of the owner (entity) to whom a data field belongs to","enum":["LOANS","SAVINGS","CLIENT","CLIENT_ROLE","GROUP","GROUP_ROLE","TRANSACTION","JOURNAL_ENTRY","INTEREST_ACCRUAL_BREAKDOWN","BRANCH","CENTRE","USER","LOAN_PRODUCT","SAVINGS_PRODUCT","NOTIFICATION_MESSAGE","NOTIFICATION_TEMPLATE","REPAYMENT","REPAYMENT_COLLECTION","ACTIVITY","LINE_OF_CREDIT","IDENTIFICATION_DOCUMENT","ATTACHMENT","CURRENCY","PRODUCT","REVENUE","EXPENSE","OUTSTANDING_PORTFOLIO_ACCOUNTS","OUTSTANDING_PORTFOLIO_AMOUNTS","CREATED_ACCOUNTS","WRITTEN_OFF_LOANS","DISBURSED_LOANS","LOAN_GROUP","TRANCHE","DISBURSEMENT_DETAILS","TRANSACTION_DETAILS","TRANSACTION_CHANNEL","CUSTOM_PREDEFINED_FEE","CUSTOM_FIELD_SELECTION","PREDEFINED_FEE","LOAN_TRANSACTION","SAVINGS_TRANSACTION","CARD_TRANSACTION_REVERSAL","COMPOSED_TRANSACTIONS","UNION_TRANSACTIONS","INVESTOR_FUND","PRINCIPAL_PAYMENT_SETTINGS","LOAN_ACCOUNT_GUARANTY","TASK","DOCUMENT_TEMPLATE","INDEX_RATE","INDEX_RATE_SOURCE","INTEREST_PRODUCT_SETTINGS","MCC_EXPIRATION","PRODUCT_ARREARS_SETTINGS","ACCOUNT_INTEREST_RATE_SETTINGS","LENDING_ACCOUNT_CONTRACT","REVOLVING_ACCOUNT","LENDING_PRODUCT_CONTRACT"]},"encodedKey":{"type":"string","description":"The encoded key of the duplicate field constraint, auto generated, unique"},"groupIndex":{"type":"integer","description":"Used for creating an AND clause between constraints"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Response representation of the dashboard configuration","properties":{"creationDate":{"type":"string","description":"The date dashboard configuration was created","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the dashboard configuration, auto generated, unique"},"name":{"description":"The Dashboard option name","enum":["LATEST_ACTIVITY","TASKS","FAVOURITE_VIEWS","INDICATORS","CURRENT_TILLS","CLIENTS","UPCOMING_REPAYMENTS","NONE"]}},"additionalProperties":true};const schema13 = {"type":"object","description":"Represents a duplicate constraint which needs to apply when saving entities","properties":{"active":{"type":"boolean","description":"The check will be performed if the field is true"},"dataField":{"type":"string","description":"The ENUM data field when the field is an ENUM"},"dataItemType":{"description":"The type of the owner (entity) to whom a data field belongs to","enum":["LOANS","SAVINGS","CLIENT","CLIENT_ROLE","GROUP","GROUP_ROLE","TRANSACTION","JOURNAL_ENTRY","INTEREST_ACCRUAL_BREAKDOWN","BRANCH","CENTRE","USER","LOAN_PRODUCT","SAVINGS_PRODUCT","NOTIFICATION_MESSAGE","NOTIFICATION_TEMPLATE","REPAYMENT","REPAYMENT_COLLECTION","ACTIVITY","LINE_OF_CREDIT","IDENTIFICATION_DOCUMENT","ATTACHMENT","CURRENCY","PRODUCT","REVENUE","EXPENSE","OUTSTANDING_PORTFOLIO_ACCOUNTS","OUTSTANDING_PORTFOLIO_AMOUNTS","CREATED_ACCOUNTS","WRITTEN_OFF_LOANS","DISBURSED_LOANS","LOAN_GROUP","TRANCHE","DISBURSEMENT_DETAILS","TRANSACTION_DETAILS","TRANSACTION_CHANNEL","CUSTOM_PREDEFINED_FEE","CUSTOM_FIELD_SELECTION","PREDEFINED_FEE","LOAN_TRANSACTION","SAVINGS_TRANSACTION","CARD_TRANSACTION_REVERSAL","COMPOSED_TRANSACTIONS","UNION_TRANSACTIONS","INVESTOR_FUND","PRINCIPAL_PAYMENT_SETTINGS","LOAN_ACCOUNT_GUARANTY","TASK","DOCUMENT_TEMPLATE","INDEX_RATE","INDEX_RATE_SOURCE","INTEREST_PRODUCT_SETTINGS","MCC_EXPIRATION","PRODUCT_ARREARS_SETTINGS","ACCOUNT_INTEREST_RATE_SETTINGS","LENDING_ACCOUNT_CONTRACT","REVOLVING_ACCOUNT","LENDING_PRODUCT_CONTRACT"]},"encodedKey":{"type":"string","description":"The encoded key of the duplicate field constraint, auto generated, unique"},"groupIndex":{"type":"integer","description":"Used for creating an AND clause between constraints"}},"additionalProperties":true};const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.accountingCutOffTime !== undefined){const _errs2 = errors;if(typeof data.accountingCutOffTime !== "string"){validate10.errors = [{instancePath:instancePath+"/accountingCutOffTime",schemaPath:"#/properties/accountingCutOffTime/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.approvalDisbursalTwoManRuleEnabled !== undefined){const _errs4 = errors;if(typeof data.approvalDisbursalTwoManRuleEnabled !== "boolean"){validate10.errors = [{instancePath:instancePath+"/approvalDisbursalTwoManRuleEnabled",schemaPath:"#/properties/approvalDisbursalTwoManRuleEnabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.arrearsDaysBeforeWriteOff !== undefined){let data2 = data.arrearsDaysBeforeWriteOff;const _errs6 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/arrearsDaysBeforeWriteOff",schemaPath:"#/properties/arrearsDaysBeforeWriteOff/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.assignmentConstraints !== undefined){let data3 = data.assignmentConstraints;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid1 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;if(!((((data4 === "BRANCH") || (data4 === "CENTRE")) || (data4 === "CREDIT_OFFICER")) || (data4 === "GROUP"))){validate10.errors = [{instancePath:instancePath+"/assignmentConstraints/" + i0,schemaPath:"#/properties/assignmentConstraints/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.assignmentConstraints.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs10 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/assignmentConstraints",schemaPath:"#/properties/assignmentConstraints/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.automatedAccountingClosuresInterval !== undefined){let data5 = data.automatedAccountingClosuresInterval;const _errs11 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/automatedAccountingClosuresInterval",schemaPath:"#/properties/automatedAccountingClosuresInterval/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.clientIdFormat !== undefined){const _errs13 = errors;if(typeof data.clientIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/clientIdFormat",schemaPath:"#/properties/clientIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.dashboardConfigurations !== undefined){let data7 = data.dashboardConfigurations;const _errs15 = errors;if(errors === _errs15){if(Array.isArray(data7)){var valid2 = true;const len1 = data7.length;for(let i1=0; i1<len1; i1++){let data8 = data7[i1];const _errs17 = errors;const _errs18 = errors;if(errors === _errs18){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.creationDate !== undefined){const _errs21 = errors;if(errors === _errs21){if(errors === _errs21){if(!(typeof data8.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i1+"/creationDate",schemaPath:"#/$defs/DashboardConfiguration/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid4 = _errs21 === errors;}else {var valid4 = true;}if(valid4){if(data8.encodedKey !== undefined){const _errs23 = errors;if(typeof data8.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i1+"/encodedKey",schemaPath:"#/$defs/DashboardConfiguration/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs23 === errors;}else {var valid4 = true;}if(valid4){if(data8.name !== undefined){const _errs25 = errors;let valid5;valid5 = false;for(const v0 of schema12.properties.name.enum){if(func0(data8.name, v0)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i1+"/name",schemaPath:"#/$defs/DashboardConfiguration/properties/name/enum",keyword:"enum",params:{allowedValues: schema12.properties.name.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs25 === errors;}else {var valid4 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i1,schemaPath:"#/$defs/DashboardConfiguration/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs17 === errors;if(!valid2){break;}}if(valid2){let i2 = data7.length;let j0;if(i2 > 1){outer0:for(;i2--;){for(j0 = i2; j0--;){if(func0(data7[i2], data7[j0])){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations",schemaPath:"#/properties/dashboardConfigurations/uniqueItems",keyword:"uniqueItems",params:{i: i2, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i2+" are identical)"}];return false;break outer0;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations",schemaPath:"#/properties/dashboardConfigurations/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.dateFormats !== undefined){let data12 = data.dateFormats;const _errs26 = errors;if(errors === _errs26){if(data12 && typeof data12 == "object" && !Array.isArray(data12)){for(const key0 in data12){const _errs29 = errors;if(typeof data12[key0] !== "string"){validate10.errors = [{instancePath:instancePath+"/dateFormats/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/dateFormats/additionalProperties/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs29 === errors;if(!valid7){break;}}}else {validate10.errors = [{instancePath:instancePath+"/dateFormats",schemaPath:"#/properties/dateFormats/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.decimalSeparator !== undefined){let data14 = data.decimalSeparator;const _errs31 = errors;if(!((data14 === "COMMA") || (data14 === "POINT"))){validate10.errors = [{instancePath:instancePath+"/decimalSeparator",schemaPath:"#/properties/decimalSeparator/enum",keyword:"enum",params:{allowedValues: schema11.properties.decimalSeparator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultClientRoleKey !== undefined){const _errs32 = errors;if(typeof data.defaultClientRoleKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultClientRoleKey",schemaPath:"#/properties/defaultClientRoleKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultClientState !== undefined){const _errs34 = errors;let valid8;valid8 = false;for(const v1 of schema11.properties.defaultClientState.enum){if(func0(data.defaultClientState, v1)){valid8 = true;break;}}if(!valid8){validate10.errors = [{instancePath:instancePath+"/defaultClientState",schemaPath:"#/properties/defaultClientState/enum",keyword:"enum",params:{allowedValues: schema11.properties.defaultClientState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs34 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultGroupRoleKey !== undefined){const _errs35 = errors;if(typeof data.defaultGroupRoleKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultGroupRoleKey",schemaPath:"#/properties/defaultGroupRoleKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultLineOfCreditState !== undefined){const _errs37 = errors;let valid9;valid9 = false;for(const v2 of schema11.properties.defaultLineOfCreditState.enum){if(func0(data.defaultLineOfCreditState, v2)){valid9 = true;break;}}if(!valid9){validate10.errors = [{instancePath:instancePath+"/defaultLineOfCreditState",schemaPath:"#/properties/defaultLineOfCreditState/enum",keyword:"enum",params:{allowedValues: schema11.properties.defaultLineOfCreditState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultTransactionChannelKey !== undefined){const _errs38 = errors;if(typeof data.defaultTransactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultTransactionChannelKey",schemaPath:"#/properties/defaultTransactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.duplicateClientChecks !== undefined){let data20 = data.duplicateClientChecks;const _errs40 = errors;if(errors === _errs40){if(Array.isArray(data20)){var valid10 = true;const len2 = data20.length;for(let i3=0; i3<len2; i3++){let data21 = data20[i3];const _errs42 = errors;const _errs43 = errors;if(errors === _errs43){if(data21 && typeof data21 == "object" && !Array.isArray(data21)){if(data21.active !== undefined){const _errs46 = errors;if(typeof data21.active !== "boolean"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3+"/active",schemaPath:"#/$defs/DuplicateFieldConstraint/properties/active/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid12 = _errs46 === errors;}else {var valid12 = true;}if(valid12){if(data21.dataField !== undefined){const _errs48 = errors;if(typeof data21.dataField !== "string"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3+"/dataField",schemaPath:"#/$defs/DuplicateFieldConstraint/properties/dataField/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid12 = _errs48 === errors;}else {var valid12 = true;}if(valid12){if(data21.dataItemType !== undefined){const _errs50 = errors;let valid13;valid13 = false;for(const v3 of schema13.properties.dataItemType.enum){if(func0(data21.dataItemType, v3)){valid13 = true;break;}}if(!valid13){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3+"/dataItemType",schemaPath:"#/$defs/DuplicateFieldConstraint/properties/dataItemType/enum",keyword:"enum",params:{allowedValues: schema13.properties.dataItemType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid12 = _errs50 === errors;}else {var valid12 = true;}if(valid12){if(data21.encodedKey !== undefined){const _errs51 = errors;if(typeof data21.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3+"/encodedKey",schemaPath:"#/$defs/DuplicateFieldConstraint/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid12 = _errs51 === errors;}else {var valid12 = true;}if(valid12){if(data21.groupIndex !== undefined){let data26 = data21.groupIndex;const _errs53 = errors;if(!(((typeof data26 == "number") && (!(data26 % 1) && !isNaN(data26))) && (isFinite(data26)))){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3+"/groupIndex",schemaPath:"#/$defs/DuplicateFieldConstraint/properties/groupIndex/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid12 = _errs53 === errors;}else {var valid12 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i3,schemaPath:"#/$defs/DuplicateFieldConstraint/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid10 = _errs42 === errors;if(!valid10){break;}}}else {validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks",schemaPath:"#/properties/duplicateClientChecks/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs40 === errors;}else {var valid0 = true;}if(valid0){if(data.duplicateClientConstraintAction !== undefined){let data27 = data.duplicateClientConstraintAction;const _errs55 = errors;if(!(((data27 === "NONE") || (data27 === "WARNING")) || (data27 === "ERROR"))){validate10.errors = [{instancePath:instancePath+"/duplicateClientConstraintAction",schemaPath:"#/properties/duplicateClientConstraintAction/enum",keyword:"enum",params:{allowedValues: schema11.properties.duplicateClientConstraintAction.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs55 === errors;}else {var valid0 = true;}if(valid0){if(data.enabledComponents !== undefined){let data28 = data.enabledComponents;const _errs56 = errors;if(errors === _errs56){if(Array.isArray(data28)){var valid14 = true;const len3 = data28.length;for(let i4=0; i4<len3; i4++){const _errs58 = errors;let valid15;valid15 = false;for(const v4 of schema11.properties.enabledComponents.items.enum){if(func0(data28[i4], v4)){valid15 = true;break;}}if(!valid15){validate10.errors = [{instancePath:instancePath+"/enabledComponents/" + i4,schemaPath:"#/properties/enabledComponents/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.enabledComponents.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid14 = _errs58 === errors;if(!valid14){break;}}}else {validate10.errors = [{instancePath:instancePath+"/enabledComponents",schemaPath:"#/properties/enabledComponents/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs56 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs59 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs59 === errors;}else {var valid0 = true;}if(valid0){if(data.eodProcessingMethod !== undefined){let data31 = data.eodProcessingMethod;const _errs61 = errors;if(!((data31 === "AUTOMATIC") || (data31 === "MANUAL"))){validate10.errors = [{instancePath:instancePath+"/eodProcessingMethod",schemaPath:"#/properties/eodProcessingMethod/enum",keyword:"enum",params:{allowedValues: schema11.properties.eodProcessingMethod.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs61 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureAmount !== undefined){let data32 = data.exposureAmount;const _errs62 = errors;if(!((typeof data32 == "number") && (isFinite(data32)))){validate10.errors = [{instancePath:instancePath+"/exposureAmount",schemaPath:"#/properties/exposureAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs62 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureType !== undefined){let data33 = data.exposureType;const _errs64 = errors;if(!(((data33 === "UNLIMITED") || (data33 === "SUM_OF_LOANS")) || (data33 === "SUM_OF_LOANS_MINUS_SAVINGS"))){validate10.errors = [{instancePath:instancePath+"/exposureType",schemaPath:"#/properties/exposureType/enum",keyword:"enum",params:{allowedValues: schema11.properties.exposureType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs64 === errors;}else {var valid0 = true;}if(valid0){if(data.groupIdFormat !== undefined){const _errs65 = errors;if(typeof data.groupIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/groupIdFormat",schemaPath:"#/properties/groupIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs65 === errors;}else {var valid0 = true;}if(valid0){if(data.groupSizeLimitType !== undefined){let data35 = data.groupSizeLimitType;const _errs67 = errors;if(!(((data35 === "HARD") || (data35 === "WARNING")) || (data35 === "NONE"))){validate10.errors = [{instancePath:instancePath+"/groupSizeLimitType",schemaPath:"#/properties/groupSizeLimitType/enum",keyword:"enum",params:{allowedValues: schema11.properties.groupSizeLimitType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs67 === errors;}else {var valid0 = true;}if(valid0){if(data.interBranchTransferGLAccountKey !== undefined){const _errs68 = errors;if(typeof data.interBranchTransferGLAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/interBranchTransferGLAccountKey",schemaPath:"#/properties/interBranchTransferGLAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs68 === errors;}else {var valid0 = true;}if(valid0){if(data.lineOfCreditIdFormat !== undefined){const _errs70 = errors;if(typeof data.lineOfCreditIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/lineOfCreditIdFormat",schemaPath:"#/properties/lineOfCreditIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs70 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedIdDocumentAttachments !== undefined){let data38 = data.maxAllowedIdDocumentAttachments;const _errs72 = errors;if(!(((typeof data38 == "number") && (!(data38 % 1) && !isNaN(data38))) && (isFinite(data38)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedIdDocumentAttachments",schemaPath:"#/properties/maxAllowedIdDocumentAttachments/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs72 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedJournalEntryDocumentAttachments !== undefined){let data39 = data.maxAllowedJournalEntryDocumentAttachments;const _errs74 = errors;if(!(((typeof data39 == "number") && (!(data39 % 1) && !isNaN(data39))) && (isFinite(data39)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedJournalEntryDocumentAttachments",schemaPath:"#/properties/maxAllowedJournalEntryDocumentAttachments/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs74 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedUndoClosurePeriod !== undefined){let data40 = data.maxAllowedUndoClosurePeriod;const _errs76 = errors;if(!(((typeof data40 == "number") && (!(data40 % 1) && !isNaN(data40))) && (isFinite(data40)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedUndoClosurePeriod",schemaPath:"#/properties/maxAllowedUndoClosurePeriod/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs76 === errors;}else {var valid0 = true;}if(valid0){if(data.maxGroupSizeLimit !== undefined){let data41 = data.maxGroupSizeLimit;const _errs78 = errors;if(!(((typeof data41 == "number") && (!(data41 % 1) && !isNaN(data41))) && (isFinite(data41)))){validate10.errors = [{instancePath:instancePath+"/maxGroupSizeLimit",schemaPath:"#/properties/maxGroupSizeLimit/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs78 === errors;}else {var valid0 = true;}if(valid0){if(data.minGroupSizeLimit !== undefined){let data42 = data.minGroupSizeLimit;const _errs80 = errors;if(!(((typeof data42 == "number") && (!(data42 % 1) && !isNaN(data42))) && (isFinite(data42)))){validate10.errors = [{instancePath:instancePath+"/minGroupSizeLimit",schemaPath:"#/properties/minGroupSizeLimit/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs80 === errors;}else {var valid0 = true;}if(valid0){if(data.multipleGroupMemberships !== undefined){let data43 = data.multipleGroupMemberships;const _errs82 = errors;if(!((data43 === "UNLIMITED") || (data43 === "ONE_GROUP"))){validate10.errors = [{instancePath:instancePath+"/multipleGroupMemberships",schemaPath:"#/properties/multipleGroupMemberships/enum",keyword:"enum",params:{allowedValues: schema11.properties.multipleGroupMemberships.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs82 === errors;}else {var valid0 = true;}if(valid0){if(data.multipleLoans !== undefined){let data44 = data.multipleLoans;const _errs83 = errors;if(!((data44 === "UNLIMITED") || (data44 === "ONE_LOAN"))){validate10.errors = [{instancePath:instancePath+"/multipleLoans",schemaPath:"#/properties/multipleLoans/enum",keyword:"enum",params:{allowedValues: schema11.properties.multipleLoans.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs83 === errors;}else {var valid0 = true;}if(valid0){if(data.otherIdDocumentsEnabled !== undefined){const _errs84 = errors;if(typeof data.otherIdDocumentsEnabled !== "boolean"){validate10.errors = [{instancePath:instancePath+"/otherIdDocumentsEnabled",schemaPath:"#/properties/otherIdDocumentsEnabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs84 === errors;}else {var valid0 = true;}if(valid0){if(data.overdraftInterestEodBalanceDate !== undefined){const _errs86 = errors;if(errors === _errs86){if(errors === _errs86){if(!(typeof data.overdraftInterestEodBalanceDate === "string")){validate10.errors = [{instancePath:instancePath+"/overdraftInterestEodBalanceDate",schemaPath:"#/properties/overdraftInterestEodBalanceDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs86 === errors;}else {var valid0 = true;}if(valid0){if(data.tillIdFormat !== undefined){const _errs88 = errors;if(typeof data.tillIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/tillIdFormat",schemaPath:"#/properties/tillIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs88 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;