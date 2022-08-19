/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"LockLoanAccountInput","description":"Represents the request payload for locking an account","properties":{"lockedOperations":{"type":"array","title":"lockedOperations","description":"The list of operations to lock","items":{"enum":["APPLY_INTEREST","APPLY_FEES","APPLY_PENALTIES"]}},"notes":{"type":"string","title":"notes","description":"Extra notes about the current locking of account"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((key0 === "lockedOperations") || (key0 === "notes"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.lockedOperations !== undefined){let data0 = data.lockedOperations;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;if(!(((data1 === "APPLY_INTEREST") || (data1 === "APPLY_FEES")) || (data1 === "APPLY_PENALTIES"))){validate10.errors = [{instancePath:instancePath+"/lockedOperations/" + i0,schemaPath:"#/properties/lockedOperations/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.lockedOperations.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/lockedOperations",schemaPath:"#/properties/lockedOperations/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs5 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}