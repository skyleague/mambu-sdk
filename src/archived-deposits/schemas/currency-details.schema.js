/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CurrencyDetails","type":"object","description":"Represents a currency.","properties":{"baseCurrency":{"type":"boolean","description":"`TRUE` if the currency is the base currency, `FALSE` otherwise. It cannot be changed and it's a read-only field not required for update operations."},"code":{"type":"string","description":"The currency code, which cannot be changed once the currency is created."},"creationDate":{"type":"string","description":"The date this currency was created. It cannot be changed and it's a read-only field not required for update operations.","format":"date-time"},"currencyHolidays":{"type":"array","description":"The list of holidays for this currency.","items":{"$ref":"#/$defs/Holiday"}},"currencySymbolPosition":{"description":"The currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"digitsAfterDecimal":{"type":"integer","description":"The number of digits that are supported for a given currency."},"lastModifiedDate":{"type":"string","description":"The last date this currency was modified. It's updated automatically and it's a read-only field not required for update operations.","format":"date-time"},"name":{"type":"string","description":"The name of the currency."},"numericCode":{"type":"string","description":"The currency numeric code."},"symbol":{"type":"string","description":"The currency symbol."},"type":{"description":"The type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]}},"required":["baseCurrency","code","currencySymbolPosition","name","symbol","type"],"additionalProperties":true,"$defs":{"Holiday":{"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents the holiday.","properties":{"creationDate":{"type":"string","description":"The date when the holiday was created.","format":"date-time"},"date":{"type":"string","description":"The date the holiday takes place.","format":"date"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"integer","description":"The ID of the holiday."},"isAnnuallyRecurring":{"type":"boolean","description":"`TRUE` if a holiday is annually recurring, `FALSE` otherwise."},"name":{"type":"string","description":"The name of the holiday."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;let valid0 = true;for( missing0 of schema11.required){valid0 = data[missing0] !== undefined;if(!valid0){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;break;}}if(valid0){if(data.baseCurrency !== undefined){const _errs2 = errors;if(typeof data.baseCurrency !== "boolean"){validate10.errors = [{instancePath:instancePath+"/baseCurrency",schemaPath:"#/properties/baseCurrency/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid1 = _errs2 === errors;}else {var valid1 = true;}if(valid1){if(data.code !== undefined){const _errs4 = errors;if(typeof data.code !== "string"){validate10.errors = [{instancePath:instancePath+"/code",schemaPath:"#/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs4 === errors;}else {var valid1 = true;}if(valid1){if(data.creationDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid1 = _errs6 === errors;}else {var valid1 = true;}if(valid1){if(data.currencyHolidays !== undefined){let data3 = data.currencyHolidays;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid2 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.creationDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data4.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/creationDate",schemaPath:"#/$defs/Holiday/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid4 = _errs14 === errors;}else {var valid4 = true;}if(valid4){if(data4.date !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data4.date === "string")){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/date",schemaPath:"#/$defs/Holiday/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid4 = _errs16 === errors;}else {var valid4 = true;}if(valid4){if(data4.encodedKey !== undefined){const _errs18 = errors;if(typeof data4.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/encodedKey",schemaPath:"#/$defs/Holiday/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data4.id !== undefined){let data8 = data4.id;const _errs20 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/id",schemaPath:"#/$defs/Holiday/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data4.isAnnuallyRecurring !== undefined){const _errs22 = errors;if(typeof data4.isAnnuallyRecurring !== "boolean"){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/isAnnuallyRecurring",schemaPath:"#/$defs/Holiday/properties/isAnnuallyRecurring/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}if(valid4){if(data4.name !== undefined){const _errs24 = errors;if(typeof data4.name !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0+"/name",schemaPath:"#/$defs/Holiday/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/currencyHolidays/" + i0,schemaPath:"#/$defs/Holiday/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs10 === errors;if(!valid2){break;}}}else {validate10.errors = [{instancePath:instancePath+"/currencyHolidays",schemaPath:"#/properties/currencyHolidays/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs8 === errors;}else {var valid1 = true;}if(valid1){if(data.currencySymbolPosition !== undefined){let data11 = data.currencySymbolPosition;const _errs26 = errors;if(!((data11 === "BEFORE_NUMBER") || (data11 === "AFTER_NUMBER"))){validate10.errors = [{instancePath:instancePath+"/currencySymbolPosition",schemaPath:"#/properties/currencySymbolPosition/enum",keyword:"enum",params:{allowedValues: schema11.properties.currencySymbolPosition.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs26 === errors;}else {var valid1 = true;}if(valid1){if(data.digitsAfterDecimal !== undefined){let data12 = data.digitsAfterDecimal;const _errs27 = errors;if(!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))){validate10.errors = [{instancePath:instancePath+"/digitsAfterDecimal",schemaPath:"#/properties/digitsAfterDecimal/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid1 = _errs27 === errors;}else {var valid1 = true;}if(valid1){if(data.lastModifiedDate !== undefined){const _errs29 = errors;if(errors === _errs29){if(errors === _errs29){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid1 = _errs29 === errors;}else {var valid1 = true;}if(valid1){if(data.name !== undefined){const _errs31 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs31 === errors;}else {var valid1 = true;}if(valid1){if(data.numericCode !== undefined){const _errs33 = errors;if(typeof data.numericCode !== "string"){validate10.errors = [{instancePath:instancePath+"/numericCode",schemaPath:"#/properties/numericCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs33 === errors;}else {var valid1 = true;}if(valid1){if(data.symbol !== undefined){const _errs35 = errors;if(typeof data.symbol !== "string"){validate10.errors = [{instancePath:instancePath+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs35 === errors;}else {var valid1 = true;}if(valid1){if(data.type !== undefined){let data17 = data.type;const _errs37 = errors;if(!(((data17 === "FIAT_CURRENCY") || (data17 === "CRYPTOCURRENCY")) || (data17 === "NON_TRADITIONAL_CURRENCY"))){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs37 === errors;}else {var valid1 = true;}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;