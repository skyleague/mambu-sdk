/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"RepaymentLoanTransactionInput","type":"object","description":"Represents the request payload for creating a transaction of type REPAYMENT","properties":{"amount":{"type":"number","description":"The amount of the repayment"},"bookingDate":{"type":"string","description":"The booking date of the repayment (as Organization Time)","format":"date-time"},"customPaymentAmounts":{"type":"array","description":"The list of custom amounts of the repayment","items":{"$ref":"#/$defs/CustomPaymentAmount"}},"externalId":{"type":"string","description":"The external id of the repayment transaction, customizable, unique"},"installmentEncodedKey":{"type":"string","description":"The encoded key of the schedule installment to which this repayment is associated"},"notes":{"type":"string","description":"Extra notes about the repayment transaction. Notes can have at most 255 characters in length."},"originalCurrencyCode":{"type":"string","description":"The currency code for the repayment transaction"},"prepaymentRecalculationMethod":{"description":"The prepayment recalculation method of the repayment","enum":["NO_RECALCULATION","RESCHEDULE_REMAINING_REPAYMENTS","RECALCULATE_SCHEDULE_KEEP_SAME_NUMBER_OF_TERMS","RECALCULATE_SCHEDULE_KEEP_SAME_PRINCIPAL_AMOUNT","RECALCULATE_SCHEDULE_KEEP_SAME_TOTAL_REPAYMENT_AMOUNT","REDUCE_AMOUNT_PER_INSTALLMENT","REDUCE_NUMBER_OF_INSTALLMENTS","REDUCE_NUMBER_OF_INSTALLMENTS_NEW"]},"transactionDetails":{"$ref":"#/$defs/LoanTransactionDetailsInput"},"valueDate":{"type":"string","description":"The entry date of the repayment (as Organization Time)","format":"date-time"}},"required":["amount"],"additionalProperties":true,"$defs":{"CustomPaymentAmount":{"type":"object","description":"Custom payment amount for a specific element type","properties":{"amount":{"type":"number","description":"The amount of the payment paid in the transaction for the given type."},"customPaymentAmountType":{"description":"The type of the custom payment","enum":["PRINCIPAL","INTEREST","MANUAL_FEE","UPFRONT_DISBURSEMENT_FEE","LATE_REPAYMENT_FEE","PAYMENT_DUE_FEE","PENALTY"]},"predefinedFeeKey":{"type":"string","description":"The encodedKey of the predefined fee to be paid."},"taxOnAmount":{"type":"number","description":"The amount of the taxes paid in the transaction for the given type."}},"required":["amount","customPaymentAmountType"],"additionalProperties":true},"LoanTransactionDetailsInput":{"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Custom payment amount for a specific element type","properties":{"amount":{"type":"number","description":"The amount of the payment paid in the transaction for the given type."},"customPaymentAmountType":{"description":"The type of the custom payment","enum":["PRINCIPAL","INTEREST","MANUAL_FEE","UPFRONT_DISBURSEMENT_FEE","LATE_REPAYMENT_FEE","PAYMENT_DUE_FEE","PENALTY"]},"predefinedFeeKey":{"type":"string","description":"The encodedKey of the predefined fee to be paid."},"taxOnAmount":{"type":"number","description":"The amount of the taxes paid in the transaction for the given type."}},"required":["amount","customPaymentAmountType"],"additionalProperties":true};const schema13 = {"type":"object","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true};const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){let data1 = data.bookingDate;const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(typeof data1 === "string"){if(!(formats0.validate(data1))){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.customPaymentAmounts !== undefined){let data2 = data.customPaymentAmounts;const _errs6 = errors;if(errors === _errs6){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){let missing1;if(((data3.amount === undefined) && (missing1 = "amount")) || ((data3.customPaymentAmountType === undefined) && (missing1 = "customPaymentAmountType"))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0,schemaPath:"#/$defs/CustomPaymentAmount/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data3.amount !== undefined){let data4 = data3.amount;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/amount",schemaPath:"#/$defs/CustomPaymentAmount/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data3.customPaymentAmountType !== undefined){const _errs14 = errors;let valid4;valid4 = false;for(const v0 of schema12.properties.customPaymentAmountType.enum){if(func0(data3.customPaymentAmountType, v0)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/customPaymentAmountType",schemaPath:"#/$defs/CustomPaymentAmount/properties/customPaymentAmountType/enum",keyword:"enum",params:{allowedValues: schema12.properties.customPaymentAmountType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data3.predefinedFeeKey !== undefined){const _errs15 = errors;if(typeof data3.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/predefinedFeeKey",schemaPath:"#/$defs/CustomPaymentAmount/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs15 === errors;}else {var valid3 = true;}if(valid3){if(data3.taxOnAmount !== undefined){let data7 = data3.taxOnAmount;const _errs17 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/taxOnAmount",schemaPath:"#/$defs/CustomPaymentAmount/properties/taxOnAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs17 === errors;}else {var valid3 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0,schemaPath:"#/$defs/CustomPaymentAmount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs8 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts",schemaPath:"#/properties/customPaymentAmounts/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs19 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.installmentEncodedKey !== undefined){const _errs21 = errors;if(typeof data.installmentEncodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/installmentEncodedKey",schemaPath:"#/properties/installmentEncodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs23 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrencyCode !== undefined){const _errs25 = errors;if(typeof data.originalCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrencyCode",schemaPath:"#/properties/originalCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.prepaymentRecalculationMethod !== undefined){const _errs27 = errors;let valid5;valid5 = false;for(const v1 of schema11.properties.prepaymentRecalculationMethod.enum){if(func0(data.prepaymentRecalculationMethod, v1)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/prepaymentRecalculationMethod",schemaPath:"#/properties/prepaymentRecalculationMethod/enum",keyword:"enum",params:{allowedValues: schema11.properties.prepaymentRecalculationMethod.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionDetails !== undefined){let data13 = data.transactionDetails;const _errs28 = errors;const _errs29 = errors;if(errors === _errs29){if(data13 && typeof data13 == "object" && !Array.isArray(data13)){if(data13.transactionChannelId !== undefined){const _errs32 = errors;if(typeof data13.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/LoanTransactionDetailsInput/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs32 === errors;}else {var valid7 = true;}if(valid7){if(data13.transactionChannelKey !== undefined){const _errs34 = errors;if(typeof data13.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/LoanTransactionDetailsInput/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs34 === errors;}else {var valid7 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/LoanTransactionDetailsInput/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){let data16 = data.valueDate;const _errs36 = errors;if(errors === _errs36){if(errors === _errs36){if(typeof data16 === "string"){if(!(formats0.validate(data16))){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs36 === errors;}else {var valid0 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;