import { 
    List, 
    SimpleList,
    WithListContext,
    useListContext,
    Datagrid, 
    TextField, 
    EmailField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Show, 
    SimpleShowLayout, 
    DateField,
    useRecordContext ,
    WithRecord,
    TabbedShowLayout,
    ArrayField,
    SingleFieldList,
    SearchInput,
    SelectInput,
    required,
    DateInput,
    ReferenceManyField,


} from "react-admin";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { UserListSource } from './data/testUserFunctions/list'
import { UserShowSource } from './data/testUserFunctions/show'
//import { UserEditSource } from './data/testUserFunctions/edit'

import { Dashboard } from "./Dashboard";



export const UserList = UserListSource
export const UserShow = UserShowSource

// export const UserShow = () => {
//     const record = useRecordContext()
//     console.log(record)
//     return(
//     <Show>
//         <TabbedShowLayout variant="scrollable" scrollButtons="auto">
//             <TabbedShowLayout.Tab label="Main">
//                         <WithRecord label="author" render={record => <span>{record.role}</span>} />

//                 <TextField label='_id.$oid' source="_id.$oid" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="value" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="phone" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="role" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="status" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="created.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="modified.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//             </TabbedShowLayout.Tab>

//             <TabbedShowLayout.Tab label="Car Details">
//                 <TextField label='Color' source="car.color" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Make' source="car.make" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Model' source="car.model" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Year' source="car.year" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Damage' source="car.damage" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='License Plate' source="car.licensePlate" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Notes' source="car.notes" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Secondary Paint' source="car.secondaryPaint" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Tags' source="car.tags" sx={{ fontSize: '20px', fontWeight: 'bold' }} />

//             </TabbedShowLayout.Tab>    

//             <TabbedShowLayout.Tab label="Location">
//                 <TextField source = "location.rough" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.address" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.city" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.county" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.state" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.country" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.zipcode" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.coords.type" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "location.coords.coordinates" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//             </TabbedShowLayout.Tab>           

//             <TabbedShowLayout.Tab label="Other">
//                 <TextField source = "firstName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "lastName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_air" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_air_lastModified" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_checks.instantiation.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_dateSubmitted" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_db_lastSync" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_error" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_saving_linked_fields" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_special" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_tipalti" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "campaignState" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "driverTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "ids" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "notes" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "opsTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "preferredLanguage" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "selfTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "tags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_campaignCount" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_campaignCountCheck.lastCheck.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source = "_geocode-home.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                 <TextField source="_docVersion" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="_deleted" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="password" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 <TextField source="_value" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//             </TabbedShowLayout.Tab>            

//             <TabbedShowLayout.Tab label="Permissions">
//                 <SimpleTreeView>
//                         <TreeItem itemId="1" label="Create" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="1.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="1.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="1.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="1.2.2" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="2" label="Read" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="2.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="2.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="2.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="2.2.2" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="3" label="Update" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="3.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="3.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="3.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="3.2.1" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="4" label="Create" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="4.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="4.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="4.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="4.2.1" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                 </SimpleTreeView>
//             </TabbedShowLayout.Tab>            

//         </TabbedShowLayout>
//     </Show>
//     )
// };


