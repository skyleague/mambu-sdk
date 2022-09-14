/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Subscription-Event-Stream-Batch","type":"object","description":"One chunk of events in a stream. A batch consists of an array of `event`s plus a `cursor` pointing to the offset of the last `event` in the stream.\n\nThe size of the array of `event` is limited by the parameters used to initialize a Stream.\n\nSequential batches might present repeated cursors if no new events have arrived.","properties":{"cursor":{"title":"cursor","$ref":"#/$defs/SubscriptionCursora147"},"info":{"title":"info","$ref":"#/$defs/StreamInfoa147"},"events":{"type":"array","title":"events","description":"[Payload of an Event. Usually represents a status transition in a Business process.]","items":{"description":"[Payload of an Event. Usually represents a status transition in a Business process.]","$ref":"#/$defs/Eventa147"},"minItems":1,"uniqueItems":true}},"required":["cursor"],"additionalProperties":true,"$defs":{"SubscriptionCursora147":{"title":"SubscriptionCursora147","description":""},"StreamInfoa147":{"title":"StreamInfoa147","description":"This object contains general information about the stream. Used only for debugging purposes. We recommend logging this object in order to solve connection issues. \n\nClients should not parse this structure."},"Eventa147":{"type":"object","title":"Eventa147","description":"Payload of an Event. Usually represents a status transition in a Business process.","properties":{"metadata":{"title":"metadata","$ref":"#/$defs/EventMetadataa147"},"body":{"type":"string","title":"body","description":"Actual content of the notification.","minLength":1},"template_name":{"type":"string","title":"template_name","description":"Name of the notification template.","minLength":1}},"required":["metadata","body","template_name"],"additionalProperties":true},"EventMetadataa147":{"type":"object","title":"EventMetadataa147","description":"Metadata for this Event.","properties":{"eid":{"type":"string","title":"eid","description":"Unique identifier of this Event. Consumers MIGHT use this value to assert uniqueness of reception of the Event.","minLength":1,"format":"uuid"},"event_type":{"type":"string","title":"event_type","description":"The EventType of this Event.","minLength":1},"occurred_at":{"type":"string","title":"occurred_at","description":"Timestamp of creation of the Event generated by Mambu.","minLength":1,"format":"date-time"},"content_type":{"title":"content_type","description":"Notification content format.","enum":["application/xml","application/json","text/plain; charset=UTF-8"]},"category":{"type":"string","title":"category","description":"Indicates if the content of the notification can be configured in Mambu or it is fixed. Currently only one category is supported: `DATA`","minLength":1}},"required":["eid","event_type","occurred_at","content_type","category"],"additionalProperties":true}}};const schema12 = {"title":"SubscriptionCursora147","description":""};const schema13 = {"title":"StreamInfoa147","description":"This object contains general information about the stream. Used only for debugging purposes. We recommend logging this object in order to solve connection issues. \n\nClients should not parse this structure."};const schema14 = {"type":"object","title":"Eventa147","description":"Payload of an Event. Usually represents a status transition in a Business process.","properties":{"metadata":{"title":"metadata","$ref":"#/$defs/EventMetadataa147"},"body":{"type":"string","title":"body","description":"Actual content of the notification.","minLength":1},"template_name":{"type":"string","title":"template_name","description":"Name of the notification template.","minLength":1}},"required":["metadata","body","template_name"],"additionalProperties":true};const schema15 = {"type":"object","title":"EventMetadataa147","description":"Metadata for this Event.","properties":{"eid":{"type":"string","title":"eid","description":"Unique identifier of this Event. Consumers MIGHT use this value to assert uniqueness of reception of the Event.","minLength":1,"format":"uuid"},"event_type":{"type":"string","title":"event_type","description":"The EventType of this Event.","minLength":1},"occurred_at":{"type":"string","title":"occurred_at","description":"Timestamp of creation of the Event generated by Mambu.","minLength":1,"format":"date-time"},"content_type":{"title":"content_type","description":"Notification content format.","enum":["application/xml","application/json","text/plain; charset=UTF-8"]},"category":{"type":"string","title":"category","description":"Indicates if the content of the notification can be configured in Mambu or it is fixed. Currently only one category is supported: `DATA`","minLength":1}},"required":["eid","event_type","occurred_at","content_type","category"],"additionalProperties":true};const func4 = require("ajv/dist/runtime/ucs2length").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.metadata === undefined) && (missing0 = "metadata")) || ((data.body === undefined) && (missing0 = "body"))) || ((data.template_name === undefined) && (missing0 = "template_name"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.metadata !== undefined){let data0 = data.metadata;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing1;let valid2 = true;for( missing1 of schema15.required){valid2 = data0[missing1] !== undefined;if(!valid2){validate11.errors = [{instancePath:instancePath+"/metadata",schemaPath:"#/$defs/EventMetadataa147/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;break;}}if(valid2){if(data0.eid !== undefined){let data1 = data0.eid;const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(typeof data1 === "string"){if(func4(data1) < 1){validate11.errors = [{instancePath:instancePath+"/metadata/eid",schemaPath:"#/$defs/EventMetadataa147/properties/eid/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/metadata/eid",schemaPath:"#/$defs/EventMetadataa147/properties/eid/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs6 === errors;}else {var valid3 = true;}if(valid3){if(data0.event_type !== undefined){let data2 = data0.event_type;const _errs8 = errors;if(errors === _errs8){if(typeof data2 === "string"){if(func4(data2) < 1){validate11.errors = [{instancePath:instancePath+"/metadata/event_type",schemaPath:"#/$defs/EventMetadataa147/properties/event_type/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/metadata/event_type",schemaPath:"#/$defs/EventMetadataa147/properties/event_type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data0.occurred_at !== undefined){let data3 = data0.occurred_at;const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(typeof data3 === "string"){if(func4(data3) < 1){validate11.errors = [{instancePath:instancePath+"/metadata/occurred_at",schemaPath:"#/$defs/EventMetadataa147/properties/occurred_at/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/metadata/occurred_at",schemaPath:"#/$defs/EventMetadataa147/properties/occurred_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data0.content_type !== undefined){let data4 = data0.content_type;const _errs12 = errors;if(!(((data4 === "application/xml") || (data4 === "application/json")) || (data4 === "text/plain; charset=UTF-8"))){validate11.errors = [{instancePath:instancePath+"/metadata/content_type",schemaPath:"#/$defs/EventMetadataa147/properties/content_type/enum",keyword:"enum",params:{allowedValues: schema15.properties.content_type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data0.category !== undefined){let data5 = data0.category;const _errs13 = errors;if(errors === _errs13){if(typeof data5 === "string"){if(func4(data5) < 1){validate11.errors = [{instancePath:instancePath+"/metadata/category",schemaPath:"#/$defs/EventMetadataa147/properties/category/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/metadata/category",schemaPath:"#/$defs/EventMetadataa147/properties/category/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid3 = _errs13 === errors;}else {var valid3 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/metadata",schemaPath:"#/$defs/EventMetadataa147/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.body !== undefined){let data6 = data.body;const _errs15 = errors;if(errors === _errs15){if(typeof data6 === "string"){if(func4(data6) < 1){validate11.errors = [{instancePath:instancePath+"/body",schemaPath:"#/properties/body/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/body",schemaPath:"#/properties/body/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.template_name !== undefined){let data7 = data.template_name;const _errs17 = errors;if(errors === _errs17){if(typeof data7 === "string"){if(func4(data7) < 1){validate11.errors = [{instancePath:instancePath+"/template_name",schemaPath:"#/properties/template_name/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/template_name",schemaPath:"#/properties/template_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs17 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.cursor === undefined) && (missing0 = "cursor")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.cursor !== undefined){const _errs2 = errors;var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.info !== undefined){const _errs3 = errors;var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.events !== undefined){let data2 = data.events;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data2)){if(data2.length < 1){validate10.errors = [{instancePath:instancePath+"/events",schemaPath:"#/properties/events/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items"}];return false;}else {var valid3 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){const _errs6 = errors;if(!(validate11(data2[i0], {instancePath:instancePath+"/events/" + i0,parentData:data2,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid3 = _errs6 === errors;if(!valid3){break;}}if(valid3){let i1 = data2.length;let j0;if(i1 > 1){outer0:for(;i1--;){for(j0 = i1; j0--;){if(func0(data2[i1], data2[j0])){validate10.errors = [{instancePath:instancePath+"/events",schemaPath:"#/properties/events/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"}];return false;break outer0;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/events",schemaPath:"#/properties/events/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;