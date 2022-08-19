/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ApiKey","description":"Representation of an API Consumer's API Key","properties":{"id":{"type":"string","title":"id","description":"The api key ID"},"apiKey":{"type":"string","title":"apiKey","description":"The api key"},"expirationTime":{"type":"integer","title":"expirationTime","description":"The time to live for the rotated key","maximum":100000000,"minimum":0}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((key0 === "id") || (key0 === "apiKey")) || (key0 === "expirationTime"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.id !== undefined){const _errs2 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.apiKey !== undefined){const _errs4 = errors;if(typeof data.apiKey !== "string"){validate10.errors = [{instancePath:instancePath+"/apiKey",schemaPath:"#/properties/apiKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.expirationTime !== undefined){let data2 = data.expirationTime;const _errs6 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs6){if((typeof data2 == "number") && (isFinite(data2))){if(data2 > 100000000 || isNaN(data2)){validate10.errors = [{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/maximum",keyword:"maximum",params:{comparison: "<=", limit: 100000000},message:"must be <= 100000000"}];return false;}else {if(data2 < 0 || isNaN(data2)){validate10.errors = [{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}