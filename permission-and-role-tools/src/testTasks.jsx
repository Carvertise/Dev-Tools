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
    SelectInput

} from "react-admin";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export const TaskList = () => (
    <div>
        <List>
            <Datagrid rowClick="show">
                <TextField source="_id.$oid" />
                <TextField source="type" />
                <TextField source="category" />
            </Datagrid>
        </List>
    </div>
)

export const TaskShow = () => {
    const record = useRecordContext()
    console.log(record)
    return(
    <Show>
        <TabbedShowLayout variant="scrollable" scrollButtons="auto">         
            <TabbedShowLayout.Tab label="Main">
                <TextField label='_id.$oid' source="_id.$oid" />
                <TextField source="created.$date" />
                <TextField source="modified.$date" />
                <TextField source="_docVersion" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
    )
};

export const TaskEdit = () => {
    const record = useRecordContext()
    console.log(record)
    return(
    <Edit>
        <TabbedShowLayout variant="scrollable" scrollButtons="auto">         
            <TabbedShowLayout.Tab label="Car Details">
            <SimpleForm>
                <TextField label='_id.$oid' source="_id.$oid" />
                <TextField source="created.$date" />
                <TextField source="modified.$date" />
                <TextField source="_docVersion" />
                </SimpleForm>
            </TabbedShowLayout.Tab> 
        </TabbedShowLayout>
    </Edit>
    )
}