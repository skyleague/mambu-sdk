/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"TriggerDatabaseBackupResponse","description":"Represents a response for triggering a database backup","properties":{"state":{"title":"state","description":"The state of the database backup process","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(key0 === "state")){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.state !== undefined){let data0 = data.state;if(!((((((((((data0 === "QUEUED") || (data0 === "IN_PROGRESS")) || (data0 === "COMPLETE")) || (data0 === "NOT_FOUND")) || (data0 === "CANCEL")) || (data0 === "TO_BE_CANCELED")) || (data0 === "TIMED_OUT")) || (data0 === "ERROR")) || (data0 === "TRANSIENT_ERROR")) || (data0 === "OVERRIDDEN"))){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}