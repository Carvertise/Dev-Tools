import { 
    SimpleShowLayout, 
    TextField,
    Show,
    useRecordContext,
    TabbedShowLayout,
    Tab,
    WithRecord,
} from "react-admin";

//renders the properties of the record athat do not fit easily with the other properties so that they may be edited.

export const Other = () => {
    return (
             <TabbedShowLayout.Tab label="Car Details">
                 <TextField source = "firstName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "lastName" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_air" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_air_lastModified" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_checks.instantiation.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_dateSubmitted" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_db_lastSync" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_error" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_saving_linked_fields" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_special" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_tipalti" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "campaignState" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "driverTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "ids" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "notes" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "opsTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "preferredLanguage" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "selfTags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "tags" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_campaignCount" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_campaignCountCheck.lastCheck.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source = "_geocode-home.$date" sx={{ fontSize: '15px', fontWeight: 'bold' }}/>
                 <TextField source="_docVersion" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="_deleted" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="password" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
                 <TextField source="_value" sx={{ fontSize: '15px', fontWeight: 'bold' }} />
             </TabbedShowLayout.Tab>  
    )
}
            
