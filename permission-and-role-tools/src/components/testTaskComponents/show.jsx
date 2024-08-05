import { 
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
} from "react-admin";

import { Primary } from './showComponents/primary'
import { Other } from './showComponents/other'


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