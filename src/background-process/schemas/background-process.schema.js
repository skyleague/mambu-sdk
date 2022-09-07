/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"BackgroundProcess","description":"Represents details of the Background Process","properties":{"endDate":{"type":"string","title":"endDate","description":"When this process was ended. Stored as Organization Time","format":"date-time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"state":{"title":"state","description":"The current status of this process","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]},"type":{"title":"type","description":"The type of the background process","enum":["CRON_JOBS","MANUAL_CRON_JOBS_TRIGGER"]},"creationDate":{"type":"string","title":"creationDate","description":"When this process was created. Stored as Organization Time","format":"date-time"},"startDate":{"type":"string","title":"startDate","description":"When this process was started. Stored as Organization Time","format":"date-time"}},"additionalProperties":false};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((((((key0 === "endDate") || (key0 === "encodedKey")) || (key0 === "state")) || (key0 === "type")) || (key0 === "creationDate")) || (key0 === "startDate"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.endDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/endDate",schemaPath:"#/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs6 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.state.enum){if(func0(data.state, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data3 = data.type;const _errs7 = errors;if(!((data3 === "CRON_JOBS") || (data3 === "MANUAL_CRON_JOBS_TRIGGER"))){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;