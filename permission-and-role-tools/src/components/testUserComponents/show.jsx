import { 
    SimpleShowLayout, 
    TextField,
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
    WithRecord,
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


const UserShowDriver = () => {
    const record = useRecordContext();
    if(record!=null && record.role.includes('driver') && !record.role.includes('employee')){
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
    if(record!=null && record.role.includes('employee')){
        console.log(record.role);
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
    return(
        <Show>
            <UserShowDriver />
            <UserShowEmployee />
        </Show>
    )
}