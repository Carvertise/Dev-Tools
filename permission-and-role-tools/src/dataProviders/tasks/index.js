// a wrapper around api_client.js and utility_functions.js 
// just so that each type of code has a consistent approach to querying
// i.e. instead of the custom hooks, have a set of functions with same name

import { dataDirector } from '../director'; // 

async function useGpsQuery(name='default', 
    { timespan, zoom, filterBy, strategy = "smart", callback, 
        options:{
            maxDataPoints=25000, maxInterpolationPoints=50000, 
            stepMultiplier=1, limit=5000
        }
    }
){
    // validate the query
    // pass query and dataStoreAddress to director
    const result = dataDirector(query, dataStoreAddress);
    // pass back the data to the calling hook
    return result;
}

async function useReportQuery(name='default', {campaign, callback, reset}){
    // validate the query
    // pass query and dataStoreAddress to director
    const result = dataDirector(query, dataStoreAddress);
    // pass back the data to the calling hook
    return result;
}

async function useCarsOnRoadQuery({ timespan }, { signal } = {}){
    // validate the query
    // pass query and dataStoreAddress to director
    const result = dataDirector(query, dataStoreAddress);
    // pass back the data to the calling hook
    return result;
}