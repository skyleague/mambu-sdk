/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetAllCardsResponse","type":"array","items":{"$ref":"#/$defs/Card"},"$defs":{"Card":{"type":"object","description":"Returns a card that can be associated to a deposit or loan  account. Cards consist only of card reference tokens and the card details are not stored in Mambu.","properties":{"referenceToken":{"type":"string","description":"The card's reference token."}},"required":["referenceToken"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"Returns a card that can be associated to a deposit or loan  account. Cards consist only of card reference tokens and the card details are not stored in Mambu.","properties":{"referenceToken":{"type":"string","description":"The card's reference token."}},"required":["referenceToken"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.referenceToken === undefined) && (missing0 = "referenceToken")){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Card/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.referenceToken !== undefined){if(typeof data0.referenceToken !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/referenceToken",schemaPath:"#/$defs/Card/properties/referenceToken/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/Card/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;