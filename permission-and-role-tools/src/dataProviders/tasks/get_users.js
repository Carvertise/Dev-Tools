import dataDirector from '../director.js';

export async function getUsers(query = {}){
    const dataStoreAddress = 'users';
    const source = 'restapi';

    // query.query: 
    // { lastName: "Meyer" }
    // { "ids.campaign.value":campaign }
    // query.sort
    // query.limit
    // query.offset
    // query.skip

    const paramsObj = {
        path: 'private/data/users',
        query: query,
    };

    let notCached = true;

    const result = await dataDirector(source, '', paramsObj, dataStoreAddress, notCached);

    return result;
}