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
export const Location = () => {
    return (
             <TabbedShowLayout.Tab label="Car Details">
                 <TextField source = "location.rough" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.address" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.city" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.county" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.state" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.country" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.zipcode" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.coords.type" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "location.coords.coordinates" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
             </TabbedShowLayout.Tab>  
    )
}
            




