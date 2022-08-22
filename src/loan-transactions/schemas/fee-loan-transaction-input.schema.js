/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"FeeLoanTransactionInput","description":"Represents the request payload for creating a transaction of type FEE_APPLIED","properties":{"installmentNumber":{"type":"integer","title":"installmentNumber","description":"The installment number on which the fee will be applied"},"amount":{"type":"number","title":"amount","description":"The fee amount to be applied on the account"},"notes":{"type":"string","title":"notes","description":"Extra notes about the current transaction"},"predefinedFeeKey":{"type":"string","title":"predefinedFeeKey","description":"The encodedKey of the predefined fee that defines the current fee"},"externalId":{"type":"string","title":"externalId","description":"The external id of the repayment transaction, customizable, unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"The date when the fee transaction is logged into accounting (as Organization Time)","format":"date-time"},"valueDate":{"type":"string","title":"valueDate","description":"The date when to apply the fee (as Organization Time)","format":"date-time"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((((((key0 === "installmentNumber") || (key0 === "amount")) || (key0 === "notes")) || (key0 === "predefinedFeeKey")) || (key0 === "externalId")) || (key0 === "bookingDate")) || (key0 === "valueDate"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.installmentNumber !== undefined){let data0 = data.installmentNumber;const _errs2 = errors;if(!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/installmentNumber",schemaPath:"#/properties/installmentNumber/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data1 = data.amount;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs6 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.predefinedFeeKey !== undefined){const _errs8 = errors;if(typeof data.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/predefinedFeeKey",schemaPath:"#/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs10 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs12 = errors;if(errors === _errs12){if(errors === _errs12){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;