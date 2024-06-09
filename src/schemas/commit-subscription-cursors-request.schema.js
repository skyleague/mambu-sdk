/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeUcs2LengthDefault } from 'ajv/dist/runtime/ucs2length.js';
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CommitSubscriptionCursorsRequest","type":"object","description":"","properties":{"items":{"type":"array","description":"List of cursors that the consumer acknowledges to have successfully processed.","items":{"type":"object","description":"","properties":{"cursor_token":{"type":"string","description":"An opaque value defined by the server.","minLength":1},"event_type":{"type":"string","description":"The name of the event type this partition's events belong to.","minLength":1},"offset":{"type":"string","description":"Offset of the event being pointed to. Note that if you want to specify beginning position of a stream with first event at offset `N`, you should specify offset `N-1`.\n\nThis applies in cases when you create new subscription or reset subscription offsets.\n\nAlso for stream start offsets one can use two special values:\n\n- `begin` - read from the oldest available event.\n\n- `end` - read from the most recent offset.","minLength":1},"partition":{"type":"string","description":"Id of the partition pointed to by this cursor.","minLength":1}},"required":["cursor_token","event_type","offset","partition"],"additionalProperties":true},"minItems":1,"uniqueItems":true}},"required":["items"],"additionalProperties":true};const func4 = (ajvDistRuntimeUcs2LengthDefault.default ?? ajvDistRuntimeUcs2LengthDefault);const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.items === undefined) && (missing0 = "items")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.items !== undefined){let data0 = data.items;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){if(data0.length < 1){validate10.errors = [{instancePath:instancePath+"/items",schemaPath:"#/properties/items/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items"}];return false;}else {var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;if(errors === _errs4){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){let missing1;if(((((data1.cursor_token === undefined) && (missing1 = "cursor_token")) || ((data1.event_type === undefined) && (missing1 = "event_type"))) || ((data1.offset === undefined) && (missing1 = "offset"))) || ((data1.partition === undefined) && (missing1 = "partition"))){validate10.errors = [{instancePath:instancePath+"/items/" + i0,schemaPath:"#/properties/items/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data1.cursor_token !== undefined){let data2 = data1.cursor_token;const _errs7 = errors;if(errors === _errs7){if(typeof data2 === "string"){if(func4(data2) < 1){validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/cursor_token",schemaPath:"#/properties/items/items/properties/cursor_token/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/cursor_token",schemaPath:"#/properties/items/items/properties/cursor_token/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data1.event_type !== undefined){let data3 = data1.event_type;const _errs9 = errors;if(errors === _errs9){if(typeof data3 === "string"){if(func4(data3) < 1){validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/event_type",schemaPath:"#/properties/items/items/properties/event_type/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/event_type",schemaPath:"#/properties/items/items/properties/event_type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data1.offset !== undefined){let data4 = data1.offset;const _errs11 = errors;if(errors === _errs11){if(typeof data4 === "string"){if(func4(data4) < 1){validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/offset",schemaPath:"#/properties/items/items/properties/offset/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/offset",schemaPath:"#/properties/items/items/properties/offset/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data1.partition !== undefined){let data5 = data1.partition;const _errs13 = errors;if(errors === _errs13){if(typeof data5 === "string"){if(func4(data5) < 1){validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/partition",schemaPath:"#/properties/items/items/properties/partition/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/items/" + i0+"/partition",schemaPath:"#/properties/items/items/properties/partition/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid2 = _errs13 === errors;}else {var valid2 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/items/" + i0,schemaPath:"#/properties/items/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}if(valid1){let i1 = data0.length;let j0;if(i1 > 1){outer0:for(;i1--;){for(j0 = i1; j0--;){if(func0(data0[i1], data0[j0])){validate10.errors = [{instancePath:instancePath+"/items",schemaPath:"#/properties/items/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"}];return false;break outer0;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/items",schemaPath:"#/properties/items/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;