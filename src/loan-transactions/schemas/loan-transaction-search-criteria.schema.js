/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"LoanTransactionSearchCriteria","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for Loan transaction client directed query","properties":{"sortingCriteria":{"title":"sortingCriteria","$ref":"#/$defs/LoanTransactionSortingCriteria6d0a"},"filterCriteria":{"type":"array","title":"filterCriteria","description":"The list of filtering criteria","items":{"description":"The list of filtering criteria","$ref":"#/$defs/LoanTransactionFilterCriteria6d0a"}}},"additionalProperties":false,"$defs":{"LoanTransactionSortingCriteria6d0a":{"type":"object","title":"LoanTransactionSortingCriteria","description":"The sorting criteria used for Loan transactions client directed query","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["id","externalId","creationDate","valueDate","parentAccountId","productId","amount","originalAmount","originalCurrencyCode","branchId","centreId","tillId","terms.interestSettings.interestRate","transactionDetails.transactionChannelId","fees.name","accountBalances.totalBalance","accountBalances.principalBalance","accountBalances.redrawBalance","accountBalances.expectedPrincipalRedraw","accountBalances.advancePosition","accountBalances.arrearsPosition","affectedAmounts.principalAmount","affectedAmounts.interestAmount","affectedAmounts.interestFromArrearsAmount","affectedAmounts.deferredInterestAmount","affectedAmounts.feesAmount","affectedAmounts.penaltyAmount","affectedAmounts.organizationCommissionAmount","affectedAmounts.fundersInterestAmount","taxes.taxRate"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false},"LoanTransactionFilterCriteria6d0a":{"type":"object","title":"LoanTransactionFilterCriteria","description":"The unit that composes the list used for Loan transaction client directed queries searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].\n|Field with limited capabilities          |Data Type |Operators   |\n|-----------------------------------------|----------|------------|\n|originalTransactionKey                   |KEY       |EQUALS, IN  |\n|transactionDetails.transactionChannelId  |STRING    |EQUALS      |\n|originalTransactionID                    |STRING    |EQUALS      |\n","enum":["encodedKey","id","externalId","creationDate","valueDate","parentAccountKey","productTypeKey","productID","type","amount","originalAmount","originalCurrencyCode","affectedAmounts.principalAmount","affectedAmounts.interestAmount","affectedAmounts.fundersInterestAmount","affectedAmounts.organizationCommissionAmount","affectedAmounts.deferredInterestAmount","affectedAmounts.feesAmount","affectedAmounts.penaltyAmount","taxes.taxRate","accountBalances.totalBalance","accountBalances.advancePosition","accountBalances.arrearsPosition","accountBalances.expectedPrincipalRedraw","accountBalances.redrawBalance","accountBalances.principalBalance","userKey","branchKey","branchID","centreKey","centreID","tillKey","tillID","adjustmentTransactionKey","originalTransactionKey","terms.interestSettings.interestRate","transactionDetails.transactionChannelKey","transactionDetails.transactionChannelId","wasAdjusted","typeIsAdjustment","fees.predefinedFeeKey","fees.trigger","fees.name","parentAccountID","adjustmentTransactionID","originalTransactionID"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false}}};const schema12 = {"type":"object","title":"LoanTransactionSortingCriteria","description":"The sorting criteria used for Loan transactions client directed query","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["id","externalId","creationDate","valueDate","parentAccountId","productId","amount","originalAmount","originalCurrencyCode","branchId","centreId","tillId","terms.interestSettings.interestRate","transactionDetails.transactionChannelId","fees.name","accountBalances.totalBalance","accountBalances.principalBalance","accountBalances.redrawBalance","accountBalances.expectedPrincipalRedraw","accountBalances.advancePosition","accountBalances.arrearsPosition","affectedAmounts.principalAmount","affectedAmounts.interestAmount","affectedAmounts.interestFromArrearsAmount","affectedAmounts.deferredInterestAmount","affectedAmounts.feesAmount","affectedAmounts.penaltyAmount","affectedAmounts.organizationCommissionAmount","affectedAmounts.fundersInterestAmount","taxes.taxRate"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false};const schema13 = {"type":"object","title":"LoanTransactionFilterCriteria","description":"The unit that composes the list used for Loan transaction client directed queries searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].\n|Field with limited capabilities          |Data Type |Operators   |\n|-----------------------------------------|----------|------------|\n|originalTransactionKey                   |KEY       |EQUALS, IN  |\n|transactionDetails.transactionChannelId  |STRING    |EQUALS      |\n|originalTransactionID                    |STRING    |EQUALS      |\n","enum":["encodedKey","id","externalId","creationDate","valueDate","parentAccountKey","productTypeKey","productID","type","amount","originalAmount","originalCurrencyCode","affectedAmounts.principalAmount","affectedAmounts.interestAmount","affectedAmounts.fundersInterestAmount","affectedAmounts.organizationCommissionAmount","affectedAmounts.deferredInterestAmount","affectedAmounts.feesAmount","affectedAmounts.penaltyAmount","taxes.taxRate","accountBalances.totalBalance","accountBalances.advancePosition","accountBalances.arrearsPosition","accountBalances.expectedPrincipalRedraw","accountBalances.redrawBalance","accountBalances.principalBalance","userKey","branchKey","branchID","centreKey","centreID","tillKey","tillID","adjustmentTransactionKey","originalTransactionKey","terms.interestSettings.interestRate","transactionDetails.transactionChannelKey","transactionDetails.transactionChannelId","wasAdjusted","typeIsAdjustment","fees.predefinedFeeKey","fees.trigger","fees.name","parentAccountID","adjustmentTransactionID","originalTransactionID"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((key0 === "sortingCriteria") || (key0 === "filterCriteria"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.sortingCriteria !== undefined){let data0 = data.sortingCriteria;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.field === undefined) && (missing0 = "field")){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/LoanTransactionSortingCriteria6d0a/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs5 = errors;for(const key1 in data0){if(!((key1 === "field") || (key1 === "order"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/LoanTransactionSortingCriteria6d0a/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.field !== undefined){let data1 = data0.field;const _errs6 = errors;if(!((((((((((((((((((((((((((((((data1 === "id") || (data1 === "externalId")) || (data1 === "creationDate")) || (data1 === "valueDate")) || (data1 === "parentAccountId")) || (data1 === "productId")) || (data1 === "amount")) || (data1 === "originalAmount")) || (data1 === "originalCurrencyCode")) || (data1 === "branchId")) || (data1 === "centreId")) || (data1 === "tillId")) || (data1 === "terms.interestSettings.interestRate")) || (data1 === "transactionDetails.transactionChannelId")) || (data1 === "fees.name")) || (data1 === "accountBalances.totalBalance")) || (data1 === "accountBalances.principalBalance")) || (data1 === "accountBalances.redrawBalance")) || (data1 === "accountBalances.expectedPrincipalRedraw")) || (data1 === "accountBalances.advancePosition")) || (data1 === "accountBalances.arrearsPosition")) || (data1 === "affectedAmounts.principalAmount")) || (data1 === "affectedAmounts.interestAmount")) || (data1 === "affectedAmounts.interestFromArrearsAmount")) || (data1 === "affectedAmounts.deferredInterestAmount")) || (data1 === "affectedAmounts.feesAmount")) || (data1 === "affectedAmounts.penaltyAmount")) || (data1 === "affectedAmounts.organizationCommissionAmount")) || (data1 === "affectedAmounts.fundersInterestAmount")) || (data1 === "taxes.taxRate"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/field",schemaPath:"#/$defs/LoanTransactionSortingCriteria6d0a/properties/field/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.order !== undefined){let data2 = data0.order;const _errs7 = errors;if(!((data2 === "ASC") || (data2 === "DESC"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/order",schemaPath:"#/$defs/LoanTransactionSortingCriteria6d0a/properties/order/enum",keyword:"enum",params:{allowedValues: schema12.properties.order.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/LoanTransactionSortingCriteria6d0a/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.filterCriteria !== undefined){let data3 = data.filterCriteria;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid3 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing1;if(((data4.field === undefined) && (missing1 = "field")) || ((data4.operator === undefined) && (missing1 = "operator"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {const _errs13 = errors;for(const key2 in data4){if(!(((((key2 === "field") || (key2 === "value")) || (key2 === "operator")) || (key2 === "secondValue")) || (key2 === "values"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs13 === errors){if(data4.field !== undefined){let data5 = data4.field;const _errs14 = errors;if(!((((((((((((((((((((((((((((((((((((((((((((((data5 === "encodedKey") || (data5 === "id")) || (data5 === "externalId")) || (data5 === "creationDate")) || (data5 === "valueDate")) || (data5 === "parentAccountKey")) || (data5 === "productTypeKey")) || (data5 === "productID")) || (data5 === "type")) || (data5 === "amount")) || (data5 === "originalAmount")) || (data5 === "originalCurrencyCode")) || (data5 === "affectedAmounts.principalAmount")) || (data5 === "affectedAmounts.interestAmount")) || (data5 === "affectedAmounts.fundersInterestAmount")) || (data5 === "affectedAmounts.organizationCommissionAmount")) || (data5 === "affectedAmounts.deferredInterestAmount")) || (data5 === "affectedAmounts.feesAmount")) || (data5 === "affectedAmounts.penaltyAmount")) || (data5 === "taxes.taxRate")) || (data5 === "accountBalances.totalBalance")) || (data5 === "accountBalances.advancePosition")) || (data5 === "accountBalances.arrearsPosition")) || (data5 === "accountBalances.expectedPrincipalRedraw")) || (data5 === "accountBalances.redrawBalance")) || (data5 === "accountBalances.principalBalance")) || (data5 === "userKey")) || (data5 === "branchKey")) || (data5 === "branchID")) || (data5 === "centreKey")) || (data5 === "centreID")) || (data5 === "tillKey")) || (data5 === "tillID")) || (data5 === "adjustmentTransactionKey")) || (data5 === "originalTransactionKey")) || (data5 === "terms.interestSettings.interestRate")) || (data5 === "transactionDetails.transactionChannelKey")) || (data5 === "transactionDetails.transactionChannelId")) || (data5 === "wasAdjusted")) || (data5 === "typeIsAdjustment")) || (data5 === "fees.predefinedFeeKey")) || (data5 === "fees.trigger")) || (data5 === "fees.name")) || (data5 === "parentAccountID")) || (data5 === "adjustmentTransactionID")) || (data5 === "originalTransactionID"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/field/enum",keyword:"enum",params:{allowedValues: schema13.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid5 = _errs14 === errors;}else {var valid5 = true;}if(valid5){if(data4.value !== undefined){const _errs15 = errors;if(typeof data4.value !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/value",schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs15 === errors;}else {var valid5 = true;}if(valid5){if(data4.operator !== undefined){let data7 = data4.operator;const _errs17 = errors;if(!(((((((((((((((((((((data7 === "EQUALS") || (data7 === "EQUALS_CASE_SENSITIVE")) || (data7 === "DIFFERENT_THAN")) || (data7 === "MORE_THAN")) || (data7 === "LESS_THAN")) || (data7 === "BETWEEN")) || (data7 === "ON")) || (data7 === "AFTER")) || (data7 === "AFTER_INCLUSIVE")) || (data7 === "BEFORE")) || (data7 === "BEFORE_INCLUSIVE")) || (data7 === "STARTS_WITH")) || (data7 === "STARTS_WITH_CASE_SENSITIVE")) || (data7 === "IN")) || (data7 === "TODAY")) || (data7 === "THIS_WEEK")) || (data7 === "THIS_MONTH")) || (data7 === "THIS_YEAR")) || (data7 === "LAST_DAYS")) || (data7 === "EMPTY")) || (data7 === "NOT_EMPTY"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/operator",schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/operator/enum",keyword:"enum",params:{allowedValues: schema13.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid5 = _errs17 === errors;}else {var valid5 = true;}if(valid5){if(data4.secondValue !== undefined){const _errs18 = errors;if(typeof data4.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/secondValue",schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs18 === errors;}else {var valid5 = true;}if(valid5){if(data4.values !== undefined){let data9 = data4.values;const _errs20 = errors;if(errors === _errs20){if(Array.isArray(data9)){var valid6 = true;const len1 = data9.length;for(let i1=0; i1<len1; i1++){const _errs22 = errors;if(typeof data9[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values/" + i1,schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs22 === errors;if(!valid6){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values",schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid5 = _errs20 === errors;}else {var valid5 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/LoanTransactionFilterCriteria6d0a/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs10 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria",schemaPath:"#/properties/filterCriteria/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}