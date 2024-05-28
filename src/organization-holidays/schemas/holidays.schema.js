/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Holidays","type":"object","description":"Represents the holidays of the organization.","properties":{"holidays":{"type":"array","description":"The general holidays of the organization.","items":{"$ref":"#/$defs/Holiday"}},"nonWorkingDays":{"type":"array","description":"The non-working days of the organization.","items":{"enum":["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]}}},"additionalProperties":true,"$defs":{"Holiday":{"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.holidays !== undefined){let data0 = data.holidays;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.creationDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data1.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/creationDate",schemaPath:"#/$defs/Holiday/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.date !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data1.date === "string")){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/date",schemaPath:"#/$defs/Holiday/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.encodedKey !== undefined){const _errs12 = errors;if(typeof data1.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/encodedKey",schemaPath:"#/$defs/Holiday/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data1.id !== undefined){let data5 = data1.id;const _errs14 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/id",schemaPath:"#/$defs/Holiday/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data1.isAnnuallyRecurring !== undefined){const _errs16 = errors;if(typeof data1.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/isAnnuallyRecurring",schemaPath:"#/$defs/Holiday/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data1.name !== undefined){const _errs18 = errors;if(typeof data1.name !== "string"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/name",schemaPath:"#/$defs/Holiday/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs18 === errors;}else {var valid3 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/holidays/" + i0,schemaPath:"#/$defs/Holiday/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/holidays",schemaPath:"#/properties/holidays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.nonWorkingDays !== undefined){let data8 = data.nonWorkingDays;const _errs20 = errors;if(errors === _errs20){if(Array.isArray(data8)){var valid4 = true;const len1 = data8.length;for(let i1=0; i1<len1; i1++){const _errs22 = errors;let valid5;valid5 = false;for(const v0 of schema11.properties.nonWorkingDays.items.enum){if(func0(data8[i1], v0)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/nonWorkingDays/" + i1,schemaPath:"#/properties/nonWorkingDays/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.nonWorkingDays.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs22 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/nonWorkingDays",schemaPath:"#/properties/nonWorkingDays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;