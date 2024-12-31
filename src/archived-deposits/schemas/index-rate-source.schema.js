/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"IndexRateSource","type":"object","description":"Represents an index rate source.","properties":{"creationDate":{"type":"string","description":"The creation date of the index rate source","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the index rate source, which is auto generated, and unique."},"id":{"type":"string","description":"The ID of the index rate source, which can be generated and customized, and must be unique."},"lastModifiedDate":{"type":"string","description":"The last date this rate source was modified","format":"date-time"},"name":{"type":"string","description":"The name of the index rate source."},"notes":{"type":"string","description":"The notes about the the index rate source."},"type":{"description":"The type of index rate source.","enum":["INTEREST_RATE","TAX_RATE","WITHHOLDING_TAX_RATE","PRINCIPAL_TAX_RATE"]}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.creationDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs6 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs10 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data6 = data.type;const _errs14 = errors;if(!((((data6 === "INTEREST_RATE") || (data6 === "TAX_RATE")) || (data6 === "WITHHOLDING_TAX_RATE")) || (data6 === "PRINCIPAL_TAX_RATE"))){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;