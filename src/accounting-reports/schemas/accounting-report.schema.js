/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AccountingReport","type":"object","description":"Holds the information about the accounting report, wraps calculation result items.","properties":{"reportKey":{"type":"string","title":"reportKey","description":"The encoded key of the generated accounting report"},"items":{"type":"array","title":"items","description":"The list of the accounting report items","items":{"description":"The list of the accounting report items","$ref":"#/$defs/AccountingReportItemaf30"}},"status":{"title":"status","description":"The accounting report generation status","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]}},"additionalProperties":false,"$defs":{"AccountingReportItemaf30":{"type":"object","title":"AccountingReportItemaf30","description":"Holds accounting report information about GL accounts and GL account amounts in both organizational and foreign currencies.","properties":{"foreignAmounts":{"title":"foreignAmounts","$ref":"#/$defs/AccountingReportAmountsaf30"},"glAccount":{"title":"glAccount","$ref":"#/$defs/GlAccountaf30"},"amounts":{"title":"amounts","$ref":"#/$defs/AccountingReportAmountsaf30"}},"additionalProperties":false},"AccountingReportAmountsaf30":{"type":"object","title":"AccountingReportAmountsaf30","description":"Holds the information about accounting report amounts.","properties":{"netChange":{"type":"number","title":"netChange","description":"The net change amount of the GL account"},"closingBalance":{"type":"number","title":"closingBalance","description":"The closing balance amount of the GL account"},"openingBalance":{"type":"number","title":"openingBalance","description":"The opening balance amount of the GL account"},"debits":{"type":"number","title":"debits","description":"The debit amount of the GL account"},"credits":{"type":"number","title":"credits","description":"The credit amount of the GL account"}},"additionalProperties":false},"GlAccountaf30":{"type":"object","title":"GlAccountaf30","description":"The response representation of a GLAccount.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if this GL Account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Indicates when the last modification occurred. Stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'."},"usage":{"title":"usage","description":"Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"Description of the GL Account."},"creationDate":{"type":"string","title":"creationDate","description":"Indicates the creation date for this account. Stored as UTC.","format":"date-time"},"type":{"title":"type","description":"Type of the GL Account","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"Indicates whether manual Journal Entries are allowed or not"},"balance":{"type":"number","title":"balance","description":"Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"Name of the GL Account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"Indicates whether to strip trailing zeros."},"activated":{"type":"boolean","title":"activated","description":"Whether the Account is activated and may be used."}},"additionalProperties":false},"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"AccountingReportItemaf30","description":"Holds accounting report information about GL accounts and GL account amounts in both organizational and foreign currencies.","properties":{"foreignAmounts":{"title":"foreignAmounts","$ref":"#/$defs/AccountingReportAmountsaf30"},"glAccount":{"title":"glAccount","$ref":"#/$defs/GlAccountaf30"},"amounts":{"title":"amounts","$ref":"#/$defs/AccountingReportAmountsaf30"}},"additionalProperties":false};const schema13 = {"type":"object","title":"AccountingReportAmountsaf30","description":"Holds the information about accounting report amounts.","properties":{"netChange":{"type":"number","title":"netChange","description":"The net change amount of the GL account"},"closingBalance":{"type":"number","title":"closingBalance","description":"The closing balance amount of the GL account"},"openingBalance":{"type":"number","title":"openingBalance","description":"The opening balance amount of the GL account"},"debits":{"type":"number","title":"debits","description":"The debit amount of the GL account"},"credits":{"type":"number","title":"credits","description":"The credit amount of the GL account"}},"additionalProperties":false};const schema14 = {"type":"object","title":"GlAccountaf30","description":"The response representation of a GLAccount.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if this GL Account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Indicates when the last modification occurred. Stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'."},"usage":{"title":"usage","description":"Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"Description of the GL Account."},"creationDate":{"type":"string","title":"creationDate","description":"Indicates the creation date for this account. Stored as UTC.","format":"date-time"},"type":{"title":"type","description":"Type of the GL Account","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"Indicates whether manual Journal Entries are allowed or not"},"balance":{"type":"number","title":"balance","description":"Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"Name of the GL Account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"Indicates whether to strip trailing zeros."},"activated":{"type":"boolean","title":"activated","description":"Whether the Account is activated and may be used."}},"additionalProperties":false};const schema15 = {"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;const func0 = require("ajv/dist/runtime/equal").default;function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema14.properties, key0))){validate12.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.migrationEventKey !== undefined){const _errs2 = errors;if(typeof data.migrationEventKey !== "string"){validate12.errors = [{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.lastModifiedDate === "string")){validate12.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.glCode !== undefined){const _errs6 = errors;if(typeof data.glCode !== "string"){validate12.errors = [{instancePath:instancePath+"/glCode",schemaPath:"#/properties/glCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data3 = data.usage;const _errs8 = errors;if(!((data3 === "DETAIL") || (data3 === "HEADER"))){validate12.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues: schema14.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs9 = errors;if(typeof data.description !== "string"){validate12.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs11 = errors;if(errors === _errs11){if(errors === _errs11){if(!(typeof data.creationDate === "string")){validate12.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs13 = errors;let valid1;valid1 = false;for(const v0 of schema14.properties.type.enum){if(func0(data.type, v0)){valid1 = true;break;}}if(!valid1){validate12.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema14.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.allowManualJournalEntries !== undefined){const _errs14 = errors;if(typeof data.allowManualJournalEntries !== "boolean"){validate12.errors = [{instancePath:instancePath+"/allowManualJournalEntries",schemaPath:"#/properties/allowManualJournalEntries/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.balance !== undefined){let data8 = data.balance;const _errs16 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate12.errors = [{instancePath:instancePath+"/balance",schemaPath:"#/properties/balance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs18 = errors;if(typeof data.name !== "string"){validate12.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs20 = errors;if(typeof data.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data11 = data.currency;const _errs22 = errors;const _errs23 = errors;if(errors === _errs23){if(data11 && typeof data11 == "object" && !Array.isArray(data11)){const _errs25 = errors;for(const key1 in data11){if(!((key1 === "currencyCode") || (key1 === "code"))){validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs25 === errors){if(data11.currencyCode !== undefined){const _errs26 = errors;if(typeof data11.currencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs26 === errors;}else {var valid3 = true;}if(valid3){if(data11.code !== undefined){const _errs28 = errors;let valid4;valid4 = false;for(const v1 of schema15.properties.code.enum){if(func0(data11.code, v1)){valid4 = true;break;}}if(!valid4){validate12.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema15.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs28 === errors;}else {var valid3 = true;}}}}else {validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.stripTrailingZeros !== undefined){const _errs29 = errors;if(typeof data.stripTrailingZeros !== "boolean"){validate12.errors = [{instancePath:instancePath+"/stripTrailingZeros",schemaPath:"#/properties/stripTrailingZeros/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.activated !== undefined){const _errs31 = errors;if(typeof data.activated !== "boolean"){validate12.errors = [{instancePath:instancePath+"/activated",schemaPath:"#/properties/activated/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((key0 === "foreignAmounts") || (key0 === "glAccount")) || (key0 === "amounts"))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.foreignAmounts !== undefined){let data0 = data.foreignAmounts;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs5 = errors;for(const key1 in data0){if(!(((((key1 === "netChange") || (key1 === "closingBalance")) || (key1 === "openingBalance")) || (key1 === "debits")) || (key1 === "credits"))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts",schemaPath:"#/$defs/AccountingReportAmountsaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.netChange !== undefined){let data1 = data0.netChange;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts/netChange",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/netChange/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.closingBalance !== undefined){let data2 = data0.closingBalance;const _errs8 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts/closingBalance",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/closingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.openingBalance !== undefined){let data3 = data0.openingBalance;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts/openingBalance",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/openingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.debits !== undefined){let data4 = data0.debits;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts/debits",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/debits/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data0.credits !== undefined){let data5 = data0.credits;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate11.errors = [{instancePath:instancePath+"/foreignAmounts/credits",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/credits/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/foreignAmounts",schemaPath:"#/$defs/AccountingReportAmountsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccount !== undefined){const _errs16 = errors;if(!(validate12(data.glAccount, {instancePath:instancePath+"/glAccount",parentData:data,parentDataProperty:"glAccount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.amounts !== undefined){let data7 = data.amounts;const _errs17 = errors;const _errs18 = errors;if(errors === _errs18){if(data7 && typeof data7 == "object" && !Array.isArray(data7)){const _errs20 = errors;for(const key2 in data7){if(!(((((key2 === "netChange") || (key2 === "closingBalance")) || (key2 === "openingBalance")) || (key2 === "debits")) || (key2 === "credits"))){validate11.errors = [{instancePath:instancePath+"/amounts",schemaPath:"#/$defs/AccountingReportAmountsaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs20 === errors){if(data7.netChange !== undefined){let data8 = data7.netChange;const _errs21 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate11.errors = [{instancePath:instancePath+"/amounts/netChange",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/netChange/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs21 === errors;}else {var valid4 = true;}if(valid4){if(data7.closingBalance !== undefined){let data9 = data7.closingBalance;const _errs23 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate11.errors = [{instancePath:instancePath+"/amounts/closingBalance",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/closingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs23 === errors;}else {var valid4 = true;}if(valid4){if(data7.openingBalance !== undefined){let data10 = data7.openingBalance;const _errs25 = errors;if(!((typeof data10 == "number") && (isFinite(data10)))){validate11.errors = [{instancePath:instancePath+"/amounts/openingBalance",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/openingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs25 === errors;}else {var valid4 = true;}if(valid4){if(data7.debits !== undefined){let data11 = data7.debits;const _errs27 = errors;if(!((typeof data11 == "number") && (isFinite(data11)))){validate11.errors = [{instancePath:instancePath+"/amounts/debits",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/debits/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs27 === errors;}else {var valid4 = true;}if(valid4){if(data7.credits !== undefined){let data12 = data7.credits;const _errs29 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){validate11.errors = [{instancePath:instancePath+"/amounts/credits",schemaPath:"#/$defs/AccountingReportAmountsaf30/properties/credits/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs29 === errors;}else {var valid4 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/amounts",schemaPath:"#/$defs/AccountingReportAmountsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs17 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((key0 === "reportKey") || (key0 === "items")) || (key0 === "status"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.reportKey !== undefined){const _errs2 = errors;if(typeof data.reportKey !== "string"){validate10.errors = [{instancePath:instancePath+"/reportKey",schemaPath:"#/properties/reportKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.items !== undefined){let data1 = data.items;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){const _errs6 = errors;if(!(validate11(data1[i0], {instancePath:instancePath+"/items/" + i0,parentData:data1,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/items",schemaPath:"#/properties/items/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.status !== undefined){const _errs7 = errors;let valid2;valid2 = false;for(const v0 of schema11.properties.status.enum){if(func0(data.status, v0)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;