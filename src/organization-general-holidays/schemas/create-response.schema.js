/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CreateResponse","type":"array","items":{"$ref":"#/$defs/Holiday"},"$defs":{"Holiday":{"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.creationDate !== undefined){const _errs5 = errors;if(errors === _errs5){if(errors === _errs5){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/Holiday/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.date !== undefined){const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(!(typeof data0.date === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/date",schemaPath:"#/$defs/Holiday/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs9 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/Holiday/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){let data4 = data0.id;const _errs11 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/Holiday/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.isAnnuallyRecurring !== undefined){const _errs13 = errors;if(typeof data0.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/isAnnuallyRecurring",schemaPath:"#/$defs/Holiday/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.name !== undefined){const _errs15 = errors;if(typeof data0.name !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/name",schemaPath:"#/$defs/Holiday/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Holiday/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;