import { 
    TabbedShowLayout,
    Tab,
    TextInput,
    required,
    SimpleForm,
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
            
