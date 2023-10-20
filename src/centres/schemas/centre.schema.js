/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"Centre","type":"object","description":"Represents a centre. A centre is a common meeting area that credit officers and the individual and group clients go to. Each centre is assigned to a branch (a branch can have multiple centres) and might have a specific meeting day and location.","properties":{"addresses":{"type":"array","title":"addresses","description":"The addresses of this centre.","items":{"$ref":"#/$defs/Addressaf30"}},"notes":{"type":"string","title":"notes","description":"The notes or description attached to this object."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last time the centre was modified.","format":"date-time"},"name":{"type":"string","title":"name","description":"The name of the centre."},"meetingDay":{"type":"string","title":"meetingDay","description":"The day of the week when repayments are collected. This influences the repayments schedule, upon update all repayments are updated to this day of the week."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"The ID of the centre, which must be unique, and can be generated and customized."},"state":{"title":"state","description":"The state of the centre.","enum":["ACTIVE","INACTIVE"]},"creationDate":{"type":"string","title":"creationDate","description":"The date the centre was created.","format":"date-time"},"assignedBranchKey":{"type":"string","title":"assignedBranchKey","description":"The encoded key of the branch this centre is assigned to."}},"additionalProperties":true,"$defs":{"Addressaf30":{"type":"object","title":"Addressaf30","description":"Represents an address.","properties":{"country":{"type":"string","title":"country","description":"The country."},"parentKey":{"type":"string","title":"parentKey","description":"The address parent key indicating the object owning this address. For example: client, centre, or branch."},"city":{"type":"string","title":"city","description":"The city for the address."},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90."},"postcode":{"type":"string","title":"postcode","description":"The post code."},"indexInList":{"type":"integer","title":"indexInList","description":"The index of this address in the list of addresses."},"encodedKey":{"type":"string","title":"encodedKey","description":"The address encoded key, which is unique and generated."},"region":{"type":"string","title":"region","description":"The region for the address."},"line2":{"type":"string","title":"line2","description":"The second line of the address."},"line1":{"type":"string","title":"line1","description":"The first line of the address."},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"Addressaf30","description":"Represents an address.","properties":{"country":{"type":"string","title":"country","description":"The country."},"parentKey":{"type":"string","title":"parentKey","description":"The address parent key indicating the object owning this address. For example: client, centre, or branch."},"city":{"type":"string","title":"city","description":"The city for the address."},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90."},"postcode":{"type":"string","title":"postcode","description":"The post code."},"indexInList":{"type":"integer","title":"indexInList","description":"The index of this address in the list of addresses."},"encodedKey":{"type":"string","title":"encodedKey","description":"The address encoded key, which is unique and generated."},"region":{"type":"string","title":"region","description":"The region for the address."},"line2":{"type":"string","title":"line2","description":"The second line of the address."},"line1":{"type":"string","title":"line1","description":"The first line of the address."},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.addresses !== undefined){let data0 = data.addresses;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.country !== undefined){const _errs8 = errors;if(typeof data1.country !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/country",schemaPath:"#/$defs/Addressaf30/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.parentKey !== undefined){const _errs10 = errors;if(typeof data1.parentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/parentKey",schemaPath:"#/$defs/Addressaf30/properties/parentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.city !== undefined){const _errs12 = errors;if(typeof data1.city !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/city",schemaPath:"#/$defs/Addressaf30/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data1.latitude !== undefined){let data5 = data1.latitude;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/latitude",schemaPath:"#/$defs/Addressaf30/properties/latitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data1.postcode !== undefined){const _errs16 = errors;if(typeof data1.postcode !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/postcode",schemaPath:"#/$defs/Addressaf30/properties/postcode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data1.indexInList !== undefined){let data7 = data1.indexInList;const _errs18 = errors;if(!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/indexInList",schemaPath:"#/$defs/Addressaf30/properties/indexInList/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs18 === errors;}else {var valid3 = true;}if(valid3){if(data1.encodedKey !== undefined){const _errs20 = errors;if(typeof data1.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/encodedKey",schemaPath:"#/$defs/Addressaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs20 === errors;}else {var valid3 = true;}if(valid3){if(data1.region !== undefined){const _errs22 = errors;if(typeof data1.region !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/region",schemaPath:"#/$defs/Addressaf30/properties/region/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs22 === errors;}else {var valid3 = true;}if(valid3){if(data1.line2 !== undefined){const _errs24 = errors;if(typeof data1.line2 !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/line2",schemaPath:"#/$defs/Addressaf30/properties/line2/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs24 === errors;}else {var valid3 = true;}if(valid3){if(data1.line1 !== undefined){const _errs26 = errors;if(typeof data1.line1 !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/line1",schemaPath:"#/$defs/Addressaf30/properties/line1/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs26 === errors;}else {var valid3 = true;}if(valid3){if(data1.longitude !== undefined){let data12 = data1.longitude;const _errs28 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i0+"/longitude",schemaPath:"#/$defs/Addressaf30/properties/longitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs28 === errors;}else {var valid3 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/addresses/" + i0,schemaPath:"#/$defs/Addressaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/addresses",schemaPath:"#/properties/addresses/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs30 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs30 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs32 = errors;if(errors === _errs32){if(errors === _errs32){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs34 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs34 === errors;}else {var valid0 = true;}if(valid0){if(data.meetingDay !== undefined){const _errs36 = errors;if(typeof data.meetingDay !== "string"){validate10.errors = [{instancePath:instancePath+"/meetingDay",schemaPath:"#/properties/meetingDay/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs38 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs40 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs40 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){let data19 = data.state;const _errs42 = errors;if(!((data19 === "ACTIVE") || (data19 === "INACTIVE"))){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs42 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs43 = errors;if(errors === _errs43){if(errors === _errs43){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedBranchKey !== undefined){const _errs45 = errors;if(typeof data.assignedBranchKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedBranchKey",schemaPath:"#/properties/assignedBranchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs45 === errors;}else {var valid0 = true;}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;