/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ChangeArrearsSettingsInput","description":"Represents the request payload for performing an arrears settings change action","properties":{"arrearsTolerancePeriod":{"type":"integer","title":"arrearsTolerancePeriod","description":"The new arrears tolerance period to be available on the account"},"notes":{"type":"string","title":"notes","description":"The notes for the change arrears settings action performed on the loan account"},"entryDate":{"type":"string","title":"entryDate","description":"The date when to change the arrears settings","format":"date-time"}},"required":["arrearsTolerancePeriod","entryDate"],"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.arrearsTolerancePeriod === undefined) && (missing0 = "arrearsTolerancePeriod")) || ((data.entryDate === undefined) && (missing0 = "entryDate"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(((key0 === "arrearsTolerancePeriod") || (key0 === "notes")) || (key0 === "entryDate"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.arrearsTolerancePeriod !== undefined){let data0 = data.arrearsTolerancePeriod;const _errs2 = errors;if(!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/arrearsTolerancePeriod",schemaPath:"#/properties/arrearsTolerancePeriod/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs4 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.entryDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.entryDate === "string")){validate10.errors = [{instancePath:instancePath+"/entryDate",schemaPath:"#/properties/entryDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;