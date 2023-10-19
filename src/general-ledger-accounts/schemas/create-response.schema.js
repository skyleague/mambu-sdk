/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"createResponse","type":"array","items":{"$ref":"#/$defs/GLAccount"},"$defs":{"GLAccount":{"type":"object","title":"GLAccount","description":"Represents a general ledger account.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if the general ledger account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last modification date and time, which is stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"The general ledger code used to identify different account types. Also used for grouping and categorizing accounts. For example: an account code of '3201' is considered a subtype of '3200'."},"usage":{"title":"usage","description":"The usage type of the general ledger account. `DETAIL` accounts are used to stores transaction balances. `HEADER` accounts are used to organise and group detail accounts for reporting purposes.","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"A description of the general ledger account."},"creationDate":{"type":"string","title":"creationDate","description":"The creation date for this account, which is stored as UTC.","format":"date-time"},"type":{"title":"type","description":"The general ledger account type.","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"`TRUE` if manual journal entries are allowed, `FALSE` otherwise."},"balance":{"type":"number","title":"balance","description":"The balance of the general ledger account, which is only populated for the GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"The name of the general ledger account."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"`TRUE` if trailing zeros are stripped, `FALSE` otherwise."},"activated":{"type":"boolean","title":"activated","description":"`TRUE` if the account is activated and may be used, `FALSE` otherwise."}},"additionalProperties":true},"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true}}};const schema12={"type":"object","title":"GLAccount","description":"Represents a general ledger account.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if the general ledger account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last modification date and time, which is stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"The general ledger code used to identify different account types. Also used for grouping and categorizing accounts. For example: an account code of '3201' is considered a subtype of '3200'."},"usage":{"title":"usage","description":"The usage type of the general ledger account. `DETAIL` accounts are used to stores transaction balances. `HEADER` accounts are used to organise and group detail accounts for reporting purposes.","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"A description of the general ledger account."},"creationDate":{"type":"string","title":"creationDate","description":"The creation date for this account, which is stored as UTC.","format":"date-time"},"type":{"title":"type","description":"The general ledger account type.","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"`TRUE` if manual journal entries are allowed, `FALSE` otherwise."},"balance":{"type":"number","title":"balance","description":"The balance of the general ledger account, which is only populated for the GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"The name of the general ledger account."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"`TRUE` if trailing zeros are stripped, `FALSE` otherwise."},"activated":{"type":"boolean","title":"activated","description":"`TRUE` if the account is activated and may be used, `FALSE` otherwise."}},"additionalProperties":true};const schema13={"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true};const func0=require("ajv/dist/runtime/equal").default;function validate11(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.migrationEventKey!==void 0){const _errs2=errors;if(typeof data.migrationEventKey!=="string"){validate11.errors=[{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.lastModifiedDate!==void 0){const _errs4=errors;if(errors===_errs4){if(errors===_errs4){if(!(typeof data.lastModifiedDate==="string")){validate11.errors=[{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.glCode!==void 0){const _errs6=errors;if(typeof data.glCode!=="string"){validate11.errors=[{instancePath:instancePath+"/glCode",schemaPath:"#/properties/glCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.usage!==void 0){let data3=data.usage;const _errs8=errors;if(!(data3==="DETAIL"||data3==="HEADER")){validate11.errors=[{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues:schema12.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.description!==void 0){const _errs9=errors;if(typeof data.description!=="string"){validate11.errors=[{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs9===errors}else{var valid0=true}if(valid0){if(data.creationDate!==void 0){const _errs11=errors;if(errors===_errs11){if(errors===_errs11){if(!(typeof data.creationDate==="string")){validate11.errors=[{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs11===errors}else{var valid0=true}if(valid0){if(data.type!==void 0){const _errs13=errors;let valid1;valid1=false;for(const v0 of schema12.properties.type.enum){if(func0(data.type,v0)){valid1=true;break}}if(!valid1){validate11.errors=[{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues:schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs13===errors}else{var valid0=true}if(valid0){if(data.allowManualJournalEntries!==void 0){const _errs14=errors;if(typeof data.allowManualJournalEntries!=="boolean"){validate11.errors=[{instancePath:instancePath+"/allowManualJournalEntries",schemaPath:"#/properties/allowManualJournalEntries/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs14===errors}else{var valid0=true}if(valid0){if(data.balance!==void 0){let data8=data.balance;const _errs16=errors;if(!(typeof data8=="number"&&isFinite(data8))){validate11.errors=[{instancePath:instancePath+"/balance",schemaPath:"#/properties/balance/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs16===errors}else{var valid0=true}if(valid0){if(data.name!==void 0){const _errs18=errors;if(typeof data.name!=="string"){validate11.errors=[{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs18===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs20=errors;if(typeof data.encodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs20===errors}else{var valid0=true}if(valid0){if(data.currency!==void 0){let data11=data.currency;const _errs22=errors;const _errs23=errors;if(errors===_errs23){if(data11&&typeof data11=="object"&&!Array.isArray(data11)){if(data11.currencyCode!==void 0){const _errs26=errors;if(typeof data11.currencyCode!=="string"){validate11.errors=[{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs26===errors}else{var valid3=true}if(valid3){if(data11.code!==void 0){const _errs28=errors;let valid4;valid4=false;for(const v1 of schema13.properties.code.enum){if(func0(data11.code,v1)){valid4=true;break}}if(!valid4){validate11.errors=[{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues:schema13.properties.code.enum},message:"must be equal to one of the allowed values"}];return false}var valid3=_errs28===errors}else{var valid3=true}}}else{validate11.errors=[{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs22===errors}else{var valid0=true}if(valid0){if(data.stripTrailingZeros!==void 0){const _errs29=errors;if(typeof data.stripTrailingZeros!=="boolean"){validate11.errors=[{instancePath:instancePath+"/stripTrailingZeros",schemaPath:"#/properties/stripTrailingZeros/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs29===errors}else{var valid0=true}if(valid0){if(data.activated!==void 0){const _errs31=errors;if(typeof data.activated!=="boolean"){validate11.errors=[{instancePath:instancePath+"/activated",schemaPath:"#/properties/activated/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs31===errors}else{var valid0=true}}}}}}}}}}}}}}}else{validate11.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate11.errors=vErrors;return errors===0}function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(Array.isArray(data)){var valid0=true;const len0=data.length;for(let i0=0;i0<len0;i0++){const _errs1=errors;if(!validate11(data[i0],{instancePath:instancePath+"/"+i0,parentData:data,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate11.errors:vErrors.concat(validate11.errors);errors=vErrors.length}var valid0=_errs1===errors;if(!valid0){break}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
