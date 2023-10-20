/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"patchAuthorizationHoldRequest","type":"array","items":{"$ref":"#/$defs/PatchOperationaf30"},"$defs":{"PatchOperationaf30":{"type":"object","title":"PatchOperationaf30","description":"A single change that needs to be made to a resource","properties":{"op":{"title":"op","description":"The change to perform","enum":["ADD","REPLACE","REMOVE","MOVE"]},"path":{"type":"string","title":"path","description":"The field to perform the operation on"},"from":{"type":"string","title":"from","description":"The field from where a value should be moved, when using move"},"value":{"type":"object","title":"value","description":"The value of the field, can be null","additionalProperties":{}}},"required":["op","path"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"PatchOperationaf30","description":"A single change that needs to be made to a resource","properties":{"op":{"title":"op","description":"The change to perform","enum":["ADD","REPLACE","REMOVE","MOVE"]},"path":{"type":"string","title":"path","description":"The field to perform the operation on"},"from":{"type":"string","title":"from","description":"The field from where a value should be moved, when using move"},"value":{"type":"object","title":"value","description":"The value of the field, can be null","additionalProperties":{}}},"required":["op","path"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if(((data0.op === undefined) && (missing0 = "op")) || ((data0.path === undefined) && (missing0 = "path"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/PatchOperationaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.op !== undefined){let data1 = data0.op;const _errs5 = errors;if(!((((data1 === "ADD") || (data1 === "REPLACE")) || (data1 === "REMOVE")) || (data1 === "MOVE"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/op",schemaPath:"#/$defs/PatchOperationaf30/properties/op/enum",keyword:"enum",params:{allowedValues: schema12.properties.op.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.path !== undefined){const _errs6 = errors;if(typeof data0.path !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/path",schemaPath:"#/$defs/PatchOperationaf30/properties/path/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.from !== undefined){const _errs8 = errors;if(typeof data0.from !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/from",schemaPath:"#/$defs/PatchOperationaf30/properties/from/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.value !== undefined){let data4 = data0.value;const _errs10 = errors;if(errors === _errs10){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/$defs/PatchOperationaf30/properties/value/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/PatchOperationaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;