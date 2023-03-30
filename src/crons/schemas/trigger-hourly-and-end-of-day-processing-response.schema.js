/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import{createRequire}from"module";const require2=createRequire(import.meta.url);"use strict";const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"TriggerHourlyAndEndOfDayProcessingResponse","type":"object","description":"Represents the response for triggering hourly and end of day processing","properties":{"state":{"title":"state","description":"The state of the hourly end of day processing","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]}},"additionalProperties":true};const func0=require2("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.state!==void 0){let valid1;valid1=false;for(const v0 of schema11.properties.state.enum){if(func0(data.state,v0)){valid1=true;break}}if(!valid1){validate10.errors=[{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues:schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
