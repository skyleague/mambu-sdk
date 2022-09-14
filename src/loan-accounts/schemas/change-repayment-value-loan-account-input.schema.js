/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ChangeRepaymentValueLoanAccountInput","type":"object","description":"Represents the request payload for performing a repayment value change action","properties":{"amount":{"type":"number","title":"amount","description":"Fixed amount for being used for the repayments principal due"},"valueDate":{"type":"string","title":"valueDate","description":"Date when to change the repayment value (as Organization Time)","format":"date-time"},"notes":{"type":"string","title":"notes","description":"Notes for the repayment value change action performed on the loan account"},"percentage":{"type":"number","title":"percentage","description":"Percentage of principal amount used for the repayments principal due"}},"required":["valueDate"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.valueDate === undefined) && (missing0 = "valueDate")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs6 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.percentage !== undefined){let data3 = data.percentage;const _errs8 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/percentage",schemaPath:"#/properties/percentage/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;