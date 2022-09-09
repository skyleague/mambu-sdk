/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllResponse","type":"array","items":{"$ref":"#/$defs/Branch"},"$defs":{"Branch":{"type":"object","title":"Branch","description":"Branch Date Transfer Object","properties":{"emailAddress":{"type":"string","title":"emailAddress","description":"branch email address"},"addresses":{"type":"array","title":"addresses","description":"list of branch addresses","items":{"description":"list of branch addresses","$ref":"#/$defs/Addressaf30"}},"phoneNumber":{"type":"string","title":"phoneNumber","description":"branch phone number, as a string"},"notes":{"type":"string","title":"notes","description":"notes about this branch"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"last date when the branch was modified","format":"date-time"},"name":{"type":"string","title":"name","description":"branch name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"branch ID, unique"},"state":{"title":"state","description":"branch state","enum":["ACTIVE","INACTIVE"]},"creationDate":{"type":"string","title":"creationDate","description":"creation date of the branch","format":"date-time"},"branchHolidays":{"type":"array","title":"branchHolidays","description":"list of branch holidays","items":{"description":"list of branch holidays","$ref":"#/$defs/Holidayaf30"}}},"additionalProperties":false},"Addressaf30":{"type":"object","title":"Addressaf30","description":"Address Data Transfer Object","properties":{"country":{"type":"string","title":"country","description":"The country"},"parentKey":{"type":"string","title":"parentKey","description":"Address parent key, the object owning this address, client, centre, branch"},"city":{"type":"string","title":"city","description":"The city for this address"},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90"},"postcode":{"type":"string","title":"postcode","description":"The post code"},"indexInList":{"type":"integer","title":"indexInList","description":"Index of this address in the list of addresses"},"encodedKey":{"type":"string","title":"encodedKey","description":"Address encoded key, unique, generated"},"region":{"type":"string","title":"region","description":"The region that is part of the address"},"line2":{"type":"string","title":"line2","description":"The second line for the address, in case the first one doesn't fit the information, this is completely optional"},"line1":{"type":"string","title":"line1","description":"The first line of the address"},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180"}},"additionalProperties":false},"Holidayaf30":{"type":"object","title":"Holidayaf30","description":"Holiday Date Transfer Object","properties":{"date":{"type":"string","title":"date","description":"holiday date","format":"date"},"isAnnuallyRecurring":{"type":"boolean","title":"isAnnuallyRecurring","description":"if is annually recurring"},"name":{"type":"string","title":"name","description":"holiday name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","title":"id","description":"holiday id"},"creationDate":{"type":"string","title":"creationDate","description":"holiday creation date","format":"date-time"}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"Branch","description":"Branch Date Transfer Object","properties":{"emailAddress":{"type":"string","title":"emailAddress","description":"branch email address"},"addresses":{"type":"array","title":"addresses","description":"list of branch addresses","items":{"description":"list of branch addresses","$ref":"#/$defs/Addressaf30"}},"phoneNumber":{"type":"string","title":"phoneNumber","description":"branch phone number, as a string"},"notes":{"type":"string","title":"notes","description":"notes about this branch"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"last date when the branch was modified","format":"date-time"},"name":{"type":"string","title":"name","description":"branch name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"branch ID, unique"},"state":{"title":"state","description":"branch state","enum":["ACTIVE","INACTIVE"]},"creationDate":{"type":"string","title":"creationDate","description":"creation date of the branch","format":"date-time"},"branchHolidays":{"type":"array","title":"branchHolidays","description":"list of branch holidays","items":{"description":"list of branch holidays","$ref":"#/$defs/Holidayaf30"}}},"additionalProperties":false};const schema13 = {"type":"object","title":"Addressaf30","description":"Address Data Transfer Object","properties":{"country":{"type":"string","title":"country","description":"The country"},"parentKey":{"type":"string","title":"parentKey","description":"Address parent key, the object owning this address, client, centre, branch"},"city":{"type":"string","title":"city","description":"The city for this address"},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90"},"postcode":{"type":"string","title":"postcode","description":"The post code"},"indexInList":{"type":"integer","title":"indexInList","description":"Index of this address in the list of addresses"},"encodedKey":{"type":"string","title":"encodedKey","description":"Address encoded key, unique, generated"},"region":{"type":"string","title":"region","description":"The region that is part of the address"},"line2":{"type":"string","title":"line2","description":"The second line for the address, in case the first one doesn't fit the information, this is completely optional"},"line1":{"type":"string","title":"line1","description":"The first line of the address"},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180"}},"additionalProperties":false};const schema14 = {"type":"object","title":"Holidayaf30","description":"Holiday Date Transfer Object","properties":{"date":{"type":"string","title":"date","description":"holiday date","format":"date"},"isAnnuallyRecurring":{"type":"boolean","title":"isAnnuallyRecurring","description":"if is annually recurring"},"name":{"type":"string","title":"name","description":"holiday name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","title":"id","description":"holiday id"},"creationDate":{"type":"string","title":"creationDate","description":"holiday creation date","format":"date-time"}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema12.properties, key0))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.emailAddress !== undefined){const _errs2 = errors;if(typeof data.emailAddress !== "string"){validate11.errors = [{instancePath:instancePath+"/emailAddress",schemaPath:"#/properties/emailAddress/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.addresses !== undefined){let data1 = data.addresses;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){const _errs9 = errors;for(const key1 in data2){if(!(func4.call(schema13.properties, key1))){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0,schemaPath:"#/$defs/Addressaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs9 === errors){if(data2.country !== undefined){const _errs10 = errors;if(typeof data2.country !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/country",schemaPath:"#/$defs/Addressaf30/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data2.parentKey !== undefined){const _errs12 = errors;if(typeof data2.parentKey !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/parentKey",schemaPath:"#/$defs/Addressaf30/properties/parentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data2.city !== undefined){const _errs14 = errors;if(typeof data2.city !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/city",schemaPath:"#/$defs/Addressaf30/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data2.latitude !== undefined){let data6 = data2.latitude;const _errs16 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/latitude",schemaPath:"#/$defs/Addressaf30/properties/latitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data2.postcode !== undefined){const _errs18 = errors;if(typeof data2.postcode !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/postcode",schemaPath:"#/$defs/Addressaf30/properties/postcode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs18 === errors;}else {var valid3 = true;}if(valid3){if(data2.indexInList !== undefined){let data8 = data2.indexInList;const _errs20 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/indexInList",schemaPath:"#/$defs/Addressaf30/properties/indexInList/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs20 === errors;}else {var valid3 = true;}if(valid3){if(data2.encodedKey !== undefined){const _errs22 = errors;if(typeof data2.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/encodedKey",schemaPath:"#/$defs/Addressaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs22 === errors;}else {var valid3 = true;}if(valid3){if(data2.region !== undefined){const _errs24 = errors;if(typeof data2.region !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/region",schemaPath:"#/$defs/Addressaf30/properties/region/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs24 === errors;}else {var valid3 = true;}if(valid3){if(data2.line2 !== undefined){const _errs26 = errors;if(typeof data2.line2 !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/line2",schemaPath:"#/$defs/Addressaf30/properties/line2/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs26 === errors;}else {var valid3 = true;}if(valid3){if(data2.line1 !== undefined){const _errs28 = errors;if(typeof data2.line1 !== "string"){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/line1",schemaPath:"#/$defs/Addressaf30/properties/line1/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs28 === errors;}else {var valid3 = true;}if(valid3){if(data2.longitude !== undefined){let data13 = data2.longitude;const _errs30 = errors;if(!((typeof data13 == "number") && (isFinite(data13)))){validate11.errors = [{instancePath:instancePath+"/addresses/" + i0+"/longitude",schemaPath:"#/$defs/Addressaf30/properties/longitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs30 === errors;}else {var valid3 = true;}}}}}}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/addresses/" + i0,schemaPath:"#/$defs/Addressaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/addresses",schemaPath:"#/properties/addresses/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.phoneNumber !== undefined){const _errs32 = errors;if(typeof data.phoneNumber !== "string"){validate11.errors = [{instancePath:instancePath+"/phoneNumber",schemaPath:"#/properties/phoneNumber/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs34 = errors;if(typeof data.notes !== "string"){validate11.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs34 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs36 = errors;if(errors === _errs36){if(errors === _errs36){if(!(typeof data.lastModifiedDate === "string")){validate11.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs38 = errors;if(typeof data.name !== "string"){validate11.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs40 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs40 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs42 = errors;if(typeof data.id !== "string"){validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs42 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){let data20 = data.state;const _errs44 = errors;if(!((data20 === "ACTIVE") || (data20 === "INACTIVE"))){validate11.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs44 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs45 = errors;if(errors === _errs45){if(errors === _errs45){if(!(typeof data.creationDate === "string")){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs45 === errors;}else {var valid0 = true;}if(valid0){if(data.branchHolidays !== undefined){let data22 = data.branchHolidays;const _errs47 = errors;if(errors === _errs47){if(Array.isArray(data22)){var valid4 = true;const len1 = data22.length;for(let i1=0; i1<len1; i1++){let data23 = data22[i1];const _errs49 = errors;const _errs50 = errors;if(errors === _errs50){if(data23 && typeof data23 == "object" && !Array.isArray(data23)){const _errs52 = errors;for(const key2 in data23){if(!((((((key2 === "date") || (key2 === "isAnnuallyRecurring")) || (key2 === "name")) || (key2 === "encodedKey")) || (key2 === "id")) || (key2 === "creationDate"))){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1,schemaPath:"#/$defs/Holidayaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs52 === errors){if(data23.date !== undefined){const _errs53 = errors;if(errors === _errs53){if(errors === _errs53){if(!(typeof data23.date === "string")){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/date",schemaPath:"#/$defs/Holidayaf30/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid6 = _errs53 === errors;}else {var valid6 = true;}if(valid6){if(data23.isAnnuallyRecurring !== undefined){const _errs55 = errors;if(typeof data23.isAnnuallyRecurring !== "boolean"){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/isAnnuallyRecurring",schemaPath:"#/$defs/Holidayaf30/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs55 === errors;}else {var valid6 = true;}if(valid6){if(data23.name !== undefined){const _errs57 = errors;if(typeof data23.name !== "string"){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/name",schemaPath:"#/$defs/Holidayaf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs57 === errors;}else {var valid6 = true;}if(valid6){if(data23.encodedKey !== undefined){const _errs59 = errors;if(typeof data23.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/encodedKey",schemaPath:"#/$defs/Holidayaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs59 === errors;}else {var valid6 = true;}if(valid6){if(data23.id !== undefined){let data28 = data23.id;const _errs61 = errors;if(!(((typeof data28 == "number") && (!(data28 % 1) && !isNaN(data28))) && (isFinite(data28)))){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/id",schemaPath:"#/$defs/Holidayaf30/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs61 === errors;}else {var valid6 = true;}if(valid6){if(data23.creationDate !== undefined){const _errs63 = errors;if(errors === _errs63){if(errors === _errs63){if(!(typeof data23.creationDate === "string")){validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1+"/creationDate",schemaPath:"#/$defs/Holidayaf30/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid6 = _errs63 === errors;}else {var valid6 = true;}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/branchHolidays/" + i1,schemaPath:"#/$defs/Holidayaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs49 === errors;if(!valid4){break;}}}else {validate11.errors = [{instancePath:instancePath+"/branchHolidays",schemaPath:"#/properties/branchHolidays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs47 === errors;}else {var valid0 = true;}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;