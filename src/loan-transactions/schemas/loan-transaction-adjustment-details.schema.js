/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"LoanTransactionAdjustmentDetails","type":"object","description":"Contains the details of the transaction adjustment","properties":{"bookingDate":{"type":"string","description":"Date when the adjustment transaction is logged into accounting. Can be null. Available only for REPAYMENT, PAYMENT_MADE and FEE","format":"date-time"},"installments":{"type":"array","description":"Details of installments with their corresponding amounts to be added to the reduced fee/penalty","items":{"$ref":"#/$defs/AdjustTransactionInstallmentDetailsDTO"}},"notes":{"type":"string","description":"Notes detailing why the transaction is adjusted"}},"required":["notes"],"additionalProperties":true,"$defs":{"AdjustTransactionInstallmentDetailsDTO":{"type":"object","description":"Contains the details for the spread of the adjusted amount over the installments","properties":{"amountToAdd":{"type":"number","description":"The amount to be added on the fee/penalty due amounts (depending on transaction type), on the corresponding installment"},"installmentKey":{"type":"string","description":"The encoded key of the installment"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Contains the details for the spread of the adjusted amount over the installments","properties":{"amountToAdd":{"type":"number","description":"The amount to be added on the fee/penalty due amounts (depending on transaction type), on the corresponding installment"},"installmentKey":{"type":"string","description":"The encoded key of the installment"}},"additionalProperties":true};const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.notes === undefined) && (missing0 = "notes")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.bookingDate !== undefined){let data0 = data.bookingDate;const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(typeof data0 === "string"){if(!(formats0.validate(data0))){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.installments !== undefined){let data1 = data.installments;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){if(data2.amountToAdd !== undefined){let data3 = data2.amountToAdd;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/installments/" + i0+"/amountToAdd",schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDTO/properties/amountToAdd/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data2.installmentKey !== undefined){const _errs12 = errors;if(typeof data2.installmentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/installments/" + i0+"/installmentKey",schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDTO/properties/installmentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/installments/" + i0,schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDTO/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/installments",schemaPath:"#/properties/installments/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs14 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;