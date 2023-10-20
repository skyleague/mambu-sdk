/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"LoanAccountPayOffInput","type":"object","description":"Represents the information for loan account pay off action.","properties":{"transactionDetails":{"title":"transactionDetails","$ref":"#/$defs/TransactionDetailsaf30"},"externalId":{"type":"string","title":"externalId","description":"The external ID for the repayment transaction."},"notes":{"type":"string","title":"notes","description":"The notes for the repayment transaction logged for the pay off action."},"payOffAdjustableAmounts":{"title":"payOffAdjustableAmounts","$ref":"#/$defs/PayOffAdjustableAmountsaf30"}},"additionalProperties":true,"$defs":{"TransactionDetailsaf30":{"type":"object","title":"TransactionDetailsaf30","description":"Contains the details about transaction including fields like transaction channel key and channel id","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true},"PayOffAdjustableAmountsaf30":{"type":"object","title":"PayOffAdjustableAmountsaf30","description":"Adjustable amounts to be paid for Pay Off action","properties":{"feesPaid":{"type":"number","title":"feesPaid","description":"The fee amount to be paid for Pay Off action"},"penaltyPaid":{"type":"number","title":"penaltyPaid","description":"The penalty amount to be paid for Pay Off action"},"interestPaid":{"type":"number","title":"interestPaid","description":"The interest amount to be paid for Pay Off action"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"TransactionDetailsaf30","description":"Contains the details about transaction including fields like transaction channel key and channel id","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":true};const schema13 = {"type":"object","title":"PayOffAdjustableAmountsaf30","description":"Adjustable amounts to be paid for Pay Off action","properties":{"feesPaid":{"type":"number","title":"feesPaid","description":"The fee amount to be paid for Pay Off action"},"penaltyPaid":{"type":"number","title":"penaltyPaid","description":"The penalty amount to be paid for Pay Off action"},"interestPaid":{"type":"number","title":"interestPaid","description":"The interest amount to be paid for Pay Off action"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.transactionDetails !== undefined){let data0 = data.transactionDetails;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.transactionChannelId !== undefined){const _errs6 = errors;if(typeof data0.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/TransactionDetailsaf30/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.transactionChannelKey !== undefined){const _errs8 = errors;if(typeof data0.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/TransactionDetailsaf30/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/TransactionDetailsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs10 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.payOffAdjustableAmounts !== undefined){let data5 = data.payOffAdjustableAmounts;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data5 && typeof data5 == "object" && !Array.isArray(data5)){if(data5.feesPaid !== undefined){let data6 = data5.feesPaid;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/feesPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/feesPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data5.penaltyPaid !== undefined){let data7 = data5.penaltyPaid;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/penaltyPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/penaltyPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data5.interestPaid !== undefined){let data8 = data5.interestPaid;const _errs22 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/interestPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/interestPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;