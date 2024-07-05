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
BooleanField,
} from "react-admin"

export const TodosList = () => (
<List>
<Datagrid rowClick = {false}>
<TextField source = "id" />
<ReferenceField source = "userId" reference = "users" link="show" />
<TextField source = "title" />
<BooleanField source = "completed" />
<EditButton />
</Datagrid>
</List>
)

export const TodosEdit = () => (
<Edit>
<SimpleForm>
   <TextInput source="id" InputProps={{ disabled: true }} />
<ReferenceInput source="userId" reference="users"/>
<TextInput source="title"/>
<TextInput source="body" multiline rows={5}/>
</SimpleForm>
</Edit>
)

export const TodosCreate = () => (
<Create>
<SimpleForm>
<ReferenceInput source="userId" reference = "users"/>
< TextInput source = "title" />
< TextInput source = "body" multiline rows = {5}/>
</SimpleForm>
</Create>
)