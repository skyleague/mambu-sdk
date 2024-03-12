/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"editScheduleRequest","type":"array","items":{"$ref":"#/$defs/Installmentaf30"},"$defs":{"Installmentaf30":{"type":"object","title":"Installmentaf30","description":"Represents a single installment details structure.","properties":{"dueDate":{"type":"string","title":"dueDate","description":"The installment due date.","format":"date-time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the installment, which is auto generated, and unique."},"expectedClosingBalance":{"type":"number","title":"expectedClosingBalance","description":"The expected closing balance is the remaining amount per installment only applicable for interest only equal installment products."},"fee":{"title":"fee","$ref":"#/$defs/InstallmentFeeaf30"},"feeDetails":{"type":"array","title":"feeDetails","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetailsaf30"}},"interest":{"title":"interest","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"interestAccrued":{"type":"number","title":"interestAccrued","description":"The interest accrued calculated on previous repayment closing balance only applicable interest only equal installment products."},"isPaymentHoliday":{"type":"boolean","title":"isPaymentHoliday","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."},"lastPaidDate":{"type":"string","title":"lastPaidDate","description":"The installment last paid date.","format":"date-time"},"number":{"type":"string","title":"number","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"parentAccountKey":{"type":"string","title":"parentAccountKey","description":"The parent account key of the installment."},"penalty":{"title":"penalty","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"principal":{"title":"principal","$ref":"#/$defs/InstallmentAllocationElementAmountaf30"},"repaidDate":{"type":"string","title":"repaidDate","description":"The installment repaid date.","format":"date-time"},"state":{"title":"state","description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]}},"additionalProperties":true},"InstallmentFeeaf30":{"type":"object","title":"InstallmentFeeaf30","description":"Represents an installment fee structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/FeeAmountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true},"FeeAmountaf30":{"type":"object","title":"FeeAmountaf30","description":"Represents a fee amount.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","title":"expectedUnapplied","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."}},"additionalProperties":true},"Amountaf30":{"type":"object","title":"Amountaf30","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."}},"additionalProperties":true},"InstallmentFeeDetailsaf30":{"type":"object","title":"InstallmentFeeDetailsaf30","description":"Represents fee details for an installment.","properties":{"amount":{"title":"amount","$ref":"#/$defs/AmountWithReducedaf30"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the fee, provided by the client"},"name":{"type":"string","title":"name","description":"The name of the fee"},"tax":{"title":"tax","$ref":"#/$defs/AmountWithReducedaf30"}},"additionalProperties":true},"AmountWithReducedaf30":{"type":"object","title":"AmountWithReducedaf30","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."},"reduced":{"type":"number","title":"reduced","description":"The reduced amount."}},"additionalProperties":true},"InstallmentAllocationElementTaxableAmountaf30":{"type":"object","title":"InstallmentAllocationElementTaxableAmountaf30","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true},"InstallmentAllocationElementAmountaf30":{"type":"object","title":"InstallmentAllocationElementAmountaf30","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"Installmentaf30","description":"Represents a single installment details structure.","properties":{"dueDate":{"type":"string","title":"dueDate","description":"The installment due date.","format":"date-time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the installment, which is auto generated, and unique."},"expectedClosingBalance":{"type":"number","title":"expectedClosingBalance","description":"The expected closing balance is the remaining amount per installment only applicable for interest only equal installment products."},"fee":{"title":"fee","$ref":"#/$defs/InstallmentFeeaf30"},"feeDetails":{"type":"array","title":"feeDetails","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetailsaf30"}},"interest":{"title":"interest","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"interestAccrued":{"type":"number","title":"interestAccrued","description":"The interest accrued calculated on previous repayment closing balance only applicable interest only equal installment products."},"isPaymentHoliday":{"type":"boolean","title":"isPaymentHoliday","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."},"lastPaidDate":{"type":"string","title":"lastPaidDate","description":"The installment last paid date.","format":"date-time"},"number":{"type":"string","title":"number","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"parentAccountKey":{"type":"string","title":"parentAccountKey","description":"The parent account key of the installment."},"penalty":{"title":"penalty","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"principal":{"title":"principal","$ref":"#/$defs/InstallmentAllocationElementAmountaf30"},"repaidDate":{"type":"string","title":"repaidDate","description":"The installment repaid date.","format":"date-time"},"state":{"title":"state","description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]}},"additionalProperties":true};const schema13 = {"type":"object","title":"InstallmentFeeaf30","description":"Represents an installment fee structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/FeeAmountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};const schema14 = {"type":"object","title":"FeeAmountaf30","description":"Represents a fee amount.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","title":"expectedUnapplied","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."}},"additionalProperties":true};const schema15 = {"type":"object","title":"Amountaf30","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."}},"additionalProperties":true};function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate12.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/FeeAmountaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate12.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/FeeAmountaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.expectedUnapplied !== undefined){let data3 = data0.expectedUnapplied;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate12.errors = [{instancePath:instancePath+"/amount/expectedUnapplied",schemaPath:"#/$defs/FeeAmountaf30/properties/expectedUnapplied/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data4 = data0.paid;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate12.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/FeeAmountaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {validate12.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/FeeAmountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data5 = data.tax;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data5 && typeof data5 == "object" && !Array.isArray(data5)){if(data5.due !== undefined){let data6 = data5.due;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate12.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data5.expected !== undefined){let data7 = data5.expected;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate12.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data5.paid !== undefined){let data8 = data5.paid;const _errs22 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate12.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}}}}else {validate12.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}const schema16 = {"type":"object","title":"InstallmentFeeDetailsaf30","description":"Represents fee details for an installment.","properties":{"amount":{"title":"amount","$ref":"#/$defs/AmountWithReducedaf30"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the fee, provided by the client"},"name":{"type":"string","title":"name","description":"The name of the fee"},"tax":{"title":"tax","$ref":"#/$defs/AmountWithReducedaf30"}},"additionalProperties":true};const schema17 = {"type":"object","title":"AmountWithReducedaf30","description":"Represents a simple installment amount structure.","properties":{"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"paid":{"type":"number","title":"paid","description":"The paid amount."},"reduced":{"type":"number","title":"reduced","description":"The reduced amount."}},"additionalProperties":true};function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate14.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/AmountWithReducedaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate14.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/AmountWithReducedaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate14.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/AmountWithReducedaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.reduced !== undefined){let data4 = data0.reduced;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate14.errors = [{instancePath:instancePath+"/amount/reduced",schemaPath:"#/$defs/AmountWithReducedaf30/properties/reduced/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {validate14.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/AmountWithReducedaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs14 = errors;if(typeof data.encodedKey !== "string"){validate14.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs16 = errors;if(typeof data.id !== "string"){validate14.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs18 = errors;if(typeof data.name !== "string"){validate14.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data8 = data.tax;const _errs20 = errors;const _errs21 = errors;if(errors === _errs21){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.due !== undefined){let data9 = data8.due;const _errs24 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate14.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/AmountWithReducedaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data8.expected !== undefined){let data10 = data8.expected;const _errs26 = errors;if(!((typeof data10 == "number") && (isFinite(data10)))){validate14.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/AmountWithReducedaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}if(valid4){if(data8.paid !== undefined){let data11 = data8.paid;const _errs28 = errors;if(!((typeof data11 == "number") && (isFinite(data11)))){validate14.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/AmountWithReducedaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs28 === errors;}else {var valid4 = true;}if(valid4){if(data8.reduced !== undefined){let data12 = data8.reduced;const _errs30 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){validate14.errors = [{instancePath:instancePath+"/tax/reduced",schemaPath:"#/$defs/AmountWithReducedaf30/properties/reduced/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs30 === errors;}else {var valid4 = true;}}}}}else {validate14.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/AmountWithReducedaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}}else {validate14.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate14.errors = vErrors;return errors === 0;}const schema19 = {"type":"object","title":"InstallmentAllocationElementTaxableAmountaf30","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate16.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate16.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate16.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate16.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.tax !== undefined){let data4 = data.tax;const _errs12 = errors;const _errs13 = errors;if(errors === _errs13){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.due !== undefined){let data5 = data4.due;const _errs16 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate16.errors = [{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs16 === errors;}else {var valid4 = true;}if(valid4){if(data4.expected !== undefined){let data6 = data4.expected;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate16.errors = [{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data4.paid !== undefined){let data7 = data4.paid;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate16.errors = [{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}}}}else {validate16.errors = [{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}else {validate16.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate16.errors = vErrors;return errors === 0;}const schema22 = {"type":"object","title":"InstallmentAllocationElementAmountaf30","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.amount !== undefined){let data0 = data.amount;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.due !== undefined){let data1 = data0.due;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate19.errors = [{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.expected !== undefined){let data2 = data0.expected;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate19.errors = [{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.paid !== undefined){let data3 = data0.paid;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate19.errors = [{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}}else {validate19.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate19.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate19.errors = vErrors;return errors === 0;}const func0 = require("ajv/dist/runtime/equal").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.dueDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.dueDate === "string")){validate11.errors = [{instancePath:instancePath+"/dueDate",schemaPath:"#/properties/dueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs4 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.expectedClosingBalance !== undefined){let data2 = data.expectedClosingBalance;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate11.errors = [{instancePath:instancePath+"/expectedClosingBalance",schemaPath:"#/properties/expectedClosingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.fee !== undefined){const _errs8 = errors;if(!(validate12(data.fee, {instancePath:instancePath+"/fee",parentData:data,parentDataProperty:"fee",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.feeDetails !== undefined){let data4 = data.feeDetails;const _errs9 = errors;if(errors === _errs9){if(Array.isArray(data4)){var valid1 = true;const len0 = data4.length;for(let i0=0; i0<len0; i0++){const _errs11 = errors;if(!(validate14(data4[i0], {instancePath:instancePath+"/feeDetails/" + i0,parentData:data4,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);errors = vErrors.length;}var valid1 = _errs11 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/feeDetails",schemaPath:"#/properties/feeDetails/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.interest !== undefined){const _errs12 = errors;if(!(validate16(data.interest, {instancePath:instancePath+"/interest",parentData:data,parentDataProperty:"interest",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.interestAccrued !== undefined){let data7 = data.interestAccrued;const _errs13 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate11.errors = [{instancePath:instancePath+"/interestAccrued",schemaPath:"#/properties/interestAccrued/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.isPaymentHoliday !== undefined){const _errs15 = errors;if(typeof data.isPaymentHoliday !== "boolean"){validate11.errors = [{instancePath:instancePath+"/isPaymentHoliday",schemaPath:"#/properties/isPaymentHoliday/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.lastPaidDate !== undefined){const _errs17 = errors;if(errors === _errs17){if(errors === _errs17){if(!(typeof data.lastPaidDate === "string")){validate11.errors = [{instancePath:instancePath+"/lastPaidDate",schemaPath:"#/properties/lastPaidDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.number !== undefined){const _errs19 = errors;if(typeof data.number !== "string"){validate11.errors = [{instancePath:instancePath+"/number",schemaPath:"#/properties/number/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.parentAccountKey !== undefined){const _errs21 = errors;if(typeof data.parentAccountKey !== "string"){validate11.errors = [{instancePath:instancePath+"/parentAccountKey",schemaPath:"#/properties/parentAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.penalty !== undefined){const _errs23 = errors;if(!(validate16(data.penalty, {instancePath:instancePath+"/penalty",parentData:data,parentDataProperty:"penalty",rootData}))){vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);errors = vErrors.length;}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.principal !== undefined){const _errs24 = errors;if(!(validate19(data.principal, {instancePath:instancePath+"/principal",parentData:data,parentDataProperty:"principal",rootData}))){vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);errors = vErrors.length;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.repaidDate !== undefined){const _errs25 = errors;if(errors === _errs25){if(errors === _errs25){if(!(typeof data.repaidDate === "string")){validate11.errors = [{instancePath:instancePath+"/repaidDate",schemaPath:"#/properties/repaidDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs27 = errors;let valid2;valid2 = false;for(const v0 of schema12.properties.state.enum){if(func0(data.state, v0)){valid2 = true;break;}}if(!valid2){validate11.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;