/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GLJournalEntrySearchCriteria","type":"object","description":"Represents the list of filtering criteria and the sorting criteria when searching general ledger journal entries.","properties":{"sortingCriteria":{"title":"sortingCriteria","$ref":"#/$defs/GLJournalEntrySortingCriteriaaf30"},"filterCriteria":{"type":"array","title":"filterCriteria","description":"The list of filtering criteria.","items":{"$ref":"#/$defs/GLJournalEntryFilterCriteriaaf30"}}},"additionalProperties":true,"$defs":{"GLJournalEntrySortingCriteriaaf30":{"type":"object","title":"GLJournalEntrySortingCriteriaaf30","description":"Represents the sorting criteria used for general ledger journal entries.","properties":{"field":{"title":"field","description":"The field that can be used to sort the selection. These fields can be from the enumerated values or you can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","entryId","bookingDate","creationDate","transactionId","glAccountName","glAccountId","glAccountType","debit","credit","foreignDebit","foreignCredit","loanAccountId","userName","user","branchName","foreignCurrency"]},"order":{"title":"order","description":"The sorting order: `ASC` or `DESC`. The default order is `DESC`.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":true},"GLJournalEntryFilterCriteriaaf30":{"type":"object","title":"GLJournalEntryFilterCriteriaaf30","description":"Represents the filtering criteria used for searching general ledger journal entries.","properties":{"field":{"title":"field","anyOf":[{"description":"The fields used to search. These fields can be from the enumerated values or you can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["productType","glAccountKey","userKey","encodedKey","entryId","bookingDate","creationDate","transactionId","glAccountId","glAccountType","source","debit","credit","foreignDebit","foreignCredit","loanAccountId","foreignCurrencyCode","assignedBranchKey"]},{"type":"string"}]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria."},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"values":{"type":"array","title":"values","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"GLJournalEntrySortingCriteriaaf30","description":"Represents the sorting criteria used for general ledger journal entries.","properties":{"field":{"title":"field","description":"The field that can be used to sort the selection. These fields can be from the enumerated values or you can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","entryId","bookingDate","creationDate","transactionId","glAccountName","glAccountId","glAccountType","debit","credit","foreignDebit","foreignCredit","loanAccountId","userName","user","branchName","foreignCurrency"]},"order":{"title":"order","description":"The sorting order: `ASC` or `DESC`. The default order is `DESC`.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":true};const schema13 = {"type":"object","title":"GLJournalEntryFilterCriteriaaf30","description":"Represents the filtering criteria used for searching general ledger journal entries.","properties":{"field":{"title":"field","anyOf":[{"description":"The fields used to search. These fields can be from the enumerated values or you can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["productType","glAccountKey","userKey","encodedKey","entryId","bookingDate","creationDate","transactionId","glAccountId","glAccountType","source","debit","credit","foreignDebit","foreignCredit","loanAccountId","foreignCurrencyCode","assignedBranchKey"]},{"type":"string"}]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria."},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"values":{"type":"array","title":"values","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.sortingCriteria !== undefined){let data0 = data.sortingCriteria;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.field === undefined) && (missing0 = "field")){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/GLJournalEntrySortingCriteriaaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.field !== undefined){const _errs6 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.field.enum){if(func0(data0.field, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/field",schemaPath:"#/$defs/GLJournalEntrySortingCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.order !== undefined){let data2 = data0.order;const _errs7 = errors;if(!((data2 === "ASC") || (data2 === "DESC"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/order",schemaPath:"#/$defs/GLJournalEntrySortingCriteriaaf30/properties/order/enum",keyword:"enum",params:{allowedValues: schema12.properties.order.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/GLJournalEntrySortingCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.filterCriteria !== undefined){let data3 = data.filterCriteria;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid4 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing1;if(((data4.field === undefined) && (missing1 = "field")) || ((data4.operator === undefined) && (missing1 = "operator"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data4.field !== undefined){let data5 = data4.field;const _errs14 = errors;const _errs15 = errors;let valid7 = false;const _errs16 = errors;let valid8;valid8 = false;for(const v1 of schema13.properties.field.anyOf[0].enum){if(func0(data5, v1)){valid8 = true;break;}}if(!valid8){const err0 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/field/anyOf/0/enum",keyword:"enum",params:{allowedValues: schema13.properties.field.anyOf[0].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs16 === errors;valid7 = valid7 || _valid0;if(!valid7){const _errs17 = errors;if(typeof data5 !== "string"){const err1 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/field/anyOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs17 === errors;valid7 = valid7 || _valid0;}if(!valid7){const err2 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/field/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs15;if(vErrors !== null){if(_errs15){vErrors.length = _errs15;}else {vErrors = null;}}}var valid6 = _errs14 === errors;}else {var valid6 = true;}if(valid6){if(data4.value !== undefined){const _errs19 = errors;if(typeof data4.value !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/value",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs19 === errors;}else {var valid6 = true;}if(valid6){if(data4.operator !== undefined){const _errs21 = errors;let valid9;valid9 = false;for(const v2 of schema13.properties.operator.enum){if(func0(data4.operator, v2)){valid9 = true;break;}}if(!valid9){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/operator",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/operator/enum",keyword:"enum",params:{allowedValues: schema13.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs21 === errors;}else {var valid6 = true;}if(valid6){if(data4.secondValue !== undefined){const _errs22 = errors;if(typeof data4.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/secondValue",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs22 === errors;}else {var valid6 = true;}if(valid6){if(data4.values !== undefined){let data9 = data4.values;const _errs24 = errors;if(errors === _errs24){if(Array.isArray(data9)){var valid10 = true;const len1 = data9.length;for(let i1=0; i1<len1; i1++){const _errs26 = errors;if(typeof data9[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values/" + i1,schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid10 = _errs26 === errors;if(!valid10){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values",schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid6 = _errs24 === errors;}else {var valid6 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/GLJournalEntryFilterCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs10 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria",schemaPath:"#/properties/filterCriteria/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;