export const UserEdit = () => {
    const record = useRecordContext()
    console.log(record)
    return(

            <Edit>
                <TabbedShowLayout>
                    <TabbedShowLayout.Tab label='Main'>
                        <SimpleForm>
                            <TextInput disabled label="_id.$oid" source="_id.$oid" />
                            <TextInput source="value" validate={required()} />
                            <TextInput multiline source="Status" validate={required()} />
                        </SimpleForm>
            </TabbedShowLayout.Tab>
    </TabbedShowLayout>
                </Edit>

//     <Edit>
//         <TabbedShowLayout>
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//             <TabbedShowLayout.Tab label="Main">
//                 <TextInput disabled label="_id.$oid" source="_id.$oid" />

//             </TabbedShowLayout.Tab>
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// {/*            <TabbedShowLayout.Tab label="App State">
//                 <ArrayField source="appState">
//                     <Datagrid bulkActionButtons={false}>
//                         <TextField source="timestamp" />
//                         <TextField source="appVersion" />
//                         <TextField source="buildNumber" />
//                         <TextField source="userEmail" />
//                         <TextField source="userFirstName" />
//                         <TextField source="userLastName" />
//                         <TextField source="userPhone" />
//                         <TextField source="userAddress" />
//                         <TextField source="userVehicle.make" />
//                         <TextField source="userVehicle.model" />
//                         <TextField source="userVehicle.year" />
//                         <TextField source="userVehicle.color" />
//                         <TextField source="userVehicle.licensePlate" />
//                         <TextField source="userSelfTags.uber" />
//                         <TextField source="campaignId" />
//                         <TextField source="campaignName" />
//                         <TextField source="deviceInfo.version" />
//                         <TextField source="deviceInfo.framework" />
//                         <TextField source="deviceInfo.model" />
//                         <TextField source="deviceInfo.platform" />
//                         <TextField source="deviceInfo.manufacturer" />
//                         <TextField source="isOnboarded" />
//                         <TextField source="isLoggedIn" />
//                         <TextField source="activeTrip" />
//                         <TextField source="location" />
//                         <TextField source="activity" />
//                         <TextField source="isBackgroundTrackingEnabled" />
//                         <TextField source="backgroundLocationPermissionGranted" />
//                         <TextField source="backgroundGeolocationProviderState.status" />
//                         <TextField source="backgroundGeolocationProviderState.accuracyAuthorization" />
//                         <TextField source="backgroundGeolocationProviderState.airplane" />
//                         <TextField source="backgroundGeolocationProviderState.gps" />
//                         <TextField source="backgroundGeolocationProviderState.enabled" />
//                         <TextField source="backgroundGeolocationProviderState.network" />
//                         <TextField source="backgroundGeolocationState.didDeviceReboot" />
//                         <TextField source="backgroundGeolocationState.didLaunchInBackground" />
//                         <TextField source="backgroundGeolocationState.odometer" />
//                         <TextField source="backgroundGeolocationState.trackingMode" />
//                         <TextField source="backgroundGeolocationState.triggerActivities" />
//                         <TextField source="backgroundGeolocationState.stopOnStationary" />
//                         <TextField source="backgroundGeolocationState.enabled" />
//                         <TextField source="backgroundGeolocationState.stopAfterElapsedMinutes" />
//                         <TextField source="backgroundGeolocationState.stationaryRadius" />
//                         <TextField source="backgroundGeolocationState.startOnBoot" />
//                         <TextField source="backgroundGeolocationState.scheduleUseAlarmManager" />
//                         <TextField source="backgroundGeolocationState.schedule" />
//                         <TextField source="backgroundGeolocationState.persistMode" />
//                         <TextField source="backgroundGeolocationState.persist" />
//                         <TextField source="backgroundGeolocationState.notification.strings" />
//                         <TextField source="backgroundGeolocationState.notification.sticky" />
//                         <TextField source="backgroundGeolocationState.notification.largeIcon" />
//                         <TextField source="backgroundGeolocationState.notification.layout" />
//                         <TextField source="backgroundGeolocationState.notification.channelId" />
//                         <TextField source="backgroundGeolocationState.notification.color" />
//                         <TextField source="backgroundGeolocationState.notification.smallIcon" />
//                         <TextField source="backgroundGeolocationState.notification.text" />
//                         <TextField source="backgroundGeolocationState.notification.priority" />
//                         <TextField source="backgroundGeolocationState.notification.channelName" />
//                         <TextField source="backgroundGeolocationState.notification.actions" />
//                         <TextField source="backgroundGeolocationState.notification.title" />
//                         <TextField source="backgroundGeolocationState.motionTriggerDelay" />
//                         <TextField source="backgroundGeolocationState.foregroundService" />
//                         <TextField source="backgroundGeolocationState.method" />
//                         <TextField source="backgroundGeolocationState.maxMonitoredGeofences" />
//                         <TextField source="backgroundGeolocationState.geofenceTemplate" />
//                         <TextField source="backgroundGeolocationState.locationAuthorizationRequest" />
//                         <TextField source="backgroundGeolocationState.locationUpdateInterval" />
//                         <TextField source="backgroundGeolocationState.locationTemplate" />
//                         <TextField source="backgroundGeolocationState.isMoving" />
//                         <TextField source="backgroundGeolocationState.disableLocationAuthorizationAlert" />
//                         <TextField source="backgroundGeolocationState.httpRootProperty" />
//                         <TextField source="backgroundGeolocationState.maxDaysToPersist" />
//                         <TextField source="backgroundGeolocationState.httpTimeout" />
//                         <TextField source="backgroundGeolocationState.geofenceProximityRadius" />
//                         <TextField source="backgroundGeolocationState.geofenceModeHighAccuracy" />
//                         <TextField source="backgroundGeolocationState.fastestLocationUpdateInterval" />
//                         <TextField source="backgroundGeolocationState.enableTimestampMeta" />
//                         <TextField source="backgroundGeolocationState.headlessJobService" />
//                         <TextField source="backgroundGeolocationState.distanceFilter" />
//                         <TextField source="backgroundGeolocationState.disableStopDetection" />
//                         <TextField source="backgroundGeolocationState.disableProviderChangeRecord" />
//                         <TextField source="backgroundGeolocationState.url" />
//                         <TextField source="backgroundGeolocationState.maxBatchSize" />
//                         <TextField source="backgroundGeolocationState.isFirstBoot" />
//                         <TextField source="backgroundGeolocationState.disableElasticity" />
//                         <TextField source="backgroundGeolocationState.logMaxDays" />
//                         <TextField source="backgroundGeolocationState.useSignificantChangesOnly" />
//                         <TextField source="backgroundGeolocationState.heartbeatInterval" />
//                         <TextField source="backgroundGeolocationState.disableMotionActivityUpdates" />
//                         <TextField source="backgroundGeolocationState.speedJumpFilter" />
//                         <TextField source="backgroundGeolocationState.debug" />
//                         <TextField source="backgroundGeolocationState.disableAutoSyncOnCellular" />
//                         <TextField source="backgroundGeolocationState.desiredAccuracy" />
//                         <TextField source="backgroundGeolocationState.minimumActivityRecognitionConfidence" />
//                         <TextField source="backgroundGeolocationState.locationTimeout" />
//                         <TextField source="backgroundGeolocationState.schedulerEnabled" />
//                         <TextField source="backgroundGeolocationState.enableHeadless" />
//                         <TextField source="backgroundGeolocationState.geofenceInitialTriggerEntry" />
//                         <TextField source="backgroundGeolocationState.configUrl" />
//                         <TextField source="backgroundGeolocationState.deferTime" />
//                         <TextField source="backgroundGeolocationState.stopOnTerminate" />
//                         <TextField source="backgroundGeolocationState.desiredOdometerAccuracy" />
//                         <TextField source="backgroundGeolocationState.headers.authorization" />
//                         <TextField source="backgroundGeolocationState.params" />
//                         <TextField source="backgroundGeolocationState.elasticityMultiplier" />
//                         <TextField source="backgroundGeolocationState.extras.ids.trip" />
//                         <TextField source="backgroundGeolocationState.extras.ids.driver" />
//                         <TextField source="backgroundGeolocationState.extras._sample" />
//                         <TextField source="backgroundGeolocationState.extras._appVersion" />
//                         <TextField source="backgroundGeolocationState.batchSync" />
//                         <TextField source="backgroundGeolocationState.backgroundPermissionRationale.negativeAction" />
//                         <TextField source="backgroundGeolocationState.backgroundPermissionRationale.positiveAction" />
//                         <TextField source="backgroundGeolocationState.backgroundPermissionRationale.message" />
//                         <TextField source="backgroundGeolocationState.backgroundPermissionRationale.title" />
//                         <TextField source="backgroundGeolocationState.maxRecordsToPersist" />
//                         <TextField source="backgroundGeolocationState.activityRecognitionInterval" />
//                         <TextField source="backgroundGeolocationState.stopTimeout" />
//                         <TextField source="backgroundGeolocationState.autoSyncThreshold" />
//                         <TextField source="backgroundGeolocationState.locationsOrderDirection" />
//                         <TextField source="backgroundGeolocationState.allowIdenticalLocations" />
//                         <TextField source="backgroundGeolocationState.autoSync" />
//                         <TextField source="backgroundGeolocationState.logLevel" />
//                         <TextField source="backgroundGeolocationState.authorization" />
//                         <TextField source="backgroundGeolocationSensors.significant_motion" />
//                         <TextField source="backgroundGeolocationSensors.gyroscope" />
//                         <TextField source="backgroundGeolocationSensors.magnetometer" />
//                         <TextField source="backgroundGeolocationSensors.accelerometer" />
//                         <TextField source="backgroundGeolocationSensors.platform" />
//                         <TextField source="backgroundGeolocationSensorPermissions.accelerometer.granted" />
//                         <TextField source="backgroundGeolocationSensorPermissions.accelerometer.expires" />
//                         <TextField source="backgroundGeolocationSensorPermissions.accelerometer.canAskAgain" />
//                         <TextField source="backgroundGeolocationSensorPermissions.accelerometer.status" />
//                         <TextField source="backgroundGeolocationSensorPermissions.gyroscope.granted" />
//                         <TextField source="backgroundGeolocationSensorPermissions.gyroscope.expires" />
//                         <TextField source="backgroundGeolocationSensorPermissions.gyroscope.canAskAgain" />
//                         <TextField source="backgroundGeolocationSensorPermissions.gyroscope.status" />
//                         <TextField source="backgroundGeolocationSensorPermissions.magnetometer.granted" />
//                         <TextField source="backgroundGeolocationSensorPermissions.magnetometer.expires" />
//                         <TextField source="backgroundGeolocationSensorPermissions.magnetometer.canAskAgain" />
//                         <TextField source="backgroundGeolocationSensorPermissions.magnetometer.status" />
//                     </Datagrid>
//                 </ArrayField>
//             </TabbedShowLayout.Tab>*/}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// {/*            <TabbedShowLayout.Tab label="Statistics">
//                 <TabbedShowLayout>
//                     <TabbedShowLayout.Tab label="Statistics-Alpha">
//                         <TextField source="statistics.gps_tracking_carvertise.most_recent_date.$date" />
//                         <ArrayField source="statistics.driving.monthly">
//                             <Datagrid>
//                                 <TextField source="year" />
//                                 <TextField source="month" />
//                                 <TextField source="month-index" />
//                                 <TextField source="status" />
//                                 <TextField source="campaign" />
//                             </Datagrid>
//                         </ArrayField>
//                     </TabbedShowLayout.Tab> 
//                     <TabbedShowLayout.Tab label="Statistics-Beta">
//                         <TextField source="statistics.gps_tracking_carvertise.most_recent_date.$date" />
//                     </TabbedShowLayout.Tab>    
//                 </TabbedShowLayout>   
//             </TabbedShowLayout.Tab>   */}   
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//             <TabbedShowLayout.Tab label="Car Details">
//             <SimpleForm>
//                 <TextField label='Color' source="car.color" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Make' source="car.make" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Model' source="car.model" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Year' source="car.year" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Damage' source="car.damage" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='License Plate' source="car.licensePlate" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Notes' source="car.notes" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Secondary Paint' source="car.secondaryPaint" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 <TextField label='Tags' source="car.tags" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
//                 </SimpleForm>
//             </TabbedShowLayout.Tab> 

//             <TabbedShowLayout.Tab label="Location">
//             <SimpleForm>
//                 <TextField source = "location.rough"/>
//                 <TextField source = "location.address"/>
//                 <TextField source = "location.city"/>
//                 <TextField source = "location.county"/>
//                 <TextField source = "location.state"/>
//                 <TextField source = "location.country"/>
//                 <TextField source = "location.zipcode"/>
//                 <TextField source = "location.coords.type"/>
//                 <TextField source = "location.coords.coordinates"/>
//                 </SimpleForm>
//             </TabbedShowLayout.Tab>  
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            
//             <TabbedShowLayout.Tab label="Other">
//                 <SimpleForm>
//                     <TextField source = "firstName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "lastName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_air" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_air_lastModified" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_checks.instantiation.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_dateSubmitted" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_db_lastSync" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_error" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_saving_linked_fields" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_special" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_tipalti" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "campaignState" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "driverTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "ids" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "notes" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "opsTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "preferredLanguage" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "selfTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "tags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_campaignCount" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_campaignCountCheck.lastCheck.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source = "_geocode-home.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
//                     <TextField source="_docVersion" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                     <TextField source="_deleted" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                     <TextField source="password" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                     <TextField source="_value" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
//                 </SimpleForm>
//             </TabbedShowLayout.Tab>            
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//             <TabbedShowLayout.Tab label="Permissions">

//             <SimpleForm>
//                 <SimpleTreeView>
//                         <TreeItem itemId="1" label="Create" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="1.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="1.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="1.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="1.2.2" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="2" label="Read" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="2.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="2.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="2.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="2.2.2" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="3" label="Update" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="3.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="3.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="3.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="3.2.1" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                         <TreeItem itemId="4" label="Create" >
//                             <FormGroup>
//                                 <FormControlLabel control={<Checkbox />} label="All" />
//                                 <FormControlLabel control={<Checkbox />} label="None" />
//                             </FormGroup>
//                             <TreeItem itemId ="4.1" label  ="Endpoint 1">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="4.1.1" label  ="Endpoint 1 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                             <TreeItem itemId ="4.2" label  ="Endpoint 2">
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="All" />
//                                     <FormControlLabel control={<Checkbox />} label="None" />
//                                 </FormGroup>
//                                 <TreeItem itemId ="4.2.1" label  ="Endpoint 2 - Endpoint 1">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Checkbox />} label="True" />
//                                         <FormControlLabel control={<Checkbox />} label="False" />
//                                     </FormGroup>
//                                 </TreeItem>
//                             </TreeItem>
//                         </TreeItem>
//                 </SimpleTreeView>
//             </SimpleForm>
//             </TabbedShowLayout.Tab>            
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         </TabbedShowLayout>
//     </Edit>
    )
}