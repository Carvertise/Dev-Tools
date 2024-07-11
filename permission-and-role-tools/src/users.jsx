import { 
    List, 
    SimpleList,
    WithListContext,
    useListContext,
    Datagrid, 
    TextField, 
    EmailField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Show, 
    SimpleShowLayout, 
    DateField,
    useRecordContext ,
    WithRecord,
    TabbedShowLayout,

} from "react-admin";

import { Stack, Typography, Grid, Card, CardContent } from "@mui/material";

import MyUrlField from './MyUrlField';

import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';


import { CheckTree } from 'rsuite';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { mockTreeData } from './mock';

// LIST COMPONANTS 
export const UserList = () => (
    <div>
        <List>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
                <TextField source = "address" />
                <EditButton />
            </Datagrid>
        </List>
    </div>
)

export const SimpleUserList = () => (
    <div>
        <List>
            <SimpleList
                primaryText={(record) => record.name}
                secondaryText={(record) => record.email}
                tertiaryText={(record) => record.website}
            />
        </List>
    </div>
)

export const WithListContextUserList = () => (
    <div>
    <List emptyWhileLoading>
        <WithListContext
            render={({ data }) => (
                <Stack spacing={2} sx={{ padding: 2 }}>
                    {data.map((user) => (
                        <Typography key={user.id}>
                            <i>{user.name}</i> can be contacted at <i>{user.email}</i> or with <i>{user.phone}</i>
                        </Typography>
                    ))}
                </Stack>
            )}
        />
    </List>
    </div>
)

const UserListView = () => {
    const { data } = useListContext();
    return (
        <Stack spacing={2} sx={{ padding: 2 }}>
            {data.map((user) => (
                <Typography key={user.id}>
                    <i>{user.name}</i> can be contacted at <i>{user.email}</i> or with <i>{user.phone}</i>
                </Typography>
            ))}
        </Stack>
    );
};

export const UseListContextUserList = () => (
    <List emptyWhileLoading>
        <UserListView />
    </List>
);


// SHOW COMPONANTS
export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField label="Title" source="name" />
            <TextField label="Email" source="email" />
        </SimpleShowLayout>
    </Show>
);

const IdStarField = () => {
    const record = useRecordContext();
    return <>
        {[...Array(record.id)].map((_, index) => <StarIcon key={index} />)}
    </>;
};

export const UserShowStarIds = () => (
    <Show>
        <SimpleShowLayout>
            <TextField label="Title" source="name" />
            <TextField label="Email" source="email" />
            <IdStarField label="Id" />
        </SimpleShowLayout>
    </Show>
);


export const UserShowWithIdStars = () => (
    <Show>
    
        <SimpleShowLayout>
            <TextField label="Title" source="name" />
            <TextField label="Email" source="email" />
            <WithRecord label="Id" render={record => <>
                {[...Array(record.id)].map((_, index) => <StarIcon key={index} />)}
            </>} />
        </SimpleShowLayout>
    </Show>
)

export const UserShowSimpleShowLayout = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="Description" icon={<FavoriteIcon />}>
                <TextField label="Name" source="name" />
                <ReferenceField label="ID" source="id">
                    <TextField source="email" />
                </ReferenceField>
                <DateField label="Company" source="company.name" />
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="Website" icon={<PersonPinIcon />}>
                <WithRecord label="website" render={record => <>
                    {[...Array(record.id)].map((_, index) => <StarIcon key={index} />)}
                </>} />
                <TextField label="Phone" source="phone" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);

export const UserShowGrid = () => (
    <Show emptyWhileLoading>
        <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField label="Name" source="name" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Email" source="email" />
            </Grid>
        </Grid>
    </Show>
);


// EDIT COMPONANTS
export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="title"/>
            <TextInput source="body" multiline rows={5}/>
            <SimpleTreeView>
                <TreeItem itemId = "0" label = "Permissions">
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
                </TreeItem>
            </SimpleTreeView>
        </SimpleForm>
    </Edit>
)


//CREATE COMPONANTS
export const UserCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)