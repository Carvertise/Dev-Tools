import {
   List,
   Datagrid,
   TextField,
   ReferenceField,
   EditButton,
   Edit,
   Create,
   SimpleForm,
   ReferenceInput,
   TextInput,
   SavedQueriesList, 
   FilterLiveSearch,
    FilterList,
     FilterListItem,
    BooleanField,
    CreateButton,
    NumberField,
    ReferenceArrayField,
    TopToolbar,
} from "react-admin"

import { Stack, Typography, Grid, Card, CardContent } from "@mui/material";

import MyUrlField from './MyUrlField';

import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export const PostFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 250 }}>
        <CardContent>
            <SavedQueriesList />
            <FilterLiveSearch />
            <FilterList label="UserId" icon={<MailIcon />}>
                <FilterListItem label="Leanne Graham" value={{ userId: 1 }} />
                <FilterListItem label="Ervin Howell" value={{ userId: 2 }} />
            </FilterList>
        </CardContent>
    </Card>
);

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostListFilterSidebar = () => (
   <List aside={<PostFilterSidebar />}>
      <Datagrid rowClick = {false}>
         <TextField source = "id" />
         <ReferenceField source = "userId" reference = "users" link="show" />
         <TextField source = "title" />
         <TextField source = "body" />
         <EditButton />
      </Datagrid>
   </List>
)

export const PostListFilter = () => (
   <List filters={postFilters}>
      <Datagrid rowClick = {false}>
         <TextField source = "id" />
         <ReferenceField source = "userId" reference = "users" link="show" />
         <TextField source = "title" />
         <TextField source = "body" />
         <EditButton />
      </Datagrid>
   </List>
)

export const PostEdit = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="id" InputProps={{ disabled: true }} />
         <ReferenceInput source="userId" reference="users"/>
         <TextInput source="title"/>
         <TextInput source="body" multiline rows={5}/>
      </SimpleForm>
   </Edit>
)

export const PostCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)

export const PostsShowGrid = () => (
    <Show emptyWhileLoading>
        <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField label="Title" source="title" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ReferenceField label="Author" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Body" source="body" />
            </Grid>
        </Grid>
    </Show>
);