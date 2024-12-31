/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetAll19Response","type":"array","items":{"$ref":"#/$defs/Task"},"$defs":{"Task":{"type":"object","description":"Represents a human task that can be assigned by one user to another. When a task is created, it's status is set to `OPEN`.","properties":{"assignedUserKey":{"type":"string","description":"The key of the user this task is assigned to."},"createdByFullName":{"type":"string","description":"The name of the user who created the task."},"createdByUserKey":{"type":"string","description":"The key of the user that created this task. The value is not editable and it is populated at task creation with the current user key."},"creationDate":{"type":"string","description":"The date when the task was created.","format":"date-time"},"description":{"type":"string","description":"The description of the task."},"dueDate":{"type":"string","description":"The due date when the task has to be completed.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the task, which is auto generated, and must be unique."},"id":{"type":"integer","description":"The ID of the task, which is uniquely generated for the task."},"lastModifiedDate":{"type":"string","description":"The last date when the task was modified.","format":"date-time"},"status":{"description":"The status of this task, a new task always has an `OPEN` status.","enum":["OPEN","COMPLETED"]},"taskLinkKey":{"type":"string","description":"The individual linked to this task. If null, it means nobody is linked to this task."},"taskLinkType":{"description":"The type of the owner represented by the task link key.","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"templateKey":{"type":"string","description":"The template key used to create the task."},"title":{"type":"string","description":"The title of the task."}},"required":["dueDate"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents a human task that can be assigned by one user to another. When a task is created, it's status is set to `OPEN`.","properties":{"assignedUserKey":{"type":"string","description":"The key of the user this task is assigned to."},"createdByFullName":{"type":"string","description":"The name of the user who created the task."},"createdByUserKey":{"type":"string","description":"The key of the user that created this task. The value is not editable and it is populated at task creation with the current user key."},"creationDate":{"type":"string","description":"The date when the task was created.","format":"date-time"},"description":{"type":"string","description":"The description of the task."},"dueDate":{"type":"string","description":"The due date when the task has to be completed.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the task, which is auto generated, and must be unique."},"id":{"type":"integer","description":"The ID of the task, which is uniquely generated for the task."},"lastModifiedDate":{"type":"string","description":"The last date when the task was modified.","format":"date-time"},"status":{"description":"The status of this task, a new task always has an `OPEN` status.","enum":["OPEN","COMPLETED"]},"taskLinkKey":{"type":"string","description":"The individual linked to this task. If null, it means nobody is linked to this task."},"taskLinkType":{"description":"The type of the owner represented by the task link key.","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"templateKey":{"type":"string","description":"The template key used to create the task."},"title":{"type":"string","description":"The title of the task."}},"required":["dueDate"],"additionalProperties":true};const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.dueDate === undefined) && (missing0 = "dueDate")){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Task/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.assignedUserKey !== undefined){const _errs5 = errors;if(typeof data0.assignedUserKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/assignedUserKey",schemaPath:"#/$defs/Task/properties/assignedUserKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.createdByFullName !== undefined){const _errs7 = errors;if(typeof data0.createdByFullName !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/createdByFullName",schemaPath:"#/$defs/Task/properties/createdByFullName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.createdByUserKey !== undefined){const _errs9 = errors;if(typeof data0.createdByUserKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/createdByUserKey",schemaPath:"#/$defs/Task/properties/createdByUserKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.creationDate !== undefined){const _errs11 = errors;if(errors === _errs11){if(errors === _errs11){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/Task/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.description !== undefined){const _errs13 = errors;if(typeof data0.description !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/description",schemaPath:"#/$defs/Task/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.dueDate !== undefined){const _errs15 = errors;if(errors === _errs15){if(errors === _errs15){if(!(typeof data0.dueDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/dueDate",schemaPath:"#/$defs/Task/properties/dueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs17 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/Task/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){let data8 = data0.id;const _errs19 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/Task/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data0.lastModifiedDate !== undefined){const _errs21 = errors;if(errors === _errs21){if(errors === _errs21){if(!(typeof data0.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/lastModifiedDate",schemaPath:"#/$defs/Task/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs21 === errors;}else {var valid2 = true;}if(valid2){if(data0.status !== undefined){let data10 = data0.status;const _errs23 = errors;if(!((data10 === "OPEN") || (data10 === "COMPLETED"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/status",schemaPath:"#/$defs/Task/properties/status/enum",keyword:"enum",params:{allowedValues: schema12.properties.status.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs23 === errors;}else {var valid2 = true;}if(valid2){if(data0.taskLinkKey !== undefined){const _errs24 = errors;if(typeof data0.taskLinkKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/taskLinkKey",schemaPath:"#/$defs/Task/properties/taskLinkKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs24 === errors;}else {var valid2 = true;}if(valid2){if(data0.taskLinkType !== undefined){const _errs26 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.taskLinkType.enum){if(func0(data0.taskLinkType, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/" + i0+"/taskLinkType",schemaPath:"#/$defs/Task/properties/taskLinkType/enum",keyword:"enum",params:{allowedValues: schema12.properties.taskLinkType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs26 === errors;}else {var valid2 = true;}if(valid2){if(data0.templateKey !== undefined){const _errs27 = errors;if(typeof data0.templateKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/templateKey",schemaPath:"#/$defs/Task/properties/templateKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs27 === errors;}else {var valid2 = true;}if(valid2){if(data0.title !== undefined){const _errs29 = errors;if(typeof data0.title !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/title",schemaPath:"#/$defs/Task/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs29 === errors;}else {var valid2 = true;}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Task/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;