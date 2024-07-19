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

const postDefaultValue = () => ({ type: 'yes', category: "test" });


export const Primary = (props) => {
    if(props.template== 1){
        return (
            <TabbedShowLayout.Tab label="Primary">
                <SimpleForm defaultValues={postDefaultValue}>
                    <TextInput source="_id.$oid"  disabled />
                    <TextInput source="type" initialValue={"1"}/>
                    <TextInput source="category" initialValue={"1"} />
                </SimpleForm>
            </TabbedShowLayout.Tab>
        )
    }
    if(props.template== 2){
        return (
            <TabbedShowLayout.Tab label="Primary">
                <SimpleForm defaultValues={postDefaultValue}>
                    <TextInput source="_id.$oid" validate={[]} disabled />
                    <TextInput source="type" validate={[]} initialValue={"2"}/>
                    <TextInput source="category" validate={[]} initialValue={"2"} />
                </SimpleForm>
            </TabbedShowLayout.Tab>
        )
    }

}


