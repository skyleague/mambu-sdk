/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"DepositProductAction","type":"object","description":"Specify the batch update action details for a deposit product.","properties":{"action":{"title":"action","description":"The action type to be applied. When UPDATE_INTEREST_SETTINGS action type is used, all the existing deposit accounts will be updated with the latest interest-related fields at the end of day job execution","const":"UPDATE_INTEREST_SETTINGS"}},"required":["action"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.action===void 0&&(missing0="action")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.action!==void 0){if("UPDATE_INTEREST_SETTINGS"!==data.action){validate10.errors=[{instancePath:instancePath+"/action",schemaPath:"#/properties/action/const",keyword:"const",params:{allowedValue:"UPDATE_INTEREST_SETTINGS"},message:"must be equal to constant"}];return false}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
