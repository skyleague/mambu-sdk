/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"CreditArrangementAction","type":"object","description":"The state change to perform on the credit arrangement.","properties":{"action":{"title":"action","description":"The action type to be applied.","enum":["APPROVE","UNDO_APPROVE","REJECT","UNDO_REJECT","WITHDRAW","UNDO_WITHDRAW","CLOSE","UNDO_CLOSE"]},"notes":{"type":"string","title":"notes","description":"The notes related to the action performed."}},"required":["action"],"additionalProperties":true};const func0=require("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.action===void 0&&(missing0="action")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.action!==void 0){const _errs2=errors;let valid1;valid1=false;for(const v0 of schema11.properties.action.enum){if(func0(data.action,v0)){valid1=true;break}}if(!valid1){validate10.errors=[{instancePath:instancePath+"/action",schemaPath:"#/properties/action/enum",keyword:"enum",params:{allowedValues:schema11.properties.action.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.notes!==void 0){const _errs3=errors;if(typeof data.notes!=="string"){validate10.errors=[{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs3===errors}else{var valid0=true}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
