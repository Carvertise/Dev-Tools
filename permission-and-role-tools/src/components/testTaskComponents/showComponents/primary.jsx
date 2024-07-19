import { 
    SimpleShowLayout, 
    TextField,
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
    WithRecord,
} from "react-admin";

export const Primary = () => {
    return (
             <TabbedShowLayout.Tab label="Primary">
                 <TextField source="_id.$oid" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="type" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="category" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="delay" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="working" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="tags" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="worker" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
             </TabbedShowLayout.Tab>
    )
}
