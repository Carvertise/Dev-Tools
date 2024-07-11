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

} from "react-admin";

export const TestList = () => (
    <div>
        <List>
            <Datagrid rowClick="show">
                <TextField source="_id.$oid" />
                <TextField source="value" />
            </Datagrid>
        </List>
    </div>
)

export const TestShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="Main">
                <TextField label='_id.$oid' source="_id.$oid" />
                <TextField source="value" />
                <TextField source="_value" />
                <TextField source="phone" />
                <TextField source="password" />
                <TextField source="role" />
                <TextField source="status" />
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="App State">
                    <TabbedShowLayout>
            <TabbedShowLayout.Tab label="Main">
                <TextField label='_id.$oid' source="_id.$oid" />
                <TextField source="value" />
                <TextField source="_value" />
                <TextField source="phone" />
                <TextField source="password" />
                <TextField source="role" />
                <TextField source="status" />
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="App State">
                <ArrayField source="appState">
                <Datagrid bulkActionButtons={false}>
                    <TextField source="timestamp" />
                    <TextField source="date" />
                    <TextField source="url" />
                </Datagrid>
                </ArrayField>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
                <ArrayField source="appState">
                <Datagrid bulkActionButtons={false}>
                    <TextField source="timestamp" />
                    <TextField source="date" />
                    <TextField source="url" />
                </Datagrid>
                </ArrayField>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);