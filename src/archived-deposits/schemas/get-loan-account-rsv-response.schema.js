/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetLoanAccountRsvResponse","type":"array","items":{"$ref":"#/$defs/LoanAccountRepaymentScheduleVersioning"},"$defs":{"LoanAccountRepaymentScheduleVersioning":{"type":"object","description":"Represents a single repayment versioning details structure.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the versioning."},"id":{"type":"integer","description":"The repayment schedule versioning ID."},"loanAccountChangedEventKey":{"type":"string","description":"The loan account event which triggered the versioning."},"loanTransactionKey":{"type":"string","description":"The loan transaction key which triggered the versioning."},"versioningContent":{"type":"array","description":"The loan account repayment schedule versioning list.","items":{"$ref":"#/$defs/Installment"}}},"additionalProperties":true},"Installment":{"type":"object","description":"Represents a single installment details structure.","properties":{"dueDate":{"type":"string","description":"The installment due date.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the installment, which is auto generated, and unique."},"expectedClosingBalance":{"type":"number","description":"The expected closing balance is the remaining amount per installment only applicable for interest only equal installment products."},"fee":{"$ref":"#/$defs/InstallmentFee"},"feeDetails":{"type":"array","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetails"}},"interest":{"$ref":"#/$defs/InstallmentAllocationElementTaxableAmount"},"interestAccrued":{"type":"number","description":"The interest accrued calculated on previous repayment closing balance only applicable interest only equal installment products."},"isPaymentHoliday":{"type":"boolean","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."},"lastPaidDate":{"type":"string","description":"The installment last paid date.","format":"date-time"},"number":{"type":"string","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"parentAccountKey":{"type":"string","description":"The parent account key of the installment."},"penalty":{"$ref":"#/$defs/InstallmentAllocationElementTaxableAmount"},"principal":{"$ref":"#/$defs/InstallmentAllocationElementAmount"},"repaidDate":{"type":"string","description":"The installment repaid date.","format":"date-time"},"state":{"description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]}},"additionalProperties":true},"InstallmentFee":{"type":"object","description":"Represents an installment fee structure.","properties":{"amount":{"$ref":"#/$defs/FeeAmount"},"tax":{"$ref":"#/$defs/Amount"}},"additionalProperties":true},"FeeAmount":{"type":"object","description":"Represents a fee amount.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."},"paid":{"type":"number","description":"The paid amount."}},"additionalProperties":true},"Amount":{"type":"object","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","description":"The paid amount."}},"additionalProperties":true},"InstallmentFeeDetails":{"type":"object","description":"Represents fee details for an installment.","properties":{"amount":{"$ref":"#/$defs/AmountWithReduced"},"encodedKey":{"type":"string","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","description":"The id of the fee, provided by the client"},"name":{"type":"string","description":"The name of the fee"},"tax":{"$ref":"#/$defs/AmountWithReduced"}},"additionalProperties":true},"AmountWithReduced":{"type":"object","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","description":"The paid amount."},"reduced":{"type":"number","description":"The reduced amount."}},"additionalProperties":true},"InstallmentAllocationElementTaxableAmount":{"type":"object","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"$ref":"#/$defs/Amount"},"tax":{"$ref":"#/$defs/Amount"}},"additionalProperties":true},"InstallmentAllocationElementAmount":{"type":"object","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"$ref":"#/$defs/Amount"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents a single repayment versioning details structure.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the versioning."},"id":{"type":"integer","description":"The repayment schedule versioning ID."},"loanAccountChangedEventKey":{"type":"string","description":"The loan account event which triggered the versioning."},"loanTransactionKey":{"type":"string","description":"The loan transaction key which triggered the versioning."},"versioningContent":{"type":"array","description":"The loan account repayment schedule versioning list.","items":{"$ref":"#/$defs/Installment"}}},"additionalProperties":true};const schema13 = {"type":"object","description":"Represents a single installment details structure.","properties":{"dueDate":{"type":"string","description":"The installment due date.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the installment, which is auto generated, and unique."},"expectedClosingBalance":{"type":"number","description":"The expected closing balance is the remaining amount per installment only applicable for interest only equal installment products."},"fee":{"$ref":"#/$defs/InstallmentFee"},"feeDetails":{"type":"array","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetails"}},"interest":{"$ref":"#/$defs/InstallmentAllocationElementTaxableAmount"},"interestAccrued":{"type":"number","description":"The interest accrued calculated on previous repayment closing balance only applicable interest only equal installment products."},"isPaymentHoliday":{"type":"boolean","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."},"lastPaidDate":{"type":"string","description":"The installment last paid date.","format":"date-time"},"number":{"type":"string","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"parentAccountKey":{"type":"string","description":"The parent account key of the installment."},"penalty":{"$ref":"#/$defs/InstallmentAllocationElementTaxableAmount"},"principal":{"$ref":"#/$defs/InstallmentAllocationElementAmount"},"repaidDate":{"type":"string","description":"The installment repaid date.","format":"date-time"},"state":{"description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]}},"additionalProperties":true};const schema14 = {"type":"object","description":"Represents an installment fee structure.","properties":{"amount":{"$ref":"#/$defs/FeeAmount"},"tax":{"$ref":"#/$defs/Amount"}},"additionalProperties":true};const schema15 = {"type":"object","description":"Represents a fee amount.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."},"paid":{"type":"number","description":"The paid amount."}},"additionalProperties":true};const schema16 = {"type":"object","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","description":"The paid amount."}},"additionalProperties":true};function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate13.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/FeeAmount/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate13.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/FeeAmount/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.expectedUnapplied !== undefined){let data3 = data0.expectedUnapplied;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate13.errors = [{instancePath:instancePath+"/amount/expectedUnapplied",schemaPath:"#/$defs/FeeAmount/properties/expectedUnapplied/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data4 = data0.paid;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate13.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/FeeAmount/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {validate13.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/FeeAmount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data5 = data.tax;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data5 && typeof data5 == "object" && !Array.isArray(data5)){if(data5.due !== undefined){let data6 = data5.due;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate13.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amount/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data5.expected !== undefined){let data7 = data5.expected;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate13.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amount/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data5.paid !== undefined){let data8 = data5.paid;const _errs22 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate13.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amount/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}}}}else {validate13.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}else {validate13.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate13.errors = vErrors;return errors === 0;}const schema17 = {"type":"object","description":"Represents fee details for an installment.","properties":{"amount":{"$ref":"#/$defs/AmountWithReduced"},"encodedKey":{"type":"string","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","description":"The id of the fee, provided by the client"},"name":{"type":"string","description":"The name of the fee"},"tax":{"$ref":"#/$defs/AmountWithReduced"}},"additionalProperties":true};const schema18 = {"type":"object","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","description":"The due amount."},"expected":{"type":"number","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","description":"The paid amount."},"reduced":{"type":"number","description":"The reduced amount."}},"additionalProperties":true};function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate15.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/AmountWithReduced/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate15.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/AmountWithReduced/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate15.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/AmountWithReduced/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.reduced !== undefined){let data4 = data0.reduced;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate15.errors = [{instancePath:instancePath+"/amount/reduced",schemaPath:"#/$defs/AmountWithReduced/properties/reduced/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {validate15.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/AmountWithReduced/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs14 = errors;if(typeof data.encodedKey !== "string"){validate15.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs16 = errors;if(typeof data.id !== "string"){validate15.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs18 = errors;if(typeof data.name !== "string"){validate15.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data8 = data.tax;const _errs20 = errors;const _errs21 = errors;if(errors === _errs21){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.due !== undefined){let data9 = data8.due;const _errs24 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate15.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/AmountWithReduced/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data8.expected !== undefined){let data10 = data8.expected;const _errs26 = errors;if(!((typeof data10 == "number") && (isFinite(data10)))){validate15.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/AmountWithReduced/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}if(valid4){if(data8.paid !== undefined){let data11 = data8.paid;const _errs28 = errors;if(!((typeof data11 == "number") && (isFinite(data11)))){validate15.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/AmountWithReduced/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs28 === errors;}else {var valid4 = true;}if(valid4){if(data8.reduced !== undefined){let data12 = data8.reduced;const _errs30 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){validate15.errors = [{instancePath:instancePath+"/tax/reduced",schemaPath:"#/$defs/AmountWithReduced/properties/reduced/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs30 === errors;}else {var valid4 = true;}}}}}else {validate15.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/AmountWithReduced/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}}else {validate15.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate15.errors = vErrors;return errors === 0;}const schema20 = {"type":"object","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"$ref":"#/$defs/Amount"},"tax":{"$ref":"#/$defs/Amount"}},"additionalProperties":true};function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate17.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amount/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate17.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amount/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate17.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amount/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate17.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data4 = data.tax;const _errs12 = errors;const _errs13 = errors;if(errors === _errs13){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.due !== undefined){let data5 = data4.due;const _errs16 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate17.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amount/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs16 === errors;}else {var valid4 = true;}if(valid4){if(data4.expected !== undefined){let data6 = data4.expected;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate17.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amount/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data4.paid !== undefined){let data7 = data4.paid;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate17.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amount/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}}}}else {validate17.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}else {validate17.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate17.errors = vErrors;return errors === 0;}const schema23 = {"type":"object","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"$ref":"#/$defs/Amount"}},"additionalProperties":true};function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate20.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amount/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate20.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amount/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate20.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amount/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate20.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amount/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.dueDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.dueDate === "string")){validate12.errors = [{instancePath:instancePath+"/dueDate",schemaPath:"#/properties/dueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.expectedClosingBalance !== undefined){let data2 = data.expectedClosingBalance;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate12.errors = [{instancePath:instancePath+"/expectedClosingBalance",schemaPath:"#/properties/expectedClosingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.fee !== undefined){const _errs8 = errors;if(!(validate13(data.fee, {instancePath:instancePath+"/fee",parentData:data,parentDataProperty:"fee",rootData}))){vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);errors = vErrors.length;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.feeDetails !== undefined){let data4 = data.feeDetails;const _errs9 = errors;if(errors === _errs9){if(Array.isArray(data4)){var valid1 = true;const len0 = data4.length;for(let i0=0; i0<len0; i0++){const _errs11 = errors;if(!(validate15(data4[i0], {instancePath:instancePath+"/feeDetails/" + i0,parentData:data4,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);errors = vErrors.length;}var valid1 = _errs11 === errors;if(!valid1){break;}}}else {validate12.errors = [{instancePath:instancePath+"/feeDetails",schemaPath:"#/properties/feeDetails/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.interest !== undefined){const _errs12 = errors;if(!(validate17(data.interest, {instancePath:instancePath+"/interest",parentData:data,parentDataProperty:"interest",rootData}))){vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);errors = vErrors.length;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.interestAccrued !== undefined){let data7 = data.interestAccrued;const _errs13 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate12.errors = [{instancePath:instancePath+"/interestAccrued",schemaPath:"#/properties/interestAccrued/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.isPaymentHoliday !== undefined){const _errs15 = errors;if(typeof data.isPaymentHoliday !== "boolean"){validate12.errors = [{instancePath:instancePath+"/isPaymentHoliday",schemaPath:"#/properties/isPaymentHoliday/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.lastPaidDate !== undefined){const _errs17 = errors;if(errors === _errs17){if(errors === _errs17){if(!(typeof data.lastPaidDate === "string")){validate12.errors = [{instancePath:instancePath+"/lastPaidDate",schemaPath:"#/properties/lastPaidDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.number !== undefined){const _errs19 = errors;if(typeof data.number !== "string"){validate12.errors = [{instancePath:instancePath+"/number",schemaPath:"#/properties/number/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.parentAccountKey !== undefined){const _errs21 = errors;if(typeof data.parentAccountKey !== "string"){validate12.errors = [{instancePath:instancePath+"/parentAccountKey",schemaPath:"#/properties/parentAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.penalty !== undefined){const _errs23 = errors;if(!(validate17(data.penalty, {instancePath:instancePath+"/penalty",parentData:data,parentDataProperty:"penalty",rootData}))){vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);errors = vErrors.length;}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.principal !== undefined){const _errs24 = errors;if(!(validate20(data.principal, {instancePath:instancePath+"/principal",parentData:data,parentDataProperty:"principal",rootData}))){vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);errors = vErrors.length;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.repaidDate !== undefined){const _errs25 = errors;if(errors === _errs25){if(errors === _errs25){if(!(typeof data.repaidDate === "string")){validate12.errors = [{instancePath:instancePath+"/repaidDate",schemaPath:"#/properties/repaidDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs27 = errors;let valid2;valid2 = false;for(const v0 of schema13.properties.state.enum){if(func0(data.state, v0)){valid2 = true;break;}}if(!valid2){validate12.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema13.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.encodedKey !== undefined){const _errs2 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){let data1 = data.id;const _errs4 = errors;if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.loanAccountChangedEventKey !== undefined){const _errs6 = errors;if(typeof data.loanAccountChangedEventKey !== "string"){validate11.errors = [{instancePath:instancePath+"/loanAccountChangedEventKey",schemaPath:"#/properties/loanAccountChangedEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.loanTransactionKey !== undefined){const _errs8 = errors;if(typeof data.loanTransactionKey !== "string"){validate11.errors = [{instancePath:instancePath+"/loanTransactionKey",schemaPath:"#/properties/loanTransactionKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.versioningContent !== undefined){let data4 = data.versioningContent;const _errs10 = errors;if(errors === _errs10){if(Array.isArray(data4)){var valid1 = true;const len0 = data4.length;for(let i0=0; i0<len0; i0++){const _errs12 = errors;if(!(validate12(data4[i0], {instancePath:instancePath+"/versioningContent/" + i0,parentData:data4,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid1 = _errs12 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/versioningContent",schemaPath:"#/properties/versioningContent/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;