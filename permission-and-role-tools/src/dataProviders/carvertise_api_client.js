// ==============================
// API CLIENT
// https://github.com/Carvertise/carvertise-documentation/blob/ae1716e414ec00409f854b6ed1caf87135adf741/docs/pages/frontend/README.md?plain=1#L184
// ==============================
import { getSession, authFetch } from "./auth";

export async function fetchAPI(path, method = 'GET', query){

  // const baseUrl = 'http://localhost:3000';
  const baseUrl = 'https://api.carvertise.com';
  const basePath = '/api/1/';

  let url = baseUrl + basePath + path;

  let searchParams = {};

  if(query.query){
    searchParams.query = btoa(JSON.stringify(query.query));
  }
  
  if(query.sort && query.sort != '')
    searchParams.sort = JSON.stringify(query.sort);

  if(query.limit && query.limit != '')
    searchParams.limit = query.limit;

  if(query.skip)
    searchParams.skip = query.skip;

  if(Object.keys(searchParams).length > 0){
    searchParams = new URLSearchParams(searchParams).toString();
    url = url + '?' + searchParams;
  }

  let options = {};

  // POST
  console.log(query.newObj)
  if( method == 'POST'){
    options.body = JSON.stringify(query.newObj);
  }
  if(method != 'GET'){
    options.method = method;
  }

  // const latestSession = await getSession();
  // console.log(latestSession);

  options.headers = {
    Authorization: "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiYXBwX3N0YXRlLjY1OGY2NWEyZjhjOTY4NjU3NTYzZDRjNCI6ImFsbCIsImRhdGFfdXNlcnMiOiJhbGwiLCJkYXRhX3JlcG9ydHMiOiJhbGwiLCJkYXRhX3dyYXBzaG9wcyI6ImFsbCIsImRhdGFfY29udHJhY3RzIjoiYWxsIiwiZGF0YV9jYW1wYWlnbnMiOiJhbGwiLCJkYXRhX3Rhc2tzIjoiYWxsIiwiZnMuZmlsZXMiOiJhbGwifSwicmVhZCI6eyJzZXJ2aWNlc19sb29rdXAiOiJhbGwiLCJkYXRhX3VzZXJzLjY1OGY2NWEyZjhjOTY4NjU3NTYzZDRjNCI6eyJyb2xlIjp0cnVlLCJ2YWx1ZSI6dHJ1ZSwiZmlsZXMiOnRydWUsImlkcyI6eyJjYW1wYWlnbiI6ImFsbCJ9LCJpZHNfYXJyIjp7ImNhbXBhaWducyI6dHJ1ZX0sInN0YXR1cyI6dHJ1ZSwiY2FtcGFpZ25TdGF0ZSI6eyJ3cmFwIjp0cnVlLCJmcmllbmRseUNhbXBhaWduTmFtZSI6dHJ1ZX0sImNhciI6ImFsbCIsImxvY2F0aW9uIjp7InJvdWdoIjp0cnVlLCJhZGRyZXNzIjp0cnVlLCJjaXR5Ijp0cnVlLCJzdGF0ZSI6dHJ1ZSwiemlwY29kZSI6dHJ1ZX0sImZpcnN0TmFtZSI6dHJ1ZSwibGFzdE5hbWUiOnRydWUsInNlbGZUYWdzIjp0cnVlLCJwaG9uZSI6dHJ1ZX0sImFwcF9zdGF0ZS42NThmNjVhMmY4Yzk2ODY1NzU2M2Q0YzQiOiJhbGwiLCJkYXRhX3VzZXJzIjoiYWxsIiwiZGF0YV9yZXBvcnRzIjoiYWxsIiwiZGF0YV93cmFwc2hvcHMiOiJhbGwiLCJkYXRhX2NvbnRyYWN0cyI6ImFsbCIsImRhdGFfY2FtcGFpZ25zIjoiYWxsIiwiZGF0YV90YXNrcyI6ImFsbCIsImZzLmZpbGVzIjoiYWxsIiwiYXBwX3N0YXRlIjoiYWxsIiwicmVwb3J0aW5nIjoiYWxsIiwic3RyZWV0LW1ldHJpY3MiOiJhbGwifSwidXBkYXRlIjp7ImRhdGFfdXNlcnMuNjU4ZjY1YTJmOGM5Njg2NTc1NjNkNGM0IjoiYWxsIiwiZGF0YV91c2VycyI6ImFsbCIsImRhdGFfcmVwb3J0cyI6ImFsbCIsImRhdGFfd3JhcHNob3BzIjoiYWxsIiwiZGF0YV9jb250cmFjdHMiOiJhbGwiLCJkYXRhX2NhbXBhaWducyI6ImFsbCIsImRhdGFfdGFza3MiOiJhbGwiLCJmcy5maWxlcyI6ImFsbCJ9LCJkZWxldGUiOnsiZGF0YV91c2VycyI6ImFsbCIsImRhdGFfcmVwb3J0cyI6ImFsbCIsImRhdGFfd3JhcHNob3BzIjoiYWxsIiwiZGF0YV9jb250cmFjdHMiOiJhbGwiLCJkYXRhX2NhbXBhaWducyI6ImFsbCIsImRhdGFfdGFza3MiOiJhbGwiLCJmcy5maWxlcyI6ImFsbCJ9fSwidXNlcm5hbWUiOiJkZXYub25lQGNhcnZlcnRpc2UuY29tIiwiZW52IjpbImFsbCJdLCJpYXQiOjE3MjI2MjgzNDcsImV4cCI6MTcyMjYzMTk0N30.rkPz0HVQiVJFgabMoVd-zFMIWbg5AFmtuUhh4QHr8A8'
  }

  try{
    // console.log('Doing Rest API query for url: ' + url);
    
    // const result = await authFetch(url, options);
    const result = await fetch(url, options);

    const json = await result.json();
// console.log('RESULTS: ', json);
    if(!result.ok){
      throw new Error(json.status + ' -- ' + json.message);
    }else{
      return json;
    }
  }catch(error){
    throw error;
  }
    
}

const getGpsPointsForMonthlyReport = async (paramsObj) => {

  const { campaign, campaignStartDate, campaignEndDate, email, tag } = paramsObj;
  const limit = 5000;
  let last = '';
  let hasMore = true;
  let raw = [];

  let query = {
    tag, 
    _id: last
  };

  if(email) 
    query["driver"] = email;
  if(campaignStartDate && campaignEndDate){
    const tempStart = new Date(campaignStartDate).toISOString();
    const tempEnd = new Date(campaignEndDate).toISOString();
    query['created'] = {
      $gte: tempStart, 
      $lte: tempEnd
    };
  }

  do{
    const batch = await fetchAPI(`private/reporting/binned/campaign/${campaign}`, 'GET',
        { query, sort:{_id:1}, limit},
    ) || [];
    hasMore = batch.length === limit && true;
    raw.push(...batch);
    query._id = raw[raw.length - 1]?._id;
  }while(hasMore)
  
  return {tag, raw};

}

export const getAllActiveCampaigns = () => {
  return 'ok';
}

export const queryFunctions = {
  getGpsPointsForMonthlyReport
}