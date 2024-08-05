import { 
    TextField,
    TabbedShowLayout,
    Tab,
} from "react-admin";
//a sub-componant of the Show Componant. It renders the most pertinant properties of the record.
export const Primary = () => {
    return (
             <TabbedShowLayout.Tab label="Main">
                 <TextField source="_id.$oid" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="value" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="phone" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="role" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="status" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="created.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="modified.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
             </TabbedShowLayout.Tab>
    )
}
