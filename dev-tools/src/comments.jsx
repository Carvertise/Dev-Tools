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

export const CommentsList = () => (
   <List>
      <Datagrid rowClick = {false}>
         <TextField source = "id" />
         <ReferenceField source = "postId" reference = "posts" link="show" />
         <TextField source = "name" />
         <EmailField source = "email" />
         <TextField source = "body" />
         <EditButton />
      </Datagrid>
   </List>
)

export const CommentsEdit = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="id" InputProps={{ disabled: true }} />
         <ReferenceInput source="userId" reference="users"/>
         <TextInput source="title"/>
         <TextInput source="body" multiline rows={5}/>
      </SimpleForm>
   </Edit>
)

export const CommentsCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)