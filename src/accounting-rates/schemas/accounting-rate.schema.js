/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AccountingRate","type":"object","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date (as Organization Time)","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date (as Organization Time)","format":"date-time"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.rate !== undefined){let data0 = data.rate;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/rate",schemaPath:"#/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.endDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/endDate",schemaPath:"#/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.toCurrencyCode !== undefined){const _errs6 = errors;if(typeof data.toCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/toCurrencyCode",schemaPath:"#/properties/toCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs8 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.fromCurrencyCode !== undefined){const _errs10 = errors;if(typeof data.fromCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/fromCurrencyCode",schemaPath:"#/properties/fromCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs12 = errors;if(errors === _errs12){if(errors === _errs12){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;