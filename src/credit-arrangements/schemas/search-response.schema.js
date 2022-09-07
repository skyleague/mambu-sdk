/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"array","title":"searchResponse","items":{"$ref":"#/$defs/CreditArrangement"},"$defs":{"CreditArrangement":{"type":"object","title":"CreditArrangement","description":"A maximum amount a client (individual, group or company) can take in loans and overdrafts.","properties":{"availableCreditAmount":{"type":"number","title":"availableCreditAmount","description":"The available amount of the credit arrangement"},"amount":{"type":"number","title":"amount","description":"The maximum credit amount the client can be exposed to"},"notes":{"type":"string","title":"notes","description":"The notes/description of credit arrangement"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date when credit arrangement was modified","format":"date-time"},"holderKey":{"type":"string","title":"holderKey","description":"The encodedKey of the client or group (a.k.a holder)"},"consumedCreditAmount":{"type":"number","title":"consumedCreditAmount","description":"The consumed amount of the credit arrangement (calculated as the difference between the amount and available amount"},"creationDate":{"type":"string","title":"creationDate","description":"The date when credit arrangement was created","format":"date-time"},"approvedDate":{"type":"string","title":"approvedDate","description":"The date when credit arrangement was approved","format":"date-time"},"subState":{"title":"subState","description":"The substate of credit arrangement can be Withdrawn or Rejected when state is Closed","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"closedDate":{"type":"string","title":"closedDate","description":"The date when credit arrangement was closed","format":"date-time"},"exposureLimitType":{"title":"exposureLimitType","description":"The type of exposure limit calculation method used","enum":["APPROVED_AMOUNT","OUTSTANDING_AMOUNT"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of credit arrangement, auto generated, unique"},"expireDate":{"type":"string","title":"expireDate","description":"The date when credit arrangement expires","format":"date-time"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"id":{"type":"string","title":"id","description":"The id of credit arrangement, can be generated and customized, unique"},"state":{"title":"state","description":"The state of credit arrangement can be Pending Approval, Approved, Active or Closed","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"holderType":{"title":"holderType","description":"The type of the credit arrangement holder (client or group)","enum":["CLIENT","GROUP"]},"startDate":{"type":"string","title":"startDate","description":"The start date from which the credit arrangement becomes active","format":"date-time"}},"required":["amount","expireDate","holderType","startDate"],"additionalProperties":false},"Currencyaf30":{"type":"object","title":"Currency","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"CreditArrangement","description":"A maximum amount a client (individual, group or company) can take in loans and overdrafts.","properties":{"availableCreditAmount":{"type":"number","title":"availableCreditAmount","description":"The available amount of the credit arrangement"},"amount":{"type":"number","title":"amount","description":"The maximum credit amount the client can be exposed to"},"notes":{"type":"string","title":"notes","description":"The notes/description of credit arrangement"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date when credit arrangement was modified","format":"date-time"},"holderKey":{"type":"string","title":"holderKey","description":"The encodedKey of the client or group (a.k.a holder)"},"consumedCreditAmount":{"type":"number","title":"consumedCreditAmount","description":"The consumed amount of the credit arrangement (calculated as the difference between the amount and available amount"},"creationDate":{"type":"string","title":"creationDate","description":"The date when credit arrangement was created","format":"date-time"},"approvedDate":{"type":"string","title":"approvedDate","description":"The date when credit arrangement was approved","format":"date-time"},"subState":{"title":"subState","description":"The substate of credit arrangement can be Withdrawn or Rejected when state is Closed","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"closedDate":{"type":"string","title":"closedDate","description":"The date when credit arrangement was closed","format":"date-time"},"exposureLimitType":{"title":"exposureLimitType","description":"The type of exposure limit calculation method used","enum":["APPROVED_AMOUNT","OUTSTANDING_AMOUNT"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of credit arrangement, auto generated, unique"},"expireDate":{"type":"string","title":"expireDate","description":"The date when credit arrangement expires","format":"date-time"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"id":{"type":"string","title":"id","description":"The id of credit arrangement, can be generated and customized, unique"},"state":{"title":"state","description":"The state of credit arrangement can be Pending Approval, Approved, Active or Closed","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"holderType":{"title":"holderType","description":"The type of the credit arrangement holder (client or group)","enum":["CLIENT","GROUP"]},"startDate":{"type":"string","title":"startDate","description":"The start date from which the credit arrangement becomes active","format":"date-time"}},"required":["amount","expireDate","holderType","startDate"],"additionalProperties":false};const schema13 = {"type":"object","title":"Currency","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;const func0 = require("ajv/dist/runtime/equal").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.amount === undefined) && (missing0 = "amount")) || ((data.expireDate === undefined) && (missing0 = "expireDate"))) || ((data.holderType === undefined) && (missing0 = "holderType"))) || ((data.startDate === undefined) && (missing0 = "startDate"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema12.properties, key0))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.availableCreditAmount !== undefined){let data0 = data.availableCreditAmount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate11.errors = [{instancePath:instancePath+"/availableCreditAmount",schemaPath:"#/properties/availableCreditAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data1 = data.amount;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate11.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs6 = errors;if(typeof data.notes !== "string"){validate11.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data.lastModifiedDate === "string")){validate11.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.holderKey !== undefined){const _errs10 = errors;if(typeof data.holderKey !== "string"){validate11.errors = [{instancePath:instancePath+"/holderKey",schemaPath:"#/properties/holderKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.consumedCreditAmount !== undefined){let data5 = data.consumedCreditAmount;const _errs12 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate11.errors = [{instancePath:instancePath+"/consumedCreditAmount",schemaPath:"#/properties/consumedCreditAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.creationDate === "string")){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.approvedDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data.approvedDate === "string")){validate11.errors = [{instancePath:instancePath+"/approvedDate",schemaPath:"#/properties/approvedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.subState !== undefined){const _errs18 = errors;let valid1;valid1 = false;for(const v0 of schema12.properties.subState.enum){if(func0(data.subState, v0)){valid1 = true;break;}}if(!valid1){validate11.errors = [{instancePath:instancePath+"/subState",schemaPath:"#/properties/subState/enum",keyword:"enum",params:{allowedValues: schema12.properties.subState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.closedDate !== undefined){const _errs19 = errors;if(errors === _errs19){if(errors === _errs19){if(!(typeof data.closedDate === "string")){validate11.errors = [{instancePath:instancePath+"/closedDate",schemaPath:"#/properties/closedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureLimitType !== undefined){let data10 = data.exposureLimitType;const _errs21 = errors;if(!((data10 === "APPROVED_AMOUNT") || (data10 === "OUTSTANDING_AMOUNT"))){validate11.errors = [{instancePath:instancePath+"/exposureLimitType",schemaPath:"#/properties/exposureLimitType/enum",keyword:"enum",params:{allowedValues: schema12.properties.exposureLimitType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs22 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.expireDate !== undefined){const _errs24 = errors;if(errors === _errs24){if(errors === _errs24){if(!(typeof data.expireDate === "string")){validate11.errors = [{instancePath:instancePath+"/expireDate",schemaPath:"#/properties/expireDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data13 = data.currency;const _errs26 = errors;const _errs27 = errors;if(errors === _errs27){if(data13 && typeof data13 == "object" && !Array.isArray(data13)){const _errs29 = errors;for(const key1 in data13){if(!((key1 === "currencyCode") || (key1 === "code"))){validate11.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs29 === errors){if(data13.currencyCode !== undefined){const _errs30 = errors;if(typeof data13.currencyCode !== "string"){validate11.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs30 === errors;}else {var valid3 = true;}if(valid3){if(data13.code !== undefined){const _errs32 = errors;let valid4;valid4 = false;for(const v1 of schema13.properties.code.enum){if(func0(data13.code, v1)){valid4 = true;break;}}if(!valid4){validate11.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema13.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs32 === errors;}else {var valid3 = true;}}}}else {validate11.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs33 = errors;if(typeof data.id !== "string"){validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs35 = errors;let valid5;valid5 = false;for(const v2 of schema12.properties.state.enum){if(func0(data.state, v2)){valid5 = true;break;}}if(!valid5){validate11.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.holderType !== undefined){let data18 = data.holderType;const _errs36 = errors;if(!((data18 === "CLIENT") || (data18 === "GROUP"))){validate11.errors = [{instancePath:instancePath+"/holderType",schemaPath:"#/properties/holderType/enum",keyword:"enum",params:{allowedValues: schema12.properties.holderType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs37 = errors;if(errors === _errs37){if(errors === _errs37){if(!(typeof data.startDate === "string")){validate11.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs37 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;