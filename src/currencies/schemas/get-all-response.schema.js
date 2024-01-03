/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllResponse","type":"array","items":{"$ref":"#/$defs/CurrencyDetails"},"$defs":{"CurrencyDetails":{"type":"object","title":"CurrencyDetails","description":"Represents a currency.","properties":{"baseCurrency":{"type":"boolean","title":"baseCurrency","description":"`TRUE` if the currency is the base currency, `FALSE` otherwise. It cannot be changed and it's a read-only field not required for update operations."},"code":{"type":"string","title":"code","description":"The currency code, which cannot be changed once the currency is created."},"creationDate":{"type":"string","title":"creationDate","description":"The date this currency was created. It cannot be changed and it's a read-only field not required for update operations.","format":"date-time"},"currencySymbolPosition":{"title":"currencySymbolPosition","description":"The currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"digitsAfterDecimal":{"type":"integer","title":"digitsAfterDecimal","description":"The number of digits that are supported for a given currency."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this currency was modified. It's updated automatically and it's a read-only field not required for update operations.","format":"date-time"},"name":{"type":"string","title":"name","description":"The name of the currency."},"numericCode":{"type":"string","title":"numericCode","description":"The currency numeric code."},"symbol":{"type":"string","title":"symbol","description":"The currency symbol."},"type":{"title":"type","description":"The type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]}},"required":["baseCurrency","code","currencySymbolPosition","name","symbol","type"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"CurrencyDetails","description":"Represents a currency.","properties":{"baseCurrency":{"type":"boolean","title":"baseCurrency","description":"`TRUE` if the currency is the base currency, `FALSE` otherwise. It cannot be changed and it's a read-only field not required for update operations."},"code":{"type":"string","title":"code","description":"The currency code, which cannot be changed once the currency is created."},"creationDate":{"type":"string","title":"creationDate","description":"The date this currency was created. It cannot be changed and it's a read-only field not required for update operations.","format":"date-time"},"currencySymbolPosition":{"title":"currencySymbolPosition","description":"The currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"digitsAfterDecimal":{"type":"integer","title":"digitsAfterDecimal","description":"The number of digits that are supported for a given currency."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this currency was modified. It's updated automatically and it's a read-only field not required for update operations.","format":"date-time"},"name":{"type":"string","title":"name","description":"The name of the currency."},"numericCode":{"type":"string","title":"numericCode","description":"The currency numeric code."},"symbol":{"type":"string","title":"symbol","description":"The currency symbol."},"type":{"title":"type","description":"The type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]}},"required":["baseCurrency","code","currencySymbolPosition","name","symbol","type"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;let valid2 = true;for( missing0 of schema12.required){valid2 = data0[missing0] !== undefined;if(!valid2){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/CurrencyDetails/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;break;}}if(valid2){if(data0.baseCurrency !== undefined){const _errs5 = errors;if(typeof data0.baseCurrency !== "boolean"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/baseCurrency",schemaPath:"#/$defs/CurrencyDetails/properties/baseCurrency/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid3 = _errs5 === errors;}else {var valid3 = true;}if(valid3){if(data0.code !== undefined){const _errs7 = errors;if(typeof data0.code !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/code",schemaPath:"#/$defs/CurrencyDetails/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs7 === errors;}else {var valid3 = true;}if(valid3){if(data0.creationDate !== undefined){const _errs9 = errors;if(errors === _errs9){if(errors === _errs9){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/CurrencyDetails/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs9 === errors;}else {var valid3 = true;}if(valid3){if(data0.currencySymbolPosition !== undefined){let data4 = data0.currencySymbolPosition;const _errs11 = errors;if(!((data4 === "BEFORE_NUMBER") || (data4 === "AFTER_NUMBER"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/currencySymbolPosition",schemaPath:"#/$defs/CurrencyDetails/properties/currencySymbolPosition/enum",keyword:"enum",params:{allowedValues: schema12.properties.currencySymbolPosition.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs11 === errors;}else {var valid3 = true;}if(valid3){if(data0.digitsAfterDecimal !== undefined){let data5 = data0.digitsAfterDecimal;const _errs12 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/digitsAfterDecimal",schemaPath:"#/$defs/CurrencyDetails/properties/digitsAfterDecimal/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data0.lastModifiedDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data0.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/lastModifiedDate",schemaPath:"#/$defs/CurrencyDetails/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data0.name !== undefined){const _errs16 = errors;if(typeof data0.name !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/name",schemaPath:"#/$defs/CurrencyDetails/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data0.numericCode !== undefined){const _errs18 = errors;if(typeof data0.numericCode !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/numericCode",schemaPath:"#/$defs/CurrencyDetails/properties/numericCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs18 === errors;}else {var valid3 = true;}if(valid3){if(data0.symbol !== undefined){const _errs20 = errors;if(typeof data0.symbol !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/symbol",schemaPath:"#/$defs/CurrencyDetails/properties/symbol/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs20 === errors;}else {var valid3 = true;}if(valid3){if(data0.type !== undefined){let data10 = data0.type;const _errs22 = errors;if(!(((data10 === "FIAT_CURRENCY") || (data10 === "CRYPTOCURRENCY")) || (data10 === "NON_TRADITIONAL_CURRENCY"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/$defs/CurrencyDetails/properties/type/enum",keyword:"enum",params:{allowedValues: schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs22 === errors;}else {var valid3 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/CurrencyDetails/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;