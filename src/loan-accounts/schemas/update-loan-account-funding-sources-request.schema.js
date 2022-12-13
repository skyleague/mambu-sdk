/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"updateLoanAccountFundingSourcesRequest","type":"array","items":{"$ref":"#/$defs/InvestorFundaf30"},"$defs":{"InvestorFundaf30":{"type":"object","title":"InvestorFundaf30","description":"Contains the details about an investor fund including fields like encoded key, guarantor type, amount and guarantor key","properties":{"amount":{"type":"number","title":"amount","description":"The amount used by the client for the guaranty"},"interestCommission":{"type":"number","title":"interestCommission","description":"The constraint minimum value"},"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The key of the deposit account used by the guarantor (populated when the guaranty type is GUARANTOR). It can be null."},"assetName":{"type":"string","title":"assetName","description":"The name of a value the client guarantees with (populated when the guaranty type is ASSET)"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"Investor fund unique identifier. All versions of an investor fund will have same id."},"guarantorKey":{"type":"string","title":"guarantorKey","description":"The key of the client/group used as the guarantor."},"guarantorType":{"title":"guarantorType","description":"The type of the guarantor (client/group)","enum":["CLIENT","GROUP"]},"sharePercentage":{"type":"number","title":"sharePercentage","description":"Percentage of loan shares this investor owns"}},"required":["amount","guarantorKey","guarantorType"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"InvestorFundaf30","description":"Contains the details about an investor fund including fields like encoded key, guarantor type, amount and guarantor key","properties":{"amount":{"type":"number","title":"amount","description":"The amount used by the client for the guaranty"},"interestCommission":{"type":"number","title":"interestCommission","description":"The constraint minimum value"},"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The key of the deposit account used by the guarantor (populated when the guaranty type is GUARANTOR). It can be null."},"assetName":{"type":"string","title":"assetName","description":"The name of a value the client guarantees with (populated when the guaranty type is ASSET)"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"Investor fund unique identifier. All versions of an investor fund will have same id."},"guarantorKey":{"type":"string","title":"guarantorKey","description":"The key of the client/group used as the guarantor."},"guarantorType":{"title":"guarantorType","description":"The type of the guarantor (client/group)","enum":["CLIENT","GROUP"]},"sharePercentage":{"type":"number","title":"sharePercentage","description":"Percentage of loan shares this investor owns"}},"required":["amount","guarantorKey","guarantorType"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((((data0.amount === undefined) && (missing0 = "amount")) || ((data0.guarantorKey === undefined) && (missing0 = "guarantorKey"))) || ((data0.guarantorType === undefined) && (missing0 = "guarantorType"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/InvestorFundaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.amount !== undefined){let data1 = data0.amount;const _errs5 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/amount",schemaPath:"#/$defs/InvestorFundaf30/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.interestCommission !== undefined){let data2 = data0.interestCommission;const _errs7 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/interestCommission",schemaPath:"#/$defs/InvestorFundaf30/properties/interestCommission/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.depositAccountKey !== undefined){const _errs9 = errors;if(typeof data0.depositAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/depositAccountKey",schemaPath:"#/$defs/InvestorFundaf30/properties/depositAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.assetName !== undefined){const _errs11 = errors;if(typeof data0.assetName !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/assetName",schemaPath:"#/$defs/InvestorFundaf30/properties/assetName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs13 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/InvestorFundaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.id !== undefined){const _errs15 = errors;if(typeof data0.id !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/id",schemaPath:"#/$defs/InvestorFundaf30/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.guarantorKey !== undefined){const _errs17 = errors;if(typeof data0.guarantorKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/guarantorKey",schemaPath:"#/$defs/InvestorFundaf30/properties/guarantorKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data0.guarantorType !== undefined){let data8 = data0.guarantorType;const _errs19 = errors;if(!((data8 === "CLIENT") || (data8 === "GROUP"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/guarantorType",schemaPath:"#/$defs/InvestorFundaf30/properties/guarantorType/enum",keyword:"enum",params:{allowedValues: schema12.properties.guarantorType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data0.sharePercentage !== undefined){let data9 = data0.sharePercentage;const _errs20 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/sharePercentage",schemaPath:"#/$defs/InvestorFundaf30/properties/sharePercentage/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs20 === errors;}else {var valid2 = true;}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/InvestorFundaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;