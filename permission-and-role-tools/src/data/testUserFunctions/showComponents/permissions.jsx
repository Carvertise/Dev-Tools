import { 
    TabbedShowLayout,
    Tab,
} from "react-admin";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Permissions = () => {
    return (
             <TabbedShowLayout.Tab label="Car Details">
                 <SimpleTreeView>
                         <TreeItem itemId="1" label="Create" >
                             <FormGroup>
                                 <FormControlLabel control={<Checkbox />} label="All" />
                                 <FormControlLabel control={<Checkbox />} label="None" />
                             </FormGroup>
                             <TreeItem itemId ="1.1" label  ="Endpoint 1">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="1.1.1" label  ="Endpoint 1 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                             <TreeItem itemId ="1.2" label  ="Endpoint 2">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="1.2.2" label  ="Endpoint 2 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                         </TreeItem>
                         <TreeItem itemId="2" label="Read" >
                             <FormGroup>
                                 <FormControlLabel control={<Checkbox />} label="All" />
                                 <FormControlLabel control={<Checkbox />} label="None" />
                             </FormGroup>
                             <TreeItem itemId ="2.1" label  ="Endpoint 1">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="2.1.1" label  ="Endpoint 1 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                             <TreeItem itemId ="2.2" label  ="Endpoint 2">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="2.2.2" label  ="Endpoint 2 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                         </TreeItem>
                         <TreeItem itemId="3" label="Update" >
                             <FormGroup>
                                 <FormControlLabel control={<Checkbox />} label="All" />
                                 <FormControlLabel control={<Checkbox />} label="None" />
                             </FormGroup>
                             <TreeItem itemId ="3.1" label  ="Endpoint 1">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="3.1.1" label  ="Endpoint 1 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                             <TreeItem itemId ="3.2" label  ="Endpoint 2">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="3.2.1" label  ="Endpoint 2 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                         </TreeItem>
                         <TreeItem itemId="4" label="Create" >
                             <FormGroup>
                                 <FormControlLabel control={<Checkbox />} label="All" />
                                 <FormControlLabel control={<Checkbox />} label="None" />
                             </FormGroup>
                             <TreeItem itemId ="4.1" label  ="Endpoint 1">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="4.1.1" label  ="Endpoint 1 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                             <TreeItem itemId ="4.2" label  ="Endpoint 2">
                                 <FormGroup>
                                     <FormControlLabel control={<Checkbox />} label="All" />
                                     <FormControlLabel control={<Checkbox />} label="None" />
                                 </FormGroup>
                                 <TreeItem itemId ="4.2.1" label  ="Endpoint 2 - Endpoint 1">
                                     <FormGroup>
                                         <FormControlLabel control={<Checkbox />} label="True" />
                                         <FormControlLabel control={<Checkbox />} label="False" />
                                     </FormGroup>
                                 </TreeItem>
                             </TreeItem>
                         </TreeItem>
                 </SimpleTreeView>
             </TabbedShowLayout.Tab>  
    )
}
            
