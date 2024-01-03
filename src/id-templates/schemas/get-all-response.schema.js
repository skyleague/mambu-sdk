/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllResponse","type":"array","items":{"$ref":"#/$defs/IdentificationDocumentTemplateaf30"},"$defs":{"IdentificationDocumentTemplateaf30":{"type":"object","title":"IdentificationDocumentTemplateaf30","description":"Represents a template for identification documents.","properties":{"allowAttachments":{"type":"boolean","title":"allowAttachments","description":"`TRUE` if a template allows files to be attached, `FALSE` otherwise."},"documentIdTemplate":{"type":"string","title":"documentIdTemplate","description":"The ID template constraint to define the ID number length and format. Templates consist of the characters `#`, `@`, and `$`, where `#` specifies a number, `@` a letter, and `$` a number or a letter."},"documentType":{"type":"string","title":"documentType","description":"The type of the document. For example, passport."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the ID template. It is auto generated and unique."},"id":{"type":"string","title":"id","description":"The unique identifier for the template."},"issuingAuthority":{"type":"string","title":"issuingAuthority","description":"The authority that issued the document."},"mandatory":{"type":"boolean","title":"mandatory","description":"`TRUE` if a template is mandatory for all the individual clients, `FALSE` otherwise."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"IdentificationDocumentTemplateaf30","description":"Represents a template for identification documents.","properties":{"allowAttachments":{"type":"boolean","title":"allowAttachments","description":"`TRUE` if a template allows files to be attached, `FALSE` otherwise."},"documentIdTemplate":{"type":"string","title":"documentIdTemplate","description":"The ID template constraint to define the ID number length and format. Templates consist of the characters `#`, `@`, and `$`, where `#` specifies a number, `@` a letter, and `$` a number or a letter."},"documentType":{"type":"string","title":"documentType","description":"The type of the document. For example, passport."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the ID template. It is auto generated and unique."},"id":{"type":"string","title":"id","description":"The unique identifier for the template."},"issuingAuthority":{"type":"string","title":"issuingAuthority","description":"The authority that issued the document."},"mandatory":{"type":"boolean","title":"mandatory","description":"`TRUE` if a template is mandatory for all the individual clients, `FALSE` otherwise."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.allowAttachments !== undefined){const _errs5 = errors;if(typeof data0.allowAttachments !== "boolean"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/allowAttachments",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/allowAttachments/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.documentIdTemplate !== undefined){const _errs7 = errors;if(typeof data0.documentIdTemplate !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/documentIdTemplate",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/documentIdTemplate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.documentType !== undefined){const _errs9 = errors;if(typeof data0.documentType !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/documentType",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/documentType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs11 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){const _errs13 = errors;if(typeof data0.id !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.issuingAuthority !== undefined){const _errs15 = errors;if(typeof data0.issuingAuthority !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/issuingAuthority",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/issuingAuthority/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.mandatory !== undefined){const _errs17 = errors;if(typeof data0.mandatory !== "boolean"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/mandatory",schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/properties/mandatory/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/IdentificationDocumentTemplateaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;