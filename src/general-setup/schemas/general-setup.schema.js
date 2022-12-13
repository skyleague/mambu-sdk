/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GeneralSetup","type":"object","description":"Represents the general setup for an organization which can be modified by the organization's users","properties":{"clientIdFormat":{"type":"string","title":"clientIdFormat","description":"The pattern for generating client IDs"},"interBranchTransferGLAccountKey":{"type":"string","title":"interBranchTransferGLAccountKey","description":"The key of the GL Account which will be used for inter-branch transfers"},"assignmentConstraints":{"type":"array","title":"assignmentConstraints","description":"The list of required assignments for Clients and Groups","items":{"enum":["BRANCH","CENTRE","CREDIT_OFFICER","GROUP"]}},"maxAllowedIdDocumentAttachments":{"type":"integer","title":"maxAllowedIdDocumentAttachments","description":"The maximum allowed ID document attachments"},"decimalSeparator":{"title":"decimalSeparator","description":"Symbol used to mark the border between the integral and the fractional parts of a decimal numeral","enum":["COMMA","POINT"]},"maxGroupSizeLimit":{"type":"integer","title":"maxGroupSizeLimit","description":"The maximum group size allowed; null values causes ignoring of the limit"},"otherIdDocumentsEnabled":{"type":"boolean","title":"otherIdDocumentsEnabled","description":"Specifies whether the other id documents are enabled or not."},"groupSizeLimitType":{"title":"groupSizeLimitType","description":"The group size limitation type","enum":["HARD","WARNING","NONE"]},"eodProcessingMethod":{"title":"eodProcessingMethod","description":"The EOD processing settings whether are automatic, runs every midnight or manual, runs when the client initiates the action from the interface.","enum":["AUTOMATIC","MANUAL"]},"defaultClientState":{"title":"defaultClientState","description":"The client default state","enum":["PENDING_APPROVAL","INACTIVE","ACTIVE","EXITED","BLACKLISTED","REJECTED"]},"maxAllowedJournalEntryDocumentAttachments":{"type":"integer","title":"maxAllowedJournalEntryDocumentAttachments","description":"The maximum allowed journal entry attachments"},"dateFormats":{"type":"object","title":"dateFormats","description":"The date (dd-MM-yyyy) or date time (dd-MM-yyyy HH:mm:ss) formats","properties":{},"additionalProperties":{"type":"string"}},"approvalDisbursalTwoManRuleEnabled":{"type":"boolean","title":"approvalDisbursalTwoManRuleEnabled","description":"Specifies whether separate users are required for approval and disbursal"},"maxAllowedUndoClosurePeriod":{"type":"integer","title":"maxAllowedUndoClosurePeriod","description":"The maximum of days we allow users to undo of close obligations met for an loan account"},"overdraftInterestEodBalanceDate":{"type":"string","title":"overdraftInterestEodBalanceDate","description":"The date used when computing overdraft interest for savings accounts.","format":"date-time"},"exposureType":{"title":"exposureType","description":"The maximum exposure is a hard cap of how much a client can have in outstanding loans with the organization at any time","enum":["UNLIMITED","SUM_OF_LOANS","SUM_OF_LOANS_MINUS_SAVINGS"]},"tillIdFormat":{"type":"string","title":"tillIdFormat","description":"The unique pattern after which all the till IDs should be created"},"defaultClientRoleKey":{"type":"string","title":"defaultClientRoleKey","description":"The client role used as default"},"accountingCutOffTime":{"type":"string","title":"accountingCutOffTime","description":"The accounting cut off time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the general setup, auto generated, unique"},"minGroupSizeLimit":{"type":"integer","title":"minGroupSizeLimit","description":"The minimum group size allowed; null values causes ignoring of the limit"},"arrearsDaysBeforeWriteOff":{"type":"integer","title":"arrearsDaysBeforeWriteOff","description":"The number of days that are required before an account can be written off"},"automatedAccountingClosuresInterval":{"type":"integer","title":"automatedAccountingClosuresInterval","description":"The interval (number of days) between the execution of automated accounting closures. If this number is 0, automated closure is performed"},"duplicateClientChecks":{"type":"array","title":"duplicateClientChecks","description":"The list of duplicate client constraints that are available in the administration and can be performed","items":{"description":"The list of duplicate client constraints that are available in the administration and can be performed","$ref":"#/$defs/DuplicateFieldConstraintaf30"}},"enabledComponents":{"type":"array","title":"enabledComponents","description":"The list of all the enabled components for the current tenant","items":{"enum":["LOANS","DEPOSITS","BRANCHES","CENTRES","CLIENTS","GROUPS","ACCOUNTING","CREDIT_OFFICERS"]}},"defaultLineOfCreditState":{"title":"defaultLineOfCreditState","description":"The line of credit default state","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"defaultTransactionChannelKey":{"type":"string","title":"defaultTransactionChannelKey","description":"The transaction channel that it be used as default"},"exposureAmount":{"type":"number","title":"exposureAmount","description":"The maximum exposure amount"},"dashboardConfigurations":{"type":"array","title":"dashboardConfigurations","description":"The dashboard configuration","items":{"description":"The dashboard configuration","$ref":"#/$defs/DashboardConfigurationaf30"},"uniqueItems":true},"groupIdFormat":{"type":"string","title":"groupIdFormat","description":"The pattern for generating group client IDs"},"duplicateClientConstraintAction":{"title":"duplicateClientConstraintAction","description":"The action to be taken when the duplicate client validation fails","enum":["NONE","WARNING","ERROR"]},"multipleGroupMemberships":{"title":"multipleGroupMemberships","description":"The constraint on whether clients can belong to more than one group or not","enum":["UNLIMITED","ONE_GROUP"]},"defaultGroupRoleKey":{"type":"string","title":"defaultGroupRoleKey","description":"The group role used as default"},"multipleLoans":{"title":"multipleLoans","description":"The option that shows if multiple loans are allowed or not","enum":["UNLIMITED","ONE_LOAN"]},"lineOfCreditIdFormat":{"type":"string","title":"lineOfCreditIdFormat","description":"The unique pattern after which all the lines of credit IDs should be created"}},"additionalProperties":true,"$defs":{"DuplicateFieldConstraintaf30":{"type":"object","title":"DuplicateFieldConstraintaf30","description":"Represents a duplicate constraint which needs to apply when saving entities","properties":{"dataField":{"type":"string","title":"dataField","description":"The ENUM data field when the field is an ENUM"},"active":{"type":"boolean","title":"active","description":"The check will be performed if the field is true"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the duplicate field constraint, auto generated, unique"},"groupIndex":{"type":"integer","title":"groupIndex","description":"Used for creating an AND clause between constraints"},"dataItemType":{"title":"dataItemType","description":"The type of the owner (entity) to whom a data field belongs to","enum":["LOANS","SAVINGS","CLIENT","CLIENT_ROLE","GROUP","GROUP_ROLE","TRANSACTION","JOURNAL_ENTRY","INTEREST_ACCRUAL_BREAKDOWN","BRANCH","CENTRE","USER","LOAN_PRODUCT","SAVINGS_PRODUCT","NOTIFICATION_MESSAGE","NOTIFICATION_TEMPLATE","REPAYMENT","REPAYMENT_COLLECTION","ACTIVITY","LINE_OF_CREDIT","IDENTIFICATION_DOCUMENT","ATTACHMENT","CURRENCY","PRODUCT","REVENUE","EXPENSE","OUTSTANDING_PORTFOLIO_ACCOUNTS","OUTSTANDING_PORTFOLIO_AMOUNTS","CREATED_ACCOUNTS","WRITTEN_OFF_LOANS","DISBURSED_LOANS","LOAN_GROUP","TRANCHE","DISBURSEMENT_DETAILS","TRANSACTION_DETAILS","TRANSACTION_CHANNEL","CUSTOM_PREDEFINED_FEE","CUSTOM_FIELD_SELECTION","PREDEFINED_FEE","LOAN_TRANSACTION","SAVINGS_TRANSACTION","CARD_TRANSACTION_REVERSAL","COMPOSED_TRANSACTIONS","UNION_TRANSACTIONS","INVESTOR_FUND","PRINCIPAL_PAYMENT_SETTINGS","LOAN_ACCOUNT_GUARANTY","TASK","DOCUMENT_TEMPLATE","INDEX_RATE","INDEX_RATE_SOURCE","INTEREST_PRODUCT_SETTINGS","MCC_EXPIRATION","PRODUCT_ARREARS_SETTINGS","ACCOUNT_INTEREST_RATE_SETTINGS","REVOLVING_ACCOUNT"]}},"additionalProperties":true},"DashboardConfigurationaf30":{"type":"object","title":"DashboardConfigurationaf30","description":"Response representation of the dashboard configuration","properties":{"name":{"title":"name","description":"The Dashboard option name","enum":["LATEST_ACTIVITY","TASKS","FAVOURITE_VIEWS","INDICATORS","CURRENT_TILLS","CLIENTS","UPCOMING_REPAYMENTS","NONE"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the dashboard configuration, auto generated, unique"},"creationDate":{"type":"string","title":"creationDate","description":"The date dashboard configuration was created","format":"date-time"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"DuplicateFieldConstraintaf30","description":"Represents a duplicate constraint which needs to apply when saving entities","properties":{"dataField":{"type":"string","title":"dataField","description":"The ENUM data field when the field is an ENUM"},"active":{"type":"boolean","title":"active","description":"The check will be performed if the field is true"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the duplicate field constraint, auto generated, unique"},"groupIndex":{"type":"integer","title":"groupIndex","description":"Used for creating an AND clause between constraints"},"dataItemType":{"title":"dataItemType","description":"The type of the owner (entity) to whom a data field belongs to","enum":["LOANS","SAVINGS","CLIENT","CLIENT_ROLE","GROUP","GROUP_ROLE","TRANSACTION","JOURNAL_ENTRY","INTEREST_ACCRUAL_BREAKDOWN","BRANCH","CENTRE","USER","LOAN_PRODUCT","SAVINGS_PRODUCT","NOTIFICATION_MESSAGE","NOTIFICATION_TEMPLATE","REPAYMENT","REPAYMENT_COLLECTION","ACTIVITY","LINE_OF_CREDIT","IDENTIFICATION_DOCUMENT","ATTACHMENT","CURRENCY","PRODUCT","REVENUE","EXPENSE","OUTSTANDING_PORTFOLIO_ACCOUNTS","OUTSTANDING_PORTFOLIO_AMOUNTS","CREATED_ACCOUNTS","WRITTEN_OFF_LOANS","DISBURSED_LOANS","LOAN_GROUP","TRANCHE","DISBURSEMENT_DETAILS","TRANSACTION_DETAILS","TRANSACTION_CHANNEL","CUSTOM_PREDEFINED_FEE","CUSTOM_FIELD_SELECTION","PREDEFINED_FEE","LOAN_TRANSACTION","SAVINGS_TRANSACTION","CARD_TRANSACTION_REVERSAL","COMPOSED_TRANSACTIONS","UNION_TRANSACTIONS","INVESTOR_FUND","PRINCIPAL_PAYMENT_SETTINGS","LOAN_ACCOUNT_GUARANTY","TASK","DOCUMENT_TEMPLATE","INDEX_RATE","INDEX_RATE_SOURCE","INTEREST_PRODUCT_SETTINGS","MCC_EXPIRATION","PRODUCT_ARREARS_SETTINGS","ACCOUNT_INTEREST_RATE_SETTINGS","REVOLVING_ACCOUNT"]}},"additionalProperties":true};const schema13 = {"type":"object","title":"DashboardConfigurationaf30","description":"Response representation of the dashboard configuration","properties":{"name":{"title":"name","description":"The Dashboard option name","enum":["LATEST_ACTIVITY","TASKS","FAVOURITE_VIEWS","INDICATORS","CURRENT_TILLS","CLIENTS","UPCOMING_REPAYMENTS","NONE"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the dashboard configuration, auto generated, unique"},"creationDate":{"type":"string","title":"creationDate","description":"The date dashboard configuration was created","format":"date-time"}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.clientIdFormat !== undefined){const _errs2 = errors;if(typeof data.clientIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/clientIdFormat",schemaPath:"#/properties/clientIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.interBranchTransferGLAccountKey !== undefined){const _errs4 = errors;if(typeof data.interBranchTransferGLAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/interBranchTransferGLAccountKey",schemaPath:"#/properties/interBranchTransferGLAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.assignmentConstraints !== undefined){let data2 = data.assignmentConstraints;const _errs6 = errors;if(errors === _errs6){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs8 = errors;if(!((((data3 === "BRANCH") || (data3 === "CENTRE")) || (data3 === "CREDIT_OFFICER")) || (data3 === "GROUP"))){validate10.errors = [{instancePath:instancePath+"/assignmentConstraints/" + i0,schemaPath:"#/properties/assignmentConstraints/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.assignmentConstraints.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs8 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/assignmentConstraints",schemaPath:"#/properties/assignmentConstraints/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedIdDocumentAttachments !== undefined){let data4 = data.maxAllowedIdDocumentAttachments;const _errs9 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedIdDocumentAttachments",schemaPath:"#/properties/maxAllowedIdDocumentAttachments/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.decimalSeparator !== undefined){let data5 = data.decimalSeparator;const _errs11 = errors;if(!((data5 === "COMMA") || (data5 === "POINT"))){validate10.errors = [{instancePath:instancePath+"/decimalSeparator",schemaPath:"#/properties/decimalSeparator/enum",keyword:"enum",params:{allowedValues: schema11.properties.decimalSeparator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.maxGroupSizeLimit !== undefined){let data6 = data.maxGroupSizeLimit;const _errs12 = errors;if(!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/maxGroupSizeLimit",schemaPath:"#/properties/maxGroupSizeLimit/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.otherIdDocumentsEnabled !== undefined){const _errs14 = errors;if(typeof data.otherIdDocumentsEnabled !== "boolean"){validate10.errors = [{instancePath:instancePath+"/otherIdDocumentsEnabled",schemaPath:"#/properties/otherIdDocumentsEnabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.groupSizeLimitType !== undefined){let data8 = data.groupSizeLimitType;const _errs16 = errors;if(!(((data8 === "HARD") || (data8 === "WARNING")) || (data8 === "NONE"))){validate10.errors = [{instancePath:instancePath+"/groupSizeLimitType",schemaPath:"#/properties/groupSizeLimitType/enum",keyword:"enum",params:{allowedValues: schema11.properties.groupSizeLimitType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.eodProcessingMethod !== undefined){let data9 = data.eodProcessingMethod;const _errs17 = errors;if(!((data9 === "AUTOMATIC") || (data9 === "MANUAL"))){validate10.errors = [{instancePath:instancePath+"/eodProcessingMethod",schemaPath:"#/properties/eodProcessingMethod/enum",keyword:"enum",params:{allowedValues: schema11.properties.eodProcessingMethod.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultClientState !== undefined){const _errs18 = errors;let valid2;valid2 = false;for(const v0 of schema11.properties.defaultClientState.enum){if(func0(data.defaultClientState, v0)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/defaultClientState",schemaPath:"#/properties/defaultClientState/enum",keyword:"enum",params:{allowedValues: schema11.properties.defaultClientState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedJournalEntryDocumentAttachments !== undefined){let data11 = data.maxAllowedJournalEntryDocumentAttachments;const _errs19 = errors;if(!(((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11))) && (isFinite(data11)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedJournalEntryDocumentAttachments",schemaPath:"#/properties/maxAllowedJournalEntryDocumentAttachments/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.dateFormats !== undefined){let data12 = data.dateFormats;const _errs21 = errors;if(errors === _errs21){if(data12 && typeof data12 == "object" && !Array.isArray(data12)){for(const key0 in data12){const _errs24 = errors;if(typeof data12[key0] !== "string"){validate10.errors = [{instancePath:instancePath+"/dateFormats/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/dateFormats/additionalProperties/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs24 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/dateFormats",schemaPath:"#/properties/dateFormats/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.approvalDisbursalTwoManRuleEnabled !== undefined){const _errs26 = errors;if(typeof data.approvalDisbursalTwoManRuleEnabled !== "boolean"){validate10.errors = [{instancePath:instancePath+"/approvalDisbursalTwoManRuleEnabled",schemaPath:"#/properties/approvalDisbursalTwoManRuleEnabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.maxAllowedUndoClosurePeriod !== undefined){let data15 = data.maxAllowedUndoClosurePeriod;const _errs28 = errors;if(!(((typeof data15 == "number") && (!(data15 % 1) && !isNaN(data15))) && (isFinite(data15)))){validate10.errors = [{instancePath:instancePath+"/maxAllowedUndoClosurePeriod",schemaPath:"#/properties/maxAllowedUndoClosurePeriod/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.overdraftInterestEodBalanceDate !== undefined){const _errs30 = errors;if(errors === _errs30){if(errors === _errs30){if(!(typeof data.overdraftInterestEodBalanceDate === "string")){validate10.errors = [{instancePath:instancePath+"/overdraftInterestEodBalanceDate",schemaPath:"#/properties/overdraftInterestEodBalanceDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs30 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureType !== undefined){let data17 = data.exposureType;const _errs32 = errors;if(!(((data17 === "UNLIMITED") || (data17 === "SUM_OF_LOANS")) || (data17 === "SUM_OF_LOANS_MINUS_SAVINGS"))){validate10.errors = [{instancePath:instancePath+"/exposureType",schemaPath:"#/properties/exposureType/enum",keyword:"enum",params:{allowedValues: schema11.properties.exposureType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.tillIdFormat !== undefined){const _errs33 = errors;if(typeof data.tillIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/tillIdFormat",schemaPath:"#/properties/tillIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultClientRoleKey !== undefined){const _errs35 = errors;if(typeof data.defaultClientRoleKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultClientRoleKey",schemaPath:"#/properties/defaultClientRoleKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.accountingCutOffTime !== undefined){const _errs37 = errors;if(typeof data.accountingCutOffTime !== "string"){validate10.errors = [{instancePath:instancePath+"/accountingCutOffTime",schemaPath:"#/properties/accountingCutOffTime/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs39 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs39 === errors;}else {var valid0 = true;}if(valid0){if(data.minGroupSizeLimit !== undefined){let data22 = data.minGroupSizeLimit;const _errs41 = errors;if(!(((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22))) && (isFinite(data22)))){validate10.errors = [{instancePath:instancePath+"/minGroupSizeLimit",schemaPath:"#/properties/minGroupSizeLimit/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs41 === errors;}else {var valid0 = true;}if(valid0){if(data.arrearsDaysBeforeWriteOff !== undefined){let data23 = data.arrearsDaysBeforeWriteOff;const _errs43 = errors;if(!(((typeof data23 == "number") && (!(data23 % 1) && !isNaN(data23))) && (isFinite(data23)))){validate10.errors = [{instancePath:instancePath+"/arrearsDaysBeforeWriteOff",schemaPath:"#/properties/arrearsDaysBeforeWriteOff/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.automatedAccountingClosuresInterval !== undefined){let data24 = data.automatedAccountingClosuresInterval;const _errs45 = errors;if(!(((typeof data24 == "number") && (!(data24 % 1) && !isNaN(data24))) && (isFinite(data24)))){validate10.errors = [{instancePath:instancePath+"/automatedAccountingClosuresInterval",schemaPath:"#/properties/automatedAccountingClosuresInterval/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs45 === errors;}else {var valid0 = true;}if(valid0){if(data.duplicateClientChecks !== undefined){let data25 = data.duplicateClientChecks;const _errs47 = errors;if(errors === _errs47){if(Array.isArray(data25)){var valid4 = true;const len1 = data25.length;for(let i1=0; i1<len1; i1++){let data26 = data25[i1];const _errs49 = errors;const _errs50 = errors;if(errors === _errs50){if(data26 && typeof data26 == "object" && !Array.isArray(data26)){if(data26.dataField !== undefined){const _errs53 = errors;if(typeof data26.dataField !== "string"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1+"/dataField",schemaPath:"#/$defs/DuplicateFieldConstraintaf30/properties/dataField/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs53 === errors;}else {var valid6 = true;}if(valid6){if(data26.active !== undefined){const _errs55 = errors;if(typeof data26.active !== "boolean"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1+"/active",schemaPath:"#/$defs/DuplicateFieldConstraintaf30/properties/active/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs55 === errors;}else {var valid6 = true;}if(valid6){if(data26.encodedKey !== undefined){const _errs57 = errors;if(typeof data26.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1+"/encodedKey",schemaPath:"#/$defs/DuplicateFieldConstraintaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs57 === errors;}else {var valid6 = true;}if(valid6){if(data26.groupIndex !== undefined){let data30 = data26.groupIndex;const _errs59 = errors;if(!(((typeof data30 == "number") && (!(data30 % 1) && !isNaN(data30))) && (isFinite(data30)))){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1+"/groupIndex",schemaPath:"#/$defs/DuplicateFieldConstraintaf30/properties/groupIndex/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs59 === errors;}else {var valid6 = true;}if(valid6){if(data26.dataItemType !== undefined){const _errs61 = errors;let valid7;valid7 = false;for(const v1 of schema12.properties.dataItemType.enum){if(func0(data26.dataItemType, v1)){valid7 = true;break;}}if(!valid7){validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1+"/dataItemType",schemaPath:"#/$defs/DuplicateFieldConstraintaf30/properties/dataItemType/enum",keyword:"enum",params:{allowedValues: schema12.properties.dataItemType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs61 === errors;}else {var valid6 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks/" + i1,schemaPath:"#/$defs/DuplicateFieldConstraintaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs49 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/duplicateClientChecks",schemaPath:"#/properties/duplicateClientChecks/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs47 === errors;}else {var valid0 = true;}if(valid0){if(data.enabledComponents !== undefined){let data32 = data.enabledComponents;const _errs62 = errors;if(errors === _errs62){if(Array.isArray(data32)){var valid8 = true;const len2 = data32.length;for(let i2=0; i2<len2; i2++){const _errs64 = errors;let valid9;valid9 = false;for(const v2 of schema11.properties.enabledComponents.items.enum){if(func0(data32[i2], v2)){valid9 = true;break;}}if(!valid9){validate10.errors = [{instancePath:instancePath+"/enabledComponents/" + i2,schemaPath:"#/properties/enabledComponents/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.enabledComponents.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid8 = _errs64 === errors;if(!valid8){break;}}}else {validate10.errors = [{instancePath:instancePath+"/enabledComponents",schemaPath:"#/properties/enabledComponents/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs62 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultLineOfCreditState !== undefined){const _errs65 = errors;let valid10;valid10 = false;for(const v3 of schema11.properties.defaultLineOfCreditState.enum){if(func0(data.defaultLineOfCreditState, v3)){valid10 = true;break;}}if(!valid10){validate10.errors = [{instancePath:instancePath+"/defaultLineOfCreditState",schemaPath:"#/properties/defaultLineOfCreditState/enum",keyword:"enum",params:{allowedValues: schema11.properties.defaultLineOfCreditState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs65 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultTransactionChannelKey !== undefined){const _errs66 = errors;if(typeof data.defaultTransactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultTransactionChannelKey",schemaPath:"#/properties/defaultTransactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs66 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureAmount !== undefined){let data36 = data.exposureAmount;const _errs68 = errors;if(!((typeof data36 == "number") && (isFinite(data36)))){validate10.errors = [{instancePath:instancePath+"/exposureAmount",schemaPath:"#/properties/exposureAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs68 === errors;}else {var valid0 = true;}if(valid0){if(data.dashboardConfigurations !== undefined){let data37 = data.dashboardConfigurations;const _errs70 = errors;if(errors === _errs70){if(Array.isArray(data37)){var valid11 = true;const len3 = data37.length;for(let i3=0; i3<len3; i3++){let data38 = data37[i3];const _errs72 = errors;const _errs73 = errors;if(errors === _errs73){if(data38 && typeof data38 == "object" && !Array.isArray(data38)){if(data38.name !== undefined){const _errs76 = errors;let valid14;valid14 = false;for(const v4 of schema13.properties.name.enum){if(func0(data38.name, v4)){valid14 = true;break;}}if(!valid14){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i3+"/name",schemaPath:"#/$defs/DashboardConfigurationaf30/properties/name/enum",keyword:"enum",params:{allowedValues: schema13.properties.name.enum},message:"must be equal to one of the allowed values"}];return false;}var valid13 = _errs76 === errors;}else {var valid13 = true;}if(valid13){if(data38.encodedKey !== undefined){const _errs77 = errors;if(typeof data38.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i3+"/encodedKey",schemaPath:"#/$defs/DashboardConfigurationaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid13 = _errs77 === errors;}else {var valid13 = true;}if(valid13){if(data38.creationDate !== undefined){const _errs79 = errors;if(errors === _errs79){if(errors === _errs79){if(!(typeof data38.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i3+"/creationDate",schemaPath:"#/$defs/DashboardConfigurationaf30/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid13 = _errs79 === errors;}else {var valid13 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations/" + i3,schemaPath:"#/$defs/DashboardConfigurationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid11 = _errs72 === errors;if(!valid11){break;}}if(valid11){let i4 = data37.length;let j0;if(i4 > 1){outer0:for(;i4--;){for(j0 = i4; j0--;){if(func0(data37[i4], data37[j0])){validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations",schemaPath:"#/properties/dashboardConfigurations/uniqueItems",keyword:"uniqueItems",params:{i: i4, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i4+" are identical)"}];return false;break outer0;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/dashboardConfigurations",schemaPath:"#/properties/dashboardConfigurations/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs70 === errors;}else {var valid0 = true;}if(valid0){if(data.groupIdFormat !== undefined){const _errs81 = errors;if(typeof data.groupIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/groupIdFormat",schemaPath:"#/properties/groupIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs81 === errors;}else {var valid0 = true;}if(valid0){if(data.duplicateClientConstraintAction !== undefined){let data43 = data.duplicateClientConstraintAction;const _errs83 = errors;if(!(((data43 === "NONE") || (data43 === "WARNING")) || (data43 === "ERROR"))){validate10.errors = [{instancePath:instancePath+"/duplicateClientConstraintAction",schemaPath:"#/properties/duplicateClientConstraintAction/enum",keyword:"enum",params:{allowedValues: schema11.properties.duplicateClientConstraintAction.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs83 === errors;}else {var valid0 = true;}if(valid0){if(data.multipleGroupMemberships !== undefined){let data44 = data.multipleGroupMemberships;const _errs84 = errors;if(!((data44 === "UNLIMITED") || (data44 === "ONE_GROUP"))){validate10.errors = [{instancePath:instancePath+"/multipleGroupMemberships",schemaPath:"#/properties/multipleGroupMemberships/enum",keyword:"enum",params:{allowedValues: schema11.properties.multipleGroupMemberships.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs84 === errors;}else {var valid0 = true;}if(valid0){if(data.defaultGroupRoleKey !== undefined){const _errs85 = errors;if(typeof data.defaultGroupRoleKey !== "string"){validate10.errors = [{instancePath:instancePath+"/defaultGroupRoleKey",schemaPath:"#/properties/defaultGroupRoleKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs85 === errors;}else {var valid0 = true;}if(valid0){if(data.multipleLoans !== undefined){let data46 = data.multipleLoans;const _errs87 = errors;if(!((data46 === "UNLIMITED") || (data46 === "ONE_LOAN"))){validate10.errors = [{instancePath:instancePath+"/multipleLoans",schemaPath:"#/properties/multipleLoans/enum",keyword:"enum",params:{allowedValues: schema11.properties.multipleLoans.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs87 === errors;}else {var valid0 = true;}if(valid0){if(data.lineOfCreditIdFormat !== undefined){const _errs88 = errors;if(typeof data.lineOfCreditIdFormat !== "string"){validate10.errors = [{instancePath:instancePath+"/lineOfCreditIdFormat",schemaPath:"#/properties/lineOfCreditIdFormat/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs88 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;