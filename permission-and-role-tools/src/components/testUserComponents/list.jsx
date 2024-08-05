import { 
    List, 
    Datagrid,
    TextField,
} from "react-admin";
//lists several specific properties from all of the records in the users's collection
export const UserListSource = () => (
    <div>
        <List>
            <Datagrid rowClick="show">
                <TextField source="_id.$oid" />
                <TextField source="value" />
                <TextField source="role" />
            </Datagrid>
        </List>
    </div>
)