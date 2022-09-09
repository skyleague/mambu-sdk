/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"DepositProductAction","type":"object","description":"Allows specifying the batch update action details for a deposit product","properties":{"action":{"title":"action","description":"The action type to be applied. When UPDATE_INTEREST_SETTINGS action type is used, all the existing deposit accounts will be updated with the latest interest-related fields at the end of day job execution","const":"UPDATE_INTEREST_SETTINGS"}},"required":["action"],"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.action === undefined) && (missing0 = "action")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(key0 === "action")){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.action !== undefined){if("UPDATE_INTEREST_SETTINGS" !== data.action){validate10.errors = [{instancePath:instancePath+"/action",schemaPath:"#/properties/action/const",keyword:"const",params:{allowedValue: "UPDATE_INTEREST_SETTINGS"},message:"must be equal to constant"}];return false;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;