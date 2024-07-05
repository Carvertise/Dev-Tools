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
EmailField,
} from "react-admin"

export const AlbumsList = () => (
   <List>
      <Datagrid rowClick = {false}>
         <TextField source = "id" />
         <ReferenceField source = "userId" reference = "users" link="show" />
         <TextField source = "title" />
         <EditButton />
      </Datagrid>
   </List>
)

export const AlbumsEdit = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="id" InputProps={{ disabled: true }} />
         <ReferenceInput source="userId" reference="users"/>
         <TextInput source="title"/>
         <TextInput source="body" multiline rows={5}/>
      </SimpleForm>
   </Edit>
)

export const AlbumsCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)