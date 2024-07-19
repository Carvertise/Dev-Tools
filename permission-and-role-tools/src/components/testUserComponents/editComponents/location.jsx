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

export const Location = () => {
    return (
             <TabbedShowLayout.Tab label="Location">
                <SimpleForm>
                    <TextInput source="location.rough" validate={[]} />
                    <TextInput source="location.address" validate={[]} />
                    <TextInput source="location.city" validate={[]} />
                    <TextInput source="location.county" validate={[]} />
                    <TextInput source="location.state" validate={[]} />
                    <TextInput source="location.country" validate={[]} />
                    <TextInput source="location.zipcode" validate={[]} />
                    <TextInput source="location.coords.type" validate={[]} />
                    <TextInput source="location.coords.coordinates" validate={[]} />
                </SimpleForm>
             </TabbedShowLayout.Tab>  
    )
}
            