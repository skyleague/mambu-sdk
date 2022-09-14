/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"PaymentMadeTransactionInput","type":"object","description":"Represents the request payload for creating a transaction of type PAYMENT_MADE","properties":{"transactionDetails":{"title":"transactionDetails","$ref":"#/$defs/LoanTransactionDetailsInputaf30"},"amount":{"type":"number","title":"amount","description":"The amount of the payment"},"notes":{"type":"string","title":"notes","description":"Notes about the payment made transaction. The notes can have at most 255 characters in length."},"externalId":{"type":"string","title":"externalId","description":"The external id of the payment made transaction, customizable, unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"The booking date of the payment made transaction (as Organization Time)","format":"date-time"},"valueDate":{"type":"string","title":"valueDate","description":"The entry date of the payment made transaction (as Organization Time)","format":"date-time"},"originalCurrencyCode":{"type":"string","title":"originalCurrencyCode","description":"The currency code for the payment made transaction"}},"required":["amount"],"additionalProperties":true,"$defs":{"LoanTransactionDetailsInputaf30":{"type":"object","title":"LoanTransactionDetailsInputaf30","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"LoanTransactionDetailsInputaf30","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.transactionDetails !== undefined){let data0 = data.transactionDetails;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.transactionChannelId !== undefined){const _errs6 = errors;if(typeof data0.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.transactionChannelKey !== undefined){const _errs8 = errors;if(typeof data0.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data3 = data.amount;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs14 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs18 = errors;if(errors === _errs18){if(errors === _errs18){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrencyCode !== undefined){const _errs20 = errors;if(typeof data.originalCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrencyCode",schemaPath:"#/properties/originalCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;