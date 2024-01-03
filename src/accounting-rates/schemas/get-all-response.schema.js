/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllResponse","type":"array","items":{"$ref":"#/$defs/AccountingRate"},"$defs":{"AccountingRate":{"type":"object","title":"AccountingRate","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date (as Organization Time)","format":"date-time"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date (as Organization Time)","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"AccountingRate","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date (as Organization Time)","format":"date-time"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date (as Organization Time)","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.encodedKey !== undefined){const _errs5 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/AccountingRate/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.endDate !== undefined){const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(!(typeof data0.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/endDate",schemaPath:"#/$defs/AccountingRate/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.fromCurrencyCode !== undefined){const _errs9 = errors;if(typeof data0.fromCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/fromCurrencyCode",schemaPath:"#/$defs/AccountingRate/properties/fromCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.rate !== undefined){let data4 = data0.rate;const _errs11 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/rate",schemaPath:"#/$defs/AccountingRate/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.startDate !== undefined){const _errs13 = errors;if(errors === _errs13){if(errors === _errs13){if(!(typeof data0.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/startDate",schemaPath:"#/$defs/AccountingRate/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.toCurrencyCode !== undefined){const _errs15 = errors;if(typeof data0.toCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/toCurrencyCode",schemaPath:"#/$defs/AccountingRate/properties/toCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/AccountingRate/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;