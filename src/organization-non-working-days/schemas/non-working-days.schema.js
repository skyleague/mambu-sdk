/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"NonWorkingDays","type":"object","description":"Represents the non-working days of the organization.","properties":{"nonWorkingDays":{"type":"array","title":"nonWorkingDays","description":"The non-working days of the organization.","items":{"enum":["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]}}},"required":["nonWorkingDays"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.nonWorkingDays === undefined) && (missing0 = "nonWorkingDays")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.nonWorkingDays !== undefined){let data0 = data.nonWorkingDays;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;let valid2;valid2 = false;for(const v0 of schema11.properties.nonWorkingDays.items.enum){if(func0(data0[i0], v0)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/nonWorkingDays/" + i0,schemaPath:"#/properties/nonWorkingDays/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.nonWorkingDays.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/nonWorkingDays",schemaPath:"#/properties/nonWorkingDays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;