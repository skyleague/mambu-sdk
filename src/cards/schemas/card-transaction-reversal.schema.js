/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"CardTransactionReversal","type":"object","description":"A full or partial reversal of a card transaction.","properties":{"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the card reversal transaction in subsequent requests."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"amount":{"type":"number","title":"amount","description":"The amount of money to be credited in the client's account from the original card transaction."},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency."},"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The ID of the channel through which the payment is done. If the value is not present, the value from the source card transaction is copied."}},"required":["externalReferenceId","amount"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.externalReferenceId===void 0&&(missing0="externalReferenceId")||data.amount===void 0&&(missing0="amount")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.externalReferenceId!==void 0){const _errs2=errors;if(typeof data.externalReferenceId!=="string"){validate10.errors=[{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs4=errors;if(typeof data.encodedKey!=="string"){validate10.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.amount!==void 0){let data2=data.amount;const _errs6=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate10.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.currencyCode!==void 0){const _errs8=errors;if(typeof data.currencyCode!=="string"){validate10.errors=[{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.transactionChannelId!==void 0){const _errs10=errors;if(typeof data.transactionChannelId!=="string"){validate10.errors=[{instancePath:instancePath+"/transactionChannelId",schemaPath:"#/properties/transactionChannelId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs10===errors}else{var valid0=true}}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
