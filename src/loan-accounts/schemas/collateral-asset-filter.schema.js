/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CollateralAssetFilter","type":"object","description":"Represents the input for the collateral assets reevaluation background task.","properties":{"productKeys":{"type":"array","title":"productKeys","description":"Assets of the loan accounts that will be filtered by the product keys in the background process","items":{"type":"string"}},"branchKeys":{"type":"array","title":"branchKeys","description":"Assets of the loan accounts that will be filtered by the branch keys in the background process","items":{"type":"string"}},"currencies":{"type":"array","title":"currencies","description":"Assets of the loan accounts that will be filtered by the currency codes in the background process","items":{"type":"string"}}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.productKeys !== undefined){let data0 = data.productKeys;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;if(typeof data0[i0] !== "string"){validate10.errors = [{instancePath:instancePath+"/productKeys/" + i0,schemaPath:"#/properties/productKeys/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/productKeys",schemaPath:"#/properties/productKeys/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.branchKeys !== undefined){let data2 = data.branchKeys;const _errs6 = errors;if(errors === _errs6){if(Array.isArray(data2)){var valid2 = true;const len1 = data2.length;for(let i1=0; i1<len1; i1++){const _errs8 = errors;if(typeof data2[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/branchKeys/" + i1,schemaPath:"#/properties/branchKeys/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;if(!valid2){break;}}}else {validate10.errors = [{instancePath:instancePath+"/branchKeys",schemaPath:"#/properties/branchKeys/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.currencies !== undefined){let data4 = data.currencies;const _errs10 = errors;if(errors === _errs10){if(Array.isArray(data4)){var valid3 = true;const len2 = data4.length;for(let i2=0; i2<len2; i2++){const _errs12 = errors;if(typeof data4[i2] !== "string"){validate10.errors = [{instancePath:instancePath+"/currencies/" + i2,schemaPath:"#/properties/currencies/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/currencies",schemaPath:"#/properties/currencies/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;