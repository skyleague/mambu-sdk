/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"Comment","description":"Comment Data Transfer Object","properties":{"ownerType":{"title":"ownerType","description":"The type of the entity that owns this comment","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this comment was modified","format":"date-time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the comment, auto generated, unique"},"text":{"type":"string","title":"text","description":"The message in the comment"},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the comment","format":"date-time"},"ownerKey":{"type":"string","title":"ownerKey","description":"The owner key of the comment, representing the encoded key of the entity owning this comment"},"userKey":{"type":"string","title":"userKey","description":"The key of the user"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((((((key0 === "ownerType") || (key0 === "lastModifiedDate")) || (key0 === "encodedKey")) || (key0 === "text")) || (key0 === "creationDate")) || (key0 === "ownerKey")) || (key0 === "userKey"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.ownerType !== undefined){let data0 = data.ownerType;const _errs2 = errors;if(!((((((((((((data0 === "CLIENT") || (data0 === "GROUP")) || (data0 === "LOAN_PRODUCT")) || (data0 === "SAVINGS_PRODUCT")) || (data0 === "CENTRE")) || (data0 === "BRANCH")) || (data0 === "USER")) || (data0 === "LOAN_ACCOUNT")) || (data0 === "DEPOSIT_ACCOUNT")) || (data0 === "ID_DOCUMENT")) || (data0 === "LINE_OF_CREDIT")) || (data0 === "GL_JOURNAL_ENTRY"))){validate10.errors = [{instancePath:instancePath+"/ownerType",schemaPath:"#/properties/ownerType/enum",keyword:"enum",params:{allowedValues: schema11.properties.ownerType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs3 = errors;if(errors === _errs3){if(errors === _errs3){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs5 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.text !== undefined){const _errs7 = errors;if(typeof data.text !== "string"){validate10.errors = [{instancePath:instancePath+"/text",schemaPath:"#/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs9 = errors;if(errors === _errs9){if(errors === _errs9){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.ownerKey !== undefined){const _errs11 = errors;if(typeof data.ownerKey !== "string"){validate10.errors = [{instancePath:instancePath+"/ownerKey",schemaPath:"#/properties/ownerKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.userKey !== undefined){const _errs13 = errors;if(typeof data.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}