import { 
    List, 
    Datagrid,
    TextField,
} from "react-admin";

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