/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"FeeLoanTransactionInput","type":"object","description":"Represents the request payload for creating a transaction of type FEE_APPLIED","properties":{"amount":{"type":"number","description":"The fee amount to be applied on the account"},"bookingDate":{"type":"string","description":"The date when the fee transaction is logged into accounting (as Organization Time)","format":"date-time"},"externalId":{"type":"string","description":"The external id of the repayment transaction, customizable, unique"},"feeCapitalisation":{"type":"boolean","description":"This flag indicates whether the fee should be capitalised or not"},"firstRepaymentDate":{"type":"string","description":"The date of the first repayment for the loan account (as Organization Time)","format":"date-time"},"installmentNumber":{"type":"integer","description":"The installment number on which the fee will be applied"},"notes":{"type":"string","description":"Extra notes about the current transaction"},"predefinedFeeKey":{"type":"string","description":"The encodedKey of the predefined fee that defines the current fee"},"valueDate":{"type":"string","description":"The date when to apply the fee (as Organization Time)","format":"date-time"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs6 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.feeCapitalisation !== undefined){const _errs8 = errors;if(typeof data.feeCapitalisation !== "boolean"){validate10.errors = [{instancePath:instancePath+"/feeCapitalisation",schemaPath:"#/properties/feeCapitalisation/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.firstRepaymentDate !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data.firstRepaymentDate === "string")){validate10.errors = [{instancePath:instancePath+"/firstRepaymentDate",schemaPath:"#/properties/firstRepaymentDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.installmentNumber !== undefined){let data5 = data.installmentNumber;const _errs12 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/installmentNumber",schemaPath:"#/properties/installmentNumber/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs14 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.predefinedFeeKey !== undefined){const _errs16 = errors;if(typeof data.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/predefinedFeeKey",schemaPath:"#/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs18 = errors;if(errors === _errs18){if(errors === _errs18){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs18 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;