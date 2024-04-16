/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ApiKeyRotationResult","type":"object","description":"Represents the result of an API key rotation.","properties":{"apiKey":{"type":"string","description":"The new API key created after rotating an existing API key."},"id":{"type":"string","description":"The API key ID. You must base any identification process on the the API key ID as it is guaranteed to be unique."},"secretKey":{"type":"string","description":"The new secret key created after rotating an existing API key."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.apiKey !== undefined){const _errs2 = errors;if(typeof data.apiKey !== "string"){validate10.errors = [{instancePath:instancePath+"/apiKey",schemaPath:"#/properties/apiKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs4 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.secretKey !== undefined){const _errs6 = errors;if(typeof data.secretKey !== "string"){validate10.errors = [{instancePath:instancePath+"/secretKey",schemaPath:"#/properties/secretKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;