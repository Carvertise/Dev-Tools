import { 
    SimpleShowLayout, 
    TextField,
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
    WithRecord,
} from "react-admin";

//Renders the user's properties that are associated with their location

export const CarDetails = () => {
    return (
             <TabbedShowLayout.Tab label="Car Details">
                 <TextField label='Color' source="car.color" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Make' source="car.make" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Model' source="car.model" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Year' source="car.year" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Damage' source="car.damage" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='License Plate' source="car.licensePlate" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Notes' source="car.notes" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Secondary Paint' source="car.secondaryPaint" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
                 <TextField label='Tags' source="car.tags" sx={{ fontSize: '20px', fontWeight: 'bold' }} />
             </TabbedShowLayout.Tab>  
    )
}
            




