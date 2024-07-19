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



export const Template2 = () => {
        return (
                <SimpleForm>
                    <TextInput source="type" defaultValue={"Yes"}/>
                    <TextInput source="category" defaultValue={"Down"} />
                </SimpleForm>
        )
}


