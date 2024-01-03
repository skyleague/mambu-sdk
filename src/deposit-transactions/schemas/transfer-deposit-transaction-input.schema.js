/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"TransferDepositTransactionInput","type":"object","description":"Represents the input for a transfer deposit transaction.","properties":{"amount":{"type":"number","title":"amount","description":"The amount to transfer from account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"externalId":{"type":"string","title":"externalId","description":"The external id of the transfer transaction, customizable, unique"},"notes":{"type":"string","title":"notes","description":"Extra notes about this deposit transaction"},"paymentDetails":{"title":"paymentDetails","$ref":"#/$defs/PaymentDetailsaf30"},"paymentOrderId":{"type":"string","title":"paymentOrderId","description":"The payment order id of the transfer transaction, customizable"},"transferDetails":{"title":"transferDetails","$ref":"#/$defs/TransferDetailsInputaf30"},"valueDate":{"type":"string","title":"valueDate","description":"The entry date of the transfer. If not specified it is considered the current date (as Organization Time)","format":"date-time"}},"required":["amount","transferDetails"],"additionalProperties":true,"$defs":{"PaymentDetailsaf30":{"type":"object","title":"PaymentDetailsaf30","description":"The payment information including account identification details","properties":{"creditor":{"title":"creditor","$ref":"#/$defs/Partyaf30"},"creditorAccount":{"title":"creditorAccount","$ref":"#/$defs/AccountDetailsaf30"},"creditorAgent":{"title":"creditorAgent","$ref":"#/$defs/Agentaf30"},"debtor":{"title":"debtor","$ref":"#/$defs/Partyaf30"},"debtorAccount":{"title":"debtorAccount","$ref":"#/$defs/AccountDetailsaf30"},"debtorAgent":{"title":"debtorAgent","$ref":"#/$defs/Agentaf30"},"paymentIdentification":{"title":"paymentIdentification","$ref":"#/$defs/PaymentIdentificationaf30"},"paymentTypeInformation":{"title":"paymentTypeInformation","$ref":"#/$defs/PaymentTypeInformationaf30"},"remittanceInformation":{"title":"remittanceInformation","$ref":"#/$defs/RemittanceInformationaf30"}},"additionalProperties":true},"Partyaf30":{"type":"object","title":"Partyaf30","description":"The details of the party for a transaction","properties":{"name":{"type":"string","title":"name","description":"The name of the party"}},"additionalProperties":true},"AccountDetailsaf30":{"type":"object","title":"AccountDetailsaf30","description":"The account currency and identification","properties":{"currency":{"type":"string","title":"currency","description":"The currency of the account"},"identification":{"title":"identification","$ref":"#/$defs/AccountIdentificationaf30"}},"additionalProperties":true},"AccountIdentificationaf30":{"type":"object","title":"AccountIdentificationaf30","description":"The account identification details","properties":{"iban":{"type":"string","title":"iban","description":"The account unique identifier"},"other":{"title":"other","$ref":"#/$defs/OtherAccountIdentificationaf30"}},"additionalProperties":true},"OtherAccountIdentificationaf30":{"type":"object","title":"OtherAccountIdentificationaf30","description":"Represents other way of identification for the account.","properties":{"identification":{"type":"string","title":"identification","description":"The identification of the payer/payee"},"scheme":{"type":"string","title":"scheme","description":"The identification scheme"}},"additionalProperties":true},"Agentaf30":{"type":"object","title":"Agentaf30","description":"The agent details for a party","properties":{"financialInstitutionIdentification":{"title":"financialInstitutionIdentification","$ref":"#/$defs/FinancialInstitutionIdentificationaf30"}},"additionalProperties":true},"FinancialInstitutionIdentificationaf30":{"type":"object","title":"FinancialInstitutionIdentificationaf30","description":"The identification of the financial institution","properties":{"bic":{"type":"string","title":"bic","description":"Business identifier code"}},"additionalProperties":true},"PaymentIdentificationaf30":{"type":"object","title":"PaymentIdentificationaf30","description":"The payment identification details","properties":{"endToEndIdentification":{"type":"string","title":"endToEndIdentification","description":"Identifier assigned by the initiating party to the transaction"},"instructionIdentification":{"type":"string","title":"instructionIdentification","description":"Identifier of a payment instruction"},"transactionIdentification":{"type":"string","title":"transactionIdentification","description":"Identifier unique for a period assigned by the first initiating party to the transaction"}},"additionalProperties":true},"PaymentTypeInformationaf30":{"type":"object","title":"PaymentTypeInformationaf30","description":"The information specifying the type of transaction","properties":{"serviceLevel":{"title":"serviceLevel","$ref":"#/$defs/ServiceLevelaf30"}},"additionalProperties":true},"ServiceLevelaf30":{"type":"object","title":"ServiceLevelaf30","description":"The rules under which the transaction should be processed","properties":{"code":{"type":"string","title":"code","description":"The code for a pre-agreed service or level of service between the parties"}},"additionalProperties":true},"RemittanceInformationaf30":{"type":"object","title":"RemittanceInformationaf30","description":"The information specifying the payment items that are intended to settle","properties":{"structured":{"title":"structured","$ref":"#/$defs/Structuredaf30"},"unstructured":{"type":"string","title":"unstructured","description":"Information supplied to match the items of the payment in an unstructured form"}},"additionalProperties":true},"Structuredaf30":{"type":"object","title":"Structuredaf30","description":"The information specifying the payment items that are intended to settle","properties":{"creditorReferenceInformation":{"title":"creditorReferenceInformation","$ref":"#/$defs/CreditorReferenceInformationaf30"}},"additionalProperties":true},"CreditorReferenceInformationaf30":{"type":"object","title":"CreditorReferenceInformationaf30","description":"Represents the reference to the underlying documents of the payment.","properties":{"reference":{"type":"string","title":"reference","description":"The reference information of the creditor's underlying documents"},"referenceIssuer":{"type":"string","title":"referenceIssuer","description":"The entity that assigns the reference type"},"referenceType":{"type":"string","title":"referenceType","description":"The type of creditor reference"}},"additionalProperties":true},"TransferDetailsInputaf30":{"type":"object","title":"TransferDetailsInputaf30","description":"Represents the input for the transfer details for a transfer transaction","properties":{"linkedAccountId":{"type":"string","title":"linkedAccountId","description":"The id of the linked account"},"linkedAccountKey":{"type":"string","title":"linkedAccountKey","description":"The encoded key of the linked account"},"linkedAccountType":{"title":"linkedAccountType","description":"The type of the linked account. Can be LOAN or DEPOSIT","enum":["LOAN","DEPOSIT"]}},"required":["linkedAccountType"],"additionalProperties":true}}};const schema26 = {"type":"object","title":"TransferDetailsInputaf30","description":"Represents the input for the transfer details for a transfer transaction","properties":{"linkedAccountId":{"type":"string","title":"linkedAccountId","description":"The id of the linked account"},"linkedAccountKey":{"type":"string","title":"linkedAccountKey","description":"The encoded key of the linked account"},"linkedAccountType":{"title":"linkedAccountType","description":"The type of the linked account. Can be LOAN or DEPOSIT","enum":["LOAN","DEPOSIT"]}},"required":["linkedAccountType"],"additionalProperties":true};const schema12 = {"type":"object","title":"PaymentDetailsaf30","description":"The payment information including account identification details","properties":{"creditor":{"title":"creditor","$ref":"#/$defs/Partyaf30"},"creditorAccount":{"title":"creditorAccount","$ref":"#/$defs/AccountDetailsaf30"},"creditorAgent":{"title":"creditorAgent","$ref":"#/$defs/Agentaf30"},"debtor":{"title":"debtor","$ref":"#/$defs/Partyaf30"},"debtorAccount":{"title":"debtorAccount","$ref":"#/$defs/AccountDetailsaf30"},"debtorAgent":{"title":"debtorAgent","$ref":"#/$defs/Agentaf30"},"paymentIdentification":{"title":"paymentIdentification","$ref":"#/$defs/PaymentIdentificationaf30"},"paymentTypeInformation":{"title":"paymentTypeInformation","$ref":"#/$defs/PaymentTypeInformationaf30"},"remittanceInformation":{"title":"remittanceInformation","$ref":"#/$defs/RemittanceInformationaf30"}},"additionalProperties":true};const schema13 = {"type":"object","title":"Partyaf30","description":"The details of the party for a transaction","properties":{"name":{"type":"string","title":"name","description":"The name of the party"}},"additionalProperties":true};const schema20 = {"type":"object","title":"PaymentIdentificationaf30","description":"The payment identification details","properties":{"endToEndIdentification":{"type":"string","title":"endToEndIdentification","description":"Identifier assigned by the initiating party to the transaction"},"instructionIdentification":{"type":"string","title":"instructionIdentification","description":"Identifier of a payment instruction"},"transactionIdentification":{"type":"string","title":"transactionIdentification","description":"Identifier unique for a period assigned by the first initiating party to the transaction"}},"additionalProperties":true};const schema14 = {"type":"object","title":"AccountDetailsaf30","description":"The account currency and identification","properties":{"currency":{"type":"string","title":"currency","description":"The currency of the account"},"identification":{"title":"identification","$ref":"#/$defs/AccountIdentificationaf30"}},"additionalProperties":true};const schema15 = {"type":"object","title":"AccountIdentificationaf30","description":"The account identification details","properties":{"iban":{"type":"string","title":"iban","description":"The account unique identifier"},"other":{"title":"other","$ref":"#/$defs/OtherAccountIdentificationaf30"}},"additionalProperties":true};const schema16 = {"type":"object","title":"OtherAccountIdentificationaf30","description":"Represents other way of identification for the account.","properties":{"identification":{"type":"string","title":"identification","description":"The identification of the payer/payee"},"scheme":{"type":"string","title":"scheme","description":"The identification scheme"}},"additionalProperties":true};function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.iban !== undefined){const _errs2 = errors;if(typeof data.iban !== "string"){validate13.errors = [{instancePath:instancePath+"/iban",schemaPath:"#/properties/iban/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.other !== undefined){let data1 = data.other;const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.identification !== undefined){const _errs8 = errors;if(typeof data1.identification !== "string"){validate13.errors = [{instancePath:instancePath+"/other/identification",schemaPath:"#/$defs/OtherAccountIdentificationaf30/properties/identification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data1.scheme !== undefined){const _errs10 = errors;if(typeof data1.scheme !== "string"){validate13.errors = [{instancePath:instancePath+"/other/scheme",schemaPath:"#/$defs/OtherAccountIdentificationaf30/properties/scheme/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}else {validate13.errors = [{instancePath:instancePath+"/other",schemaPath:"#/$defs/OtherAccountIdentificationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate13.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate13.errors = vErrors;return errors === 0;}function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.currency !== undefined){const _errs2 = errors;if(typeof data.currency !== "string"){validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/properties/currency/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.identification !== undefined){const _errs4 = errors;if(!(validate13(data.identification, {instancePath:instancePath+"/identification",parentData:data,parentDataProperty:"identification",rootData}))){vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}const schema17 = {"type":"object","title":"Agentaf30","description":"The agent details for a party","properties":{"financialInstitutionIdentification":{"title":"financialInstitutionIdentification","$ref":"#/$defs/FinancialInstitutionIdentificationaf30"}},"additionalProperties":true};const schema18 = {"type":"object","title":"FinancialInstitutionIdentificationaf30","description":"The identification of the financial institution","properties":{"bic":{"type":"string","title":"bic","description":"Business identifier code"}},"additionalProperties":true};function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.financialInstitutionIdentification !== undefined){let data0 = data.financialInstitutionIdentification;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.bic !== undefined){if(typeof data0.bic !== "string"){validate16.errors = [{instancePath:instancePath+"/financialInstitutionIdentification/bic",schemaPath:"#/$defs/FinancialInstitutionIdentificationaf30/properties/bic/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate16.errors = [{instancePath:instancePath+"/financialInstitutionIdentification",schemaPath:"#/$defs/FinancialInstitutionIdentificationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate16.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate16.errors = vErrors;return errors === 0;}const schema21 = {"type":"object","title":"PaymentTypeInformationaf30","description":"The information specifying the type of transaction","properties":{"serviceLevel":{"title":"serviceLevel","$ref":"#/$defs/ServiceLevelaf30"}},"additionalProperties":true};const schema22 = {"type":"object","title":"ServiceLevelaf30","description":"The rules under which the transaction should be processed","properties":{"code":{"type":"string","title":"code","description":"The code for a pre-agreed service or level of service between the parties"}},"additionalProperties":true};function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.serviceLevel !== undefined){let data0 = data.serviceLevel;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.code !== undefined){if(typeof data0.code !== "string"){validate20.errors = [{instancePath:instancePath+"/serviceLevel/code",schemaPath:"#/$defs/ServiceLevelaf30/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate20.errors = [{instancePath:instancePath+"/serviceLevel",schemaPath:"#/$defs/ServiceLevelaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}const schema23 = {"type":"object","title":"RemittanceInformationaf30","description":"The information specifying the payment items that are intended to settle","properties":{"structured":{"title":"structured","$ref":"#/$defs/Structuredaf30"},"unstructured":{"type":"string","title":"unstructured","description":"Information supplied to match the items of the payment in an unstructured form"}},"additionalProperties":true};const schema24 = {"type":"object","title":"Structuredaf30","description":"The information specifying the payment items that are intended to settle","properties":{"creditorReferenceInformation":{"title":"creditorReferenceInformation","$ref":"#/$defs/CreditorReferenceInformationaf30"}},"additionalProperties":true};const schema25 = {"type":"object","title":"CreditorReferenceInformationaf30","description":"Represents the reference to the underlying documents of the payment.","properties":{"reference":{"type":"string","title":"reference","description":"The reference information of the creditor's underlying documents"},"referenceIssuer":{"type":"string","title":"referenceIssuer","description":"The entity that assigns the reference type"},"referenceType":{"type":"string","title":"referenceType","description":"The type of creditor reference"}},"additionalProperties":true};function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creditorReferenceInformation !== undefined){let data0 = data.creditorReferenceInformation;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.reference !== undefined){const _errs6 = errors;if(typeof data0.reference !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/reference",schemaPath:"#/$defs/CreditorReferenceInformationaf30/properties/reference/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.referenceIssuer !== undefined){const _errs8 = errors;if(typeof data0.referenceIssuer !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/referenceIssuer",schemaPath:"#/$defs/CreditorReferenceInformationaf30/properties/referenceIssuer/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.referenceType !== undefined){const _errs10 = errors;if(typeof data0.referenceType !== "string"){validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation/referenceType",schemaPath:"#/$defs/CreditorReferenceInformationaf30/properties/referenceType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate23.errors = [{instancePath:instancePath+"/creditorReferenceInformation",schemaPath:"#/$defs/CreditorReferenceInformationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate23.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate23.errors = vErrors;return errors === 0;}function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.structured !== undefined){const _errs2 = errors;if(!(validate23(data.structured, {instancePath:instancePath+"/structured",parentData:data,parentDataProperty:"structured",rootData}))){vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);errors = vErrors.length;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.unstructured !== undefined){const _errs3 = errors;if(typeof data.unstructured !== "string"){validate22.errors = [{instancePath:instancePath+"/unstructured",schemaPath:"#/properties/unstructured/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}}}else {validate22.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate22.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creditor !== undefined){let data0 = data.creditor;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.name !== undefined){if(typeof data0.name !== "string"){validate11.errors = [{instancePath:instancePath+"/creditor/name",schemaPath:"#/$defs/Partyaf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/creditor",schemaPath:"#/$defs/Partyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.creditorAccount !== undefined){const _errs8 = errors;if(!(validate12(data.creditorAccount, {instancePath:instancePath+"/creditorAccount",parentData:data,parentDataProperty:"creditorAccount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.creditorAgent !== undefined){const _errs9 = errors;if(!(validate16(data.creditorAgent, {instancePath:instancePath+"/creditorAgent",parentData:data,parentDataProperty:"creditorAgent",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.debtor !== undefined){let data4 = data.debtor;const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.name !== undefined){if(typeof data4.name !== "string"){validate11.errors = [{instancePath:instancePath+"/debtor/name",schemaPath:"#/$defs/Partyaf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/debtor",schemaPath:"#/$defs/Partyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.debtorAccount !== undefined){const _errs16 = errors;if(!(validate12(data.debtorAccount, {instancePath:instancePath+"/debtorAccount",parentData:data,parentDataProperty:"debtorAccount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.debtorAgent !== undefined){const _errs17 = errors;if(!(validate16(data.debtorAgent, {instancePath:instancePath+"/debtorAgent",parentData:data,parentDataProperty:"debtorAgent",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentIdentification !== undefined){let data8 = data.paymentIdentification;const _errs18 = errors;const _errs19 = errors;if(errors === _errs19){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.endToEndIdentification !== undefined){const _errs22 = errors;if(typeof data8.endToEndIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/endToEndIdentification",schemaPath:"#/$defs/PaymentIdentificationaf30/properties/endToEndIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs22 === errors;}else {var valid6 = true;}if(valid6){if(data8.instructionIdentification !== undefined){const _errs24 = errors;if(typeof data8.instructionIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/instructionIdentification",schemaPath:"#/$defs/PaymentIdentificationaf30/properties/instructionIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs24 === errors;}else {var valid6 = true;}if(valid6){if(data8.transactionIdentification !== undefined){const _errs26 = errors;if(typeof data8.transactionIdentification !== "string"){validate11.errors = [{instancePath:instancePath+"/paymentIdentification/transactionIdentification",schemaPath:"#/$defs/PaymentIdentificationaf30/properties/transactionIdentification/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs26 === errors;}else {var valid6 = true;}}}}else {validate11.errors = [{instancePath:instancePath+"/paymentIdentification",schemaPath:"#/$defs/PaymentIdentificationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentTypeInformation !== undefined){const _errs28 = errors;if(!(validate20(data.paymentTypeInformation, {instancePath:instancePath+"/paymentTypeInformation",parentData:data,parentDataProperty:"paymentTypeInformation",rootData}))){vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);errors = vErrors.length;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.remittanceInformation !== undefined){const _errs29 = errors;if(!(validate22(data.remittanceInformation, {instancePath:instancePath+"/remittanceInformation",parentData:data,parentDataProperty:"remittanceInformation",rootData}))){vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);errors = vErrors.length;}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.amount === undefined) && (missing0 = "amount")) || ((data.transferDetails === undefined) && (missing0 = "transferDetails"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs6 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs8 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentDetails !== undefined){const _errs10 = errors;if(!(validate11(data.paymentDetails, {instancePath:instancePath+"/paymentDetails",parentData:data,parentDataProperty:"paymentDetails",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.paymentOrderId !== undefined){const _errs11 = errors;if(typeof data.paymentOrderId !== "string"){validate10.errors = [{instancePath:instancePath+"/paymentOrderId",schemaPath:"#/properties/paymentOrderId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.transferDetails !== undefined){let data6 = data.transferDetails;const _errs13 = errors;const _errs14 = errors;if(errors === _errs14){if(data6 && typeof data6 == "object" && !Array.isArray(data6)){let missing1;if((data6.linkedAccountType === undefined) && (missing1 = "linkedAccountType")){validate10.errors = [{instancePath:instancePath+"/transferDetails",schemaPath:"#/$defs/TransferDetailsInputaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data6.linkedAccountId !== undefined){const _errs17 = errors;if(typeof data6.linkedAccountId !== "string"){validate10.errors = [{instancePath:instancePath+"/transferDetails/linkedAccountId",schemaPath:"#/$defs/TransferDetailsInputaf30/properties/linkedAccountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data6.linkedAccountKey !== undefined){const _errs19 = errors;if(typeof data6.linkedAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transferDetails/linkedAccountKey",schemaPath:"#/$defs/TransferDetailsInputaf30/properties/linkedAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data6.linkedAccountType !== undefined){let data9 = data6.linkedAccountType;const _errs21 = errors;if(!((data9 === "LOAN") || (data9 === "DEPOSIT"))){validate10.errors = [{instancePath:instancePath+"/transferDetails/linkedAccountType",schemaPath:"#/$defs/TransferDetailsInputaf30/properties/linkedAccountType/enum",keyword:"enum",params:{allowedValues: schema26.properties.linkedAccountType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/transferDetails",schemaPath:"#/$defs/TransferDetailsInputaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs22 = errors;if(errors === _errs22){if(errors === _errs22){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs22 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;