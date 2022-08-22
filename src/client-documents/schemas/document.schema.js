/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"Document","description":"Holds information regarding the documents uploaded as attachments","properties":{"ownerType":{"title":"ownerType","description":"Determines the owner type of the document","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"fileName":{"type":"string","title":"fileName","description":"The original file name of the document"},"notes":{"type":"string","title":"notes","description":"Detailed notes about the document"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last modified date of the document, stored as UTC","format":"date-time"},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the document, stored as UTC","format":"date-time"},"type":{"type":"string","title":"type","description":"The extension of the document"},"ownerKey":{"type":"string","title":"ownerKey","description":"Represents the holder of this document. If null, means nobody is the owner of this document"},"fileSize":{"type":"integer","title":"fileSize","description":"The file size of the document"},"name":{"type":"string","title":"name","description":"The name of the document"},"encodedKey":{"type":"string","title":"encodedKey","description":"The document encodedKey"},"location":{"type":"string","title":"location","description":"Location where the document can be found, eg /myfiles/mypicture.jpeg"},"id":{"type":"integer","title":"id","description":"The document id"}},"required":["type","name","id"],"additionalProperties":false};const func2 = Object.prototype.hasOwnProperty;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.type === undefined) && (missing0 = "type")) || ((data.name === undefined) && (missing0 = "name"))) || ((data.id === undefined) && (missing0 = "id"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func2.call(schema11.properties, key0))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.ownerType !== undefined){let data0 = data.ownerType;const _errs2 = errors;if(!((((((((((((data0 === "CLIENT") || (data0 === "GROUP")) || (data0 === "LOAN_PRODUCT")) || (data0 === "SAVINGS_PRODUCT")) || (data0 === "CENTRE")) || (data0 === "BRANCH")) || (data0 === "USER")) || (data0 === "LOAN_ACCOUNT")) || (data0 === "DEPOSIT_ACCOUNT")) || (data0 === "ID_DOCUMENT")) || (data0 === "LINE_OF_CREDIT")) || (data0 === "GL_JOURNAL_ENTRY"))){validate10.errors = [{instancePath:instancePath+"/ownerType",schemaPath:"#/properties/ownerType/enum",keyword:"enum",params:{allowedValues: schema11.properties.ownerType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.fileName !== undefined){const _errs3 = errors;if(typeof data.fileName !== "string"){validate10.errors = [{instancePath:instancePath+"/fileName",schemaPath:"#/properties/fileName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs5 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs9 = errors;if(errors === _errs9){if(errors === _errs9){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs11 = errors;if(typeof data.type !== "string"){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.ownerKey !== undefined){const _errs13 = errors;if(typeof data.ownerKey !== "string"){validate10.errors = [{instancePath:instancePath+"/ownerKey",schemaPath:"#/properties/ownerKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.fileSize !== undefined){let data7 = data.fileSize;const _errs15 = errors;if(!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/fileSize",schemaPath:"#/properties/fileSize/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs17 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs19 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.location !== undefined){const _errs21 = errors;if(typeof data.location !== "string"){validate10.errors = [{instancePath:instancePath+"/location",schemaPath:"#/properties/location/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){let data11 = data.id;const _errs23 = errors;if(!(((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11))) && (isFinite(data11)))){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs23 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;