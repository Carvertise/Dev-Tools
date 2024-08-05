import dataDirector from '../director.js';

export async function createData(endpoint, newObj){
    // console.log(newObj)
    const source = 'restapi';
    const dataStoreAddress = endpoint;

    const paramsObj = {
        method: 'POST',
        path: 'private/data/' + endpoint,
        newObj: newObj,
    };

    let notCached = true;
    //                                source, queryFunctionName = '', paramsObj = {}, dataStoreAddress, notCached = false
     console.log(paramsObj)
    const result = await dataDirector(source, '', paramsObj, dataStoreAddress, notCached);

    return result;
}