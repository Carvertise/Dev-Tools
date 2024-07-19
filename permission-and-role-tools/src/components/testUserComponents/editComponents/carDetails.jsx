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

export const CarDetails = () => {
    return (
             <TabbedShowLayout.Tab label="Car Details">
                <SimpleForm>
                    <TextInput source="car.color" validate={[]} />
                    <TextInput source="car.make" validate={[]} />
                    <TextInput source="car.model" validate={[]} />
                    <TextInput source="car.year" validate={[]} />
                    <TextInput source="car.damage" validate={[]} />
                    <TextInput source="car.licensePlate" validate={[]} />
                    <TextInput source="car.notes" validate={[]} />
                    <TextInput source="car.secondatyPlate" validate={[]} />
                    <TextInput source="car.tags" validate={[]} />
                </SimpleForm>
             </TabbedShowLayout.Tab>  
    )
}
