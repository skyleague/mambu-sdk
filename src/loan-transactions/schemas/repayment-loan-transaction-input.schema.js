/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"RepaymentLoanTransactionInput","type":"object","description":"Represents the request payload for creating a transaction of type REPAYMENT","properties":{"transactionDetails":{"title":"transactionDetails","$ref":"#/$defs/LoanTransactionDetailsInputaf30"},"amount":{"type":"number","title":"amount","description":"The amount of the repayment"},"notes":{"type":"string","title":"notes","description":"Extra notes about the repayment transaction. Notes can have at most 255 characters in length."},"customPaymentAmounts":{"type":"array","title":"customPaymentAmounts","description":"The list of custom amounts of the repayment","items":{"description":"The list of custom amounts of the repayment","$ref":"#/$defs/CustomPaymentAmountaf30"}},"externalId":{"type":"string","title":"externalId","description":"The external id of the repayment transaction, customizable, unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"The booking date of the repayment (as Organization Time)","format":"date-time"},"prepaymentRecalculationMethod":{"title":"prepaymentRecalculationMethod","description":"The prepayment recalculation method of the repayment","enum":["NO_RECALCULATION","RESCHEDULE_REMAINING_REPAYMENTS","RECALCULATE_SCHEDULE_KEEP_SAME_NUMBER_OF_TERMS","RECALCULATE_SCHEDULE_KEEP_SAME_PRINCIPAL_AMOUNT","RECALCULATE_SCHEDULE_KEEP_SAME_TOTAL_REPAYMENT_AMOUNT","REDUCE_AMOUNT_PER_INSTALLMENT","REDUCE_NUMBER_OF_INSTALLMENTS","REDUCE_NUMBER_OF_INSTALLMENTS_NEW"]},"valueDate":{"type":"string","title":"valueDate","description":"The entry date of the repayment (as Organization Time)","format":"date-time"},"originalCurrencyCode":{"type":"string","title":"originalCurrencyCode","description":"The currency code for the repayment transaction"},"installmentEncodedKey":{"type":"string","title":"installmentEncodedKey","description":"The encoded key of the schedule installment to which this repayment is associated"}},"required":["amount"],"additionalProperties":true,"$defs":{"LoanTransactionDetailsInputaf30":{"type":"object","title":"LoanTransactionDetailsInputaf30","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true},"CustomPaymentAmountaf30":{"type":"object","title":"CustomPaymentAmountaf30","description":"Custom payment amount for a specific element type","properties":{"taxOnAmount":{"type":"number","title":"taxOnAmount","description":"The amount of the taxes paid in the transaction for the given type."},"amount":{"type":"number","title":"amount","description":"The amount of the payment paid in the transaction for the given type."},"predefinedFeeKey":{"type":"string","title":"predefinedFeeKey","description":"The encodedKey of the predefined fee to be paid."},"customPaymentAmountType":{"title":"customPaymentAmountType","description":"The type of the custom payment","enum":["PRINCIPAL","INTEREST","MANUAL_FEE","UPFRONT_DISBURSEMENT_FEE","LATE_REPAYMENT_FEE","PAYMENT_DUE_FEE","PENALTY"]}},"required":["amount","customPaymentAmountType"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"LoanTransactionDetailsInputaf30","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true};const schema13 = {"type":"object","title":"CustomPaymentAmountaf30","description":"Custom payment amount for a specific element type","properties":{"taxOnAmount":{"type":"number","title":"taxOnAmount","description":"The amount of the taxes paid in the transaction for the given type."},"amount":{"type":"number","title":"amount","description":"The amount of the payment paid in the transaction for the given type."},"predefinedFeeKey":{"type":"string","title":"predefinedFeeKey","description":"The encodedKey of the predefined fee to be paid."},"customPaymentAmountType":{"title":"customPaymentAmountType","description":"The type of the custom payment","enum":["PRINCIPAL","INTEREST","MANUAL_FEE","UPFRONT_DISBURSEMENT_FEE","LATE_REPAYMENT_FEE","PAYMENT_DUE_FEE","PENALTY"]}},"required":["amount","customPaymentAmountType"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.transactionDetails !== undefined){let data0 = data.transactionDetails;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.transactionChannelId !== undefined){const _errs6 = errors;if(typeof data0.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.transactionChannelKey !== undefined){const _errs8 = errors;if(typeof data0.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data3 = data.amount;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.customPaymentAmounts !== undefined){let data5 = data.customPaymentAmounts;const _errs14 = errors;if(errors === _errs14){if(Array.isArray(data5)){var valid3 = true;const len0 = data5.length;for(let i0=0; i0<len0; i0++){let data6 = data5[i0];const _errs16 = errors;const _errs17 = errors;if(errors === _errs17){if(data6 && typeof data6 == "object" && !Array.isArray(data6)){let missing1;if(((data6.amount === undefined) && (missing1 = "amount")) || ((data6.customPaymentAmountType === undefined) && (missing1 = "customPaymentAmountType"))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0,schemaPath:"#/$defs/CustomPaymentAmountaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data6.taxOnAmount !== undefined){let data7 = data6.taxOnAmount;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/taxOnAmount",schemaPath:"#/$defs/CustomPaymentAmountaf30/properties/taxOnAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid5 = _errs20 === errors;}else {var valid5 = true;}if(valid5){if(data6.amount !== undefined){let data8 = data6.amount;const _errs22 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/amount",schemaPath:"#/$defs/CustomPaymentAmountaf30/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid5 = _errs22 === errors;}else {var valid5 = true;}if(valid5){if(data6.predefinedFeeKey !== undefined){const _errs24 = errors;if(typeof data6.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/predefinedFeeKey",schemaPath:"#/$defs/CustomPaymentAmountaf30/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs24 === errors;}else {var valid5 = true;}if(valid5){if(data6.customPaymentAmountType !== undefined){const _errs26 = errors;let valid6;valid6 = false;for(const v0 of schema13.properties.customPaymentAmountType.enum){if(func0(data6.customPaymentAmountType, v0)){valid6 = true;break;}}if(!valid6){validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0+"/customPaymentAmountType",schemaPath:"#/$defs/CustomPaymentAmountaf30/properties/customPaymentAmountType/enum",keyword:"enum",params:{allowedValues: schema13.properties.customPaymentAmountType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid5 = _errs26 === errors;}else {var valid5 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts/" + i0,schemaPath:"#/$defs/CustomPaymentAmountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs16 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/customPaymentAmounts",schemaPath:"#/properties/customPaymentAmounts/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs27 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs29 = errors;if(errors === _errs29){if(errors === _errs29){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.prepaymentRecalculationMethod !== undefined){const _errs31 = errors;let valid7;valid7 = false;for(const v1 of schema11.properties.prepaymentRecalculationMethod.enum){if(func0(data.prepaymentRecalculationMethod, v1)){valid7 = true;break;}}if(!valid7){validate10.errors = [{instancePath:instancePath+"/prepaymentRecalculationMethod",schemaPath:"#/properties/prepaymentRecalculationMethod/enum",keyword:"enum",params:{allowedValues: schema11.properties.prepaymentRecalculationMethod.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs32 = errors;if(errors === _errs32){if(errors === _errs32){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrencyCode !== undefined){const _errs34 = errors;if(typeof data.originalCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrencyCode",schemaPath:"#/properties/originalCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs34 === errors;}else {var valid0 = true;}if(valid0){if(data.installmentEncodedKey !== undefined){const _errs36 = errors;if(typeof data.installmentEncodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/installmentEncodedKey",schemaPath:"#/properties/installmentEncodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs36 === errors;}else {var valid0 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;