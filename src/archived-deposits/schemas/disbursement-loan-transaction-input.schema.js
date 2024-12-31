/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"DisbursementLoanTransactionInput","type":"object","description":"The input representation of a loan transaction when making a disbursement","properties":{"amount":{"type":"number","description":"The amount to disburse"},"bookingDate":{"type":"string","description":"The date when disbursement is logged into accounting)","format":"date-time"},"externalId":{"type":"string","description":"The external id of the disbursement transaction. Customizable and unique"},"fees":{"type":"array","description":"The list of the fees to apply","items":{"$ref":"#/$defs/FeeInput"}},"firstRepaymentDate":{"type":"string","description":"The date of the first repayment for the loan account (as Organization Time)","format":"date-time"},"notes":{"type":"string","description":"Extra notes related to disbursement action or transaction"},"originalCurrencyCode":{"type":"string","description":"The currency for the disbursement transaction"},"shiftAdjustableInterestPeriods":{"type":"boolean","description":"Indicates whether the validFrom dates from Adjustable Interest Rates can be shifted automatically or not"},"transactionDetails":{"$ref":"#/$defs/TransactionDetailsInput"},"transferDetails":{"$ref":"#/$defs/DisbursementTransferDetailsInput"},"valueDate":{"type":"string","description":"The date of the disbursal (as Organization Time)","format":"date-time"}},"additionalProperties":true,"$defs":{"FeeInput":{"type":"object","description":"An amount of predefined fee to apply on account.","properties":{"amount":{"type":"number","description":"The amount of the fee to apply"},"percentage":{"type":"number","description":"The percentage of the fee to apply"},"predefinedFeeKey":{"type":"string","description":"The encoded key of the predefined fee"}},"required":["predefinedFeeKey"],"additionalProperties":true},"TransactionDetailsInput":{"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true},"DisbursementTransferDetailsInput":{"type":"object","description":"Represents the input for the transfer details for a disbursement transaction","properties":{"linkedAccountId":{"type":"string","description":"The id of the linked deposit account"},"linkedAccountKey":{"type":"string","description":"The encoded key of the linked deposit account"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"An amount of predefined fee to apply on account.","properties":{"amount":{"type":"number","description":"The amount of the fee to apply"},"percentage":{"type":"number","description":"The percentage of the fee to apply"},"predefinedFeeKey":{"type":"string","description":"The encoded key of the predefined fee"}},"required":["predefinedFeeKey"],"additionalProperties":true};const schema13 = {"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true};const schema14 = {"type":"object","description":"Represents the input for the transfer details for a disbursement transaction","properties":{"linkedAccountId":{"type":"string","description":"The id of the linked deposit account"},"linkedAccountKey":{"type":"string","description":"The encoded key of the linked deposit account"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs6 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.fees !== undefined){let data3 = data.fees;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid1 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing0;if((data4.predefinedFeeKey === undefined) && (missing0 = "predefinedFeeKey")){validate10.errors = [{instancePath:instancePath+"/fees/" + i0,schemaPath:"#/$defs/FeeInput/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data4.amount !== undefined){let data5 = data4.amount;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/fees/" + i0+"/amount",schemaPath:"#/$defs/FeeInput/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data4.percentage !== undefined){let data6 = data4.percentage;const _errs16 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/fees/" + i0+"/percentage",schemaPath:"#/$defs/FeeInput/properties/percentage/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data4.predefinedFeeKey !== undefined){const _errs18 = errors;if(typeof data4.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/fees/" + i0+"/predefinedFeeKey",schemaPath:"#/$defs/FeeInput/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs18 === errors;}else {var valid3 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/fees/" + i0,schemaPath:"#/$defs/FeeInput/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs10 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/fees",schemaPath:"#/properties/fees/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.firstRepaymentDate !== undefined){const _errs20 = errors;if(errors === _errs20){if(errors === _errs20){if(!(typeof data.firstRepaymentDate === "string")){validate10.errors = [{instancePath:instancePath+"/firstRepaymentDate",schemaPath:"#/properties/firstRepaymentDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs22 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrencyCode !== undefined){const _errs24 = errors;if(typeof data.originalCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrencyCode",schemaPath:"#/properties/originalCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.shiftAdjustableInterestPeriods !== undefined){const _errs26 = errors;if(typeof data.shiftAdjustableInterestPeriods !== "boolean"){validate10.errors = [{instancePath:instancePath+"/shiftAdjustableInterestPeriods",schemaPath:"#/properties/shiftAdjustableInterestPeriods/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionDetails !== undefined){let data12 = data.transactionDetails;const _errs28 = errors;const _errs29 = errors;if(errors === _errs29){if(data12 && typeof data12 == "object" && !Array.isArray(data12)){if(data12.transactionChannelId !== undefined){const _errs32 = errors;if(typeof data12.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/TransactionDetailsInput/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs32 === errors;}else {var valid5 = true;}if(valid5){if(data12.transactionChannelKey !== undefined){const _errs34 = errors;if(typeof data12.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/TransactionDetailsInput/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs34 === errors;}else {var valid5 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/TransactionDetailsInput/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.transferDetails !== undefined){let data15 = data.transferDetails;const _errs36 = errors;const _errs37 = errors;if(errors === _errs37){if(data15 && typeof data15 == "object" && !Array.isArray(data15)){if(data15.linkedAccountId !== undefined){const _errs40 = errors;if(typeof data15.linkedAccountId !== "string"){validate10.errors = [{instancePath:instancePath+"/transferDetails/linkedAccountId",schemaPath:"#/$defs/DisbursementTransferDetailsInput/properties/linkedAccountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs40 === errors;}else {var valid7 = true;}if(valid7){if(data15.linkedAccountKey !== undefined){const _errs42 = errors;if(typeof data15.linkedAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transferDetails/linkedAccountKey",schemaPath:"#/$defs/DisbursementTransferDetailsInput/properties/linkedAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs42 === errors;}else {var valid7 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transferDetails",schemaPath:"#/$defs/DisbursementTransferDetailsInput/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs44 = errors;if(errors === _errs44){if(errors === _errs44){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs44 === errors;}else {var valid0 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;