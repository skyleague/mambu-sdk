/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllIndexRatesResponse","type":"array","items":{"$ref":"#/$defs/IndexRate"},"$defs":{"IndexRate":{"type":"object","title":"IndexRate","description":"Represents an index rate.","properties":{"assignedIndexRateSourceKey":{"type":"string","title":"assignedIndexRateSourceKey","description":"The index rate source that the index rate belongs to."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the index rate, which is auto generated, and unique."},"id":{"type":"string","title":"id","description":"The ID of the index rate, which can be generated and customized, and must be unique."},"notes":{"type":"string","title":"notes","description":"The notes or description attached to this object."},"rate":{"type":"number","title":"rate","description":"The percentage value of the index rate."},"startDate":{"type":"string","title":"startDate","description":"The date when the index rate starts being the active rate for its source.","format":"date-time"},"userKey":{"type":"string","title":"userKey","description":"The key for the user that last modified the index rate."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"IndexRate","description":"Represents an index rate.","properties":{"assignedIndexRateSourceKey":{"type":"string","title":"assignedIndexRateSourceKey","description":"The index rate source that the index rate belongs to."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the index rate, which is auto generated, and unique."},"id":{"type":"string","title":"id","description":"The ID of the index rate, which can be generated and customized, and must be unique."},"notes":{"type":"string","title":"notes","description":"The notes or description attached to this object."},"rate":{"type":"number","title":"rate","description":"The percentage value of the index rate."},"startDate":{"type":"string","title":"startDate","description":"The date when the index rate starts being the active rate for its source.","format":"date-time"},"userKey":{"type":"string","title":"userKey","description":"The key for the user that last modified the index rate."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.assignedIndexRateSourceKey !== undefined){const _errs5 = errors;if(typeof data0.assignedIndexRateSourceKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/assignedIndexRateSourceKey",schemaPath:"#/$defs/IndexRate/properties/assignedIndexRateSourceKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs7 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/IndexRate/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){const _errs9 = errors;if(typeof data0.id !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/IndexRate/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.notes !== undefined){const _errs11 = errors;if(typeof data0.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/notes",schemaPath:"#/$defs/IndexRate/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.rate !== undefined){let data5 = data0.rate;const _errs13 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/rate",schemaPath:"#/$defs/IndexRate/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.startDate !== undefined){const _errs15 = errors;if(errors === _errs15){if(errors === _errs15){if(!(typeof data0.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/startDate",schemaPath:"#/$defs/IndexRate/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.userKey !== undefined){const _errs17 = errors;if(typeof data0.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/userKey",schemaPath:"#/$defs/IndexRate/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/IndexRate/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;