/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"array","title":"getApiKeysByConsumerIdResponse","items":{"$ref":"#/$defs/ApiKey"},"$defs":{"ApiKey":{"type":"object","title":"ApiKey","description":"Representation of an API Consumer's API Key","properties":{"id":{"type":"string","title":"id","description":"The api key ID"},"apiKey":{"type":"string","title":"apiKey","description":"The api key"},"expirationTime":{"type":"integer","title":"expirationTime","description":"The time to live for the rotated key","maximum":100000000,"minimum":0}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"ApiKey","description":"Representation of an API Consumer's API Key","properties":{"id":{"type":"string","title":"id","description":"The api key ID"},"apiKey":{"type":"string","title":"apiKey","description":"The api key"},"expirationTime":{"type":"integer","title":"expirationTime","description":"The time to live for the rotated key","maximum":100000000,"minimum":0}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs4 = errors;for(const key0 in data0){if(!(((key0 === "id") || (key0 === "apiKey")) || (key0 === "expirationTime"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/ApiKey/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs4 === errors){if(data0.id !== undefined){const _errs5 = errors;if(typeof data0.id !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/ApiKey/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.apiKey !== undefined){const _errs7 = errors;if(typeof data0.apiKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/apiKey",schemaPath:"#/$defs/ApiKey/properties/apiKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.expirationTime !== undefined){let data3 = data0.expirationTime;const _errs9 = errors;if(!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/expirationTime",schemaPath:"#/$defs/ApiKey/properties/expirationTime/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs9){if((typeof data3 == "number") && (isFinite(data3))){if(data3 > 100000000 || isNaN(data3)){validate10.errors = [{instancePath:instancePath+"/" + i0+"/expirationTime",schemaPath:"#/$defs/ApiKey/properties/expirationTime/maximum",keyword:"maximum",params:{comparison: "<=", limit: 100000000},message:"must be <= 100000000"}];return false;}else {if(data3 < 0 || isNaN(data3)){validate10.errors = [{instancePath:instancePath+"/" + i0+"/expirationTime",schemaPath:"#/$defs/ApiKey/properties/expirationTime/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid2 = _errs9 === errors;}else {var valid2 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/ApiKey/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;