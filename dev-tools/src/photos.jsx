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

export const PhotosList = () => (
   <List>
      <Datagrid rowClick = {false}>
         <TextField source = "id" />
         <ReferenceField source = "albumId" reference = "album" link="show" />
         <TextField source = "title" />
         <EmailField source = "url" />
         <TextField source = "thumbnailUrl" />
         <EditButton />
      </Datagrid>
   </List>
)

export const PhotosEdit = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="id" InputProps={{ disabled: true }} />
         <ReferenceInput source="userId" reference="users"/>
         <TextInput source="title"/>
         <TextInput source="body" multiline rows={5}/>
      </SimpleForm>
   </Edit>
)

export const PhotosCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)