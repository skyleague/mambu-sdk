/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"DepositAccountSearchCriteria","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for Deposit account client directed query","properties":{"sortingCriteria":{"title":"sortingCriteria","$ref":"#/$defs/DepositAccountSortingCriteriaaf30"},"filterCriteria":{"type":"array","title":"filterCriteria","description":"The list of filtering criteria","items":{"description":"The list of filtering criteria","$ref":"#/$defs/DepositAccountFilterCriteriaaf30"}}},"additionalProperties":false,"$defs":{"DepositAccountSortingCriteriaaf30":{"type":"object","title":"DepositAccountSortingCriteria","description":"The sorting criteria used for Deposit accounts client directed query","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","id","name","creationDate","activationDate","approvedDate","lastModifiedDate","maturityDate","lastSetToArrearsDate","closedDate","accountHolderName","accruedAmounts.interestAccrued","accruedAmounts.overdraftInterestAccrued","accruedAmounts.technicalOverdraftInterestAccrued","maxBalance","balances.availableBalance","balances.blockedBalance","balances.feesDue","balances.lockedBalance","balances.overdraftAmount","balances.technicalOverdraftAmount","balances.totalBalance","balances.holdBalance","balances.overdraftInterestDue","assignedBranchKey","assignedCentreKey","assignedUserKey","interestSettings.interestRate","currentInterestTier.startingBalance","currentInterestTier.endingBalance","currentInterestTier.index","currentInterestTier.interestRate","currentOverdraftInterestTier.startingBalance","currentOverdraftInterestTier.endingBalance","currentOverdraftInterestTier.index","currentOverdraftInterestTier.interestRate","internalControls.maxWithdrawalAmount","internalControls.recommendedDepositAmount","internalControls.targetAmount","notes","taxApplied","taxRate","withholdingTaxSourceKey","lengthInDays","productCategory","overdraftInterestSettings.interestRateSettings.interestSpread","overdraftInterestSettings.interestRateSettings.interestRate","overdraftSettings.allowOverdraft","overdraftSettings.overdraftExpiryDate","overdraftSettings.overdraftLimit","overdraftDaysInArrears","overdraftInArrears","overdraftAvailableLimit"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false},"DepositAccountFilterCriteriaaf30":{"type":"object","title":"DepositAccountFilterCriteria","description":"The unit that composes the list used for deposit accounts client directed searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom fieldusing the format [customFieldSetId].[customFieldId].\n","enum":["encodedKey","id","name","accountHolderKey","clientId","groupId","accountHolderName","accountState","accountType","creationDate","activationDate","approvedDate","lastModifiedDate","maturityDate","lastSetToArrearsDate","closedDate","accruedAmounts.interestAccrued","accruedAmounts.overdraftInterestAccrued","accruedAmounts.technicalOverdraftInterestAccrued","maxBalance","balances.availableBalance","balances.blockedBalance","balances.feesDue","balances.lockedBalance","balances.overdraftAmount","balances.overdraftInterestDue","balances.technicalOverdraftAmount","balances.totalBalance","balances.holdBalance","assignedBranchKey","assignedCentreKey","assignedUserKey","currencyCode","interestSettings.interestRate","currentInterestTier.endingBalance","currentInterestTier.index","currentInterestTier.interestRate","currentInterestTier.startingBalance","internalControls.maxWithdrawalAmount","internalControls.recommendedDepositAmount","internalControls.targetAmount","lengthInDays","overdraftRiskLevelKey","overdraftAvailableLimit","overdraftDaysInArrears","overdraftInArrears","overdraftInterestSettings.interestRateSettings.interestRate","overdraftInterestSettings.interestRateSettings.interestSpread","currentOverdraftInterestTier.endingBalance","currentOverdraftInterestTier.index","currentOverdraftInterestTier.interestRate","currentOverdraftInterestTier.startingBalance","overdraftSettings.overdraftExpiryDate","overdraftSettings.overdraftLimit","overdraftSettings.allowOverdraft","productTypeKey","productCategory","taxApplied","withholdingTaxSourceKey","taxRate"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false}}};const schema12 = {"type":"object","title":"DepositAccountSortingCriteria","description":"The sorting criteria used for Deposit accounts client directed query","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","id","name","creationDate","activationDate","approvedDate","lastModifiedDate","maturityDate","lastSetToArrearsDate","closedDate","accountHolderName","accruedAmounts.interestAccrued","accruedAmounts.overdraftInterestAccrued","accruedAmounts.technicalOverdraftInterestAccrued","maxBalance","balances.availableBalance","balances.blockedBalance","balances.feesDue","balances.lockedBalance","balances.overdraftAmount","balances.technicalOverdraftAmount","balances.totalBalance","balances.holdBalance","balances.overdraftInterestDue","assignedBranchKey","assignedCentreKey","assignedUserKey","interestSettings.interestRate","currentInterestTier.startingBalance","currentInterestTier.endingBalance","currentInterestTier.index","currentInterestTier.interestRate","currentOverdraftInterestTier.startingBalance","currentOverdraftInterestTier.endingBalance","currentOverdraftInterestTier.index","currentOverdraftInterestTier.interestRate","internalControls.maxWithdrawalAmount","internalControls.recommendedDepositAmount","internalControls.targetAmount","notes","taxApplied","taxRate","withholdingTaxSourceKey","lengthInDays","productCategory","overdraftInterestSettings.interestRateSettings.interestSpread","overdraftInterestSettings.interestRateSettings.interestRate","overdraftSettings.allowOverdraft","overdraftSettings.overdraftExpiryDate","overdraftSettings.overdraftLimit","overdraftDaysInArrears","overdraftInArrears","overdraftAvailableLimit"]},"order":{"title":"order","description":"The sorting order: ASC or DESC. The default order is DESC.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":false};const schema13 = {"type":"object","title":"DepositAccountFilterCriteria","description":"The unit that composes the list used for deposit accounts client directed searching","properties":{"field":{"title":"field","description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom fieldusing the format [customFieldSetId].[customFieldId].\n","enum":["encodedKey","id","name","accountHolderKey","clientId","groupId","accountHolderName","accountState","accountType","creationDate","activationDate","approvedDate","lastModifiedDate","maturityDate","lastSetToArrearsDate","closedDate","accruedAmounts.interestAccrued","accruedAmounts.overdraftInterestAccrued","accruedAmounts.technicalOverdraftInterestAccrued","maxBalance","balances.availableBalance","balances.blockedBalance","balances.feesDue","balances.lockedBalance","balances.overdraftAmount","balances.overdraftInterestDue","balances.technicalOverdraftAmount","balances.totalBalance","balances.holdBalance","assignedBranchKey","assignedCentreKey","assignedUserKey","currencyCode","interestSettings.interestRate","currentInterestTier.endingBalance","currentInterestTier.index","currentInterestTier.interestRate","currentInterestTier.startingBalance","internalControls.maxWithdrawalAmount","internalControls.recommendedDepositAmount","internalControls.targetAmount","lengthInDays","overdraftRiskLevelKey","overdraftAvailableLimit","overdraftDaysInArrears","overdraftInArrears","overdraftInterestSettings.interestRateSettings.interestRate","overdraftInterestSettings.interestRateSettings.interestSpread","currentOverdraftInterestTier.endingBalance","currentOverdraftInterestTier.index","currentOverdraftInterestTier.interestRate","currentOverdraftInterestTier.startingBalance","overdraftSettings.overdraftExpiryDate","overdraftSettings.overdraftLimit","overdraftSettings.allowOverdraft","productTypeKey","productCategory","taxApplied","withholdingTaxSourceKey","taxRate"]},"value":{"type":"string","title":"value","description":"The value to match the searching criteria"},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when using BETWEEN, together with value"},"values":{"type":"array","title":"values","description":"List of values when operator is IN.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":false};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((key0 === "sortingCriteria") || (key0 === "filterCriteria"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.sortingCriteria !== undefined){let data0 = data.sortingCriteria;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.field === undefined) && (missing0 = "field")){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/DepositAccountSortingCriteriaaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs5 = errors;for(const key1 in data0){if(!((key1 === "field") || (key1 === "order"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/DepositAccountSortingCriteriaaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.field !== undefined){const _errs6 = errors;let valid3;valid3 = false;for(const v0 of schema12.properties.field.enum){if(func0(data0.field, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/field",schemaPath:"#/$defs/DepositAccountSortingCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.order !== undefined){let data2 = data0.order;const _errs7 = errors;if(!((data2 === "ASC") || (data2 === "DESC"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/order",schemaPath:"#/$defs/DepositAccountSortingCriteriaaf30/properties/order/enum",keyword:"enum",params:{allowedValues: schema12.properties.order.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/DepositAccountSortingCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.filterCriteria !== undefined){let data3 = data.filterCriteria;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid4 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){let missing1;if(((data4.field === undefined) && (missing1 = "field")) || ((data4.operator === undefined) && (missing1 = "operator"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {const _errs13 = errors;for(const key2 in data4){if(!(((((key2 === "field") || (key2 === "value")) || (key2 === "operator")) || (key2 === "secondValue")) || (key2 === "values"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs13 === errors){if(data4.field !== undefined){const _errs14 = errors;let valid7;valid7 = false;for(const v1 of schema13.properties.field.enum){if(func0(data4.field, v1)){valid7 = true;break;}}if(!valid7){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema13.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs14 === errors;}else {var valid6 = true;}if(valid6){if(data4.value !== undefined){const _errs15 = errors;if(typeof data4.value !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/value",schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs15 === errors;}else {var valid6 = true;}if(valid6){if(data4.operator !== undefined){const _errs17 = errors;let valid8;valid8 = false;for(const v2 of schema13.properties.operator.enum){if(func0(data4.operator, v2)){valid8 = true;break;}}if(!valid8){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/operator",schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/operator/enum",keyword:"enum",params:{allowedValues: schema13.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs17 === errors;}else {var valid6 = true;}if(valid6){if(data4.secondValue !== undefined){const _errs18 = errors;if(typeof data4.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/secondValue",schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs18 === errors;}else {var valid6 = true;}if(valid6){if(data4.values !== undefined){let data9 = data4.values;const _errs20 = errors;if(errors === _errs20){if(Array.isArray(data9)){var valid9 = true;const len1 = data9.length;for(let i1=0; i1<len1; i1++){const _errs22 = errors;if(typeof data9[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values/" + i1,schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs22 === errors;if(!valid9){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values",schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid6 = _errs20 === errors;}else {var valid6 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/DepositAccountFilterCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs10 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria",schemaPath:"#/properties/filterCriteria/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;