/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"DataImportStatus","type":"object","description":"Holds information about the data import status","properties":{"state":{"title":"state","description":"Background process state","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN","RECOVERABLE_ERROR"]},"errors":{"type":"array","title":"errors","description":"List of errors","items":{"$ref":"#/$defs/DataImportErroraf30"}},"eventKey":{"type":"string","title":"eventKey","description":"Event key"}},"additionalProperties":true,"$defs":{"DataImportErroraf30":{"type":"object","title":"DataImportErroraf30","description":"Holds information about the data import error","properties":{"column":{"title":"column","$ref":"#/$defs/DataImportErrorColumnaf30"},"errorMessage":{"type":"string","title":"errorMessage","description":"Error message"},"sheet":{"type":"string","title":"sheet","description":"Sheet name"},"row":{"type":"integer","title":"row","description":"Row index"}},"additionalProperties":true},"DataImportErrorColumnaf30":{"type":"object","title":"DataImportErrorColumnaf30","description":"Holds basic information for an error column: the index and the corresponding name","properties":{"name":{"type":"string","title":"name","description":"Column name"},"index":{"type":"integer","title":"index","description":"Column index"}},"additionalProperties":true}}};const func0 = require("ajv/dist/runtime/equal").default;const schema12 = {"type":"object","title":"DataImportErroraf30","description":"Holds information about the data import error","properties":{"column":{"title":"column","$ref":"#/$defs/DataImportErrorColumnaf30"},"errorMessage":{"type":"string","title":"errorMessage","description":"Error message"},"sheet":{"type":"string","title":"sheet","description":"Sheet name"},"row":{"type":"integer","title":"row","description":"Row index"}},"additionalProperties":true};const schema13 = {"type":"object","title":"DataImportErrorColumnaf30","description":"Holds basic information for an error column: the index and the corresponding name","properties":{"name":{"type":"string","title":"name","description":"Column name"},"index":{"type":"integer","title":"index","description":"Column index"}},"additionalProperties":true};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.column !== undefined){let data0 = data.column;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.name !== undefined){const _errs6 = errors;if(typeof data0.name !== "string"){validate11.errors = [{instancePath:instancePath+"/column/name",schemaPath:"#/$defs/DataImportErrorColumnaf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.index !== undefined){let data2 = data0.index;const _errs8 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate11.errors = [{instancePath:instancePath+"/column/index",schemaPath:"#/$defs/DataImportErrorColumnaf30/properties/index/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}else {validate11.errors = [{instancePath:instancePath+"/column",schemaPath:"#/$defs/DataImportErrorColumnaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.errorMessage !== undefined){const _errs10 = errors;if(typeof data.errorMessage !== "string"){validate11.errors = [{instancePath:instancePath+"/errorMessage",schemaPath:"#/properties/errorMessage/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.sheet !== undefined){const _errs12 = errors;if(typeof data.sheet !== "string"){validate11.errors = [{instancePath:instancePath+"/sheet",schemaPath:"#/properties/sheet/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.row !== undefined){let data5 = data.row;const _errs14 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate11.errors = [{instancePath:instancePath+"/row",schemaPath:"#/properties/row/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.state !== undefined){const _errs2 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.state.enum){if(func0(data.state, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.errors !== undefined){let data1 = data.errors;const _errs3 = errors;if(errors === _errs3){if(Array.isArray(data1)){var valid2 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){const _errs5 = errors;if(!(validate11(data1[i0], {instancePath:instancePath+"/errors/" + i0,parentData:data1,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid2 = _errs5 === errors;if(!valid2){break;}}}else {validate10.errors = [{instancePath:instancePath+"/errors",schemaPath:"#/properties/errors/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.eventKey !== undefined){const _errs6 = errors;if(typeof data.eventKey !== "string"){validate10.errors = [{instancePath:instancePath+"/eventKey",schemaPath:"#/properties/eventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;