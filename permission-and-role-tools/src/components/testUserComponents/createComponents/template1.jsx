import { 
    TextInput,
    SimpleForm,
} from "react-admin";



export const Template1 = () => {
        return (
                <SimpleForm>
                    <TextInput source="type" defaultValue={"No"}/>
                    <TextInput source="category" defaultValue={"Up"} />
                </SimpleForm>
        )
}


