import { getData } from './tasks/get_data.js';
import { createData } from './tasks/create_data.js';

export const dataProvider = {
    // get a list of records based on sort, filter, and pagination
    getList: async (resource, params) => {

        // Convert the React Admin settings (resource, params)
        // to a MongoDB query object we can pass to the task
        // 'resource' will be the name of the page (i.e. "users")

        const query = _convertReactAdminParamsToMongoDbQuery(params);

        let result;
        let returnable = [];
        
        result = await getData(resource, query);

        if(result){
            result.forEach(d => {
                let temp = d;
                temp.id = temp._id;
                returnable.push(temp);
            });
        }else{
            throw new Error('No result from query in React Admin dataProvider for /data/' + resource);
        }

        // determine total of rows; there is a limit of 1000 to query from API
        // so if there is no filter, then total is always 1000
        let total;
        if(Object.keys(params.filter).length == 0) total = 1000;
        else{
            const queryTotal = { 'query': query.query }
            const totalResult = await getData(resource, queryTotal);
            total = totalResult.length;
        }

        return { 
            data: returnable,
            total,
        };
    },
    // get a single record by id
    getOne:     async (resource, params) => {
        if(params.meta)
            delete params.meta;
        let query = {};
        query.query = {'_id': params.id};
        const result = await getData(resource, query);

        return { 
            data: result,
        };
    }, 
    // get a list of records based on an array of ids
    getMany:   async (resource, params) => {
        const query = _convertReactAdminParamsToMongoDbQuery(params);

        const result = await getData(resource, query);

        let returnable = [];

        if(result){
            result.forEach(d => {
                let temp = d;
                temp.id = temp._id;
                returnable.push(temp);
            });
        }else{
            throw new Error('No result from query in React Admin dataProvider for /data/' + resource);
        }

        // determine total of rows; there is a limit of 1000 to query from API
        // so if there is no filter, then total is always 1000
        let total;
        if(Object.keys(params.filter).length == 0) total = 1000;
        else{
            const queryTotal = { 'query': query.query }
            const totalResult = await getData(resource, queryTotal);
            total = totalResult.length;
        }

        return { 
            data: returnable,
            total,
        };
    }, 
    // get the records referenced to another record, e.g. comments for a post
    getManyReference: (resource, params) => Promise, 
    // create a record
    create:    async (resource, params) => {
        const newObject = [];
        newObject.push(params.data);
        const result = await createData(resource, newObject);
        return result;
    }, 
    // update a record based on a patch
    update:     (resource, params) => Promise, 
    // update a list of records based on an array of ids and a common patch
    updateMany: (resource, params) => Promise, 
    // delete a record by id
    delete:     (resource, params) => Promise, 
    // delete a list of records based on an array of ids
    deleteMany: (resource, params) => Promise, 
}

function _convertReactAdminParamsToMongoDbQuery(params){
    let query = {};

    // params.filter
    if(params?.filter && Object.keys(params?.filter).length > 0){
        // convert to a Mongodb query
        delete params.filter.q;
        if(Object.keys(params.filter).length > 0){
            const filterKey = Object.keys(params.filter)[0];
            const filterValue = params.filter[filterKey];
            const filter = {};
            filter[filterKey] = {$regex: ".*" + filterValue, $options:"i"};
            query.query = filter;
        }
        
    }

    // params.meta
    // NOTE: this may not be used, but exists in the object coming from React Admin

    // params.pagination
    // pagination.page, pagination.perPage
    if(params?.pagination && Object.keys(params.pagination).length > 0){
        // query.limit
        query.limit = params.pagination.perPage;
        // query.skip
        query.skip = ((params.pagination.page - 1) * params.pagination.perPage);
    }

    // params.sort
    if(params?.sort && Object.keys(params.sort).length > 0){
        query.sort = {};
        const fieldName = params.sort.field == 'id' ? '_id' : params.sort.field;
        query.sort[fieldName] = params.sort.order == 'ASC' ? '1' : '-1';
    }

    return query;
}