/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Holiday","type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creationDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.date !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.date === "string")){validate10.errors = [{instancePath:instancePath+"/date",schemaPath:"#/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs6 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){let data3 = data.id;const _errs8 = errors;if(!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.isAnnuallyRecurring !== undefined){const _errs10 = errors;if(typeof data.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/isAnnuallyRecurring",schemaPath:"#/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs12 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;