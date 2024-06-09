/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ExchangeRate","type":"object","description":"Model representation of an exchange rates.","properties":{"buyRate":{"type":"number","description":"The buy exchange rate."},"endDate":{"type":"string","description":"The exchange rate applies starting with this date.","format":"date-time"},"fromCurrencyCode":{"type":"string","description":"Organisation currency code"},"sellRate":{"type":"number","description":"The sell exchange rate."},"startDate":{"type":"string","description":"The exchange rate applies starting with this date.","format":"date-time"},"toCurrencyCode":{"type":"string","description":"Foreign currency code"},"userKey":{"type":"string","description":"The key for the user that last modified the exchange rate."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.buyRate !== undefined){let data0 = data.buyRate;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/buyRate",schemaPath:"#/properties/buyRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.endDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/endDate",schemaPath:"#/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.fromCurrencyCode !== undefined){const _errs6 = errors;if(typeof data.fromCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/fromCurrencyCode",schemaPath:"#/properties/fromCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.sellRate !== undefined){let data3 = data.sellRate;const _errs8 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/sellRate",schemaPath:"#/properties/sellRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.toCurrencyCode !== undefined){const _errs12 = errors;if(typeof data.toCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/toCurrencyCode",schemaPath:"#/properties/toCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.userKey !== undefined){const _errs14 = errors;if(typeof data.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;