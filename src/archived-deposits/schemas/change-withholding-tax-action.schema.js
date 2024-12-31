/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ChangeWithholdingTaxAction","type":"object","description":"Change deposit account withholding tax rate","properties":{"withholdingTaxSourceKey":{"type":"string","description":"The ID or encoded key of the new withholding tax to use for the account."}},"required":["withholdingTaxSourceKey"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.withholdingTaxSourceKey === undefined) && (missing0 = "withholdingTaxSourceKey")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.withholdingTaxSourceKey !== undefined){if(typeof data.withholdingTaxSourceKey !== "string"){validate10.errors = [{instancePath:instancePath+"/withholdingTaxSourceKey",schemaPath:"#/properties/withholdingTaxSourceKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;