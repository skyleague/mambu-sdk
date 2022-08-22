/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ClientSearchCriteria","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for clients","properties":{"sortingCriteria":{"title":"sortingCriteria","$ref":"#/$defs/ClientSortingCriteriaaf30"},"filterCriteria":{"type":"array","title":"filterCriteria","description":"The list of filtering criteria","items":{"description":"The list of filtering criteria","$ref":"#/$defs/ClientFilterCriteriaaf30"}}},"additionalProperties":false,"$defs":{"ClientSortingCriteriaaf30":{"type":"object","title":"ClientSortingCriteria","description":"The sorting criteria used for Clients","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","id","fullName","firstName","middleName","lastName","creationDate","lastModifiedDate","depositsBalance","loansBalance","pendingLoanAmount","approvedLoanAmount","totalBalance","totalDue","homePhoneNumber","mobilePhoneNumber","mobilePhoneNumber2","emailAddress","birthdate","loanCycle","groupLoanCycle","portalState"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false},"ClientFilterCriteriaaf30":{"type":"object","title":"ClientFilterCriteria","description":"The unit that composes the list used for Clients searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].\n","enum":["encodedKey","creditOfficerKey","clientRoleKey","branchKey","centreKey","groupKey","fullName","firstName","middleName","lastName","creationDate","lastModifiedDate","id","depositsBalance","loansBalance","pendingLoanAmount","approvedLoanAmount","totalBalance","totalDue","homePhoneNumber","mobilePhoneNumber","mobilePhoneNumber2","emailAddress","clientAddress","birthdate","gender","loanCycle","groupLoanCycle","clientState","portalState","preferredLanguage","groupId"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false}}};const schema12 = {"type":"object","title":"ClientSortingCriteria","description":"The sorting criteria used for Clients","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","id","fullName","firstName","middleName","lastName","creationDate","lastModifiedDate","depositsBalance","loansBalance","pendingLoanAmount","approvedLoanAmount","totalBalance","totalDue","homePhoneNumber","mobilePhoneNumber","mobilePhoneNumber2","emailAddress","birthdate","loanCycle","groupLoanCycle","portalState"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false};const schema13 = {"type":"object","title":"ClientFilterCriteria","description":"The unit that composes the list used for Clients searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].\n","enum":["encodedKey","creditOfficerKey","clientRoleKey","branchKey","centreKey","groupKey","fullName","firstName","middleName","lastName","creationDate","lastModifiedDate","id","depositsBalance","loansBalance","pendingLoanAmount","approvedLoanAmount","totalBalance","totalDue","homePhoneNumber","mobilePhoneNumber","mobilePhoneNumber2","emailAddress","clientAddress","birthdate","gender","loanCycle","groupLoanCycle","clientState","portalState","preferredLanguage","groupId"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((key0 === "sortingCriteria") || (key0 === "filterCriteria"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.sortingCriteria !== undefined){let data0 = data.sortingCriteria;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.field === undefined) && (missing0 = "field")){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/ClientSortingCriteriaaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs5 = errors;for(const key1 in data0){if(!((key1 === "field") || (key1 === "order"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/ClientSortingCriteriaaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.field !== undefined){let data1 = data0.field;const _errs6 = errors;if(!((((((((((((((((((((((data1 === "encodedKey") || (data1 === "id")) || (data1 === "fullName")) || (data1 === "firstName")) || (data1 === "middleName")) || (data1 === "lastName")) || (data1 === "creationDate")) || (data1 === "lastModifiedDate")) || (data1 === "depositsBalance")) || (data1 === "loansBalance")) || (data1 === "pendingLoanAmount")) || (data1 === "approvedLoanAmount")) || (data1 === "totalBalance")) || (data1 === "totalDue")) || (data1 === "homePhoneNumber")) || (data1 === "mobilePhoneNumber")) || (data1 === "mobilePhoneNumber2")) || (data1 === "emailAddress")) || (data1 === "birthdate")) || (data1 === "loanCycle")) || (data1 === "groupLoanCycle")) || (data1 === "portalState"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/field",schemaPath:"#/$defs/ClientSortingCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.order !== undefined){let data2 = data0.order;const _errs7 = errors;if(!((data2 === "ASC") || (data2 === "DESC"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/order",schemaPath:"#/$defs/ClientSortingCriteriaaf30/properties/order/enum",keyword:"enum",params:{allowedValues: schema12.properties.order.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/ClientSortingCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.filterCriteria !== undefined){let data3 = data.filterCriteria;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid3 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing1;if(((data4.field === undefined) && (missing1 = "field")) || ((data4.operator === undefined) && (missing1 = "operator"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/ClientFilterCriteriaaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {const _errs13 = errors;for(const key2 in data4){if(!(((((key2 === "field") || (key2 === "value")) || (key2 === "operator")) || (key2 === "secondValue")) || (key2 === "values"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/ClientFilterCriteriaaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs13 === errors){if(data4.field !== undefined){let data5 = data4.field;const _errs14 = errors;if(!((((((((((((((((((((((((((((((((data5 === "encodedKey") || (data5 === "creditOfficerKey")) || (data5 === "clientRoleKey")) || (data5 === "branchKey")) || (data5 === "centreKey")) || (data5 === "groupKey")) || (data5 === "fullName")) || (data5 === "firstName")) || (data5 === "middleName")) || (data5 === "lastName")) || (data5 === "creationDate")) || (data5 === "lastModifiedDate")) || (data5 === "id")) || (data5 === "depositsBalance")) || (data5 === "loansBalance")) || (data5 === "pendingLoanAmount")) || (data5 === "approvedLoanAmount")) || (data5 === "totalBalance")) || (data5 === "totalDue")) || (data5 === "homePhoneNumber")) || (data5 === "mobilePhoneNumber")) || (data5 === "mobilePhoneNumber2")) || (data5 === "emailAddress")) || (data5 === "clientAddress")) || (data5 === "birthdate")) || (data5 === "gender")) || (data5 === "loanCycle")) || (data5 === "groupLoanCycle")) || (data5 === "clientState")) || (data5 === "portalState")) || (data5 === "preferredLanguage")) || (data5 === "groupId"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema13.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid5 = _errs14 === errors;}else {var valid5 = true;}if(valid5){if(data4.value !== undefined){const _errs15 = errors;if(typeof data4.value !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/value",schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs15 === errors;}else {var valid5 = true;}if(valid5){if(data4.operator !== undefined){let data7 = data4.operator;const _errs17 = errors;if(!(((((((((((((((((((((data7 === "EQUALS") || (data7 === "EQUALS_CASE_SENSITIVE")) || (data7 === "DIFFERENT_THAN")) || (data7 === "MORE_THAN")) || (data7 === "LESS_THAN")) || (data7 === "BETWEEN")) || (data7 === "ON")) || (data7 === "AFTER")) || (data7 === "AFTER_INCLUSIVE")) || (data7 === "BEFORE")) || (data7 === "BEFORE_INCLUSIVE")) || (data7 === "STARTS_WITH")) || (data7 === "STARTS_WITH_CASE_SENSITIVE")) || (data7 === "IN")) || (data7 === "TODAY")) || (data7 === "THIS_WEEK")) || (data7 === "THIS_MONTH")) || (data7 === "THIS_YEAR")) || (data7 === "LAST_DAYS")) || (data7 === "EMPTY")) || (data7 === "NOT_EMPTY"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/operator",schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/operator/enum",keyword:"enum",params:{allowedValues: schema13.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid5 = _errs17 === errors;}else {var valid5 = true;}if(valid5){if(data4.secondValue !== undefined){const _errs18 = errors;if(typeof data4.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/secondValue",schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs18 === errors;}else {var valid5 = true;}if(valid5){if(data4.values !== undefined){let data9 = data4.values;const _errs20 = errors;if(errors === _errs20){if(Array.isArray(data9)){var valid6 = true;const len1 = data9.length;for(let i1=0; i1<len1; i1++){const _errs22 = errors;if(typeof data9[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values/" + i1,schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs22 === errors;if(!valid6){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values",schemaPath:"#/$defs/ClientFilterCriteriaaf30/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid5 = _errs20 === errors;}else {var valid5 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/ClientFilterCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs10 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria",schemaPath:"#/properties/filterCriteria/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;