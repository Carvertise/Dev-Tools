import * as React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField, Layout  } from "react-admin";
import { dataProvider } from "./dataProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList ,UserShow, UserEdit } from "./testUsers";
import { TaskList, TaskShow, TaskEdit} from "./testTasks";

import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin 
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >

    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
    />

    <Resource
      name="tasks"
      list={TaskList}
      show={TaskShow}
      edit={TaskEdit}
    />

  </Admin>
)