import { fetchAPI, queryFunctions } from './carvertise_api_client.js';
import dataStore from './index.js';

async function dataDirector(source, queryFunctionName = '', paramsObj = {}, dataStoreAddress, notCached = false){

    // check if address exists in store
    if(_doesDataStoreAddressExist(dataStoreAddress))
        dataStore[dataStoreAddress] = '';

    // check for existing data with dataStoreAddress
    if(notCached == false){
        if(_doesDataStoreAddressHaveData(dataStoreAddress) == true){
            console.log('returning cached data');
            return dataStore[dataStoreAddress];
        }
    }

    // @TODO - ADD CHECK FOR OLD DATA IN DATASTORE

    // get data
    let returned;

    if(source == 'restapi' && queryFunctionName == ''){
        // console.log(paramsObj)

        const method = paramsObj.method && paramsObj.method != '' ? paramsObj.method : 'GET';

        console.log(paramsObj)

        returned = await fetchAPI(paramsObj.path, method, paramsObj.query);

    }else if(source == 'restapi' && queryFunctionName != ''){

        // TODO need to have a subkey for reportData address
        // cause there's different tags, such as 'sparse' and 'small-coarse' which
        // need their own sub-address

        returned = await queryFunctions[queryFunctionName](paramsObj);
    
    }else if(source == 'restapi' && paramsObj?.newObj){
        const method = paramsObj.method && paramsObj.method != '' ? paramsObj.method : 'POST';
        returned = await fetchAPI(paramsObj.path, method, paramsObj.newObj);
    }

    // save data in dataStore
    
    dataStore[dataStoreAddress] = returned;

    // return whatever comes back from the query function
    // console.log(source)
    // console.log(queryFunctionName)
    // console.log(paramsObj)
    return returned;
}

export default dataDirector;

function _doesDataStoreAddressExist(dataStoreAddress){
    return dataStore[dataStoreAddress] ? true : false;
}

function _doesDataStoreAddressHaveData(dataStoreAddress){
console.log(dataStore);
console.log(dataStoreAddress);
    const tempStore = dataStore[dataStoreAddress];
    // the entry in dataStore will either be an object or an Array (?)
    if(Array.isArray(tempStore)){
        return tempStore.length != 0;
    }else{
        if(tempStore == {})
            return false;
        return Object.keys(tempStore).length != 0;
    }
}