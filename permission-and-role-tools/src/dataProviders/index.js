import { proxy } from 'valtio'

// https://github.com/pmndrs/valtio

const dataStore = proxy({ 
    currentUser: {},
    gpsPoints: [],
    currentReportSettings: {},
    reportData: {},
    wrapshop: {},
    carsOnRoad: [],
    components: [],
    data: {},
    // react-admin
    users: [],
    tasks: [],
})

export default dataStore;