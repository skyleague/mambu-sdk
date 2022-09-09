/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"searchResponse","type":"array","items":{"$ref":"#/$defs/InterestAccrualBreakdownaf30"},"$defs":{"InterestAccrualBreakdownaf30":{"type":"object","title":"InterestAccrualBreakdownaf30","description":"Represents an interest accrual breakdown entry","properties":{"entryType":{"type":"string","title":"entryType","description":"Debit or Credit"},"amount":{"type":"number","title":"amount","description":"The interest accrued amount for the account referred in this entry"},"glAccountName":{"type":"string","title":"glAccountName","description":"The name of GL Account"},"productId":{"type":"string","title":"productId","description":"The id of the account's product"},"glAccountId":{"type":"string","title":"glAccountId","description":"The id of GL Account"},"branchName":{"type":"string","title":"branchName","description":"The name for branch of the account"},"productKey":{"type":"string","title":"productKey","description":"The encoded key of the account's product"},"creationDate":{"type":"string","title":"creationDate","description":"The creation datetime of the entry, in UTC"},"transactionId":{"type":"string","title":"transactionId","description":"The Id of the Journal Entry transaction"},"accountKey":{"type":"string","title":"accountKey","description":"The encoded key of the loan/deposit account for which the interest accrual amount is retrieved"},"entryId":{"type":"integer","title":"entryId","description":"Generated Id for the interest accrual per account entry"},"foreignAmount":{"title":"foreignAmount","$ref":"#/$defs/ForeignAmountaf30"},"branchKey":{"type":"string","title":"branchKey","description":"The encoded Key for branch of the account"},"accountId":{"type":"string","title":"accountId","description":"The loan/deposit account ID for which the interest accrued amount is retrieved"},"glAccountType":{"type":"string","title":"glAccountType","description":"The type of GL Account: ASSET / LIABILITY / EQUITY / INCOME / EXPENSE"},"glAccountKey":{"type":"string","title":"glAccountKey","description":"The encoded key of the GL Account used for logging the interest accrual"},"bookingDate":{"type":"string","title":"bookingDate","description":"The booking date, in Organization Time Zone"},"parentEntryId":{"type":"integer","title":"parentEntryId","description":"The Id of the GL Journal Entry that represents the interest accrual sum logged for all of the very same product"},"productType":{"type":"string","title":"productType","description":"The type of Product (Loan or Deposit)"}},"additionalProperties":false},"ForeignAmountaf30":{"type":"object","title":"ForeignAmountaf30","description":"Representation of details of GL Journal Entries posted in foreign currency.","properties":{"accountingRate":{"title":"accountingRate","$ref":"#/$defs/AccountingRateaf30"},"amount":{"type":"number","title":"amount","description":"Amount in foreign currency"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"}},"additionalProperties":false},"AccountingRateaf30":{"type":"object","title":"AccountingRateaf30","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date (as Organization Time)","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date (as Organization Time)","format":"date-time"}},"additionalProperties":false},"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"InterestAccrualBreakdownaf30","description":"Represents an interest accrual breakdown entry","properties":{"entryType":{"type":"string","title":"entryType","description":"Debit or Credit"},"amount":{"type":"number","title":"amount","description":"The interest accrued amount for the account referred in this entry"},"glAccountName":{"type":"string","title":"glAccountName","description":"The name of GL Account"},"productId":{"type":"string","title":"productId","description":"The id of the account's product"},"glAccountId":{"type":"string","title":"glAccountId","description":"The id of GL Account"},"branchName":{"type":"string","title":"branchName","description":"The name for branch of the account"},"productKey":{"type":"string","title":"productKey","description":"The encoded key of the account's product"},"creationDate":{"type":"string","title":"creationDate","description":"The creation datetime of the entry, in UTC"},"transactionId":{"type":"string","title":"transactionId","description":"The Id of the Journal Entry transaction"},"accountKey":{"type":"string","title":"accountKey","description":"The encoded key of the loan/deposit account for which the interest accrual amount is retrieved"},"entryId":{"type":"integer","title":"entryId","description":"Generated Id for the interest accrual per account entry"},"foreignAmount":{"title":"foreignAmount","$ref":"#/$defs/ForeignAmountaf30"},"branchKey":{"type":"string","title":"branchKey","description":"The encoded Key for branch of the account"},"accountId":{"type":"string","title":"accountId","description":"The loan/deposit account ID for which the interest accrued amount is retrieved"},"glAccountType":{"type":"string","title":"glAccountType","description":"The type of GL Account: ASSET / LIABILITY / EQUITY / INCOME / EXPENSE"},"glAccountKey":{"type":"string","title":"glAccountKey","description":"The encoded key of the GL Account used for logging the interest accrual"},"bookingDate":{"type":"string","title":"bookingDate","description":"The booking date, in Organization Time Zone"},"parentEntryId":{"type":"integer","title":"parentEntryId","description":"The Id of the GL Journal Entry that represents the interest accrual sum logged for all of the very same product"},"productType":{"type":"string","title":"productType","description":"The type of Product (Loan or Deposit)"}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;const schema13 = {"type":"object","title":"ForeignAmountaf30","description":"Representation of details of GL Journal Entries posted in foreign currency.","properties":{"accountingRate":{"title":"accountingRate","$ref":"#/$defs/AccountingRateaf30"},"amount":{"type":"number","title":"amount","description":"Amount in foreign currency"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"}},"additionalProperties":false};const schema14 = {"type":"object","title":"AccountingRateaf30","description":"Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency","properties":{"rate":{"type":"number","title":"rate","description":"Value of rate to be used for accounting conversions"},"endDate":{"type":"string","title":"endDate","description":"Rate validity end date (as Organization Time)","format":"date-time"},"toCurrencyCode":{"type":"string","title":"toCurrencyCode","description":"Foreign currency code"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the accounting rate, auto generated, unique"},"fromCurrencyCode":{"type":"string","title":"fromCurrencyCode","description":"Organisation currency code"},"startDate":{"type":"string","title":"startDate","description":"Rate validity start date (as Organization Time)","format":"date-time"}},"additionalProperties":false};const schema15 = {"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false};const func0 = require("ajv/dist/runtime/equal").default;function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(((key0 === "accountingRate") || (key0 === "amount")) || (key0 === "currency"))){validate12.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.accountingRate !== undefined){let data0 = data.accountingRate;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs5 = errors;for(const key1 in data0){if(!((((((key1 === "rate") || (key1 === "endDate")) || (key1 === "toCurrencyCode")) || (key1 === "encodedKey")) || (key1 === "fromCurrencyCode")) || (key1 === "startDate"))){validate12.errors = [{instancePath:instancePath+"/accountingRate",schemaPath:"#/$defs/AccountingRateaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.rate !== undefined){let data1 = data0.rate;const _errs6 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate12.errors = [{instancePath:instancePath+"/accountingRate/rate",schemaPath:"#/$defs/AccountingRateaf30/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.endDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data0.endDate === "string")){validate12.errors = [{instancePath:instancePath+"/accountingRate/endDate",schemaPath:"#/$defs/AccountingRateaf30/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.toCurrencyCode !== undefined){const _errs10 = errors;if(typeof data0.toCurrencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/toCurrencyCode",schemaPath:"#/$defs/AccountingRateaf30/properties/toCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs12 = errors;if(typeof data0.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/encodedKey",schemaPath:"#/$defs/AccountingRateaf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data0.fromCurrencyCode !== undefined){const _errs14 = errors;if(typeof data0.fromCurrencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/accountingRate/fromCurrencyCode",schemaPath:"#/$defs/AccountingRateaf30/properties/fromCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data0.startDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data0.startDate === "string")){validate12.errors = [{instancePath:instancePath+"/accountingRate/startDate",schemaPath:"#/$defs/AccountingRateaf30/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs16 === errors;}else {var valid2 = true;}}}}}}}}else {validate12.errors = [{instancePath:instancePath+"/accountingRate",schemaPath:"#/$defs/AccountingRateaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data7 = data.amount;const _errs18 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate12.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data8 = data.currency;const _errs20 = errors;const _errs21 = errors;if(errors === _errs21){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){const _errs23 = errors;for(const key2 in data8){if(!((key2 === "currencyCode") || (key2 === "code"))){validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs23 === errors){if(data8.currencyCode !== undefined){const _errs24 = errors;if(typeof data8.currencyCode !== "string"){validate12.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data8.code !== undefined){const _errs26 = errors;let valid5;valid5 = false;for(const v0 of schema15.properties.code.enum){if(func0(data8.code, v0)){valid5 = true;break;}}if(!valid5){validate12.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema15.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}}}}else {validate12.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema12.properties, key0))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.entryType !== undefined){const _errs2 = errors;if(typeof data.entryType !== "string"){validate11.errors = [{instancePath:instancePath+"/entryType",schemaPath:"#/properties/entryType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data1 = data.amount;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate11.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccountName !== undefined){const _errs6 = errors;if(typeof data.glAccountName !== "string"){validate11.errors = [{instancePath:instancePath+"/glAccountName",schemaPath:"#/properties/glAccountName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.productId !== undefined){const _errs8 = errors;if(typeof data.productId !== "string"){validate11.errors = [{instancePath:instancePath+"/productId",schemaPath:"#/properties/productId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccountId !== undefined){const _errs10 = errors;if(typeof data.glAccountId !== "string"){validate11.errors = [{instancePath:instancePath+"/glAccountId",schemaPath:"#/properties/glAccountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.branchName !== undefined){const _errs12 = errors;if(typeof data.branchName !== "string"){validate11.errors = [{instancePath:instancePath+"/branchName",schemaPath:"#/properties/branchName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.productKey !== undefined){const _errs14 = errors;if(typeof data.productKey !== "string"){validate11.errors = [{instancePath:instancePath+"/productKey",schemaPath:"#/properties/productKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs16 = errors;if(typeof data.creationDate !== "string"){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionId !== undefined){const _errs18 = errors;if(typeof data.transactionId !== "string"){validate11.errors = [{instancePath:instancePath+"/transactionId",schemaPath:"#/properties/transactionId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.accountKey !== undefined){const _errs20 = errors;if(typeof data.accountKey !== "string"){validate11.errors = [{instancePath:instancePath+"/accountKey",schemaPath:"#/properties/accountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.entryId !== undefined){let data10 = data.entryId;const _errs22 = errors;if(!(((typeof data10 == "number") && (!(data10 % 1) && !isNaN(data10))) && (isFinite(data10)))){validate11.errors = [{instancePath:instancePath+"/entryId",schemaPath:"#/properties/entryId/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.foreignAmount !== undefined){const _errs24 = errors;if(!(validate12(data.foreignAmount, {instancePath:instancePath+"/foreignAmount",parentData:data,parentDataProperty:"foreignAmount",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.branchKey !== undefined){const _errs25 = errors;if(typeof data.branchKey !== "string"){validate11.errors = [{instancePath:instancePath+"/branchKey",schemaPath:"#/properties/branchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.accountId !== undefined){const _errs27 = errors;if(typeof data.accountId !== "string"){validate11.errors = [{instancePath:instancePath+"/accountId",schemaPath:"#/properties/accountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccountType !== undefined){const _errs29 = errors;if(typeof data.glAccountType !== "string"){validate11.errors = [{instancePath:instancePath+"/glAccountType",schemaPath:"#/properties/glAccountType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccountKey !== undefined){const _errs31 = errors;if(typeof data.glAccountKey !== "string"){validate11.errors = [{instancePath:instancePath+"/glAccountKey",schemaPath:"#/properties/glAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs33 = errors;if(typeof data.bookingDate !== "string"){validate11.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.parentEntryId !== undefined){let data17 = data.parentEntryId;const _errs35 = errors;if(!(((typeof data17 == "number") && (!(data17 % 1) && !isNaN(data17))) && (isFinite(data17)))){validate11.errors = [{instancePath:instancePath+"/parentEntryId",schemaPath:"#/properties/parentEntryId/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.productType !== undefined){const _errs37 = errors;if(typeof data.productType !== "string"){validate11.errors = [{instancePath:instancePath+"/productType",schemaPath:"#/properties/productType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;