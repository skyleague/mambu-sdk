/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ClientRole","description":"Describes the role of a client/group in the system","properties":{"clientType":{"title":"clientType","description":"The type of the client for which this role was created","enum":["CLIENT","GROUP"]},"requireID":{"type":"boolean","title":"requireID","description":"Indicates whether identification documents must be provided for the client to be created"},"canGuarantee":{"type":"boolean","title":"canGuarantee","description":"Indicates whether the clients under this type can be used as guarantors"},"useDefaultAddress":{"type":"boolean","title":"useDefaultAddress","description":"Indicates whether the Mambu default address section will be available"},"name":{"type":"string","title":"name","description":"The name of the client role"},"canOpenAccounts":{"type":"boolean","title":"canOpenAccounts","description":"Indicates whether new accounts for this client type can be created"},"description":{"type":"string","title":"description","description":"Text description for this client role"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the client, auto generated, unique"},"id":{"type":"string","title":"id","description":"The ID of the client role, can be generated and customized, unique"},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the client role","format":"date-time"},"idPattern":{"type":"string","title":"idPattern","description":"Indicates the pattern used in generating the client id"}},"additionalProperties":false};const func2 = Object.prototype.hasOwnProperty;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func2.call(schema11.properties, key0))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.clientType !== undefined){let data0 = data.clientType;const _errs2 = errors;if(!((data0 === "CLIENT") || (data0 === "GROUP"))){validate10.errors = [{instancePath:instancePath+"/clientType",schemaPath:"#/properties/clientType/enum",keyword:"enum",params:{allowedValues: schema11.properties.clientType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.requireID !== undefined){const _errs3 = errors;if(typeof data.requireID !== "boolean"){validate10.errors = [{instancePath:instancePath+"/requireID",schemaPath:"#/properties/requireID/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.canGuarantee !== undefined){const _errs5 = errors;if(typeof data.canGuarantee !== "boolean"){validate10.errors = [{instancePath:instancePath+"/canGuarantee",schemaPath:"#/properties/canGuarantee/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.useDefaultAddress !== undefined){const _errs7 = errors;if(typeof data.useDefaultAddress !== "boolean"){validate10.errors = [{instancePath:instancePath+"/useDefaultAddress",schemaPath:"#/properties/useDefaultAddress/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs9 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.canOpenAccounts !== undefined){const _errs11 = errors;if(typeof data.canOpenAccounts !== "boolean"){validate10.errors = [{instancePath:instancePath+"/canOpenAccounts",schemaPath:"#/properties/canOpenAccounts/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs13 = errors;if(typeof data.description !== "string"){validate10.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs15 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs17 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs19 = errors;if(errors === _errs19){if(errors === _errs19){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.idPattern !== undefined){const _errs21 = errors;if(typeof data.idPattern !== "string"){validate10.errors = [{instancePath:instancePath+"/idPattern",schemaPath:"#/properties/idPattern/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;