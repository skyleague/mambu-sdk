/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllBlocksResponse","type":"array","items":{"$ref":"#/$defs/BlockFund"},"$defs":{"BlockFund":{"type":"object","title":"BlockFund","description":"Blocks an amount on deposit account that can be later seized","properties":{"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the block fund in subsequent requests"},"amount":{"type":"number","title":"amount","description":"The amount to be blocked"},"seizedAmount":{"type":"number","title":"seizedAmount","description":"The amount that has been seized"},"notes":{"type":"string","title":"notes","description":"Notes about this block fund"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The date at which the block fund was created","format":"date-time"},"state":{"title":"state","description":"The state of the block fund","enum":["PENDING","SEIZED","REMOVED","PARTIALLY_SEIZED"]},"creationDate":{"type":"string","title":"creationDate","description":"The date at which the block fund was created","format":"date-time"},"accountKey":{"type":"string","title":"accountKey","description":"The key of the account which block fund belongs to"}},"required":["externalReferenceId","amount"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"BlockFund","description":"Blocks an amount on deposit account that can be later seized","properties":{"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the block fund in subsequent requests"},"amount":{"type":"number","title":"amount","description":"The amount to be blocked"},"seizedAmount":{"type":"number","title":"seizedAmount","description":"The amount that has been seized"},"notes":{"type":"string","title":"notes","description":"Notes about this block fund"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The date at which the block fund was created","format":"date-time"},"state":{"title":"state","description":"The state of the block fund","enum":["PENDING","SEIZED","REMOVED","PARTIALLY_SEIZED"]},"creationDate":{"type":"string","title":"creationDate","description":"The date at which the block fund was created","format":"date-time"},"accountKey":{"type":"string","title":"accountKey","description":"The key of the account which block fund belongs to"}},"required":["externalReferenceId","amount"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if(((data0.externalReferenceId === undefined) && (missing0 = "externalReferenceId")) || ((data0.amount === undefined) && (missing0 = "amount"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/BlockFund/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.externalReferenceId !== undefined){const _errs5 = errors;if(typeof data0.externalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/externalReferenceId",schemaPath:"#/$defs/BlockFund/properties/externalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.amount !== undefined){let data2 = data0.amount;const _errs7 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/amount",schemaPath:"#/$defs/BlockFund/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.seizedAmount !== undefined){let data3 = data0.seizedAmount;const _errs9 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/seizedAmount",schemaPath:"#/$defs/BlockFund/properties/seizedAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.notes !== undefined){const _errs11 = errors;if(typeof data0.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/notes",schemaPath:"#/$defs/BlockFund/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.lastModifiedDate !== undefined){const _errs13 = errors;if(errors === _errs13){if(errors === _errs13){if(!(typeof data0.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/lastModifiedDate",schemaPath:"#/$defs/BlockFund/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.state !== undefined){let data6 = data0.state;const _errs15 = errors;if(!((((data6 === "PENDING") || (data6 === "SEIZED")) || (data6 === "REMOVED")) || (data6 === "PARTIALLY_SEIZED"))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/state",schemaPath:"#/$defs/BlockFund/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.creationDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/BlockFund/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs16 === errors;}else {var valid2 = true;}if(valid2){if(data0.accountKey !== undefined){const _errs18 = errors;if(typeof data0.accountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/accountKey",schemaPath:"#/$defs/BlockFund/properties/accountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs18 === errors;}else {var valid2 = true;}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/BlockFund/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;