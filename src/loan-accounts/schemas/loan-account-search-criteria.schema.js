/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"LoanAccountSearchCriteria","type":"object","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for Loan account directed query","properties":{"filterCriteria":{"type":"array","title":"filterCriteria","description":"The list of filtering criteria","items":{"$ref":"#/$defs/LoanAccountFilterCriteriaaf30"}},"sortingCriteria":{"title":"sortingCriteria","$ref":"#/$defs/LoanAccountSortingCriteriaaf30"}},"additionalProperties":true,"$defs":{"LoanAccountFilterCriteriaaf30":{"type":"object","title":"LoanAccountFilterCriteriaaf30","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for Loan account directed query","properties":{"field":{"title":"field","anyOf":[{"description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field definition using the format [customFieldSetId].[customFieldId].\n","enum":["accountHolderKey","productTypeKey","loanRiskLevelKey","encodedKey","loanName","id","accountHolderId","recipient","creationDate","approvedDate","lastModifiedDate","lastSetToArrearsDate","lastLockedDate","closedDate","daysInArrears","daysLate","accountSubState","accountState","loanAmount","numInstallments","balances.principalDue","balances.principalPaid","balances.principalBalance","balances.interestDue","balances.interestPaid","balance.interestBalance","accruedInterest","balances.feesDue","balances.feesBalance","balances.feesPaid","penaltySettings.loanPenaltyCalculationMethod","balances.penaltyDue","balances.penaltyPaid","balances.penaltyBalance","accruedPenalty","penaltySettings.penaltyRate","arrearsTolerancePeriod","interestSettings.interestRate","interestSettings.interestSpread","totalPaid","totalBalance","totalDue","firstRepaymentDate","lastPaymentDate","lastPaymentAmount","expectedMaturityDate","rescheduledAccountKey","refinancedAccountId","originalAccountKey","taxRate","taxPaid","taxDue","settlementAccountKey","interestCommission","fundingSources.amount","fundingSources.sharePercentage","numberOfFunds","fundsEnabled","availableAmount","wasRescheduled","wasRefinanced","prepaymentSettings.prepaymentRecalculationMethod","prepaymentSettings.applyInterestOnPrepaymentMethod","latePaymentsRecalculationMethod","balances.redrawBalance","expectedPrincipalRedraw","tranches.parentAccountKey","tranches.disbursementDetails.disbursementTransactionKey","tranches.amount","tranches.disbursementDetails.expectedDisbursementDate","disbursementDetails.expectedDisbursementDate","disbursementDetails.disbursementDate","lastAccountAppraisalDate"]},{"type":"string"}]},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"value":{"type":"string","title":"value","description":"The value to match the searching criteria."},"values":{"type":"array","title":"values","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true},"LoanAccountSortingCriteriaaf30":{"type":"object","title":"LoanAccountSortingCriteriaaf30","description":"Represents the sorting criteria used for loan account searches.","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field definition using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","loanName","id","accountHolderId","recipient","creationDate","approvedDate","lastModifiedDate","lastSetToArrearsDate","lastLockedDate","closedDate","daysInArrears","daysLate","loanAmount","tranches.amount","numInstallments","accruedInterest","accruedPenalty","penaltySettings.penaltyRate","arrearsTolerancePeriod","interestSettings.interestSpread","totalPaid","totalBalance","totalDue","firstRepaymentDate","lastPaymentDate","lastPaymentAmount","expectedMaturity","rescheduledAccountKey","refinancedAccountId","originalAccountKey","taxRate","taxPaid","taxDue","settlementAccountKey","interestCommission","numberOfFunds","fundsEnabled","availableAmount","wasRescheduled","wasRefinanced","expectedPrincipalRedraw","balances.principalDue","balances.principalPaid","balances.principalBalance","balances.interestDue","balances.interestPaid","balance.interestBalance","balances.redrawBalance","balances.feesDue","balances.feesBalance","balances.feesPaid","balances.penaltyDue","balances.penaltyPaid","balances.penaltyBalance","fundingSources.amount","fundingSources.sharePercentage"]},"order":{"title":"order","description":"The sorting order: `ASC` or `DESC`. The default order is `DESC`.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":true}}};const schema12 = {"type":"object","title":"LoanAccountFilterCriteriaaf30","description":"Wrapper that holds a list of filtering criteria and a sorting criteria for Loan account directed query","properties":{"field":{"title":"field","anyOf":[{"description":"Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field definition using the format [customFieldSetId].[customFieldId].\n","enum":["accountHolderKey","productTypeKey","loanRiskLevelKey","encodedKey","loanName","id","accountHolderId","recipient","creationDate","approvedDate","lastModifiedDate","lastSetToArrearsDate","lastLockedDate","closedDate","daysInArrears","daysLate","accountSubState","accountState","loanAmount","numInstallments","balances.principalDue","balances.principalPaid","balances.principalBalance","balances.interestDue","balances.interestPaid","balance.interestBalance","accruedInterest","balances.feesDue","balances.feesBalance","balances.feesPaid","penaltySettings.loanPenaltyCalculationMethod","balances.penaltyDue","balances.penaltyPaid","balances.penaltyBalance","accruedPenalty","penaltySettings.penaltyRate","arrearsTolerancePeriod","interestSettings.interestRate","interestSettings.interestSpread","totalPaid","totalBalance","totalDue","firstRepaymentDate","lastPaymentDate","lastPaymentAmount","expectedMaturityDate","rescheduledAccountKey","refinancedAccountId","originalAccountKey","taxRate","taxPaid","taxDue","settlementAccountKey","interestCommission","fundingSources.amount","fundingSources.sharePercentage","numberOfFunds","fundsEnabled","availableAmount","wasRescheduled","wasRefinanced","prepaymentSettings.prepaymentRecalculationMethod","prepaymentSettings.applyInterestOnPrepaymentMethod","latePaymentsRecalculationMethod","balances.redrawBalance","expectedPrincipalRedraw","tranches.parentAccountKey","tranches.disbursementDetails.disbursementTransactionKey","tranches.amount","tranches.disbursementDetails.expectedDisbursementDate","disbursementDetails.expectedDisbursementDate","disbursementDetails.disbursementDate","lastAccountAppraisalDate"]},{"type":"string"}]},"operator":{"title":"operator","description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","title":"secondValue","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"value":{"type":"string","title":"value","description":"The value to match the searching criteria."},"values":{"type":"array","title":"values","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true};const schema13 = {"type":"object","title":"LoanAccountSortingCriteriaaf30","description":"Represents the sorting criteria used for loan account searches.","properties":{"field":{"title":"field","description":"Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field definition using the format [customFieldSetId].[customFieldId].","enum":["encodedKey","loanName","id","accountHolderId","recipient","creationDate","approvedDate","lastModifiedDate","lastSetToArrearsDate","lastLockedDate","closedDate","daysInArrears","daysLate","loanAmount","tranches.amount","numInstallments","accruedInterest","accruedPenalty","penaltySettings.penaltyRate","arrearsTolerancePeriod","interestSettings.interestSpread","totalPaid","totalBalance","totalDue","firstRepaymentDate","lastPaymentDate","lastPaymentAmount","expectedMaturity","rescheduledAccountKey","refinancedAccountId","originalAccountKey","taxRate","taxPaid","taxDue","settlementAccountKey","interestCommission","numberOfFunds","fundsEnabled","availableAmount","wasRescheduled","wasRefinanced","expectedPrincipalRedraw","balances.principalDue","balances.principalPaid","balances.principalBalance","balances.interestDue","balances.interestPaid","balance.interestBalance","balances.redrawBalance","balances.feesDue","balances.feesBalance","balances.feesPaid","balances.penaltyDue","balances.penaltyPaid","balances.penaltyBalance","fundingSources.amount","fundingSources.sharePercentage"]},"order":{"title":"order","description":"The sorting order: `ASC` or `DESC`. The default order is `DESC`.","enum":["ASC","DESC"]}},"required":["field"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.filterCriteria !== undefined){let data0 = data.filterCriteria;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){let missing0;if(((data1.field === undefined) && (missing0 = "field")) || ((data1.operator === undefined) && (missing0 = "operator"))){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data1.field !== undefined){let data2 = data1.field;const _errs8 = errors;const _errs9 = errors;let valid4 = false;const _errs10 = errors;let valid5;valid5 = false;for(const v0 of schema12.properties.field.anyOf[0].enum){if(func0(data2, v0)){valid5 = true;break;}}if(!valid5){const err0 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/field/anyOf/0/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.anyOf[0].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs10 === errors;valid4 = valid4 || _valid0;if(!valid4){const _errs11 = errors;if(typeof data2 !== "string"){const err1 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/field/anyOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs11 === errors;valid4 = valid4 || _valid0;}if(!valid4){const err2 = {instancePath:instancePath+"/filterCriteria/" + i0+"/field",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/field/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs9;if(vErrors !== null){if(_errs9){vErrors.length = _errs9;}else {vErrors = null;}}}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.operator !== undefined){const _errs13 = errors;let valid6;valid6 = false;for(const v1 of schema12.properties.operator.enum){if(func0(data1.operator, v1)){valid6 = true;break;}}if(!valid6){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/operator",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/operator/enum",keyword:"enum",params:{allowedValues: schema12.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs13 === errors;}else {var valid3 = true;}if(valid3){if(data1.secondValue !== undefined){const _errs14 = errors;if(typeof data1.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/secondValue",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data1.value !== undefined){const _errs16 = errors;if(typeof data1.value !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/value",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}if(valid3){if(data1.values !== undefined){let data6 = data1.values;const _errs18 = errors;if(errors === _errs18){if(Array.isArray(data6)){var valid7 = true;const len1 = data6.length;for(let i1=0; i1<len1; i1++){const _errs20 = errors;if(typeof data6[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values/" + i1,schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs20 === errors;if(!valid7){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0+"/values",schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid3 = _errs18 === errors;}else {var valid3 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria/" + i0,schemaPath:"#/$defs/LoanAccountFilterCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/filterCriteria",schemaPath:"#/properties/filterCriteria/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.sortingCriteria !== undefined){let data8 = data.sortingCriteria;const _errs22 = errors;const _errs23 = errors;if(errors === _errs23){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){let missing1;if((data8.field === undefined) && (missing1 = "field")){validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/LoanAccountSortingCriteriaaf30/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data8.field !== undefined){const _errs26 = errors;let valid10;valid10 = false;for(const v2 of schema13.properties.field.enum){if(func0(data8.field, v2)){valid10 = true;break;}}if(!valid10){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/field",schemaPath:"#/$defs/LoanAccountSortingCriteriaaf30/properties/field/enum",keyword:"enum",params:{allowedValues: schema13.properties.field.enum},message:"must be equal to one of the allowed values"}];return false;}var valid9 = _errs26 === errors;}else {var valid9 = true;}if(valid9){if(data8.order !== undefined){let data10 = data8.order;const _errs27 = errors;if(!((data10 === "ASC") || (data10 === "DESC"))){validate10.errors = [{instancePath:instancePath+"/sortingCriteria/order",schemaPath:"#/$defs/LoanAccountSortingCriteriaaf30/properties/order/enum",keyword:"enum",params:{allowedValues: schema13.properties.order.enum},message:"must be equal to one of the allowed values"}];return false;}var valid9 = _errs27 === errors;}else {var valid9 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/sortingCriteria",schemaPath:"#/$defs/LoanAccountSortingCriteriaaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs22 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;