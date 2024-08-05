 import dataDirector from '../director.js';

export async function getData(endpoint, query = {}){
    const dataStoreAddress = 'data';
    const source = 'restapi';

    // query.query: 
    // { lastName: "Meyer" }
    // { "ids.campaign.value":campaign }
    // query.sort
    // query.limit
    // query.offset
    // query.skip

    const paramsObj = {
        path: 'private/data/' + endpoint,
        query: query,
    };

    let notCached = true;
    //                                source, queryFunctionName = '', paramsObj = {}, dataStoreAddress, notCached = false
    const result = await dataDirector(source, '', paramsObj, dataStoreAddress, notCached);

    return result;
}