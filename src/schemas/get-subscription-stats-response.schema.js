/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getSubscriptionStatsResponse","type":"object","properties":{"items":{"type":"array","title":"items","description":"Statistics list for specified subscription.","items":{"$ref":"#/$defs/SubscriptionEventTypeStatsab92"}}},"required":["items"],"additionalProperties":true,"$defs":{"SubscriptionEventTypeStatsab92":{"type":"object","title":"SubscriptionEventTypeStatsab92","description":"Statistics of one event-type within a context of subscription.","properties":{"event_type":{"type":"string","title":"event_type","description":"The name of the event type this partition's events belong to."},"partitions":{"type":"array","title":"partitions","description":"Statistics of partitions of this event-type.","items":{"$ref":"#/$defs/PartitionStatsab92"}}},"required":["event_type","partitions"],"additionalProperties":true},"PartitionStatsab92":{"type":"object","title":"PartitionStatsab92","description":"Statistics of partition within a subscription context.","properties":{"partition":{"type":"string","title":"partition","description":"The partition id.","minLength":1},"state":{"title":"state","description":"The state of this partition in current subscription. Currently following values are possible:\n\n`unassigned` - the partition is currently not assigned to any client.\n`reassigning` - the partition is currently reassigning from one client to another.\n`assigned` - the partition is assigned to a client.","enum":["assigned","unassigned","reassigning"]},"unconsumed_events":{"type":"integer","title":"unconsumed_events","description":"The amount of events in this partition that are not yet consumed within this subscription. The property may be absent at the moment when no events were yet consumed from the partition in this subscription (In case of read_from is `BEGIN` or `END`). If the event type uses ‘compact’ cleanup policy - then the actual number of unconsumed events can be lower than the one reported in this field."},"consumer_lag_seconds":{"type":"integer","title":"consumer_lag_seconds","description":"Subscription consumer lag for this partition in seconds. Measured as the age of the oldest event of this partition that is not yet consumed within this subscription."},"stream_id":{"type":"string","title":"stream_id","description":"The id of the stream that consumes data from this partition."}},"required":["partition","state","unconsumed_events","stream_id"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"SubscriptionEventTypeStatsab92","description":"Statistics of one event-type within a context of subscription.","properties":{"event_type":{"type":"string","title":"event_type","description":"The name of the event type this partition's events belong to."},"partitions":{"type":"array","title":"partitions","description":"Statistics of partitions of this event-type.","items":{"$ref":"#/$defs/PartitionStatsab92"}}},"required":["event_type","partitions"],"additionalProperties":true};const schema13 = {"type":"object","title":"PartitionStatsab92","description":"Statistics of partition within a subscription context.","properties":{"partition":{"type":"string","title":"partition","description":"The partition id.","minLength":1},"state":{"title":"state","description":"The state of this partition in current subscription. Currently following values are possible:\n\n`unassigned` - the partition is currently not assigned to any client.\n`reassigning` - the partition is currently reassigning from one client to another.\n`assigned` - the partition is assigned to a client.","enum":["assigned","unassigned","reassigning"]},"unconsumed_events":{"type":"integer","title":"unconsumed_events","description":"The amount of events in this partition that are not yet consumed within this subscription. The property may be absent at the moment when no events were yet consumed from the partition in this subscription (In case of read_from is `BEGIN` or `END`). If the event type uses ‘compact’ cleanup policy - then the actual number of unconsumed events can be lower than the one reported in this field."},"consumer_lag_seconds":{"type":"integer","title":"consumer_lag_seconds","description":"Subscription consumer lag for this partition in seconds. Measured as the age of the oldest event of this partition that is not yet consumed within this subscription."},"stream_id":{"type":"string","title":"stream_id","description":"The id of the stream that consumes data from this partition."}},"required":["partition","state","unconsumed_events","stream_id"],"additionalProperties":true};const func4 = require("ajv/dist/runtime/ucs2length").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.event_type === undefined) && (missing0 = "event_type")) || ((data.partitions === undefined) && (missing0 = "partitions"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.event_type !== undefined){const _errs2 = errors;if(typeof data.event_type !== "string"){validate11.errors = [{instancePath:instancePath+"/event_type",schemaPath:"#/properties/event_type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.partitions !== undefined){let data1 = data.partitions;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){let missing1;if(((((data2.partition === undefined) && (missing1 = "partition")) || ((data2.state === undefined) && (missing1 = "state"))) || ((data2.unconsumed_events === undefined) && (missing1 = "unconsumed_events"))) || ((data2.stream_id === undefined) && (missing1 = "stream_id"))){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0,schemaPath:"#/$defs/PartitionStatsab92/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data2.partition !== undefined){let data3 = data2.partition;const _errs10 = errors;if(errors === _errs10){if(typeof data3 === "string"){if(func4(data3) < 1){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/partition",schemaPath:"#/$defs/PartitionStatsab92/properties/partition/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/partition",schemaPath:"#/$defs/PartitionStatsab92/properties/partition/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data2.state !== undefined){let data4 = data2.state;const _errs12 = errors;if(!(((data4 === "assigned") || (data4 === "unassigned")) || (data4 === "reassigning"))){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/state",schemaPath:"#/$defs/PartitionStatsab92/properties/state/enum",keyword:"enum",params:{allowedValues: schema13.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data2.unconsumed_events !== undefined){let data5 = data2.unconsumed_events;const _errs13 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/unconsumed_events",schemaPath:"#/$defs/PartitionStatsab92/properties/unconsumed_events/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs13 === errors;}else {var valid3 = true;}if(valid3){if(data2.consumer_lag_seconds !== undefined){let data6 = data2.consumer_lag_seconds;const _errs15 = errors;if(!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/consumer_lag_seconds",schemaPath:"#/$defs/PartitionStatsab92/properties/consumer_lag_seconds/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs15 === errors;}else {var valid3 = true;}if(valid3){if(data2.stream_id !== undefined){const _errs17 = errors;if(typeof data2.stream_id !== "string"){validate11.errors = [{instancePath:instancePath+"/partitions/" + i0+"/stream_id",schemaPath:"#/$defs/PartitionStatsab92/properties/stream_id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs17 === errors;}else {var valid3 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/partitions/" + i0,schemaPath:"#/$defs/PartitionStatsab92/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/partitions",schemaPath:"#/properties/partitions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.items === undefined) && (missing0 = "items")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.items !== undefined){let data0 = data.items;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;if(!(validate11(data0[i0], {instancePath:instancePath+"/items/" + i0,parentData:data0,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/items",schemaPath:"#/properties/items/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;