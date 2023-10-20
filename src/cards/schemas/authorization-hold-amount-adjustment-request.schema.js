/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AuthorizationHoldAmountAdjustmentRequest","type":"object","description":"A request to decrease/increase the amount of an authorization hold.","properties":{"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID of the decrease/increase request (not of the authorization hold)."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"amount":{"type":"number","title":"amount","description":"The amount of money to be subtracted/added to the authorization hold amount. For the decrease: if the amount is greater or equal to the authorization hold amount, then the authorization hold is reversed."},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the hold was created."},"advice":{"type":"boolean","title":"advice","description":"Whether the given request should be accepted without balance validations."}},"required":["amount"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.externalReferenceId !== undefined){const _errs2 = errors;if(typeof data.externalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data2 = data.amount;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs8 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.advice !== undefined){const _errs10 = errors;if(typeof data.advice !== "boolean"){validate10.errors = [{instancePath:instancePath+"/advice",schemaPath:"#/properties/advice/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;