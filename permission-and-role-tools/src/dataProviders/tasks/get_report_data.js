import dataDirector from '../director.js';

export async function getReportData(queryName = 'default',{campaign, email, campaignStartDate, campaignEndDate}){

    let reportData = {};

    const initData = {
        'sparse':[],
        'small-coarse':[],
        'small-refined':[],
        'medium-coarse':[],
        // 'medium-refined':[],  
        // 'large-coarse':[],
        // 'large-refined':[]  
    }

    const dataStoreAddress = 'reportData';
    const source = 'restapi';
    campaign = encodeURIComponent(campaign);

    /**
     * SET UP THE reportData OBJECT
     * reportData is defined above, line 4, as empty {}
     */
    if(!reportData[queryName]) 
        reportData[queryName] = {updated:new Date(), data:{...initData} };

    if(!campaign) 
        return reportData[queryName];  

    /**
     * QUERY THE DATA AND DO BINNING
     */
    const paramsObj = {
        tag: '', 
        campaign,
        email,
        campaignStartDate, 
        campaignEndDate,
    };

    /**
     * FUNCTIONS FOR .then's
     * NOTE: these functions need to be inside the getReportData() function
     * so they can access the variable reportData in this scope
     */

    function addReportDataObj({tag, raw=[]}){
        return {reportData, tag, raw};
    }

    function mergeChangesToReportDataObj({newReportData}){
        reportData = {...reportData, ...newReportData};
    } 

    if(!reportData[queryName].data.sparse.length){
        paramsObj.tag = 'sparse';
        await dataDirector(source, 'getGpsPointsForMonthlyReport', paramsObj, dataStoreAddress, true)
        .then(addReportDataObj)
        .then(ifDataTooBig)
        .then(updateReportData)
        .then(mergeChangesToReportDataObj)
        .catch(x=>{console.log(x)});
    }
    if(!reportData[queryName].data['small-coarse'].length){
        paramsObj.tag = 'small-coarse';
        await dataDirector(source, 'getGpsPointsForMonthlyReport', paramsObj, dataStoreAddress, true)
        .then(addReportDataObj)
        .then(ifDataTooBig)
        .then(updateReportData)
        .then(mergeChangesToReportDataObj)
        .catch(x=>{console.log(x)});
    }

    for(let tag of ['small-refined', 'medium-coarse'] ){
        paramsObj.tag = tag;
        await dataDirector(source, 'getGpsPointsForMonthlyReport', paramsObj, dataStoreAddress, true)
        .then(addReportDataObj)
        .then(ifDataTooBig)
        .then(updateReportData)
        .then(mergeChangesToReportDataObj)
        .catch(x=>{console.log(x)}); 
    }
    
    return {...reportData};
} 

async function ifDataTooBig({reportData, tag, raw = []}){    
    let warning = null;

    if(raw.length > 75000){
      warning = 'too big';
      console.log('WARNING - size exceeds 75k, downsampling to 50k');
      const picks = new Set();
      let pick = null;
      do{
        pick = Math.floor(Math.random()*raw.length);
        if(!picks.has(pick)) picks.add(pick)  
      }while(picks.size < 50000)
      
      raw = raw.filter((x,i)=>picks.has(i));
    }

    return {raw, tag, warning, reportData}
}

function updateReportData({raw=[], tag, warning, queryName='default', reportData}){

    reportData[queryName].data[tag].push(...raw);
    reportData[queryName].updated     = new Date();  

    let largestLength = 0;
    let largestTag = null;
    Object.keys(reportData[queryName].data).forEach(key=>{
      if(reportData[queryName].data[key].length > largestLength) largestTag = key; 
    })

    const lgData = reportData[queryName].data[largestTag] || [];

    const  colorScales = {};
    Object.keys(reportData[queryName].data).forEach(key=>{
      if(reportData[queryName].data[key].length) colorScales[key] = setColors(reportData[queryName].data[key], 40);
    })
    
    reportData[queryName].colorScales = colorScales;

    return { newReportData: reportData};

    /// used just above
    function setColors(arr, value){
      // linear
      if(!arr) return null;
      const counts = arr.map(x=>x.count);
      const minCount = Math.min(...counts);
      let avgCount = counts.reduce((sum,cur)=>sum+cur,0)/counts.length;
      const maxCount = Math.max(...counts);

      const dy = maxCount - minCount;
      const dx = .5*value;
      const m = dy/dx;
      arr.forEach(x=>{
        x.color = (x.count - minCount)*m;
      })

      const colorScale = [];
      for(let i = 0; i < value; i++){
        colorScale.push({i, count:i*m+minCount});
      }

      return colorScale;
    }
}