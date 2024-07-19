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
import { Other } from './showComponents/other'
import { Dashboard } from './showComponents/dashboard'


const TaskShow = () => {
    const record = useRecordContext();
    return (
         <TabbedShowLayout variant="scrollable" scrollButtons="auto">

             <TabbedShowLayout.Tab label="Primary">
                <Primary/>
             </TabbedShowLayout.Tab>           
             <TabbedShowLayout.Tab label="Other">
                <Other/>
             </TabbedShowLayout.Tab>

         </TabbedShowLayout>
    )
}

export const TaskShowSource = () => {
    return(
        <Show>
            <TaskShow />
        </Show>
    )
}