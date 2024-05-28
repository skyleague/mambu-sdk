/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetInterestAvailabilitiesListResponse","type":"array","items":{"$ref":"#/$defs/InterestAccountSettingsAvailabilityResponse"},"$defs":{"InterestAccountSettingsAvailabilityResponse":{"type":"object","description":"Interest Availability of a Deposit Account","properties":{"encodedKey":{"type":"string","description":"The encoded key of the Interest Availability, auto generated, unique."},"interestRateSettings":{"$ref":"#/$defs/DepositAccountInterestRateSettings"},"startDate":{"type":"string","description":"Start date of the Interest Availability.","format":"date"},"type":{"description":"Type of the interest.","enum":["INTEREST","OVERDRAFT","TECHNICAL_OVERDRAFT"]}},"additionalProperties":true},"DepositAccountInterestRateSettings":{"type":"object","description":"Represents information about the interest rate settings for deposit accounts.","properties":{"encodedKey":{"type":"string","description":"The encoded key for the set of interest settings, which is auto-generated and unique."},"interestChargeFrequency":{"description":"The interest charge frequency, which shows how often interest is charged on loan or deposit accounts.","enum":["ANNUALIZED","EVERY_MONTH","EVERY_FOUR_WEEKS","EVERY_WEEK","EVERY_DAY","EVERY_X_DAYS"]},"interestChargeFrequencyCount":{"type":"integer","description":"The number of times to apply interest in a time period."},"interestRate":{"type":"number","description":"The interest rate for the deposit account."},"interestRateReviewCount":{"type":"integer","description":"The number of times to review the interest rate in a time period."},"interestRateReviewUnit":{"description":"The time unit to use to determine the frequency of interest rate reviews.","enum":["DAYS","WEEKS","MONTHS"]},"interestRateSource":{"description":"The interest calculation method used.","enum":["FIXED_INTEREST_RATE","INDEX_INTEREST_RATE"]},"interestRateTerms":{"description":"The terms for how interest rate is determined when accruing for an account.","enum":["FIXED","TIERED","TIERED_PERIOD","TIERED_BAND"]},"interestRateTiers":{"type":"array","description":"The list of interest rate tiers, which hold the values to define how interest is calculated.","items":{"$ref":"#/$defs/DepositAccountInterestRateTier"}},"interestSpread":{"type":"number","description":"The index interest rate that is used to calculate the interest rate that is applied to accounts."}},"additionalProperties":true},"DepositAccountInterestRateTier":{"type":"object","description":"Represents information about how interest rate is calculated.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the interest rate tier, auto generated, unique"},"endingBalance":{"type":"number","description":"The top-limit value for the account balance in order to determine if this tier is used or not"},"endingDay":{"type":"integer","description":"The end date for the account period. Used to determine if this interest rate tier is used or not."},"interestRate":{"type":"number","description":"The rate used for computing the interest for an account which has the balance less than the ending balance"}},"required":["interestRate"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"Interest Availability of a Deposit Account","properties":{"encodedKey":{"type":"string","description":"The encoded key of the Interest Availability, auto generated, unique."},"interestRateSettings":{"$ref":"#/$defs/DepositAccountInterestRateSettings"},"startDate":{"type":"string","description":"Start date of the Interest Availability.","format":"date"},"type":{"description":"Type of the interest.","enum":["INTEREST","OVERDRAFT","TECHNICAL_OVERDRAFT"]}},"additionalProperties":true};const schema13 = {"type":"object","description":"Represents information about the interest rate settings for deposit accounts.","properties":{"encodedKey":{"type":"string","description":"The encoded key for the set of interest settings, which is auto-generated and unique."},"interestChargeFrequency":{"description":"The interest charge frequency, which shows how often interest is charged on loan or deposit accounts.","enum":["ANNUALIZED","EVERY_MONTH","EVERY_FOUR_WEEKS","EVERY_WEEK","EVERY_DAY","EVERY_X_DAYS"]},"interestChargeFrequencyCount":{"type":"integer","description":"The number of times to apply interest in a time period."},"interestRate":{"type":"number","description":"The interest rate for the deposit account."},"interestRateReviewCount":{"type":"integer","description":"The number of times to review the interest rate in a time period."},"interestRateReviewUnit":{"description":"The time unit to use to determine the frequency of interest rate reviews.","enum":["DAYS","WEEKS","MONTHS"]},"interestRateSource":{"description":"The interest calculation method used.","enum":["FIXED_INTEREST_RATE","INDEX_INTEREST_RATE"]},"interestRateTerms":{"description":"The terms for how interest rate is determined when accruing for an account.","enum":["FIXED","TIERED","TIERED_PERIOD","TIERED_BAND"]},"interestRateTiers":{"type":"array","description":"The list of interest rate tiers, which hold the values to define how interest is calculated.","items":{"$ref":"#/$defs/DepositAccountInterestRateTier"}},"interestSpread":{"type":"number","description":"The index interest rate that is used to calculate the interest rate that is applied to accounts."}},"additionalProperties":true};const schema14 = {"type":"object","description":"Represents information about how interest rate is calculated.","properties":{"encodedKey":{"type":"string","description":"The encoded key of the interest rate tier, auto generated, unique"},"endingBalance":{"type":"number","description":"The top-limit value for the account balance in order to determine if this tier is used or not"},"endingDay":{"type":"integer","description":"The end date for the account period. Used to determine if this interest rate tier is used or not."},"interestRate":{"type":"number","description":"The rate used for computing the interest for an account which has the balance less than the ending balance"}},"required":["interestRate"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.encodedKey !== undefined){const _errs2 = errors;if(typeof data.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.interestChargeFrequency !== undefined){const _errs4 = errors;let valid1;valid1 = false;for(const v0 of schema13.properties.interestChargeFrequency.enum){if(func0(data.interestChargeFrequency, v0)){valid1 = true;break;}}if(!valid1){validate12.errors = [{instancePath:instancePath+"/interestChargeFrequency",schemaPath:"#/properties/interestChargeFrequency/enum",keyword:"enum",params:{allowedValues: schema13.properties.interestChargeFrequency.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.interestChargeFrequencyCount !== undefined){let data2 = data.interestChargeFrequencyCount;const _errs5 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate12.errors = [{instancePath:instancePath+"/interestChargeFrequencyCount",schemaPath:"#/properties/interestChargeFrequencyCount/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRate !== undefined){let data3 = data.interestRate;const _errs7 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate12.errors = [{instancePath:instancePath+"/interestRate",schemaPath:"#/properties/interestRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateReviewCount !== undefined){let data4 = data.interestRateReviewCount;const _errs9 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate12.errors = [{instancePath:instancePath+"/interestRateReviewCount",schemaPath:"#/properties/interestRateReviewCount/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateReviewUnit !== undefined){let data5 = data.interestRateReviewUnit;const _errs11 = errors;if(!(((data5 === "DAYS") || (data5 === "WEEKS")) || (data5 === "MONTHS"))){validate12.errors = [{instancePath:instancePath+"/interestRateReviewUnit",schemaPath:"#/properties/interestRateReviewUnit/enum",keyword:"enum",params:{allowedValues: schema13.properties.interestRateReviewUnit.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateSource !== undefined){let data6 = data.interestRateSource;const _errs12 = errors;if(!((data6 === "FIXED_INTEREST_RATE") || (data6 === "INDEX_INTEREST_RATE"))){validate12.errors = [{instancePath:instancePath+"/interestRateSource",schemaPath:"#/properties/interestRateSource/enum",keyword:"enum",params:{allowedValues: schema13.properties.interestRateSource.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateTerms !== undefined){let data7 = data.interestRateTerms;const _errs13 = errors;if(!((((data7 === "FIXED") || (data7 === "TIERED")) || (data7 === "TIERED_PERIOD")) || (data7 === "TIERED_BAND"))){validate12.errors = [{instancePath:instancePath+"/interestRateTerms",schemaPath:"#/properties/interestRateTerms/enum",keyword:"enum",params:{allowedValues: schema13.properties.interestRateTerms.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateTiers !== undefined){let data8 = data.interestRateTiers;const _errs14 = errors;if(errors === _errs14){if(Array.isArray(data8)){var valid2 = true;const len0 = data8.length;for(let i0=0; i0<len0; i0++){let data9 = data8[i0];const _errs16 = errors;const _errs17 = errors;if(errors === _errs17){if(data9 && typeof data9 == "object" && !Array.isArray(data9)){let missing0;if((data9.interestRate === undefined) && (missing0 = "interestRate")){validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0,schemaPath:"#/$defs/DepositAccountInterestRateTier/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data9.encodedKey !== undefined){const _errs20 = errors;if(typeof data9.encodedKey !== "string"){validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0+"/encodedKey",schemaPath:"#/$defs/DepositAccountInterestRateTier/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data9.endingBalance !== undefined){let data11 = data9.endingBalance;const _errs22 = errors;if(!((typeof data11 == "number") && (isFinite(data11)))){validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0+"/endingBalance",schemaPath:"#/$defs/DepositAccountInterestRateTier/properties/endingBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}if(valid4){if(data9.endingDay !== undefined){let data12 = data9.endingDay;const _errs24 = errors;if(!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))){validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0+"/endingDay",schemaPath:"#/$defs/DepositAccountInterestRateTier/properties/endingDay/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs24 === errors;}else {var valid4 = true;}if(valid4){if(data9.interestRate !== undefined){let data13 = data9.interestRate;const _errs26 = errors;if(!((typeof data13 == "number") && (isFinite(data13)))){validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0+"/interestRate",schemaPath:"#/$defs/DepositAccountInterestRateTier/properties/interestRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs26 === errors;}else {var valid4 = true;}}}}}}else {validate12.errors = [{instancePath:instancePath+"/interestRateTiers/" + i0,schemaPath:"#/$defs/DepositAccountInterestRateTier/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs16 === errors;if(!valid2){break;}}}else {validate12.errors = [{instancePath:instancePath+"/interestRateTiers",schemaPath:"#/properties/interestRateTiers/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.interestSpread !== undefined){let data14 = data.interestSpread;const _errs28 = errors;if(!((typeof data14 == "number") && (isFinite(data14)))){validate12.errors = [{instancePath:instancePath+"/interestSpread",schemaPath:"#/properties/interestSpread/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}}}}}}}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.encodedKey !== undefined){const _errs2 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.interestRateSettings !== undefined){const _errs4 = errors;if(!(validate12(data.interestRateSettings, {instancePath:instancePath+"/interestRateSettings",parentData:data,parentDataProperty:"interestRateSettings",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs5 = errors;if(errors === _errs5){if(errors === _errs5){if(!(typeof data.startDate === "string")){validate11.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data3 = data.type;const _errs7 = errors;if(!(((data3 === "INTEREST") || (data3 === "OVERDRAFT")) || (data3 === "TECHNICAL_OVERDRAFT"))){validate11.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;