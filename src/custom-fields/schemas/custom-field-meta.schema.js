/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CustomFieldMeta","type":"object","description":"Custom Field Date Transfer Object","properties":{"displaySettings":{"title":"displaySettings","$ref":"#/$defs/CustomFieldDisplaySettingsaf30"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Date at which the latest update was performed for this field","format":"date-time"},"usage":{"type":"array","title":"usage","description":"Information on what record types the custom field is available for.","items":{"description":"Information on what record types the custom field is available for.","$ref":"#/$defs/CustomFieldUsageaf30"}},"selectionOptions":{"type":"array","title":"selectionOptions","description":"Indicates that the field has predefined selections and only those can be used to populate it","items":{"description":"Indicates that the field has predefined selections and only those can be used to populate it","$ref":"#/$defs/CustomFieldSelectionOptionaf30"}},"editRights":{"title":"editRights","$ref":"#/$defs/CustomFieldEditRightsaf30"},"creationDate":{"type":"string","title":"creationDate","description":"Date at which the custom field was created","format":"date-time"},"type":{"title":"type","description":"Supported input type","enum":["FREE_TEXT","SELECTION","NUMBER","CHECKBOX","DATE","DATE_TIME","CLIENT_LINK","GROUP_LINK","USER_LINK"]},"viewRights":{"title":"viewRights","$ref":"#/$defs/CustomFieldViewRightsaf30"},"valueValidationSettings":{"title":"valueValidationSettings","$ref":"#/$defs/CustomFieldValueValidationSettingsaf30"},"availableFor":{"title":"availableFor","description":"Indicates with what object the custom field is associated","enum":["CLIENT","GROUP","CREDIT_ARRANGEMENT","LOAN_ACCOUNT","GUARANTOR","ASSET","DEPOSIT_ACCOUNT","DEPOSIT_PRODUCT","TRANSACTION_CHANNEL","TRANSACTION_TYPE","BRANCH","CENTRE","USER"]},"dependentFieldKey":{"type":"string","title":"dependentFieldKey","description":"Indicates the master field on which the dependency is based upon."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"User-defined ID, globally unique."},"state":{"title":"state","description":"Indicates whether the field is active or inactive","enum":["ACTIVE","INACTIVE"]}},"additionalProperties":true,"$defs":{"CustomFieldDisplaySettingsaf30":{"type":"object","title":"CustomFieldDisplaySettingsaf30","description":"Groups all fields related to a custom field's display settings","properties":{"description":{"type":"string","title":"description","description":"Free-text description of the field."},"fieldSize":{"title":"fieldSize","description":"Field display size in the UI.","enum":["SHORT","LONG"]},"position":{"type":"integer","title":"position","description":"Custom field position in the custom field set."},"builtInId":{"title":"builtInId","description":"Shows the original id of the built in custom field","enum":["FIRST_NAME","MIDDLE_NAME","LAST_NAME","BIRTHDATE","GENDER","MOBILE_PHONE","MOBILE_PHONE_2","HOME_PHONE","EMAIL_ADDRESS"]},"displayName":{"type":"string","title":"displayName","description":"User-defined name, displayed in the UI."}},"additionalProperties":true},"CustomFieldUsageaf30":{"type":"object","title":"CustomFieldUsageaf30","description":"Information on what record types the custom field is available for.","properties":{"default":{"type":"boolean","title":"default","description":"Indicates whether the field is displayed by default on create/edit page for this record type."},"objectKey":{"type":"string","title":"objectKey","description":"Indicates the key of the record type (eg client type)"},"required":{"type":"boolean","title":"required","description":"Indicates whether the field is mandatory or not for this record type."}},"additionalProperties":true},"CustomFieldSelectionOptionaf30":{"type":"object","title":"CustomFieldSelectionOptionaf30","description":"Groups all fields related to a custom field's selection option","properties":{"forSelectionKey":{"type":"string","title":"forSelectionKey","description":"Indicates the key for the value on the master field."},"forValue":{"type":"string","title":"forValue","description":"Indicates the value of the master field."},"availableOptions":{"type":"array","title":"availableOptions","description":"List of values that can be used in the slave field based on current master selection.","items":{"description":"List of values that can be used in the slave field based on current master selection.","$ref":"#/$defs/CustomFieldAvailableOptionaf30"}}},"additionalProperties":true},"CustomFieldAvailableOptionaf30":{"type":"object","title":"CustomFieldAvailableOptionaf30","description":"Groups the fields related to one option available within a selection","properties":{"score":{"type":"number","title":"score","description":"Selection score"},"selectionKey":{"type":"string","title":"selectionKey","description":"System-generated ID of the predefined value"},"value":{"type":"string","title":"value","description":"Predefined value name"}},"additionalProperties":true},"CustomFieldEditRightsaf30":{"type":"object","title":"CustomFieldEditRightsaf30","description":"Settings that indicate the defined editing rights by role for the custom field","properties":{"allUsers":{"type":"boolean","title":"allUsers","description":"Indicates whether the field can be edited by all users or by roles"},"roles":{"type":"array","title":"roles","description":"Lists the IDs of the roles that have edit rights for this field when it's not accessible by all users","items":{"type":"string"}}},"additionalProperties":true},"CustomFieldViewRightsaf30":{"type":"object","title":"CustomFieldViewRightsaf30","description":"Settings that indicate the defined view rights by role for the custom field","properties":{"allUsers":{"type":"boolean","title":"allUsers","description":"Indicates whether the field can be viewed by all users or by roles"},"roles":{"type":"array","title":"roles","description":"Lists the IDs of the roles that have view rights for this field when it's not accessible by all users","items":{"type":"string"}}},"additionalProperties":true},"CustomFieldValueValidationSettingsaf30":{"type":"object","title":"CustomFieldValueValidationSettingsaf30","description":"Settings for field input validation.","properties":{"validationPattern":{"type":"string","title":"validationPattern","description":"Indicates if a validation is set in terms of expected character type/format"},"unique":{"type":"boolean","title":"unique","description":"Indicates whether this field allows duplicate values or not"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"CustomFieldDisplaySettingsaf30","description":"Groups all fields related to a custom field's display settings","properties":{"description":{"type":"string","title":"description","description":"Free-text description of the field."},"fieldSize":{"title":"fieldSize","description":"Field display size in the UI.","enum":["SHORT","LONG"]},"position":{"type":"integer","title":"position","description":"Custom field position in the custom field set."},"builtInId":{"title":"builtInId","description":"Shows the original id of the built in custom field","enum":["FIRST_NAME","MIDDLE_NAME","LAST_NAME","BIRTHDATE","GENDER","MOBILE_PHONE","MOBILE_PHONE_2","HOME_PHONE","EMAIL_ADDRESS"]},"displayName":{"type":"string","title":"displayName","description":"User-defined name, displayed in the UI."}},"additionalProperties":true};const schema13 = {"type":"object","title":"CustomFieldUsageaf30","description":"Information on what record types the custom field is available for.","properties":{"default":{"type":"boolean","title":"default","description":"Indicates whether the field is displayed by default on create/edit page for this record type."},"objectKey":{"type":"string","title":"objectKey","description":"Indicates the key of the record type (eg client type)"},"required":{"type":"boolean","title":"required","description":"Indicates whether the field is mandatory or not for this record type."}},"additionalProperties":true};const schema16 = {"type":"object","title":"CustomFieldEditRightsaf30","description":"Settings that indicate the defined editing rights by role for the custom field","properties":{"allUsers":{"type":"boolean","title":"allUsers","description":"Indicates whether the field can be edited by all users or by roles"},"roles":{"type":"array","title":"roles","description":"Lists the IDs of the roles that have edit rights for this field when it's not accessible by all users","items":{"type":"string"}}},"additionalProperties":true};const schema17 = {"type":"object","title":"CustomFieldViewRightsaf30","description":"Settings that indicate the defined view rights by role for the custom field","properties":{"allUsers":{"type":"boolean","title":"allUsers","description":"Indicates whether the field can be viewed by all users or by roles"},"roles":{"type":"array","title":"roles","description":"Lists the IDs of the roles that have view rights for this field when it's not accessible by all users","items":{"type":"string"}}},"additionalProperties":true};const schema18 = {"type":"object","title":"CustomFieldValueValidationSettingsaf30","description":"Settings for field input validation.","properties":{"validationPattern":{"type":"string","title":"validationPattern","description":"Indicates if a validation is set in terms of expected character type/format"},"unique":{"type":"boolean","title":"unique","description":"Indicates whether this field allows duplicate values or not"}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;const schema14 = {"type":"object","title":"CustomFieldSelectionOptionaf30","description":"Groups all fields related to a custom field's selection option","properties":{"forSelectionKey":{"type":"string","title":"forSelectionKey","description":"Indicates the key for the value on the master field."},"forValue":{"type":"string","title":"forValue","description":"Indicates the value of the master field."},"availableOptions":{"type":"array","title":"availableOptions","description":"List of values that can be used in the slave field based on current master selection.","items":{"description":"List of values that can be used in the slave field based on current master selection.","$ref":"#/$defs/CustomFieldAvailableOptionaf30"}}},"additionalProperties":true};const schema15 = {"type":"object","title":"CustomFieldAvailableOptionaf30","description":"Groups the fields related to one option available within a selection","properties":{"score":{"type":"number","title":"score","description":"Selection score"},"selectionKey":{"type":"string","title":"selectionKey","description":"System-generated ID of the predefined value"},"value":{"type":"string","title":"value","description":"Predefined value name"}},"additionalProperties":true};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.forSelectionKey !== undefined){const _errs2 = errors;if(typeof data.forSelectionKey !== "string"){validate11.errors = [{instancePath:instancePath+"/forSelectionKey",schemaPath:"#/properties/forSelectionKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.forValue !== undefined){const _errs4 = errors;if(typeof data.forValue !== "string"){validate11.errors = [{instancePath:instancePath+"/forValue",schemaPath:"#/properties/forValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.availableOptions !== undefined){let data2 = data.availableOptions;const _errs6 = errors;if(errors === _errs6){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){if(data3.score !== undefined){let data4 = data3.score;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate11.errors = [{instancePath:instancePath+"/availableOptions/" + i0+"/score",schemaPath:"#/$defs/CustomFieldAvailableOptionaf30/properties/score/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data3.selectionKey !== undefined){const _errs14 = errors;if(typeof data3.selectionKey !== "string"){validate11.errors = [{instancePath:instancePath+"/availableOptions/" + i0+"/selectionKey",schemaPath:"#/$defs/CustomFieldAvailableOptionaf30/properties/selectionKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data3.value !== undefined){const _errs16 = errors;if(typeof data3.value !== "string"){validate11.errors = [{instancePath:instancePath+"/availableOptions/" + i0+"/value",schemaPath:"#/$defs/CustomFieldAvailableOptionaf30/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}}}}else {validate11.errors = [{instancePath:instancePath+"/availableOptions/" + i0,schemaPath:"#/$defs/CustomFieldAvailableOptionaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs8 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/availableOptions",schemaPath:"#/properties/availableOptions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.displaySettings !== undefined){let data0 = data.displaySettings;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.description !== undefined){const _errs6 = errors;if(typeof data0.description !== "string"){validate10.errors = [{instancePath:instancePath+"/displaySettings/description",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.fieldSize !== undefined){let data2 = data0.fieldSize;const _errs8 = errors;if(!((data2 === "SHORT") || (data2 === "LONG"))){validate10.errors = [{instancePath:instancePath+"/displaySettings/fieldSize",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/properties/fieldSize/enum",keyword:"enum",params:{allowedValues: schema12.properties.fieldSize.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data0.position !== undefined){let data3 = data0.position;const _errs9 = errors;if(!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/displaySettings/position",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/properties/position/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.builtInId !== undefined){const _errs11 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.builtInId.enum){if(func0(data0.builtInId, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/displaySettings/builtInId",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/properties/builtInId/enum",keyword:"enum",params:{allowedValues: schema12.properties.builtInId.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.displayName !== undefined){const _errs12 = errors;if(typeof data0.displayName !== "string"){validate10.errors = [{instancePath:instancePath+"/displaySettings/displayName",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/properties/displayName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}}else {validate10.errors = [{instancePath:instancePath+"/displaySettings",schemaPath:"#/$defs/CustomFieldDisplaySettingsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data7 = data.usage;const _errs16 = errors;if(errors === _errs16){if(Array.isArray(data7)){var valid4 = true;const len0 = data7.length;for(let i0=0; i0<len0; i0++){let data8 = data7[i0];const _errs18 = errors;const _errs19 = errors;if(errors === _errs19){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.default !== undefined){const _errs22 = errors;if(typeof data8.default !== "boolean"){validate10.errors = [{instancePath:instancePath+"/usage/" + i0+"/default",schemaPath:"#/$defs/CustomFieldUsageaf30/properties/default/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs22 === errors;}else {var valid6 = true;}if(valid6){if(data8.objectKey !== undefined){const _errs24 = errors;if(typeof data8.objectKey !== "string"){validate10.errors = [{instancePath:instancePath+"/usage/" + i0+"/objectKey",schemaPath:"#/$defs/CustomFieldUsageaf30/properties/objectKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs24 === errors;}else {var valid6 = true;}if(valid6){if(data8.required !== undefined){const _errs26 = errors;if(typeof data8.required !== "boolean"){validate10.errors = [{instancePath:instancePath+"/usage/" + i0+"/required",schemaPath:"#/$defs/CustomFieldUsageaf30/properties/required/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs26 === errors;}else {var valid6 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/usage/" + i0,schemaPath:"#/$defs/CustomFieldUsageaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs18 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.selectionOptions !== undefined){let data12 = data.selectionOptions;const _errs28 = errors;if(errors === _errs28){if(Array.isArray(data12)){var valid7 = true;const len1 = data12.length;for(let i1=0; i1<len1; i1++){const _errs30 = errors;if(!(validate11(data12[i1], {instancePath:instancePath+"/selectionOptions/" + i1,parentData:data12,parentDataProperty:i1,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid7 = _errs30 === errors;if(!valid7){break;}}}else {validate10.errors = [{instancePath:instancePath+"/selectionOptions",schemaPath:"#/properties/selectionOptions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.editRights !== undefined){let data14 = data.editRights;const _errs31 = errors;const _errs32 = errors;if(errors === _errs32){if(data14 && typeof data14 == "object" && !Array.isArray(data14)){if(data14.allUsers !== undefined){const _errs35 = errors;if(typeof data14.allUsers !== "boolean"){validate10.errors = [{instancePath:instancePath+"/editRights/allUsers",schemaPath:"#/$defs/CustomFieldEditRightsaf30/properties/allUsers/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid9 = _errs35 === errors;}else {var valid9 = true;}if(valid9){if(data14.roles !== undefined){let data16 = data14.roles;const _errs37 = errors;if(errors === _errs37){if(Array.isArray(data16)){var valid10 = true;const len2 = data16.length;for(let i2=0; i2<len2; i2++){const _errs39 = errors;if(typeof data16[i2] !== "string"){validate10.errors = [{instancePath:instancePath+"/editRights/roles/" + i2,schemaPath:"#/$defs/CustomFieldEditRightsaf30/properties/roles/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid10 = _errs39 === errors;if(!valid10){break;}}}else {validate10.errors = [{instancePath:instancePath+"/editRights/roles",schemaPath:"#/$defs/CustomFieldEditRightsaf30/properties/roles/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid9 = _errs37 === errors;}else {var valid9 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/editRights",schemaPath:"#/$defs/CustomFieldEditRightsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs41 = errors;if(errors === _errs41){if(errors === _errs41){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs41 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs43 = errors;let valid11;valid11 = false;for(const v1 of schema11.properties.type.enum){if(func0(data.type, v1)){valid11 = true;break;}}if(!valid11){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.viewRights !== undefined){let data20 = data.viewRights;const _errs44 = errors;const _errs45 = errors;if(errors === _errs45){if(data20 && typeof data20 == "object" && !Array.isArray(data20)){if(data20.allUsers !== undefined){const _errs48 = errors;if(typeof data20.allUsers !== "boolean"){validate10.errors = [{instancePath:instancePath+"/viewRights/allUsers",schemaPath:"#/$defs/CustomFieldViewRightsaf30/properties/allUsers/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid13 = _errs48 === errors;}else {var valid13 = true;}if(valid13){if(data20.roles !== undefined){let data22 = data20.roles;const _errs50 = errors;if(errors === _errs50){if(Array.isArray(data22)){var valid14 = true;const len3 = data22.length;for(let i3=0; i3<len3; i3++){const _errs52 = errors;if(typeof data22[i3] !== "string"){validate10.errors = [{instancePath:instancePath+"/viewRights/roles/" + i3,schemaPath:"#/$defs/CustomFieldViewRightsaf30/properties/roles/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid14 = _errs52 === errors;if(!valid14){break;}}}else {validate10.errors = [{instancePath:instancePath+"/viewRights/roles",schemaPath:"#/$defs/CustomFieldViewRightsaf30/properties/roles/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid13 = _errs50 === errors;}else {var valid13 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/viewRights",schemaPath:"#/$defs/CustomFieldViewRightsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs44 === errors;}else {var valid0 = true;}if(valid0){if(data.valueValidationSettings !== undefined){let data24 = data.valueValidationSettings;const _errs54 = errors;const _errs55 = errors;if(errors === _errs55){if(data24 && typeof data24 == "object" && !Array.isArray(data24)){if(data24.validationPattern !== undefined){const _errs58 = errors;if(typeof data24.validationPattern !== "string"){validate10.errors = [{instancePath:instancePath+"/valueValidationSettings/validationPattern",schemaPath:"#/$defs/CustomFieldValueValidationSettingsaf30/properties/validationPattern/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid16 = _errs58 === errors;}else {var valid16 = true;}if(valid16){if(data24.unique !== undefined){const _errs60 = errors;if(typeof data24.unique !== "boolean"){validate10.errors = [{instancePath:instancePath+"/valueValidationSettings/unique",schemaPath:"#/$defs/CustomFieldValueValidationSettingsaf30/properties/unique/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid16 = _errs60 === errors;}else {var valid16 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/valueValidationSettings",schemaPath:"#/$defs/CustomFieldValueValidationSettingsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs54 === errors;}else {var valid0 = true;}if(valid0){if(data.availableFor !== undefined){const _errs62 = errors;let valid17;valid17 = false;for(const v2 of schema11.properties.availableFor.enum){if(func0(data.availableFor, v2)){valid17 = true;break;}}if(!valid17){validate10.errors = [{instancePath:instancePath+"/availableFor",schemaPath:"#/properties/availableFor/enum",keyword:"enum",params:{allowedValues: schema11.properties.availableFor.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs62 === errors;}else {var valid0 = true;}if(valid0){if(data.dependentFieldKey !== undefined){const _errs63 = errors;if(typeof data.dependentFieldKey !== "string"){validate10.errors = [{instancePath:instancePath+"/dependentFieldKey",schemaPath:"#/properties/dependentFieldKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs63 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs65 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs65 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs67 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs67 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){let data31 = data.state;const _errs69 = errors;if(!((data31 === "ACTIVE") || (data31 === "INACTIVE"))){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs69 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;