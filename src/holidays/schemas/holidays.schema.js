/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Holidays","type":"object","description":"Represents the holidays of the organization.","properties":{"holidays":{"type":"array","title":"holidays","description":"The general holidays of the organization.","items":{"description":"The general holidays of the organization.","$ref":"#/$defs/Holidayaf30"}},"nonWorkingDays":{"type":"array","title":"nonWorkingDays","description":"The non working days of the organization.","items":{"enum":["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]}}},"additionalProperties":true,"$defs":{"Holidayaf30":{"type":"object","title":"Holidayaf30","description":"Holiday Date Transfer Object","properties":{"date":{"type":"string","title":"date","description":"holiday date","format":"date"},"isAnnuallyRecurring":{"type":"boolean","title":"isAnnuallyRecurring","description":"if is annually recurring"},"name":{"type":"string","title":"name","description":"holiday name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","title":"id","description":"holiday id"},"creationDate":{"type":"string","title":"creationDate","description":"holiday creation date","format":"date-time"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"Holidayaf30","description":"Holiday Date Transfer Object","properties":{"date":{"type":"string","title":"date","description":"holiday date","format":"date"},"isAnnuallyRecurring":{"type":"boolean","title":"isAnnuallyRecurring","description":"if is annually recurring"},"name":{"type":"string","title":"name","description":"holiday name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","title":"id","description":"holiday id"},"creationDate":{"type":"string","title":"creationDate","description":"holiday creation date","format":"date-time"}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.holidays !== undefined){let data0 = data.holidays;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.date !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data1.date === "string")){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/date",schemaPath:"#/$defs/Holidayaf30/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.isAnnuallyRecurring !== undefined){const _errs10 = errors;if(typeof data1.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/isAnnuallyRecurring",schemaPath:"#/$defs/Holidayaf30/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.name !== undefined){const _errs12 = errors;if(typeof data1.name !== "string"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/name",schemaPath:"#/$defs/Holidayaf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data1.encodedKey !== undefined){const _errs14 = errors;if(typeof data1.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/encodedKey",schemaPath:"#/$defs/Holidayaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data1.id !== undefined){let data6 = data1.id;const _errs16 = errors;if(!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/id",schemaPath:"#/$defs/Holidayaf30/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data1.creationDate !== undefined){const _errs18 = errors;if(errors === _errs18){if(errors === _errs18){if(!(typeof data1.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/holidays/" + i0+"/creationDate",schemaPath:"#/$defs/Holidayaf30/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs18 === errors;}else {var valid3 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/holidays/" + i0,schemaPath:"#/$defs/Holidayaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/holidays",schemaPath:"#/properties/holidays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.nonWorkingDays !== undefined){let data8 = data.nonWorkingDays;const _errs20 = errors;if(errors === _errs20){if(Array.isArray(data8)){var valid4 = true;const len1 = data8.length;for(let i1=0; i1<len1; i1++){const _errs22 = errors;let valid5;valid5 = false;for(const v0 of schema11.properties.nonWorkingDays.items.enum){if(func0(data8[i1], v0)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/nonWorkingDays/" + i1,schemaPath:"#/properties/nonWorkingDays/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.nonWorkingDays.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs22 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/nonWorkingDays",schemaPath:"#/properties/nonWorkingDays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;