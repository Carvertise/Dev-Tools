import { 
    TabbedShowLayout,
    Tab,
    TextInput,
    SimpleForm,
} from "react-admin";

//Renders the user's properties that are associated with their car's details so they may be edited


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
