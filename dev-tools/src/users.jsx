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
} from "react-admin";

import { Stack, Typography } from "@mui/material";

import MyUrlField from './MyUrlField';


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

export const UserEdit = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="id" InputProps={{ disabled: true }} />
         <ReferenceInput source="userId" reference="users"/>
         <TextInput source="title"/>
         <TextInput source="body" multiline rows={5}/>
      </SimpleForm>
   </Edit>
)

export const UserCreate = () => (
   <Create>
      <SimpleForm>
         <ReferenceInput source="userId" reference = "users"/>
         < TextInput source = "title" />
         < TextInput source = "body" multiline rows = {5}/>
      </SimpleForm>
   </Create>
)