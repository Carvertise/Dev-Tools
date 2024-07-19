import * as React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField, Layout  } from "react-admin";
import { localDataProvider } from "./dataProviders/fakeDataProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList ,UserShow, UserEdit, UserCreate } from "./components/testUserComponents/testUsers";
import { TaskList, TaskShow, TaskEdit, TaskCreate } from "./components/testTaskComponents/testTasks";

import { HomePage } from "./components/homePageComponents/homePage";



export const App = () => (
  <Admin 
//Data provider is refrencing data stored in /data 
    dataProvider={localDataProvider}
//Provides a Home Page/ Opening dashboard(no metrics and charts)
    dashboard={HomePage}
  >
{/*for the users collection*/}
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
{/*for the tasks collection*/}
    <Resource
      name="tasks"
      list={TaskList}
      show={TaskShow}
      edit={TaskEdit}
      create={TaskCreate}
    />

  </Admin>
)

