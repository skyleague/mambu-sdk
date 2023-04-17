/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"DepositProductActionResponse","type":"object","description":"Represents a response for executing batch update action for a deposit product","properties":{"state":{"title":"state","description":"The state of the deposit product action","const":"QUEUED"}},"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.state!==void 0){if("QUEUED"!==data.state){validate10.errors=[{instancePath:instancePath+"/state",schemaPath:"#/properties/state/const",keyword:"const",params:{allowedValue:"QUEUED"},message:"must be equal to constant"}];return false}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};