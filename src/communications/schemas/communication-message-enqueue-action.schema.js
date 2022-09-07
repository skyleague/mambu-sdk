/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"CommunicationMessageEnqueueAction","description":"Allows specifying a time interval from which notifications will be resent","properties":{"templateTypes":{"type":"array","title":"templateTypes","description":"The list of template message types to enqueue","items":{"enum":["EMAIL","SMS","WEB_HOOK","EVENT_STREAM","TASK"]}},"endDate":{"type":"string","title":"endDate","description":"The upper limit until which created messages will be enqueued","format":"date-time"},"startDate":{"type":"string","title":"startDate","description":"The lower limit from which created messages will be enqueued","format":"date-time"}},"required":["endDate","startDate"],"additionalProperties":false};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.endDate === undefined) && (missing0 = "endDate")) || ((data.startDate === undefined) && (missing0 = "startDate"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(((key0 === "templateTypes") || (key0 === "endDate")) || (key0 === "startDate"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.templateTypes !== undefined){let data0 = data.templateTypes;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;let valid2;valid2 = false;for(const v0 of schema11.properties.templateTypes.items.enum){if(func0(data0[i0], v0)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/templateTypes/" + i0,schemaPath:"#/properties/templateTypes/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.templateTypes.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/templateTypes",schemaPath:"#/properties/templateTypes/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.endDate !== undefined){const _errs5 = errors;if(errors === _errs5){if(errors === _errs5){if(!(typeof data.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/endDate",schemaPath:"#/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs7 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;