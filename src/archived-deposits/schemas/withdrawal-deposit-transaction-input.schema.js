/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"WithdrawalDepositTransactionInput","type":"object","description":"Represents the input for a withdrawal transaction.","properties":{"amount":{"type":"number","description":"The amount to withdraw from account"},"bookingDate":{"type":"string","description":"The date of the withdrawal when the transaction is logged into accounting. If not specified it is considered the value date","format":"date-time"},"externalId":{"type":"string","description":"The external id of the withdrawal transaction, customizable, unique"},"holdExternalReferenceId":{"type":"string","description":"The external id of an account authorization hold"},"notes":{"type":"string","description":"Extra notes about this deposit transaction"},"paymentDetails":{"$ref":"#/$defs/PaymentDetails"},"paymentOrderId":{"type":"string","description":"The payment order id of the withdrawal transaction, customizable"},"transactionDetails":{"$ref":"#/$defs/TransactionDetailsInput"},"valueDate":{"type":"string","description":"The entry date of the withdrawal. If not specified it is considered the current date (as Organization Time)","format":"date-time"}},"required":["amount"],"additionalProperties":true,"$defs":{"PaymentDetails":{"type":"object","description":"The payment information including account identification details","properties":{"creditor":{"$ref":"#/$defs/Party"},"creditorAccount":{"$ref":"#/$defs/AccountDetails"},"creditorAgent":{"$ref":"#/$defs/Agent"},"debtor":{"$ref":"#/$defs/Party"},"debtorAccount":{"$ref":"#/$defs/AccountDetails"},"debtorAgent":{"$ref":"#/$defs/Agent"},"paymentIdentification":{"$ref":"#/$defs/PaymentIdentification"},"paymentTypeInformation":{"$ref":"#/$defs/PaymentTypeInformation"},"remittanceInformation":{"$ref":"#/$defs/RemittanceInformation"}},"additionalProperties":true},"Party":{"type":"object","description":"The details of the party for a transaction","properties":{"name":{"type":"string","description":"The name of the party"}},"additionalProperties":true},"AccountDetails":{"type":"object","description":"The account currency and identification","properties":{"currency":{"type":"string","description":"The currency of the account"},"identification":{"$ref":"#/$defs/AccountIdentification"}},"additionalProperties":true},"AccountIdentification":{"type":"object","description":"The account identification details","properties":{"iban":{"type":"string","description":"The account unique identifier"},"other":{"$ref":"#/$defs/OtherAccountIdentification"}},"additionalProperties":true},"OtherAccountIdentification":{"type":"object","description":"Represents other way of identification for the account.","properties":{"identification":{"type":"string","description":"The identification of the payer/payee"},"scheme":{"type":"string","description":"The identification scheme"}},"additionalProperties":true},"Agent":{"type":"object","description":"The agent details for a party","properties":{"financialInstitutionIdentification":{"$ref":"#/$defs/FinancialInstitutionIdentification"}},"additionalProperties":true},"FinancialInstitutionIdentification":{"type":"object","description":"The identification of the financial institution","properties":{"bic":{"type":"string","description":"Business identifier code"}},"additionalProperties":true},"PaymentIdentification":{"type":"object","description":"The payment identification details","properties":{"endToEndIdentification":{"type":"string","description":"Identifier assigned by the initiating party to the transaction"},"instructionIdentification":{"type":"string","description":"Identifier of a payment instruction"},"transactionIdentification":{"type":"string","description":"Identifier unique for a period assigned by the first initiating party to the transaction"}},"additionalProperties":true},"PaymentTypeInformation":{"type":"object","description":"The information specifying the type of transaction","properties":{"serviceLevel":{"$ref":"#/$defs/ServiceLevel"}},"additionalProperties":true},"ServiceLevel":{"type":"object","description":"The rules under which the transaction should be processed","properties":{"code":{"type":"string","description":"The code for a pre-agreed service or level of service between the parties"}},"additionalProperties":true},"RemittanceInformation":{"type":"object","description":"The information specifying the payment items that are intended to settle","properties":{"structured":{"$ref":"#/$defs/Structured"},"unstructured":{"type":"string","description":"Information supplied to match the items of the payment in an unstructured form"}},"additionalProperties":true},"Structured":{"type":"object","description":"The information specifying the payment items that are intended to settle","properties":{"creditorReferenceInformation":{"$ref":"#/$defs/CreditorReferenceInformation"}},"additionalProperties":true},"CreditorReferenceInformation":{"type":"object","description":"Represents the reference to the underlying documents of the payment.","properties":{"reference":{"type":"string","description":"The reference information of the creditor's underlying documents"},"referenceIssuer":{"type":"string","description":"The entity that assigns the reference type"},"referenceType":{"type":"string","description":"The type of creditor reference"}},"additionalProperties":true},"TransactionDetailsInput":{"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true}}};const schema26 = {"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true};const schema12 = {"type":"object","description":"The payment information including account identification details","properties":{"creditor":{"$ref":"#/$defs/Party"},"creditorAccount":{"$ref":"#/$defs/AccountDetails"},"creditorAgent":{"$ref":"#/$defs/Agent"},"debtor":{"$ref":"#/$defs/Party"},"debtorAccount":{"$ref":"#/$defs/AccountDetails"},"debtorAgent":{"$ref":"#/$defs/Agent"},"paymentIdentification":{"$ref":"#/$defs/PaymentIdentification"},"paymentTypeInformation":{"$ref":"#/$defs/PaymentTypeInformation"},"remittanceInformation":{"$ref":"#/$defs/RemittanceInformation"}},"additionalProperties":true};const schema13 = {"type":"object","description":"The details of the party for a transaction","properties":{"name":{"type":"string","description":"The name of the party"}},"additionalProperties":true};const schema20 = {"type":"object","description":"The payment identification details","properties":{"endToEndIdentification":{"type":"string","description":"Identifier assigned by the initiating party to the transaction"},"instructionIdentification":{"type":"string","description":"Identifier of a payment instruction"},"transactionIdentification":{"type":"string","description":"Identifier unique for a period assigned by the first initiating party to the transaction"}},"additionalProperties":true};const schema14 = {"type":"object","description":"The account currency and identification","properties":{"currency":{"type":"string","description":"The currency of the account"},"identification":{"$ref":"#/$defs/AccountIdentification"}},"additionalProperties":true};const schema15 = {"type":"object","description":"The account identification details","properties":{"iban":{"type":"string","description":"The account unique identifier"},"other":{"$ref":"#/$defs/OtherAccountIdentification"}},"additionalProperties":true};const schema16 = {"type":"object","description":"Represents other way of identification for the account.","properties":{"identification":{"type":"string","description":"The identification of the payer/payee"},"scheme":{"type":"string","description":"The identification scheme"}},"additionalProperties":true};function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.iban !== undefined){const _errs2 = errors;if(typeof data.iban !== "string"){validate13.errors = [{instancePath:instancePath+"/iban",schemaPath:"#/properties/iban/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.other !== undefined){let data1 = data.other;const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.identification !== undefined){const _errs8 = errors;if(typeof data1.identification !== "string"){validate13.errors = [{instancePath:instancePath+"/other/identification",schemaPath:"#/$defs/OtherAccountIdentification/properties/identification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data1.scheme !== undefined){const _errs10 = errors;if(typeof data1.scheme !== "string"){validate13.errors = [{instancePath:instancePath+"/other/scheme",schemaPath:"#/$defs/OtherAccountIdentification/properties/scheme/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}else {validate13.errors = [{instancePath:instancePath+"/other",schemaPath:"#/$defs/OtherAccountIdentification/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate13.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate13.errors = vErrors;return errors === 0;}function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.currency !== undefined){const _errs2 = errors;if(typeof data.currency !== "string"){validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/properties/currency/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.identification !== undefined){const _errs4 = errors;if(!(validate13(data.identification, {instancePath:instancePath+"/identification",parentData:data,parentDataProperty:"identification",rootData}))){vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}const schema17 = {"type":"object","description":"The agent details for a party","properties":{"financialInstitutionIdentification":{"$ref":"#/$defs/FinancialInstitutionIdentification"}},"additionalProperties":true};const schema18 = {"type":"object","description":"The identification of the financial institution","properties":{"bic":{"type":"string","description":"Business identifier code"}},"additionalProperties":true};function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.financialInstitutionIdentification !== undefined){let data0 = data.financialInstitutionIdentification;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.bic !== undefined){if(typeof data0.bic !== "string"){validate16.errors = [{instancePath:instancePath+"/financialInstitutionIdentification/bic",schemaPath:"#/$defs/FinancialInstitutionIdentification/properties/bic/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate16.errors = [{instancePath:instancePath+"/financialInstitutionIdentification",schemaPath:"#/$defs/FinancialInstitutionIdentification/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate16.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate16.errors = vErrors;return errors === 0;}const schema21 = {"type":"object","description":"The information specifying the type of transaction","properties":{"serviceLevel":{"$ref":"#/$defs/ServiceLevel"}},"additionalProperties":true};const schema22 = {"type":"object","description":"The rules under which the transaction should be processed","properties":{"code":{"type":"string","description":"The code for a pre-agreed service or level of service between the parties"}},"additionalProperties":true};function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.serviceLevel !== undefined){let data0 = data.serviceLevel;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.code !== undefined){if(typeof data0.code !== "string"){validate20.errors = [{instancePath:instancePath+"/serviceLevel/code",schemaPath:"#/$defs/ServiceLevel/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate20.errors = [{instancePath:instancePath+"/serviceLevel",schemaPath:"#/$defs/ServiceLevel/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}const schema23 = {"type":"object","description":"The information specifying the payment items that are intended to settle","properties":{"structured":{"$ref":"#/$defs/Structured"},"unstructured":{"type":"string","description":"Information supplied to match the items of the payment in an unstructured form"}},"additionalProperties":true};const schema24 = {"type":"object","description":"The information specifying the payment items that are intended to settle","properties":{"creditorReferenceInformation":{"$ref":"#/$defs/CreditorReferenceInformation"}},"additionalProperties":true};const schema25 = {"type":"object","description":"Represents the reference to the underlying documents of the payment.","properties":{"reference":{"type":"string","description":"The reference information of the creditor's underlying documents"},"referenceIssuer":{"type":"string","description":"The entity that assigns the reference type"},"referenceType":{"type":"string","description":"The type of creditor reference"}},"additionalProperties":true};function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creditorReferenceInformation !== undefined){let data0 = data.creditorReferenceInformation;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.reference !== undefined){const _errs6 = errors;if(typeof data0.reference !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/reference",schemaPath:"#/$defs/CreditorReferenceInformation/properties/reference/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.referenceIssuer !== undefined){const _errs8 = errors;if(typeof data0.referenceIssuer !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/referenceIssuer",schemaPath:"#/$defs/CreditorReferenceInformation/properties/referenceIssuer/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.referenceType !== undefined){const _errs10 = errors;if(typeof data0.referenceType !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/referenceType",schemaPath:"#/$defs/CreditorReferenceInformation/properties/referenceType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation",schemaPath:"#/$defs/CreditorReferenceInformation/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate23.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate23.errors = vErrors;return errors === 0;}function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.structured !== undefined){const _errs2 = errors;if(!(validate23(data.structured, {instancePath:instancePath+"/structured",parentData:data,parentDataProperty:"structured",rootData}))){vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);errors = vErrors.length;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.unstructured !== undefined){const _errs3 = errors;if(typeof data.unstructured !== "string"){validate22.errors = [{instancePath:instancePath+"/unstructured",schemaPath:"#/properties/unstructured/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}}}else {validate22.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate22.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creditor !== undefined){let data0 = data.creditor;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.name !== undefined){if(typeof data0.name !== "string"){validate11.errors = [{instancePath:instancePath+"/creditor/name",schemaPath:"#/$defs/Party/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/creditor",schemaPath:"#/$defs/Party/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.creditorAccount !== undefined){const _errs8 = errors;if(!(validate12(data.creditorAccount, {instancePath:instancePath+"/creditorAccount",parentData:data,parentDataProperty:"creditorAccount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.creditorAgent !== undefined){const _errs9 = errors;if(!(validate16(data.creditorAgent, {instancePath:instancePath+"/creditorAgent",parentData:data,parentDataProperty:"creditorAgent",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.debtor !== undefined){let data4 = data.debtor;const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.name !== undefined){if(typeof data4.name !== "string"){validate11.errors = [{instancePath:instancePath+"/debtor/name",schemaPath:"#/$defs/Party/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/debtor",schemaPath:"#/$defs/Party/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.debtorAccount !== undefined){const _errs16 = errors;if(!(validate12(data.debtorAccount, {instancePath:instancePath+"/debtorAccount",parentData:data,parentDataProperty:"debtorAccount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.debtorAgent !== undefined){const _errs17 = errors;if(!(validate16(data.debtorAgent, {instancePath:instancePath+"/debtorAgent",parentData:data,parentDataProperty:"debtorAgent",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentIdentification !== undefined){let data8 = data.paymentIdentification;const _errs18 = errors;const _errs19 = errors;if(errors === _errs19){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.endToEndIdentification !== undefined){const _errs22 = errors;if(typeof data8.endToEndIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/endToEndIdentification",schemaPath:"#/$defs/PaymentIdentification/properties/endToEndIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs22 === errors;}else {var valid6 = true;}if(valid6){if(data8.instructionIdentification !== undefined){const _errs24 = errors;if(typeof data8.instructionIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/instructionIdentification",schemaPath:"#/$defs/PaymentIdentification/properties/instructionIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs24 === errors;}else {var valid6 = true;}if(valid6){if(data8.transactionIdentification !== undefined){const _errs26 = errors;if(typeof data8.transactionIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/transactionIdentification",schemaPath:"#/$defs/PaymentIdentification/properties/transactionIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs26 === errors;}else {var valid6 = true;}}}}else {validate11.errors = [{instancePath:instancePath+"/paymentIdentification",schemaPath:"#/$defs/PaymentIdentification/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentTypeInformation !== undefined){const _errs28 = errors;if(!(validate20(data.paymentTypeInformation, {instancePath:instancePath+"/paymentTypeInformation",parentData:data,parentDataProperty:"paymentTypeInformation",rootData}))){vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);errors = vErrors.length;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.remittanceInformation !== undefined){const _errs29 = errors;if(!(validate22(data.remittanceInformation, {instancePath:instancePath+"/remittanceInformation",parentData:data,parentDataProperty:"remittanceInformation",rootData}))){vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);errors = vErrors.length;}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs6 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.holdExternalReferenceId !== undefined){const _errs8 = errors;if(typeof data.holdExternalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/holdExternalReferenceId",schemaPath:"#/properties/holdExternalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs10 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentDetails !== undefined){const _errs12 = errors;if(!(validate11(data.paymentDetails, {instancePath:instancePath+"/paymentDetails",parentData:data,parentDataProperty:"paymentDetails",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentOrderId !== undefined){const _errs13 = errors;if(typeof data.paymentOrderId !== "string"){validate10.errors = [{instancePath:instancePath+"/paymentOrderId",schemaPath:"#/properties/paymentOrderId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionDetails !== undefined){let data7 = data.transactionDetails;const _errs15 = errors;const _errs16 = errors;if(errors === _errs16){if(data7 && typeof data7 == "object" && !Array.isArray(data7)){if(data7.transactionChannelId !== undefined){const _errs19 = errors;if(typeof data7.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/TransactionDetailsInput/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data7.transactionChannelKey !== undefined){const _errs21 = errors;if(typeof data7.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/TransactionDetailsInput/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/TransactionDetailsInput/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs23 = errors;if(errors === _errs23){if(errors === _errs23){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;