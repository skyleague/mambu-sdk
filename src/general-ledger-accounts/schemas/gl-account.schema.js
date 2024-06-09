/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GLAccount","type":"object","description":"Represents a general ledger account.","properties":{"activated":{"type":"boolean","description":"`TRUE` if the account is activated and may be used, `FALSE` otherwise."},"allowManualJournalEntries":{"type":"boolean","description":"`TRUE` if manual journal entries are allowed, `FALSE` otherwise."},"balance":{"type":"number","description":"The balance of the general ledger account, which is only populated for the GET /glaccounts endpoint."},"creationDate":{"type":"string","description":"The creation date for this account, which is stored as UTC.","format":"date-time"},"currency":{"$ref":"#/$defs/Currency"},"description":{"type":"string","description":"A description of the general ledger account."},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"glCode":{"type":"string","description":"The general ledger code used to identify different account types. Also used for grouping and categorizing accounts. For example: an account code of '3201' is considered a subtype of '3200'."},"lastModifiedDate":{"type":"string","description":"The last modification date and time, which is stored as UTC.","format":"date-time"},"migrationEventKey":{"type":"string","description":"The data migration event key if the general ledger account was created as a part of a data migration event."},"name":{"type":"string","description":"The name of the general ledger account."},"stripTrailingZeros":{"type":"boolean","description":"`TRUE` if trailing zeros are stripped, `FALSE` otherwise."},"type":{"description":"The general ledger account type.","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"usage":{"description":"The usage type of the general ledger account. `DETAIL` accounts are used to stores transaction balances. `HEADER` accounts are used to organise and group detail accounts for reporting purposes.","enum":["DETAIL","HEADER"]}},"additionalProperties":true,"$defs":{"Currency":{"type":"object","description":"Represents a currency eg. USD, EUR.","properties":{"code":{"description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZIG","ZMK","ZWL","ZMW","SSP","NON_FIAT"]},"currencyCode":{"type":"string","description":"Currency code for NON_FIAT currency."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents a currency eg. USD, EUR.","properties":{"code":{"description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZIG","ZMK","ZWL","ZMW","SSP","NON_FIAT"]},"currencyCode":{"type":"string","description":"Currency code for NON_FIAT currency."}},"additionalProperties":true};const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.activated !== undefined){const _errs2 = errors;if(typeof data.activated !== "boolean"){validate10.errors = [{instancePath:instancePath+"/activated",schemaPath:"#/properties/activated/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.allowManualJournalEntries !== undefined){const _errs4 = errors;if(typeof data.allowManualJournalEntries !== "boolean"){validate10.errors = [{instancePath:instancePath+"/allowManualJournalEntries",schemaPath:"#/properties/allowManualJournalEntries/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.balance !== undefined){let data2 = data.balance;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/balance",schemaPath:"#/properties/balance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data4 = data.currency;const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.code !== undefined){const _errs14 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.code.enum){if(func0(data4.code, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currency/properties/code/enum",keyword:"enum",params:{allowedValues: schema12.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data4.currencyCode !== undefined){const _errs15 = errors;if(typeof data4.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currency/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currency/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs17 = errors;if(typeof data.description !== "string"){validate10.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs19 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.glCode !== undefined){const _errs21 = errors;if(typeof data.glCode !== "string"){validate10.errors = [{instancePath:instancePath+"/glCode",schemaPath:"#/properties/glCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs23 = errors;if(errors === _errs23){if(errors === _errs23){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.migrationEventKey !== undefined){const _errs25 = errors;if(typeof data.migrationEventKey !== "string"){validate10.errors = [{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs27 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.stripTrailingZeros !== undefined){const _errs29 = errors;if(typeof data.stripTrailingZeros !== "boolean"){validate10.errors = [{instancePath:instancePath+"/stripTrailingZeros",schemaPath:"#/properties/stripTrailingZeros/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs31 = errors;let valid4;valid4 = false;for(const v1 of schema11.properties.type.enum){if(func0(data.type, v1)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data15 = data.usage;const _errs32 = errors;if(!((data15 === "DETAIL") || (data15 === "HEADER"))){validate10.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues: schema11.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs32 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;