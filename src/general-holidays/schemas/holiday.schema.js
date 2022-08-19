/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"Holiday","description":"Holiday Date Transfer Object","properties":{"date":{"type":"string","title":"date","description":"holiday date","format":"date"},"isAnnuallyRecurring":{"type":"boolean","title":"isAnnuallyRecurring","description":"if is annually recurring"},"name":{"type":"string","title":"name","description":"holiday name"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","title":"id","description":"holiday id"},"creationDate":{"type":"string","title":"creationDate","description":"holiday creation date","format":"date-time"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((((((key0 === "date") || (key0 === "isAnnuallyRecurring")) || (key0 === "name")) || (key0 === "encodedKey")) || (key0 === "id")) || (key0 === "creationDate"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.date !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.date === "string")){validate10.errors = [{instancePath:instancePath+"/date",schemaPath:"#/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.isAnnuallyRecurring !== undefined){const _errs4 = errors;if(typeof data.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/isAnnuallyRecurring",schemaPath:"#/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs6 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs8 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){let data4 = data.id;const _errs10 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs12 = errors;if(errors === _errs12){if(errors === _errs12){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}