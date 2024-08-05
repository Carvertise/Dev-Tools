import { 
    TextField,
    TabbedShowLayout,
    Tab,
} from "react-admin";

export const Other = () => {
    return (
             <TabbedShowLayout.Tab label="Other">
                 <TextField source="length" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="priority" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="payload.to" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="payload.code" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="created.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="modified.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="_docVersion" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="completed.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="duration" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="failed" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="lastEntryTime.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="lastSuccessEnd.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="lastSuccessStart.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="results.status" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="results.id" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="results.message" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="started.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
             </TabbedShowLayout.Tab>
    )
}
