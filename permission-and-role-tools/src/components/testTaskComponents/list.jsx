import { 
    List, 
    Datagrid,
    TextField,
} from "react-admin";

export const TaskListSource = () => (
    <div>
        <List>
            <Datagrid rowClick="show">
                <TextField source="_id.$oid" />
                <TextField source="delay" />
                <TextField source="tags" />
                <TextField source="working" />
            </Datagrid>
        </List>
    </div>
)