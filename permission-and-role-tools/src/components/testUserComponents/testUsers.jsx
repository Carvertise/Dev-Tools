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
    ArrayField,
    SingleFieldList,
    SearchInput,
    SelectInput,
    required,
    DateInput,
    ReferenceManyField,


} from "react-admin";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { UserListSource } from './list'
import { UserShowSource } from './show'
import { UserEditSource } from './edit'
import { UserCreateSource } from './create'




export const UserList = UserListSource
export const UserShow = UserShowSource
export const UserEdit = UserEditSource
export const UserCreate = UserCreateSource



