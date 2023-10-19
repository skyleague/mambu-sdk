/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"Problem","type":"object","description":"","properties":{"type":{"type":"string","title":"type","description":"An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable API documentation for the problem type (e.g., using HTML).","minLength":1,"format":"uri"},"title":{"type":"string","title":"title","description":"A short, summary of the problem type. Written in English and readable for engineers (usually not suited for non technical stakeholders and not localized).","minLength":1},"status":{"type":"integer","title":"status","description":"The HTTP status code generated by the origin server for this occurrence of the problem."},"detail":{"type":"string","title":"detail","description":"A human readable explanation specific to this occurrence of the problem.","minLength":1},"instance":{"type":"string","title":"instance","description":"An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.","minLength":1,"format":"uri"}},"required":["type","title","status"],"additionalProperties":true};const func4=require("ajv/dist/runtime/ucs2length").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.type===void 0&&(missing0="type")||data.title===void 0&&(missing0="title")||data.status===void 0&&(missing0="status")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.type!==void 0){let data0=data.type;const _errs2=errors;if(errors===_errs2){if(errors===_errs2){if(typeof data0==="string"){if(func4(data0)<1){validate10.errors=[{instancePath:instancePath+"/type",schemaPath:"#/properties/type/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate10.errors=[{instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.title!==void 0){let data1=data.title;const _errs4=errors;if(errors===_errs4){if(typeof data1==="string"){if(func4(data1)<1){validate10.errors=[{instancePath:instancePath+"/title",schemaPath:"#/properties/title/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate10.errors=[{instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.status!==void 0){let data2=data.status;const _errs6=errors;if(!(typeof data2=="number"&&(!(data2%1)&&!isNaN(data2))&&isFinite(data2))){validate10.errors=[{instancePath:instancePath+"/status",schemaPath:"#/properties/status/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.detail!==void 0){let data3=data.detail;const _errs8=errors;if(errors===_errs8){if(typeof data3==="string"){if(func4(data3)<1){validate10.errors=[{instancePath:instancePath+"/detail",schemaPath:"#/properties/detail/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate10.errors=[{instancePath:instancePath+"/detail",schemaPath:"#/properties/detail/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.instance!==void 0){let data4=data.instance;const _errs10=errors;if(errors===_errs10){if(errors===_errs10){if(typeof data4==="string"){if(func4(data4)<1){validate10.errors=[{instancePath:instancePath+"/instance",schemaPath:"#/properties/instance/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate10.errors=[{instancePath:instancePath+"/instance",schemaPath:"#/properties/instance/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs10===errors}else{var valid0=true}}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
