/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"searchResponse","type":"array","items":{"$ref":"#/$defs/CommunicationMessage"},"$defs":{"CommunicationMessage":{"type":"object","title":"CommunicationMessage","description":"The communication message being sent, of type email or SMS, containing information such as the state of the message, to whom it was sent","properties":{"senderKey":{"type":"string","title":"senderKey","description":"The encoded key of the sender. If specified, it should be the encoded key of the current user"},"sendDate":{"type":"string","title":"sendDate","description":"The date the communication message was actually sent (as UTC)","format":"date-time"},"numRetries":{"type":"integer","title":"numRetries","description":"The number of retries to send the message"},"subject":{"type":"string","title":"subject","description":"The subject of the message"},"loanAccountKey":{"type":"string","title":"loanAccountKey","description":"The loan account about which the message was sent"},"destination":{"type":"string","title":"destination","description":"The destination (phone number or email address) this communication message was sent to"},"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The deposit account about which the message was sent"},"failureCause":{"type":"string","title":"failureCause","description":"The failure code if the message failed to send"},"creationDate":{"type":"string","title":"creationDate","description":"The date the communication message was created (as UTC)","format":"date-time"},"type":{"title":"type","description":"The type of communication message","enum":["EMAIL","SMS","WEB_HOOK","EVENT_STREAM","TASK"]},"body":{"type":"string","title":"body","description":"The actual contents (body) of the message"},"referenceId":{"type":"string","title":"referenceId","description":"The reference id of the communication message, generated by the SMS Dispatcher"},"groupKey":{"type":"string","title":"groupKey","description":"The group the message was sent to"},"userKey":{"type":"string","title":"userKey","description":"The user the message was sent to"},"repaymentKey":{"type":"string","title":"repaymentKey","description":"The repayment about which the message was sent"},"clientKey":{"type":"string","title":"clientKey","description":"The client the message was sent to"},"failureReason":{"title":"failureReason","description":"The reason for the communication message failure","enum":["MESSAGING_EXCEPTION","UNSUPPORTED_ENCODING_EXCEPTION","EMAIL_SERVICE_NOT_ENABLED","SMS_TOO_LONG","SMS_SERVICE_NOT_ENABLED","SMS_NOT_SENT","SMS_SERVICE_ERROR","SMS_CONNECTION_EXCEPTION","WEBHOOK_NOTIFICATIONS_DISABLED","INVALID_HTTP_RESPONSE","HTTP_ERROR_WHILE_SENDING","INVALID_JSON_BODY_SYNTAX","MISSING_TEMPLATE_KEY","UNDEFINED_DESTINATION","INVALID_HTTP_PROTOCOL","BLACKLISTED_URL","INVALID_SMS_GATEWAY_CREDENTIALS","MISSING_SMS_RECIPIENT","SMS_GATEWAY_ERROR","MISSING_EMAIL_RECIPIENT_ADDRESS","OTHER"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the communication message, auto generated, unique"},"state":{"title":"state","description":"The state of the message","enum":["SENT","QUEUED","QUEUED_FOR_STREAM","WAITING","SENDING_ASYNC","FAILED"]},"event":{"title":"event","description":"The event this message was sent for","enum":["MANUAL","DO_NOTHING","CLIENT_CREATED","CLIENT_APPROVED","GROUP_ACTIVITY","GROUP_CREATED","LOAN_CREATED","INTEREST_RATE_CHANGED","CLIENT_REJECTED","CLIENT_ACTIVITY","LOAN_REPAYMENT","LOAN_REPAYMENT_REVERSAL","FEE_APPLIED","FEE_ADJUSTED","FEE_CHARGED","PENALTY_APPLIED","PENALTY_ADJUSTMENT","FEES_DUE_REDUCED","FEE_REDUCTION_ADJUSTMENT","LOAN_APPROVAL","LOAN_ACCOUNT_CLOSURE","LOAN_ACCOUNT_WRITE_OFF","LOAN_ACCOUNT_REJECTION","LOAN_ACCOUNT_RESCHEDULED","LOAN_ACCOUNT_REFINANCED","REPAYMENT_REMINDER","ACCOUNT_IN_ARREARS","LOAN_DISBURSEMENT","LOAN_DISBURSEMENT_REVERSAL","LOAN_ACCOUNT_ACTIVITY","LOAN_ANTICIPATED_DISBURSEMENT","SAVINGS_CREATED","SAVINGS_DEPOSIT","SAVINGS_DEPOSIT_REVERSAL","SAVINGS_APPROVAL","SAVINGS_ACCOUNT_ACTIVATED","SAVINGS_ACCOUNT_CLOSURE","SAVINGS_ACCOUNT_REJECTION","SAVINGS_WITHDRAWAL","SAVINGS_WITHDRAWAL_REVERSAL","SAVINGS_ACCOUNT_ACTIVITY","DEPOSIT_INTEREST_APPLIED","DEPOSIT_INTEREST_APPLIED_ADJUSTMENT","ACCOUNT_AUTHORISATION_HOLD_CREATED","ACCOUNT_AUTHORISATION_HOLD_REVERSED","CARDS_AUTHORISATION_HOLD_CREATED","CARDS_AUTHORISATION_HOLD_SETTLED","CARDS_AUTHORISATION_HOLD_AMOUNT_DECREASED","CARDS_AUTHORISATION_HOLD_AMOUNT_INCREASED","CARDS_AUTHORISATION_HOLD_EXPIRED","CARDS_AUTHORISATION_HOLD_REVERSED","PORTAL_ACTIVATED","PORTAL_PASSWORD_RESET","END_OF_DAY_PROCESSING_COMPLETED","DATA_ACCESS_STATE_CHANGED","CREDIT_ARRANGEMENT_CREATED","CREDIT_ARRANGEMENT_CLOSED","CREDIT_ARRANGEMENT_APPROVED","CREDIT_ARRANGEMENT_REJECTED","CREDIT_ARRANGEMENT_WITHDRAWN","CREDIT_ARRANGEMENT_DELETED","CREDIT_ARRANGEMENT_ACCOUNT_ADDED","CREDIT_ARRANGEMENT_ACCOUNT_REMOVED","CREDIT_ARRANGEMENT_EDITED","PAYMENT_ORDER_ACTIVITY","COLLECTION_ORDER_ACTIVITY","JOURNAL_ENTRY_ADDED","JOURNAL_ENTRY_ADJUSTED"]},"templateKey":{"type":"string","title":"templateKey","description":"The communication message template key"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"CommunicationMessage","description":"The communication message being sent, of type email or SMS, containing information such as the state of the message, to whom it was sent","properties":{"senderKey":{"type":"string","title":"senderKey","description":"The encoded key of the sender. If specified, it should be the encoded key of the current user"},"sendDate":{"type":"string","title":"sendDate","description":"The date the communication message was actually sent (as UTC)","format":"date-time"},"numRetries":{"type":"integer","title":"numRetries","description":"The number of retries to send the message"},"subject":{"type":"string","title":"subject","description":"The subject of the message"},"loanAccountKey":{"type":"string","title":"loanAccountKey","description":"The loan account about which the message was sent"},"destination":{"type":"string","title":"destination","description":"The destination (phone number or email address) this communication message was sent to"},"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The deposit account about which the message was sent"},"failureCause":{"type":"string","title":"failureCause","description":"The failure code if the message failed to send"},"creationDate":{"type":"string","title":"creationDate","description":"The date the communication message was created (as UTC)","format":"date-time"},"type":{"title":"type","description":"The type of communication message","enum":["EMAIL","SMS","WEB_HOOK","EVENT_STREAM","TASK"]},"body":{"type":"string","title":"body","description":"The actual contents (body) of the message"},"referenceId":{"type":"string","title":"referenceId","description":"The reference id of the communication message, generated by the SMS Dispatcher"},"groupKey":{"type":"string","title":"groupKey","description":"The group the message was sent to"},"userKey":{"type":"string","title":"userKey","description":"The user the message was sent to"},"repaymentKey":{"type":"string","title":"repaymentKey","description":"The repayment about which the message was sent"},"clientKey":{"type":"string","title":"clientKey","description":"The client the message was sent to"},"failureReason":{"title":"failureReason","description":"The reason for the communication message failure","enum":["MESSAGING_EXCEPTION","UNSUPPORTED_ENCODING_EXCEPTION","EMAIL_SERVICE_NOT_ENABLED","SMS_TOO_LONG","SMS_SERVICE_NOT_ENABLED","SMS_NOT_SENT","SMS_SERVICE_ERROR","SMS_CONNECTION_EXCEPTION","WEBHOOK_NOTIFICATIONS_DISABLED","INVALID_HTTP_RESPONSE","HTTP_ERROR_WHILE_SENDING","INVALID_JSON_BODY_SYNTAX","MISSING_TEMPLATE_KEY","UNDEFINED_DESTINATION","INVALID_HTTP_PROTOCOL","BLACKLISTED_URL","INVALID_SMS_GATEWAY_CREDENTIALS","MISSING_SMS_RECIPIENT","SMS_GATEWAY_ERROR","MISSING_EMAIL_RECIPIENT_ADDRESS","OTHER"]},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the communication message, auto generated, unique"},"state":{"title":"state","description":"The state of the message","enum":["SENT","QUEUED","QUEUED_FOR_STREAM","WAITING","SENDING_ASYNC","FAILED"]},"event":{"title":"event","description":"The event this message was sent for","enum":["MANUAL","DO_NOTHING","CLIENT_CREATED","CLIENT_APPROVED","GROUP_ACTIVITY","GROUP_CREATED","LOAN_CREATED","INTEREST_RATE_CHANGED","CLIENT_REJECTED","CLIENT_ACTIVITY","LOAN_REPAYMENT","LOAN_REPAYMENT_REVERSAL","FEE_APPLIED","FEE_ADJUSTED","FEE_CHARGED","PENALTY_APPLIED","PENALTY_ADJUSTMENT","FEES_DUE_REDUCED","FEE_REDUCTION_ADJUSTMENT","LOAN_APPROVAL","LOAN_ACCOUNT_CLOSURE","LOAN_ACCOUNT_WRITE_OFF","LOAN_ACCOUNT_REJECTION","LOAN_ACCOUNT_RESCHEDULED","LOAN_ACCOUNT_REFINANCED","REPAYMENT_REMINDER","ACCOUNT_IN_ARREARS","LOAN_DISBURSEMENT","LOAN_DISBURSEMENT_REVERSAL","LOAN_ACCOUNT_ACTIVITY","LOAN_ANTICIPATED_DISBURSEMENT","SAVINGS_CREATED","SAVINGS_DEPOSIT","SAVINGS_DEPOSIT_REVERSAL","SAVINGS_APPROVAL","SAVINGS_ACCOUNT_ACTIVATED","SAVINGS_ACCOUNT_CLOSURE","SAVINGS_ACCOUNT_REJECTION","SAVINGS_WITHDRAWAL","SAVINGS_WITHDRAWAL_REVERSAL","SAVINGS_ACCOUNT_ACTIVITY","DEPOSIT_INTEREST_APPLIED","DEPOSIT_INTEREST_APPLIED_ADJUSTMENT","ACCOUNT_AUTHORISATION_HOLD_CREATED","ACCOUNT_AUTHORISATION_HOLD_REVERSED","CARDS_AUTHORISATION_HOLD_CREATED","CARDS_AUTHORISATION_HOLD_SETTLED","CARDS_AUTHORISATION_HOLD_AMOUNT_DECREASED","CARDS_AUTHORISATION_HOLD_AMOUNT_INCREASED","CARDS_AUTHORISATION_HOLD_EXPIRED","CARDS_AUTHORISATION_HOLD_REVERSED","PORTAL_ACTIVATED","PORTAL_PASSWORD_RESET","END_OF_DAY_PROCESSING_COMPLETED","DATA_ACCESS_STATE_CHANGED","CREDIT_ARRANGEMENT_CREATED","CREDIT_ARRANGEMENT_CLOSED","CREDIT_ARRANGEMENT_APPROVED","CREDIT_ARRANGEMENT_REJECTED","CREDIT_ARRANGEMENT_WITHDRAWN","CREDIT_ARRANGEMENT_DELETED","CREDIT_ARRANGEMENT_ACCOUNT_ADDED","CREDIT_ARRANGEMENT_ACCOUNT_REMOVED","CREDIT_ARRANGEMENT_EDITED","PAYMENT_ORDER_ACTIVITY","COLLECTION_ORDER_ACTIVITY","JOURNAL_ENTRY_ADDED","JOURNAL_ENTRY_ADJUSTED"]},"templateKey":{"type":"string","title":"templateKey","description":"The communication message template key"}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.senderKey !== undefined){const _errs5 = errors;if(typeof data0.senderKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/senderKey",schemaPath:"#/$defs/CommunicationMessage/properties/senderKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.sendDate !== undefined){const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(!(typeof data0.sendDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/sendDate",schemaPath:"#/$defs/CommunicationMessage/properties/sendDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.numRetries !== undefined){let data3 = data0.numRetries;const _errs9 = errors;if(!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/numRetries",schemaPath:"#/$defs/CommunicationMessage/properties/numRetries/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.subject !== undefined){const _errs11 = errors;if(typeof data0.subject !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/subject",schemaPath:"#/$defs/CommunicationMessage/properties/subject/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.loanAccountKey !== undefined){const _errs13 = errors;if(typeof data0.loanAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/loanAccountKey",schemaPath:"#/$defs/CommunicationMessage/properties/loanAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.destination !== undefined){const _errs15 = errors;if(typeof data0.destination !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/destination",schemaPath:"#/$defs/CommunicationMessage/properties/destination/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data0.depositAccountKey !== undefined){const _errs17 = errors;if(typeof data0.depositAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/depositAccountKey",schemaPath:"#/$defs/CommunicationMessage/properties/depositAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data0.failureCause !== undefined){const _errs19 = errors;if(typeof data0.failureCause !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/failureCause",schemaPath:"#/$defs/CommunicationMessage/properties/failureCause/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data0.creationDate !== undefined){const _errs21 = errors;if(errors === _errs21){if(errors === _errs21){if(!(typeof data0.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/" + i0+"/creationDate",schemaPath:"#/$defs/CommunicationMessage/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs21 === errors;}else {var valid2 = true;}if(valid2){if(data0.type !== undefined){const _errs23 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.type.enum){if(func0(data0.type, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/" + i0+"/type",schemaPath:"#/$defs/CommunicationMessage/properties/type/enum",keyword:"enum",params:{allowedValues: schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs23 === errors;}else {var valid2 = true;}if(valid2){if(data0.body !== undefined){const _errs24 = errors;if(typeof data0.body !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/body",schemaPath:"#/$defs/CommunicationMessage/properties/body/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs24 === errors;}else {var valid2 = true;}if(valid2){if(data0.referenceId !== undefined){const _errs26 = errors;if(typeof data0.referenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/referenceId",schemaPath:"#/$defs/CommunicationMessage/properties/referenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs26 === errors;}else {var valid2 = true;}if(valid2){if(data0.groupKey !== undefined){const _errs28 = errors;if(typeof data0.groupKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/groupKey",schemaPath:"#/$defs/CommunicationMessage/properties/groupKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs28 === errors;}else {var valid2 = true;}if(valid2){if(data0.userKey !== undefined){const _errs30 = errors;if(typeof data0.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/userKey",schemaPath:"#/$defs/CommunicationMessage/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs30 === errors;}else {var valid2 = true;}if(valid2){if(data0.repaymentKey !== undefined){const _errs32 = errors;if(typeof data0.repaymentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/repaymentKey",schemaPath:"#/$defs/CommunicationMessage/properties/repaymentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs32 === errors;}else {var valid2 = true;}if(valid2){if(data0.clientKey !== undefined){const _errs34 = errors;if(typeof data0.clientKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/clientKey",schemaPath:"#/$defs/CommunicationMessage/properties/clientKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs34 === errors;}else {var valid2 = true;}if(valid2){if(data0.failureReason !== undefined){const _errs36 = errors;let valid4;valid4 = false;for(const v1 of schema12.properties.failureReason.enum){if(func0(data0.failureReason, v1)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/" + i0+"/failureReason",schemaPath:"#/$defs/CommunicationMessage/properties/failureReason/enum",keyword:"enum",params:{allowedValues: schema12.properties.failureReason.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs36 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs37 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/CommunicationMessage/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs37 === errors;}else {var valid2 = true;}if(valid2){if(data0.state !== undefined){const _errs39 = errors;let valid5;valid5 = false;for(const v2 of schema12.properties.state.enum){if(func0(data0.state, v2)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/" + i0+"/state",schemaPath:"#/$defs/CommunicationMessage/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs39 === errors;}else {var valid2 = true;}if(valid2){if(data0.event !== undefined){const _errs40 = errors;let valid6;valid6 = false;for(const v3 of schema12.properties.event.enum){if(func0(data0.event, v3)){valid6 = true;break;}}if(!valid6){validate10.errors = [{instancePath:instancePath+"/" + i0+"/event",schemaPath:"#/$defs/CommunicationMessage/properties/event/enum",keyword:"enum",params:{allowedValues: schema12.properties.event.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs40 === errors;}else {var valid2 = true;}if(valid2){if(data0.templateKey !== undefined){const _errs41 = errors;if(typeof data0.templateKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/templateKey",schemaPath:"#/$defs/CommunicationMessage/properties/templateKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs41 === errors;}else {var valid2 = true;}}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/CommunicationMessage/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;