import { 
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
} from "react-admin";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Primary } from './showComponents/primary'
import { CarDetails } from './showComponents/carDetails'
import { Location } from './showComponents/location'
import { Other } from './showComponents/other'
import { Permissions } from './showComponents/Permissions'

//show the individual record
const UserShowDriver = () => {
    const record = useRecordContext();
    //if the records role property only contains driver, it renders these properties
    if(record!=null && record.role.includes('driver') && !record.role.includes('employee')){
        //returns a tabbed page contatining the properties of the record seperated into the diffrent tabs.
    return (

        <div>
                <Primary/>
                <br/>
         <TabbedShowLayout variant="scrollable" scrollButtons="auto">

             <TabbedShowLayout.Tab label="Car Details">
                <CarDetails/>
             </TabbedShowLayout.Tab>    
             <TabbedShowLayout.Tab label="Location">
                <Location/>
             </TabbedShowLayout.Tab>           

             <TabbedShowLayout.Tab label="Other">
                <Other/>
             </TabbedShowLayout.Tab>            

             <TabbedShowLayout.Tab label="Permissions">
                <Permissions/>
             </TabbedShowLayout.Tab>            

         </TabbedShowLayout>
         </div>
    )
    }
}
const UserShowEmployee = () => {
    const record = useRecordContext();
    //if the record's role property only contains employee, it renders these properties
    if(record!=null && record.role.includes('employee')){
        console.log(record.role);
        //returns a tabbed page contatining the properties of the record seperated into the diffrent tabs.
    return (

        <div>
                <Primary/>
                <br/>
         <TabbedShowLayout variant="scrollable" scrollButtons="auto">

             <TabbedShowLayout.Tab label="Car Details">
                <CarDetails/>
             </TabbedShowLayout.Tab>    
             <TabbedShowLayout.Tab label="Location">
                <Location/>
             </TabbedShowLayout.Tab>           

             <TabbedShowLayout.Tab label="Other">
                <Other/>
             </TabbedShowLayout.Tab>            

             <TabbedShowLayout.Tab label="Permissions">
                <Permissions/>
             </TabbedShowLayout.Tab>            

         </TabbedShowLayout>
         </div>
    )
    }
}

export const UserShowSource = () => {
    //returns both role componants, but their logic should mean that only one is actually rendered
    return(
        <Show>
            <UserShowDriver />
            <UserShowEmployee />
        </Show>
    )
}