import { 
    SimpleShowLayout, 
    TextField,
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
    WithRecord,
    TextInput,
    required,
    SimpleForm,
    SelectArrayInput,
} from "react-admin";

export const Primary = () => {
    return (
             <TabbedShowLayout.Tab label="Primary">
        <SimpleForm>
            <TextInput source="_id.$oid" validate={[required()]} disabled />
            <TextInput source="value" validate={[required()]} />
            <TextInput source="phone" validate={[required()]} />
            <SelectArrayInput source="role" 
                choices={[
                    { id: 'driver', name: 'Driver' },
                    { id: 'employee', name: 'Employee' },
                    { id: 'admin', name: 'Admin' },
                    { id: 'service', name: 'Service' },
                    { id: 'mt-service', name: 'MT-Service' },
                ]} 
            />
            <SelectArrayInput source="status" 
                choices={[
                    { id: 'onRoad', name: 'On Road' },
                    { id: 'offRoad', name: 'Off Road' },

                ]} 
            />
            <TextInput source="created.$date" validate={[required()]} />
            <TextInput source="modified.$date" validate={[required()]} />
        </SimpleForm>
             </TabbedShowLayout.Tab>
    )
}


