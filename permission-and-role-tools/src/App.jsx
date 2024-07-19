import * as React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField, Layout  } from "react-admin";
import { localDataProvider } from "./dataProviders/fakeDataProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList ,UserShow, UserEdit, UserCreate } from "./components/testUserComponents/testUsers";
import { TaskList, TaskShow, TaskEdit, TaskCreate } from "./components/testTaskComponents/testTasks";

import { Dashboard } from "./components/dashboardComponents/dashboard";



export const App = () => (
  <Admin 
    dataProvider={localDataProvider}
    dashboard={Dashboard}
  >

    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />

    <Resource
      name="tasks"
      list={TaskList}
      show={TaskShow}
      edit={TaskEdit}
      create={TaskCreate}
    />

  </Admin>
)

