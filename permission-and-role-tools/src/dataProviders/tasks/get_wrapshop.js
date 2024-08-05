import dataDirector from '../director.js';

export async function getWrapshop(wrapshopID){
    const dataStoreAddress = 'wrapshop';
    const source = 'restapi';

    const paramsObj = {
        path: 'public/webapp/reporting-dashboard/wrapshop/' + wrapshopID
    };

    const result = await dataDirector(source, '', paramsObj, dataStoreAddress);
    
    return result;
}