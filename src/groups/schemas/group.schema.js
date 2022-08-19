/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"Group","description":"Represents a group of clients. A group is a type of client composed of at least two members who also need to have an individual profile in Mambu.","properties":{"groupMembers":{"type":"array","title":"groupMembers","description":"The members of this group.","items":{"description":"The members of this group.","$ref":"#/$defs/GroupMember6d0a"}},"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The migration event encoded key associated with this group."},"preferredLanguage":{"title":"preferredLanguage","description":"The preferred language associated with the group (used for the notifications).","enum":["ENGLISH","PORTUGESE","SPANISH","RUSSIAN","FRENCH","GEORGIAN","CHINESE","INDONESIAN","ROMANIAN","BURMESE","GERMAN","PORTUGUESE_BRAZIL","VIETNAMESE","ITALIAN","PHRASE"]},"addresses":{"type":"array","title":"addresses","description":"The addresses associated with this group information like street, city etc.","items":{"description":"The addresses associated with this group information like street, city etc.","$ref":"#/$defs/Address6d0a"}},"notes":{"type":"string","title":"notes","description":"Extra notes about this group"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date the group was updated","format":"date-time"},"homePhone":{"type":"string","title":"homePhone","description":"The home phone number associated with the group"},"creationDate":{"type":"string","title":"creationDate","description":"The date this group was created","format":"date-time"},"assignedBranchKey":{"type":"string","title":"assignedBranchKey","description":"Key of the branch this group is assigned to"},"loanCycle":{"type":"integer","title":"loanCycle","description":"Number of paid and closed (with 'obligations met') accounts for this client, when the closing operation is reverted, this is reduced"},"assignedCentreKey":{"type":"string","title":"assignedCentreKey","description":"Key of the centre this group is assigned to"},"groupName":{"type":"string","title":"groupName","description":"The name of the group"},"emailAddress":{"type":"string","title":"emailAddress","description":"The e-mail address associated with the group"},"mobilePhone":{"type":"string","title":"mobilePhone","description":"The mobile phone number associated with the group"},"groupRoleKey":{"type":"string","title":"groupRoleKey","description":"A role which describes the intended use of a group in the system"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the group, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the group, can be generated and customized, unique"},"assignedUserKey":{"type":"string","title":"assignedUserKey","description":"Key of the user this group is assigned to"}},"required":["groupName"],"additionalProperties":false,"$defs":{"GroupMember6d0a":{"type":"object","title":"GroupMember","description":"A group member is person that uses the services of the bank and is member of a group. Group members may have associated information such as their client key and a list of roles they have within the group","properties":{"clientKey":{"type":"string","title":"clientKey","description":"The encoded key of the client assigned as member of the group"},"roles":{"type":"array","title":"roles","description":"The roles associated with this group member","items":{"description":"The roles associated with this group member","$ref":"#/$defs/GroupRole6d0a"}}},"required":["clientKey"],"additionalProperties":false},"GroupRole6d0a":{"type":"object","title":"GroupRole","description":"A group role is the role of a group member within the group (i.e. Money Collector). One member could have many roles within a group.","properties":{"roleName":{"type":"string","title":"roleName","description":"The group role name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the group role, auto generated, unique"},"groupRoleNameKey":{"type":"string","title":"groupRoleNameKey","description":"The group role name key"},"roleNameId":{"type":"string","title":"roleNameId","description":"The group role name id"}},"required":["groupRoleNameKey"],"additionalProperties":false},"Address6d0a":{"type":"object","title":"Address","description":"Address Data Transfer Object","properties":{"country":{"type":"string","title":"country","description":"The country"},"parentKey":{"type":"string","title":"parentKey","description":"Address parent key, the object owning this address, client, centre, branch"},"city":{"type":"string","title":"city","description":"The city for this address"},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90"},"postcode":{"type":"string","title":"postcode","description":"The post code"},"indexInList":{"type":"integer","title":"indexInList","description":"Index of this address in the list of addresses"},"encodedKey":{"type":"string","title":"encodedKey","description":"Address encoded key, unique, generated"},"region":{"type":"string","title":"region","description":"The region that is part of the address"},"line2":{"type":"string","title":"line2","description":"The second line for the address, in case the first one doesn't fit the information, this is completely optional"},"line1":{"type":"string","title":"line1","description":"The first line of the address"},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180"}},"additionalProperties":false}}};const schema14 = {"type":"object","title":"Address","description":"Address Data Transfer Object","properties":{"country":{"type":"string","title":"country","description":"The country"},"parentKey":{"type":"string","title":"parentKey","description":"Address parent key, the object owning this address, client, centre, branch"},"city":{"type":"string","title":"city","description":"The city for this address"},"latitude":{"type":"number","title":"latitude","description":"The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90"},"postcode":{"type":"string","title":"postcode","description":"The post code"},"indexInList":{"type":"integer","title":"indexInList","description":"Index of this address in the list of addresses"},"encodedKey":{"type":"string","title":"encodedKey","description":"Address encoded key, unique, generated"},"region":{"type":"string","title":"region","description":"The region that is part of the address"},"line2":{"type":"string","title":"line2","description":"The second line for the address, in case the first one doesn't fit the information, this is completely optional"},"line1":{"type":"string","title":"line1","description":"The first line of the address"},"longitude":{"type":"number","title":"longitude","description":"The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180"}},"additionalProperties":false};const func2 = Object.prototype.hasOwnProperty;const schema12 = {"type":"object","title":"GroupMember","description":"A group member is person that uses the services of the bank and is member of a group. Group members may have associated information such as their client key and a list of roles they have within the group","properties":{"clientKey":{"type":"string","title":"clientKey","description":"The encoded key of the client assigned as member of the group"},"roles":{"type":"array","title":"roles","description":"The roles associated with this group member","items":{"description":"The roles associated with this group member","$ref":"#/$defs/GroupRole6d0a"}}},"required":["clientKey"],"additionalProperties":false};const schema13 = {"type":"object","title":"GroupRole","description":"A group role is the role of a group member within the group (i.e. Money Collector). One member could have many roles within a group.","properties":{"roleName":{"type":"string","title":"roleName","description":"The group role name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the group role, auto generated, unique"},"groupRoleNameKey":{"type":"string","title":"groupRoleNameKey","description":"The group role name key"},"roleNameId":{"type":"string","title":"roleNameId","description":"The group role name id"}},"required":["groupRoleNameKey"],"additionalProperties":false};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.clientKey === undefined) && (missing0 = "clientKey")){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((key0 === "clientKey") || (key0 === "roles"))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.clientKey !== undefined){const _errs2 = errors;if(typeof data.clientKey !== "string"){validate11.errors = [{instancePath:instancePath+"/clientKey",schemaPath:"#/properties/clientKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.roles !== undefined){let data1 = data.roles;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){let missing1;if((data2.groupRoleNameKey === undefined) && (missing1 = "groupRoleNameKey")){validate11.errors = [{instancePath:instancePath+"/roles/" + i0,schemaPath:"#/$defs/GroupRole6d0a/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {const _errs9 = errors;for(const key1 in data2){if(!((((key1 === "roleName") || (key1 === "encodedKey")) || (key1 === "groupRoleNameKey")) || (key1 === "roleNameId"))){validate11.errors = [{instancePath:instancePath+"/roles/" + i0,schemaPath:"#/$defs/GroupRole6d0a/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs9 === errors){if(data2.roleName !== undefined){const _errs10 = errors;if(typeof data2.roleName !== "string"){validate11.errors = [{instancePath:instancePath+"/roles/" + i0+"/roleName",schemaPath:"#/$defs/GroupRole6d0a/properties/roleName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data2.encodedKey !== undefined){const _errs12 = errors;if(typeof data2.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/roles/" + i0+"/encodedKey",schemaPath:"#/$defs/GroupRole6d0a/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data2.groupRoleNameKey !== undefined){const _errs14 = errors;if(typeof data2.groupRoleNameKey !== "string"){validate11.errors = [{instancePath:instancePath+"/roles/" + i0+"/groupRoleNameKey",schemaPath:"#/$defs/GroupRole6d0a/properties/groupRoleNameKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data2.roleNameId !== undefined){const _errs16 = errors;if(typeof data2.roleNameId !== "string"){validate11.errors = [{instancePath:instancePath+"/roles/" + i0+"/roleNameId",schemaPath:"#/$defs/GroupRole6d0a/properties/roleNameId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/roles/" + i0,schemaPath:"#/$defs/GroupRole6d0a/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/roles",schemaPath:"#/properties/roles/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.groupName === undefined) && (missing0 = "groupName")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func2.call(schema11.properties, key0))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.groupMembers !== undefined){let data0 = data.groupMembers;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;if(!(validate11(data0[i0], {instancePath:instancePath+"/groupMembers/" + i0,parentData:data0,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/groupMembers",schemaPath:"#/properties/groupMembers/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.migrationEventKey !== undefined){const _errs5 = errors;if(typeof data.migrationEventKey !== "string"){validate10.errors = [{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.preferredLanguage !== undefined){let data3 = data.preferredLanguage;const _errs7 = errors;if(!(((((((((((((((data3 === "ENGLISH") || (data3 === "PORTUGESE")) || (data3 === "SPANISH")) || (data3 === "RUSSIAN")) || (data3 === "FRENCH")) || (data3 === "GEORGIAN")) || (data3 === "CHINESE")) || (data3 === "INDONESIAN")) || (data3 === "ROMANIAN")) || (data3 === "BURMESE")) || (data3 === "GERMAN")) || (data3 === "PORTUGUESE_BRAZIL")) || (data3 === "VIETNAMESE")) || (data3 === "ITALIAN")) || (data3 === "PHRASE"))){validate10.errors = [{instancePath:instancePath+"/preferredLanguage",schemaPath:"#/properties/preferredLanguage/enum",keyword:"enum",params:{allowedValues: schema11.properties.preferredLanguage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.addresses !== undefined){let data4 = data.addresses;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data4)){var valid2 = true;const len1 = data4.length;for(let i1=0; i1<len1; i1++){let data5 = data4[i1];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data5 && typeof data5 == "object" && !Array.isArray(data5)){const _errs13 = errors;for(const key1 in data5){if(!(func2.call(schema14.properties, key1))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1,schemaPath:"#/$defs/Address6d0a/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs13 === errors){if(data5.country !== undefined){const _errs14 = errors;if(typeof data5.country !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/country",schemaPath:"#/$defs/Address6d0a/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs14 === errors;}else {var valid4 = true;}if(valid4){if(data5.parentKey !== undefined){const _errs16 = errors;if(typeof data5.parentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/parentKey",schemaPath:"#/$defs/Address6d0a/properties/parentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs16 === errors;}else {var valid4 = true;}if(valid4){if(data5.city !== undefined){const _errs18 = errors;if(typeof data5.city !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/city",schemaPath:"#/$defs/Address6d0a/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data5.latitude !== undefined){let data9 = data5.latitude;const _errs20 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/latitude",schemaPath:"#/$defs/Address6d0a/properties/latitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data5.postcode !== undefined){const _errs22 = errors;if(typeof data5.postcode !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/postcode",schemaPath:"#/$defs/Address6d0a/properties/postcode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}if(valid4){if(data5.indexInList !== undefined){let data11 = data5.indexInList;const _errs24 = errors;if(!(((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11))) && (isFinite(data11)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/indexInList",schemaPath:"#/$defs/Address6d0a/properties/indexInList/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data5.encodedKey !== undefined){const _errs26 = errors;if(typeof data5.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/encodedKey",schemaPath:"#/$defs/Address6d0a/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}if(valid4){if(data5.region !== undefined){const _errs28 = errors;if(typeof data5.region !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/region",schemaPath:"#/$defs/Address6d0a/properties/region/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs28 === errors;}else {var valid4 = true;}if(valid4){if(data5.line2 !== undefined){const _errs30 = errors;if(typeof data5.line2 !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/line2",schemaPath:"#/$defs/Address6d0a/properties/line2/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs30 === errors;}else {var valid4 = true;}if(valid4){if(data5.line1 !== undefined){const _errs32 = errors;if(typeof data5.line1 !== "string"){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/line1",schemaPath:"#/$defs/Address6d0a/properties/line1/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs32 === errors;}else {var valid4 = true;}if(valid4){if(data5.longitude !== undefined){let data16 = data5.longitude;const _errs34 = errors;if(!((typeof data16 == "number") && (isFinite(data16)))){validate10.errors = [{instancePath:instancePath+"/addresses/" + i1+"/longitude",schemaPath:"#/$defs/Address6d0a/properties/longitude/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs34 === errors;}else {var valid4 = true;}}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/addresses/" + i1,schemaPath:"#/$defs/Address6d0a/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs10 === errors;if(!valid2){break;}}}else {validate10.errors = [{instancePath:instancePath+"/addresses",schemaPath:"#/properties/addresses/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs36 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs38 = errors;if(errors === _errs38){if(errors === _errs38){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.homePhone !== undefined){const _errs40 = errors;if(typeof data.homePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/homePhone",schemaPath:"#/properties/homePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs40 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs42 = errors;if(errors === _errs42){if(errors === _errs42){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs42 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedBranchKey !== undefined){const _errs44 = errors;if(typeof data.assignedBranchKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedBranchKey",schemaPath:"#/properties/assignedBranchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs44 === errors;}else {var valid0 = true;}if(valid0){if(data.loanCycle !== undefined){let data22 = data.loanCycle;const _errs46 = errors;if(!(((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22))) && (isFinite(data22)))){validate10.errors = [{instancePath:instancePath+"/loanCycle",schemaPath:"#/properties/loanCycle/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs46 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedCentreKey !== undefined){const _errs48 = errors;if(typeof data.assignedCentreKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedCentreKey",schemaPath:"#/properties/assignedCentreKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs48 === errors;}else {var valid0 = true;}if(valid0){if(data.groupName !== undefined){const _errs50 = errors;if(typeof data.groupName !== "string"){validate10.errors = [{instancePath:instancePath+"/groupName",schemaPath:"#/properties/groupName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs50 === errors;}else {var valid0 = true;}if(valid0){if(data.emailAddress !== undefined){const _errs52 = errors;if(typeof data.emailAddress !== "string"){validate10.errors = [{instancePath:instancePath+"/emailAddress",schemaPath:"#/properties/emailAddress/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs52 === errors;}else {var valid0 = true;}if(valid0){if(data.mobilePhone !== undefined){const _errs54 = errors;if(typeof data.mobilePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/mobilePhone",schemaPath:"#/properties/mobilePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs54 === errors;}else {var valid0 = true;}if(valid0){if(data.groupRoleKey !== undefined){const _errs56 = errors;if(typeof data.groupRoleKey !== "string"){validate10.errors = [{instancePath:instancePath+"/groupRoleKey",schemaPath:"#/properties/groupRoleKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs56 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs58 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs58 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs60 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs60 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedUserKey !== undefined){const _errs62 = errors;if(typeof data.assignedUserKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedUserKey",schemaPath:"#/properties/assignedUserKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs62 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}