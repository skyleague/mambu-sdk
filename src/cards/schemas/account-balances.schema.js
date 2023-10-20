/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AccountBalances","type":"object","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","title":"accountId","description":"The unique account identifier"},"totalBalance":{"type":"number","title":"totalBalance","description":"The current balance of a deposit account or principal balance of a revolving credit"},"cardType":{"title":"cardType","description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","title":"creditLimit","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code used for the account"},"availableBalance":{"type":"number","title":"availableBalance","description":"The available balance of a deposit or credit account"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.accountId !== undefined){const _errs2 = errors;if(typeof data.accountId !== "string"){validate10.errors = [{instancePath:instancePath+"/accountId",schemaPath:"#/properties/accountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.totalBalance !== undefined){let data1 = data.totalBalance;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/totalBalance",schemaPath:"#/properties/totalBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.cardType !== undefined){let data2 = data.cardType;const _errs6 = errors;if(!((data2 === "DEBIT") || (data2 === "CREDIT"))){validate10.errors = [{instancePath:instancePath+"/cardType",schemaPath:"#/properties/cardType/enum",keyword:"enum",params:{allowedValues: schema11.properties.cardType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.creditLimit !== undefined){let data3 = data.creditLimit;const _errs7 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/creditLimit",schemaPath:"#/properties/creditLimit/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs9 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.availableBalance !== undefined){let data5 = data.availableBalance;const _errs11 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/availableBalance",schemaPath:"#/properties/availableBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;