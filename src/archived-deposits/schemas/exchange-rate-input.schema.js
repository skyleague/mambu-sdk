/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ExchangeRateInput","type":"object","description":"Model representation of an exchange rate inputs for filtering.","properties":{"buyRate":{"type":"number","description":"The buy exchange rate."},"sellRate":{"type":"number","description":"The sell exchange rate."},"startDate":{"type":"string","description":"The exchange rate applies starting with this date.","format":"date-time"}},"required":["buyRate","sellRate"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.buyRate === undefined) && (missing0 = "buyRate")) || ((data.sellRate === undefined) && (missing0 = "sellRate"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.buyRate !== undefined){let data0 = data.buyRate;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/buyRate",schemaPath:"#/properties/buyRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.sellRate !== undefined){let data1 = data.sellRate;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/sellRate",schemaPath:"#/properties/sellRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;