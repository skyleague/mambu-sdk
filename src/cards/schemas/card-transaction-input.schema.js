/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CardTransactionInput","type":"object","description":"A card transaction entry which will have a corresponding a financial transaction performed.","properties":{"increaseAmountIfNeeded":{"type":"boolean","title":"increaseAmountIfNeeded","description":"Increase available amount if needed"},"amount":{"type":"number","title":"amount","description":"The amount of money to be withdrawn in the financial transaction."},"advice":{"type":"boolean","title":"advice","description":"Whether the given request should be accepted without balance validations."},"cardAcceptor":{"title":"cardAcceptor","$ref":"#/$defs/CardAcceptoraf30"},"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The ID of the channel through which the payment is done."},"creditDebitIndicator":{"title":"creditDebitIndicator","description":"If present, indicates that the card transaction is a refund, and whether is credited or debited","enum":["DBIT","CRDT"]},"cardToken":{"type":"string","title":"cardToken","description":"The reference token of the card."},"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the card transaction in subsequent requests."},"firstRepaymentDate":{"type":"string","title":"firstRepaymentDate","description":"The date of the first repayment for the loan account (as Organization Time)","format":"date-time"},"externalAuthorizationReferenceId":{"type":"string","title":"externalAuthorizationReferenceId","description":"The external authorization hold reference ID, which relates this card transaction to a previous authorization hold."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"userTransactionTime":{"type":"string","title":"userTransactionTime","description":"The formatted time at which the user made this card transaction."},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency."}},"required":["amount","advice","transactionChannelId","externalReferenceId"],"additionalProperties":false,"$defs":{"CardAcceptoraf30":{"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."}},"additionalProperties":false};const func4 = Object.prototype.hasOwnProperty;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.amount === undefined) && (missing0 = "amount")) || ((data.advice === undefined) && (missing0 = "advice"))) || ((data.transactionChannelId === undefined) && (missing0 = "transactionChannelId"))) || ((data.externalReferenceId === undefined) && (missing0 = "externalReferenceId"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func4.call(schema11.properties, key0))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.increaseAmountIfNeeded !== undefined){const _errs2 = errors;if(typeof data.increaseAmountIfNeeded !== "boolean"){validate10.errors = [{instancePath:instancePath+"/increaseAmountIfNeeded",schemaPath:"#/properties/increaseAmountIfNeeded/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data1 = data.amount;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.advice !== undefined){const _errs6 = errors;if(typeof data.advice !== "boolean"){validate10.errors = [{instancePath:instancePath+"/advice",schemaPath:"#/properties/advice/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.cardAcceptor !== undefined){let data3 = data.cardAcceptor;const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){const _errs11 = errors;for(const key1 in data3){if(!(((((((key1 === "zip") || (key1 === "country")) || (key1 === "city")) || (key1 === "street")) || (key1 === "name")) || (key1 === "state")) || (key1 === "mcc"))){validate10.errors = [{instancePath:instancePath+"/cardAcceptor",schemaPath:"#/$defs/CardAcceptoraf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs11 === errors){if(data3.zip !== undefined){const _errs12 = errors;if(typeof data3.zip !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/zip",schemaPath:"#/$defs/CardAcceptoraf30/properties/zip/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data3.country !== undefined){const _errs14 = errors;if(typeof data3.country !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/country",schemaPath:"#/$defs/CardAcceptoraf30/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data3.city !== undefined){const _errs16 = errors;if(typeof data3.city !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/city",schemaPath:"#/$defs/CardAcceptoraf30/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs16 === errors;}else {var valid2 = true;}if(valid2){if(data3.street !== undefined){const _errs18 = errors;if(typeof data3.street !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/street",schemaPath:"#/$defs/CardAcceptoraf30/properties/street/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs18 === errors;}else {var valid2 = true;}if(valid2){if(data3.name !== undefined){const _errs20 = errors;if(typeof data3.name !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/name",schemaPath:"#/$defs/CardAcceptoraf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs20 === errors;}else {var valid2 = true;}if(valid2){if(data3.state !== undefined){const _errs22 = errors;if(typeof data3.state !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/state",schemaPath:"#/$defs/CardAcceptoraf30/properties/state/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs22 === errors;}else {var valid2 = true;}if(valid2){if(data3.mcc !== undefined){let data10 = data3.mcc;const _errs24 = errors;if(!(((typeof data10 == "number") && (!(data10 % 1) && !isNaN(data10))) && (isFinite(data10)))){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/mcc",schemaPath:"#/$defs/CardAcceptoraf30/properties/mcc/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs24 === errors;}else {var valid2 = true;}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/cardAcceptor",schemaPath:"#/$defs/CardAcceptoraf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionChannelId !== undefined){const _errs26 = errors;if(typeof data.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionChannelId",schemaPath:"#/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.creditDebitIndicator !== undefined){let data12 = data.creditDebitIndicator;const _errs28 = errors;if(!((data12 === "DBIT") || (data12 === "CRDT"))){validate10.errors = [{instancePath:instancePath+"/creditDebitIndicator",schemaPath:"#/properties/creditDebitIndicator/enum",keyword:"enum",params:{allowedValues: schema11.properties.creditDebitIndicator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.cardToken !== undefined){const _errs29 = errors;if(typeof data.cardToken !== "string"){validate10.errors = [{instancePath:instancePath+"/cardToken",schemaPath:"#/properties/cardToken/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.externalReferenceId !== undefined){const _errs31 = errors;if(typeof data.externalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.firstRepaymentDate !== undefined){const _errs33 = errors;if(errors === _errs33){if(errors === _errs33){if(!(typeof data.firstRepaymentDate === "string")){validate10.errors = [{instancePath:instancePath+"/firstRepaymentDate",schemaPath:"#/properties/firstRepaymentDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.externalAuthorizationReferenceId !== undefined){const _errs35 = errors;if(typeof data.externalAuthorizationReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalAuthorizationReferenceId",schemaPath:"#/properties/externalAuthorizationReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs37 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.userTransactionTime !== undefined){const _errs39 = errors;if(typeof data.userTransactionTime !== "string"){validate10.errors = [{instancePath:instancePath+"/userTransactionTime",schemaPath:"#/properties/userTransactionTime/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs39 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs41 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs41 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;