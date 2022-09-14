/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"SellFundingSourceAction","type":"object","description":"Allows specifying sell function source action details","properties":{"purchases":{"type":"array","title":"purchases","description":"Funding source purchase list","items":{"description":"Funding source purchase list","$ref":"#/$defs/FundingSourcePurchaseaf30"}}},"additionalProperties":true,"$defs":{"FundingSourcePurchaseaf30":{"type":"object","title":"FundingSourcePurchaseaf30","description":"Funding source purchase, hold information about a funding source purchase (buyer, price, amount)","properties":{"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The buyer funding account (savings account) key"},"amount":{"type":"number","title":"amount","description":"The amount bought (a portion of the whole fraction being sold)"},"price":{"type":"number","title":"price","description":"The price paid for the amount"}},"required":["amount","price"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"FundingSourcePurchaseaf30","description":"Funding source purchase, hold information about a funding source purchase (buyer, price, amount)","properties":{"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The buyer funding account (savings account) key"},"amount":{"type":"number","title":"amount","description":"The amount bought (a portion of the whole fraction being sold)"},"price":{"type":"number","title":"price","description":"The price paid for the amount"}},"required":["amount","price"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.purchases !== undefined){let data0 = data.purchases;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){let missing0;if(((data1.amount === undefined) && (missing0 = "amount")) || ((data1.price === undefined) && (missing0 = "price"))){validate10.errors = [{instancePath:instancePath+"/purchases/" + i0,schemaPath:"#/$defs/FundingSourcePurchaseaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data1.depositAccountKey !== undefined){const _errs8 = errors;if(typeof data1.depositAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/purchases/" + i0+"/depositAccountKey",schemaPath:"#/$defs/FundingSourcePurchaseaf30/properties/depositAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.amount !== undefined){let data3 = data1.amount;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/purchases/" + i0+"/amount",schemaPath:"#/$defs/FundingSourcePurchaseaf30/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.price !== undefined){let data4 = data1.price;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/purchases/" + i0+"/price",schemaPath:"#/$defs/FundingSourcePurchaseaf30/properties/price/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/purchases/" + i0,schemaPath:"#/$defs/FundingSourcePurchaseaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/purchases",schemaPath:"#/properties/purchases/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;