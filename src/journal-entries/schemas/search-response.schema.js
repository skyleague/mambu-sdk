/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"searchResponse","type":"array","items":{"$ref":"#/$defs/GlJournalEntryaf30"},"$defs":{"GlJournalEntryaf30":{"type":"object","title":"GlJournalEntryaf30","description":"The response representation of a GLJournalEntry.","properties":{"amount":{"type":"number","title":"amount","description":"The amount which was debited or credited in organisation currency"},"notes":{"type":"string","title":"notes","description":"Optional notes entered by the user when they performed the journal entry"},"creationDate":{"type":"string","title":"creationDate","description":"The date this GL Journal Entry was created","format":"date-time"},"productKey":{"type":"string","title":"productKey","description":"The Product associated with this journal action. Maybe null if just a general journal entry"},"type":{"title":"type","description":"The type of GL Journal Entry: debit or credit","enum":["DEBIT","CREDIT"]},"assignedBranchKey":{"type":"string","title":"assignedBranchKey","description":"The key of the assigned branch for this GL Journal Entry"},"transactionId":{"type":"string","title":"transactionId","description":"An id for the transaction. Not unique."},"userKey":{"type":"string","title":"userKey","description":"The user encode key who performed the transaction"},"entryID":{"type":"integer","title":"entryID","description":"The ID of the GL Journal Entry"},"accountKey":{"type":"string","title":"accountKey","description":"Account associated with this journal action. Maybe null if just a general journal entry"},"foreignAmount":{"title":"foreignAmount","$ref":"#/$defs/GlJournalEntryForeignAmountaf30"},"reversalEntryKey":{"type":"string","title":"reversalEntryKey","description":"Whether this GL Journal Entry was reversed or not"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"Date/time stamp when the GL Journal Entry was recorded","format":"date-time"},"glAccount":{"title":"glAccount","$ref":"#/$defs/GlAccountaf30"},"productType":{"title":"productType","description":"Product type (eg: loan or savings) that is referred by the account key. May be null if just a general journal entry","enum":["LOAN","SAVINGS"]}},"additionalProperties":false},"GlJournalEntryForeignAmountaf30":{"type":"object","title":"GlJournalEntryForeignAmountaf30","description":"Representation of details of GL Journal Entries posted in foreign currency.","properties":{"accountingRate":{"title":"accountingRate","$ref":"#/$defs/AccountingRateaf30"},"amount":{"type":"number","title":"amount","description":"Amount in foreign currency"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"}},"additionalProperties":false},"AccountingRateaf30":{"type":"object","title":"AccountingRateaf30","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date","format":"date-time"}},"additionalProperties":false},"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false},"GlAccountaf30":{"type":"object","title":"GlAccountaf30","description":"The response representation of a GLAccount.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if this GL Account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Indicates when the last modification occurred. Stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'."},"usage":{"title":"usage","description":"Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"Description of the GL Account."},"creationDate":{"type":"string","title":"creationDate","description":"Indicates the creation date for this account. Stored as UTC.","format":"date-time"},"type":{"title":"type","description":"Type of the GL Account","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"Indicates whether manual Journal Entries are allowed or not"},"balance":{"type":"number","title":"balance","description":"Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"Name of the GL Account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"Indicates whether to strip trailing zeros."},"activated":{"type":"boolean","title":"activated","description":"Whether the Account is activated and may be used."}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"GlJournalEntryaf30","description":"The response representation of a GLJournalEntry.","properties":{"amount":{"type":"number","title":"amount","description":"The amount which was debited or credited in organisation currency"},"notes":{"type":"string","title":"notes","description":"Optional notes entered by the user when they performed the journal entry"},"creationDate":{"type":"string","title":"creationDate","description":"The date this GL Journal Entry was created","format":"date-time"},"productKey":{"type":"string","title":"productKey","description":"The Product associated with this journal action. Maybe null if just a general journal entry"},"type":{"title":"type","description":"The type of GL Journal Entry: debit or credit","enum":["DEBIT","CREDIT"]},"assignedBranchKey":{"type":"string","title":"assignedBranchKey","description":"The key of the assigned branch for this GL Journal Entry"},"transactionId":{"type":"string","title":"transactionId","description":"An id for the transaction. Not unique."},"userKey":{"type":"string","title":"userKey","description":"The user encode key who performed the transaction"},"entryID":{"type":"integer","title":"entryID","description":"The ID of the GL Journal Entry"},"accountKey":{"type":"string","title":"accountKey","description":"Account associated with this journal action. Maybe null if just a general journal entry"},"foreignAmount":{"title":"foreignAmount","$ref":"#/$defs/GlJournalEntryForeignAmountaf30"},"reversalEntryKey":{"type":"string","title":"reversalEntryKey","description":"Whether this GL Journal Entry was reversed or not"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"Date/time stamp when the GL Journal Entry was recorded","format":"date-time"},"glAccount":{"title":"glAccount","$ref":"#/$defs/GlAccountaf30"},"productType":{"title":"productType","description":"Product type (eg: loan or savings) that is referred by the account key. May be null if just a general journal entry","enum":["LOAN","SAVINGS"]}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;const schema13 = {"type":"object","title":"GlJournalEntryForeignAmountaf30","description":"Representation of details of GL Journal Entries posted in foreign currency.","properties":{"accountingRate":{"title":"accountingRate","$ref":"#/$defs/AccountingRateaf30"},"amount":{"type":"number","title":"amount","description":"Amount in foreign currency"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"}},"additionalProperties":false};const schema14 = {"type":"object","title":"AccountingRateaf30","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date","format":"date-time"}},"additionalProperties":false};const schema15 = {"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false};const func0 = require("ajv/dist/runtime/equal").default;function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((key0 === "accountingRate") || (key0 === "amount")) || (key0 === "currency"))){validate12.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.accountingRate !== undefined){let data0 = data.accountingRate;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs5 = errors;for(const key1 in data0){if(!((((((key1 === "rate") || (key1 === "endDate")) || (key1 === "toCurrencyCode")) || (key1 === "encodedKey")) || (key1 === "fromCurrencyCode")) || (key1 === "startDate"))){validate12.errors = [{instancePath:instancePath+"/accountingRate",schemaPath:"#/$defs/AccountingRateaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.rate !== undefined){let data1 = data0.rate;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate12.errors = [{instancePath:instancePath+"/accountingRate/rate",schemaPath:"#/$defs/AccountingRateaf30/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.endDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data0.endDate === "string")){validate12.errors = [{instancePath:instancePath+"/accountingRate/endDate",schemaPath:"#/$defs/AccountingRateaf30/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.toCurrencyCode !== undefined){const _errs10 = errors;if(typeof data0.toCurrencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/toCurrencyCode",schemaPath:"#/$defs/AccountingRateaf30/properties/toCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs12 = errors;if(typeof data0.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/encodedKey",schemaPath:"#/$defs/AccountingRateaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data0.fromCurrencyCode !== undefined){const _errs14 = errors;if(typeof data0.fromCurrencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/fromCurrencyCode",schemaPath:"#/$defs/AccountingRateaf30/properties/fromCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data0.startDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data0.startDate === "string")){validate12.errors = [{instancePath:instancePath+"/accountingRate/startDate",schemaPath:"#/$defs/AccountingRateaf30/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs16 === errors;}else {var valid2 = true;}}}}}}}}else {validate12.errors = [{instancePath:instancePath+"/accountingRate",schemaPath:"#/$defs/AccountingRateaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data7 = data.amount;const _errs18 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate12.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data8 = data.currency;const _errs20 = errors;const _errs21 = errors;if(errors === _errs21){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){const _errs23 = errors;for(const key2 in data8){if(!((key2 === "currencyCode") || (key2 === "code"))){validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs23 === errors){if(data8.currencyCode !== undefined){const _errs24 = errors;if(typeof data8.currencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data8.code !== undefined){const _errs26 = errors;let valid5;valid5 = false;for(const v0 of schema15.properties.code.enum){if(func0(data8.code, v0)){valid5 = true;break;}}if(!valid5){validate12.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema15.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}}}}else {validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}const schema16 = {"type":"object","title":"GlAccountaf30","description":"The response representation of a GLAccount.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if this GL Account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Indicates when the last modification occurred. Stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'."},"usage":{"title":"usage","description":"Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"Description of the GL Account."},"creationDate":{"type":"string","title":"creationDate","description":"Indicates the creation date for this account. Stored as UTC.","format":"date-time"},"type":{"title":"type","description":"Type of the GL Account","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"Indicates whether manual Journal Entries are allowed or not"},"balance":{"type":"number","title":"balance","description":"Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"Name of the GL Account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"Indicates whether to strip trailing zeros."},"activated":{"type":"boolean","title":"activated","description":"Whether the Account is activated and may be used."}},"additionalProperties":false};function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema16.properties, key0))){validate14.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.migrationEventKey !== undefined){const _errs2 = errors;if(typeof data.migrationEventKey !== "string"){validate14.errors = [{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.lastModifiedDate === "string")){validate14.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.glCode !== undefined){const _errs6 = errors;if(typeof data.glCode !== "string"){validate14.errors = [{instancePath:instancePath+"/glCode",schemaPath:"#/properties/glCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data3 = data.usage;const _errs8 = errors;if(!((data3 === "DETAIL") || (data3 === "HEADER"))){validate14.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues: schema16.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs9 = errors;if(typeof data.description !== "string"){validate14.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs11 = errors;if(errors === _errs11){if(errors === _errs11){if(!(typeof data.creationDate === "string")){validate14.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs13 = errors;let valid1;valid1 = false;for(const v0 of schema16.properties.type.enum){if(func0(data.type, v0)){valid1 = true;break;}}if(!valid1){validate14.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema16.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.allowManualJournalEntries !== undefined){const _errs14 = errors;if(typeof data.allowManualJournalEntries !== "boolean"){validate14.errors = [{instancePath:instancePath+"/allowManualJournalEntries",schemaPath:"#/properties/allowManualJournalEntries/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.balance !== undefined){let data8 = data.balance;const _errs16 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate14.errors = [{instancePath:instancePath+"/balance",schemaPath:"#/properties/balance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs18 = errors;if(typeof data.name !== "string"){validate14.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs20 = errors;if(typeof data.encodedKey !== "string"){validate14.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data11 = data.currency;const _errs22 = errors;const _errs23 = errors;if(errors === _errs23){if(data11 && typeof data11 == "object" && !Array.isArray(data11)){const _errs25 = errors;for(const key1 in data11){if(!((key1 === "currencyCode") || (key1 === "code"))){validate14.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs25 === errors){if(data11.currencyCode !== undefined){const _errs26 = errors;if(typeof data11.currencyCode !== "string"){validate14.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs26 === errors;}else {var valid3 = true;}if(valid3){if(data11.code !== undefined){const _errs28 = errors;let valid4;valid4 = false;for(const v1 of schema15.properties.code.enum){if(func0(data11.code, v1)){valid4 = true;break;}}if(!valid4){validate14.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema15.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs28 === errors;}else {var valid3 = true;}}}}else {validate14.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.stripTrailingZeros !== undefined){const _errs29 = errors;if(typeof data.stripTrailingZeros !== "boolean"){validate14.errors = [{instancePath:instancePath+"/stripTrailingZeros",schemaPath:"#/properties/stripTrailingZeros/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.activated !== undefined){const _errs31 = errors;if(typeof data.activated !== "boolean"){validate14.errors = [{instancePath:instancePath+"/activated",schemaPath:"#/properties/activated/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate14.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate14.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema12.properties, key0))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate11.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs4 = errors;if(typeof data.notes !== "string"){validate11.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.creationDate === "string")){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.productKey !== undefined){const _errs8 = errors;if(typeof data.productKey !== "string"){validate11.errors = [{instancePath:instancePath+"/productKey",schemaPath:"#/properties/productKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data4 = data.type;const _errs10 = errors;if(!((data4 === "DEBIT") || (data4 === "CREDIT"))){validate11.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedBranchKey !== undefined){const _errs11 = errors;if(typeof data.assignedBranchKey !== "string"){validate11.errors = [{instancePath:instancePath+"/assignedBranchKey",schemaPath:"#/properties/assignedBranchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionId !== undefined){const _errs13 = errors;if(typeof data.transactionId !== "string"){validate11.errors = [{instancePath:instancePath+"/transactionId",schemaPath:"#/properties/transactionId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.userKey !== undefined){const _errs15 = errors;if(typeof data.userKey !== "string"){validate11.errors = [{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.entryID !== undefined){let data8 = data.entryID;const _errs17 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate11.errors = [{instancePath:instancePath+"/entryID",schemaPath:"#/properties/entryID/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.accountKey !== undefined){const _errs19 = errors;if(typeof data.accountKey !== "string"){validate11.errors = [{instancePath:instancePath+"/accountKey",schemaPath:"#/properties/accountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.foreignAmount !== undefined){const _errs21 = errors;if(!(validate12(data.foreignAmount, {instancePath:instancePath+"/foreignAmount",parentData:data,parentDataProperty:"foreignAmount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.reversalEntryKey !== undefined){const _errs22 = errors;if(typeof data.reversalEntryKey !== "string"){validate11.errors = [{instancePath:instancePath+"/reversalEntryKey",schemaPath:"#/properties/reversalEntryKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs24 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs26 = errors;if(errors === _errs26){if(errors === _errs26){if(!(typeof data.bookingDate === "string")){validate11.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccount !== undefined){const _errs28 = errors;if(!(validate14(data.glAccount, {instancePath:instancePath+"/glAccount",parentData:data,parentDataProperty:"glAccount",rootData}))){vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);errors = vErrors.length;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.productType !== undefined){let data15 = data.productType;const _errs29 = errors;if(!((data15 === "LOAN") || (data15 === "SAVINGS"))){validate11.errors = [{instancePath:instancePath+"/productType",schemaPath:"#/properties/productType/enum",keyword:"enum",params:{allowedValues: schema12.properties.productType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;