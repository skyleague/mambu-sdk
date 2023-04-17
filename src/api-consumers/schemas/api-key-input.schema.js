/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"ApiKeyInput","type":"object","description":"Representation of an API Consumer's API Key expiration time.","properties":{"expirationTime":{"type":"integer","title":"expirationTime","description":"The time to live of the key in seconds","maximum":1e8,"minimum":0}},"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.expirationTime!==void 0){let data0=data.expirationTime;const _errs2=errors;if(!(typeof data0=="number"&&(!(data0%1)&&!isNaN(data0))&&isFinite(data0))){validate10.errors=[{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}if(errors===_errs2){if(typeof data0=="number"&&isFinite(data0)){if(data0>1e8||isNaN(data0)){validate10.errors=[{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/maximum",keyword:"maximum",params:{comparison:"<=",limit:1e8},message:"must be <= 100000000"}];return false}else{if(data0<0||isNaN(data0)){validate10.errors=[{instancePath:instancePath+"/expirationTime",schemaPath:"#/properties/expirationTime/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}];return false}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};