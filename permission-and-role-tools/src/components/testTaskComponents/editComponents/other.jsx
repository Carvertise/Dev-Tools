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

export const Other = () => {
    return (
        <TabbedShowLayout.Tab label="Car Details">
            <SimpleForm>
                <TextInput source="length" validate={[required()]} />
            </SimpleForm>
        </TabbedShowLayout.Tab>  
    )
}
            
