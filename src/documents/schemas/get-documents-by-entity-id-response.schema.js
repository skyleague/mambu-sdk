/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getDocumentsByEntityIdResponse","type":"array","items":{"$ref":"#/$defs/Document"},"$defs":{"Document":{"type":"object","title":"Document","description":"Holds information regarding the documents uploaded as attachments","properties":{"ownerType":{"title":"ownerType","description":"Determines the owner type of the document","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"fileName":{"type":"string","title":"fileName","description":"The original file name of the document"},"notes":{"type":"string","title":"notes","description":"Detailed notes about the document"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last modified date of the document, stored as UTC","format":"date-time"},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the document, stored as UTC","format":"date-time"},"type":{"type":"string","title":"type","description":"The extension of the document"},"ownerKey":{"type":"string","title":"ownerKey","description":"Represents the holder of this document. If null, means nobody is the owner of this document"},"fileSize":{"type":"integer","title":"fileSize","description":"The file size of the document"},"name":{"type":"string","title":"name","description":"The name of the document"},"encodedKey":{"type":"string","title":"encodedKey","description":"The document encodedKey"},"location":{"type":"string","title":"location","description":"Location where the document can be found, eg /myfiles/mypicture.jpeg"},"id":{"type":"integer","title":"id","description":"The document id"}},"required":["type","name","id"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"Document","description":"Holds information regarding the documents uploaded as attachments","properties":{"ownerType":{"title":"ownerType","description":"Determines the owner type of the document","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"fileName":{"type":"string","title":"fileName","description":"The original file name of the document"},"notes":{"type":"string","title":"notes","description":"Detailed notes about the document"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last modified date of the document, stored as UTC","format":"date-time"},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the document, stored as UTC","format":"date-time"},"type":{"type":"string","title":"type","description":"The extension of the document"},"ownerKey":{"type":"string","title":"ownerKey","description":"Represents the holder of this document. If null, means nobody is the owner of this document"},"fileSize":{"type":"integer","title":"fileSize","description":"The file size of the document"},"name":{"type":"string","title":"name","description":"The name of the document"},"encodedKey":{"type":"string","title":"encodedKey","description":"The document encodedKey"},"location":{"type":"string","title":"location","description":"Location where the document can be found, eg /myfiles/mypicture.jpeg"},"id":{"type":"integer","title":"id","description":"The document id"}},"required":["type","name","id"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((((data0.type === undefined) && (missing0 = "type")) || ((data0.name === undefined) && (missing0 = "name"))) || ((data0.id === undefined) && (missing0 = "id"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Document/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.ownerType !== undefined){const _errs5 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.ownerType.enum){if(func0(data0.ownerType, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/" + i0+"/ownerType",schemaPath:"#/$defs/Document/properties/ownerType/enum",keyword:"enum",params:{allowedValues: schema12.properties.ownerType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.fileName !== undefined){const _errs6 = errors;if(typeof data0.fileName !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/fileName",schemaPath:"#/$defs/Document/properties/fileName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.notes !== undefined){const _errs8 = errors;if(typeof data0.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/notes",schemaPath:"#/$defs/Document/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.lastModifiedDate !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data0.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/lastModifiedDate",schemaPath:"#/$defs/Document/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.creationDate !== undefined){const _errs12 = errors;if(errors === _errs12){if(errors === _errs12){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/Document/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data0.type !== undefined){const _errs14 = errors;if(typeof data0.type !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/$defs/Document/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data0.ownerKey !== undefined){const _errs16 = errors;if(typeof data0.ownerKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/ownerKey",schemaPath:"#/$defs/Document/properties/ownerKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs16 === errors;}else {var valid2 = true;}if(valid2){if(data0.fileSize !== undefined){let data8 = data0.fileSize;const _errs18 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/fileSize",schemaPath:"#/$defs/Document/properties/fileSize/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs18 === errors;}else {var valid2 = true;}if(valid2){if(data0.name !== undefined){const _errs20 = errors;if(typeof data0.name !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/name",schemaPath:"#/$defs/Document/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs20 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs22 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/Document/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs22 === errors;}else {var valid2 = true;}if(valid2){if(data0.location !== undefined){const _errs24 = errors;if(typeof data0.location !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/location",schemaPath:"#/$defs/Document/properties/location/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs24 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){let data12 = data0.id;const _errs26 = errors;if(!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/Document/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs26 === errors;}else {var valid2 = true;}}}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Document/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;