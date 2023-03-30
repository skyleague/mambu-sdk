/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"MambuFunctionCreate","type":"object","description":"Mambu Function create data.","properties":{"name":{"type":"string","title":"name","description":"Mambu function name"},"extensionPointId":{"type":"string","title":"extensionPointId","description":"The id of the extension point"},"functionCode":{"title":"functionCode","$ref":"#/$defs/MambuFunctionCodeaf30"},"version":{"type":"string","title":"version","description":"Mambu function version"}},"additionalProperties":true,"$defs":{"MambuFunctionCodeaf30":{"type":"object","title":"MambuFunctionCodeaf30","description":"Represents a Mambu function code","properties":{"languageId":{"title":"languageId","description":"Mambu function programming language","const":"es2020"},"code":{"type":"string","title":"code","description":"Mambu function code (as Base64)"}},"additionalProperties":true}}};const schema12={"type":"object","title":"MambuFunctionCodeaf30","description":"Represents a Mambu function code","properties":{"languageId":{"title":"languageId","description":"Mambu function programming language","const":"es2020"},"code":{"type":"string","title":"code","description":"Mambu function code (as Base64)"}},"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.name!==void 0){const _errs2=errors;if(typeof data.name!=="string"){validate10.errors=[{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.extensionPointId!==void 0){const _errs4=errors;if(typeof data.extensionPointId!=="string"){validate10.errors=[{instancePath:instancePath+"/extensionPointId",schemaPath:"#/properties/extensionPointId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.functionCode!==void 0){let data2=data.functionCode;const _errs6=errors;const _errs7=errors;if(errors===_errs7){if(data2&&typeof data2=="object"&&!Array.isArray(data2)){if(data2.languageId!==void 0){const _errs10=errors;if("es2020"!==data2.languageId){validate10.errors=[{instancePath:instancePath+"/functionCode/languageId",schemaPath:"#/$defs/MambuFunctionCodeaf30/properties/languageId/const",keyword:"const",params:{allowedValue:"es2020"},message:"must be equal to constant"}];return false}var valid2=_errs10===errors}else{var valid2=true}if(valid2){if(data2.code!==void 0){const _errs11=errors;if(typeof data2.code!=="string"){validate10.errors=[{instancePath:instancePath+"/functionCode/code",schemaPath:"#/$defs/MambuFunctionCodeaf30/properties/code/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs11===errors}else{var valid2=true}}}else{validate10.errors=[{instancePath:instancePath+"/functionCode",schemaPath:"#/$defs/MambuFunctionCodeaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.version!==void 0){const _errs13=errors;if(typeof data.version!=="string"){validate10.errors=[{instancePath:instancePath+"/version",schemaPath:"#/properties/version/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs13===errors}else{var valid0=true}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
