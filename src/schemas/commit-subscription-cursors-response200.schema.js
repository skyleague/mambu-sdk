/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import{createRequire}from"module";const require2=createRequire(import.meta.url);"use strict";const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"commitSubscriptionCursorsResponse200","type":"object","description":"","properties":{"items":{"type":"array","title":"items","items":{"$ref":"#/$defs/CursorCommitResultab92"},"minItems":1,"uniqueItems":true}},"required":["items"],"additionalProperties":true,"$defs":{"CursorCommitResultab92":{"type":"object","title":"CursorCommitResultab92","description":"The result of single cursor commit. Holds a cursor itself and a result value.","properties":{"cursor":{"title":"cursor","$ref":"#/$defs/SubscriptionCursorab92"},"result":{"type":"string","title":"result","description":"The result of cursor commit. - `committed`: cursor was successfully committed - `outdated`: there already was more recent (or the same) cursor committed, so the current one was not committed as it is outdated","minLength":1}},"required":["cursor","result"],"additionalProperties":true},"SubscriptionCursorab92":{"type":"object","title":"SubscriptionCursorab92","description":"","properties":{"partition":{"type":"string","title":"partition","description":"Id of the partition pointed to by this cursor.","minLength":1},"offset":{"type":"string","title":"offset","description":"Offset of the event being pointed to. Note that if you want to specify beginning position of a stream with first event at offset `N`, you should specify offset `N-1`. This applies in cases when you create new subscription or reset subscription offsets. Also for stream start offsets one can use two special values: - `begin` - read from the oldest available event. - `end` - read from the most recent offset.","minLength":1},"event_type":{"type":"string","title":"event_type","description":"The name of the event type this partition's events belong to.","minLength":1},"cursor_token":{"type":"string","title":"cursor_token","description":"An opaque value defined by the server.","minLength":1}},"required":["partition","offset","event_type","cursor_token"],"additionalProperties":true}}};const schema12={"type":"object","title":"CursorCommitResultab92","description":"The result of single cursor commit. Holds a cursor itself and a result value.","properties":{"cursor":{"title":"cursor","$ref":"#/$defs/SubscriptionCursorab92"},"result":{"type":"string","title":"result","description":"The result of cursor commit. - `committed`: cursor was successfully committed - `outdated`: there already was more recent (or the same) cursor committed, so the current one was not committed as it is outdated","minLength":1}},"required":["cursor","result"],"additionalProperties":true};const schema13={"type":"object","title":"SubscriptionCursorab92","description":"","properties":{"partition":{"type":"string","title":"partition","description":"Id of the partition pointed to by this cursor.","minLength":1},"offset":{"type":"string","title":"offset","description":"Offset of the event being pointed to. Note that if you want to specify beginning position of a stream with first event at offset `N`, you should specify offset `N-1`. This applies in cases when you create new subscription or reset subscription offsets. Also for stream start offsets one can use two special values: - `begin` - read from the oldest available event. - `end` - read from the most recent offset.","minLength":1},"event_type":{"type":"string","title":"event_type","description":"The name of the event type this partition's events belong to.","minLength":1},"cursor_token":{"type":"string","title":"cursor_token","description":"An opaque value defined by the server.","minLength":1}},"required":["partition","offset","event_type","cursor_token"],"additionalProperties":true};const func4=require2("ajv/dist/runtime/ucs2length").default;function validate11(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.cursor===void 0&&(missing0="cursor")||data.result===void 0&&(missing0="result")){validate11.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.cursor!==void 0){let data0=data.cursor;const _errs2=errors;const _errs3=errors;if(errors===_errs3){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){let missing1;if(data0.partition===void 0&&(missing1="partition")||data0.offset===void 0&&(missing1="offset")||data0.event_type===void 0&&(missing1="event_type")||data0.cursor_token===void 0&&(missing1="cursor_token")){validate11.errors=[{instancePath:instancePath+"/cursor",schemaPath:"#/$defs/SubscriptionCursorab92/required",keyword:"required",params:{missingProperty:missing1},message:"must have required property '"+missing1+"'"}];return false}else{if(data0.partition!==void 0){let data1=data0.partition;const _errs6=errors;if(errors===_errs6){if(typeof data1==="string"){if(func4(data1)<1){validate11.errors=[{instancePath:instancePath+"/cursor/partition",schemaPath:"#/$defs/SubscriptionCursorab92/properties/partition/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate11.errors=[{instancePath:instancePath+"/cursor/partition",schemaPath:"#/$defs/SubscriptionCursorab92/properties/partition/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.offset!==void 0){let data2=data0.offset;const _errs8=errors;if(errors===_errs8){if(typeof data2==="string"){if(func4(data2)<1){validate11.errors=[{instancePath:instancePath+"/cursor/offset",schemaPath:"#/$defs/SubscriptionCursorab92/properties/offset/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate11.errors=[{instancePath:instancePath+"/cursor/offset",schemaPath:"#/$defs/SubscriptionCursorab92/properties/offset/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data0.event_type!==void 0){let data3=data0.event_type;const _errs10=errors;if(errors===_errs10){if(typeof data3==="string"){if(func4(data3)<1){validate11.errors=[{instancePath:instancePath+"/cursor/event_type",schemaPath:"#/$defs/SubscriptionCursorab92/properties/event_type/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate11.errors=[{instancePath:instancePath+"/cursor/event_type",schemaPath:"#/$defs/SubscriptionCursorab92/properties/event_type/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid2=_errs10===errors}else{var valid2=true}if(valid2){if(data0.cursor_token!==void 0){let data4=data0.cursor_token;const _errs12=errors;if(errors===_errs12){if(typeof data4==="string"){if(func4(data4)<1){validate11.errors=[{instancePath:instancePath+"/cursor/cursor_token",schemaPath:"#/$defs/SubscriptionCursorab92/properties/cursor_token/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate11.errors=[{instancePath:instancePath+"/cursor/cursor_token",schemaPath:"#/$defs/SubscriptionCursorab92/properties/cursor_token/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid2=_errs12===errors}else{var valid2=true}}}}}}else{validate11.errors=[{instancePath:instancePath+"/cursor",schemaPath:"#/$defs/SubscriptionCursorab92/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.result!==void 0){let data5=data.result;const _errs14=errors;if(errors===_errs14){if(typeof data5==="string"){if(func4(data5)<1){validate11.errors=[{instancePath:instancePath+"/result",schemaPath:"#/properties/result/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}];return false}}else{validate11.errors=[{instancePath:instancePath+"/result",schemaPath:"#/properties/result/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}var valid0=_errs14===errors}else{var valid0=true}}}}else{validate11.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate11.errors=vErrors;return errors===0}const func0=require2("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.items===void 0&&(missing0="items")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.items!==void 0){let data0=data.items;const _errs2=errors;if(errors===_errs2){if(Array.isArray(data0)){if(data0.length<1){validate10.errors=[{instancePath:instancePath+"/items",schemaPath:"#/properties/items/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}];return false}else{var valid1=true;const len0=data0.length;for(let i0=0;i0<len0;i0++){const _errs4=errors;if(!validate11(data0[i0],{instancePath:instancePath+"/items/"+i0,parentData:data0,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate11.errors:vErrors.concat(validate11.errors);errors=vErrors.length}var valid1=_errs4===errors;if(!valid1){break}}if(valid1){let i1=data0.length;let j0;if(i1>1){outer0:for(;i1--;){for(j0=i1;j0--;){if(func0(data0[i1],data0[j0])){validate10.errors=[{instancePath:instancePath+"/items",schemaPath:"#/properties/items/uniqueItems",keyword:"uniqueItems",params:{i:i1,j:j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"}];return false;break outer0}}}}}}}else{validate10.errors=[{instancePath:instancePath+"/items",schemaPath:"#/properties/items/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
