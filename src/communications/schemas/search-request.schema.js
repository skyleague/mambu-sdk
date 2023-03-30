/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import{createRequire}from"module";const require2=createRequire(import.meta.url);"use strict";const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"searchRequest","type":"array","items":{"$ref":"#/$defs/CommunicationMessageFilterCriteriaaf30"},"$defs":{"CommunicationMessageFilterCriteriaaf30":{"type":"object","title":"CommunicationMessageFilterCriteriaaf30","description":"The unit that composes the list used for communication messages client directed searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields","enum":["encodedKey","creationDate","sendDate","senderKey","clientKey","groupKey","userKey","state","failureReason","failureCause","destination","type","event"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true}}};const schema12={"type":"object","title":"CommunicationMessageFilterCriteriaaf30","description":"The unit that composes the list used for communication messages client directed searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields","enum":["encodedKey","creationDate","sendDate","senderKey","clientKey","groupKey","userKey","state","failureReason","failureCause","destination","type","event"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true};const func0=require2("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(Array.isArray(data)){var valid0=true;const len0=data.length;for(let i0=0;i0<len0;i0++){let data0=data[i0];const _errs1=errors;const _errs2=errors;if(errors===_errs2){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){let missing0;if(data0.field===void 0&&(missing0="field")||data0.operator===void 0&&(missing0="operator")){validate10.errors=[{instancePath:instancePath+"/"+i0,schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data0.field!==void 0){const _errs5=errors;let valid3;valid3=false;for(const v0 of schema12.properties.field.enum){if(func0(data0.field,v0)){valid3=true;break}}if(!valid3){validate10.errors=[{instancePath:instancePath+"/"+i0+"/field",schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues:schema12.properties.field.enum},message:"must be equal to one of the allowed values"}];return false}var valid2=_errs5===errors}else{var valid2=true}if(valid2){if(data0.value!==void 0){const _errs6=errors;if(typeof data0.value!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/value",schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/value/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.operator!==void 0){const _errs8=errors;let valid4;valid4=false;for(const v1 of schema12.properties.operator.enum){if(func0(data0.operator,v1)){valid4=true;break}}if(!valid4){validate10.errors=[{instancePath:instancePath+"/"+i0+"/operator",schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/operator/enum",keyword:"enum",params:{allowedValues:schema12.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data0.secondValue!==void 0){const _errs9=errors;if(typeof data0.secondValue!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/secondValue",schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/secondValue/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs9===errors}else{var valid2=true}if(valid2){if(data0.values!==void 0){let data5=data0.values;const _errs11=errors;if(errors===_errs11){if(Array.isArray(data5)){var valid5=true;const len1=data5.length;for(let i1=0;i1<len1;i1++){const _errs13=errors;if(typeof data5[i1]!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/values/"+i1,schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/values/items/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid5=_errs13===errors;if(!valid5){break}}}else{validate10.errors=[{instancePath:instancePath+"/"+i0+"/values",schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/properties/values/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid2=_errs11===errors}else{var valid2=true}}}}}}}else{validate10.errors=[{instancePath:instancePath+"/"+i0,schemaPath:"#/$defs/CommunicationMessageFilterCriteriaaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs1===errors;if(!valid0){break}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
