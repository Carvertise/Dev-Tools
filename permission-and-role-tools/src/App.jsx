// import * as React from 'react';
// import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField, Layout  } from "react-admin";
// import { BrowserRouter,Routes,Route} from 'react-router-dom'
// import { localDataProvider } from "./dataProviders/fakeDataProvider";
// import { dataProvider } from "./dataProviders/dataProvider";

// import PostIcon from "@mui/icons-material/Book";
// import UserIcon from "@mui/icons-material/Group";

// import { UserList ,UserShow, UserEdit, UserCreate } from "./components/testUserComponents/testUsers";
// import { TaskList, TaskShow, TaskEdit, TaskCreate } from "./components/testTaskComponents/testTasks";

// import { HomePage } from "./components/homePageComponents/homePage";



// export const App = () => (
//   <Admin 
// //Data provider is refrencing data stored in /data 
//     // dataProvider={localDataProvider}
//     dataProvider={dataProvider}
// //Provides a Home Page/ Opening dashboard(no metrics and charts)
//     dashboard={HomePage}
//   >
// {/*for the users collection*/}
//     <Resource
//       name="users"
//       list={UserList}
//       show={UserShow}
//       edit={UserEdit}
//       create={UserCreate}
//     />
// {/*for the tasks collection*/}
//     <Resource
//       name="tasks"
//       list={TaskList}
//       show={TaskShow}
//       edit={TaskEdit}
//       create={TaskCreate}
//     />

//   </Admin>
// )

/**
 * THIS IS FOR THE FILE /features/users_reactadmin/users.jsx
 * DO I DO A WRAPPER HERE FOR THAT FILE SO ALL PAGES IN NAV HAVE A FOLDER
 * UNDER /pages/ OR DO I ALLOW EXCEPTIONS FOR REACT ADMIN PAGES AND
 * JUST HAVE THE REACT ADMIN PAGES PULL FROM /features/ ?
 */

import { 
    Admin, 
    Resource, 
    List, 
    Datagrid, 
    TextField, 
    DateField, 
    TextInput, 
    Create,
} from "react-admin";

import { dataProvider } from "./dataProviders/dataProvider";

import { UserShow } from "./userShow.jsx";
import { UserCreate } from "./userCreate.jsx";

import CarvertiseReactAdminLayout from './layout.jsx';

import { Container } from 'react-bootstrap';
import { AppNavigation } from "./appNav.jsx";
import Footer from "./footer.jsx";

export const ReactAdmin = () => (
    <Container fluid className="bg-light mb-2">
        <AppNavigation />
        <Admin 
            basename="/admin" 
            dataProvider={dataProvider} 
            layout={CarvertiseReactAdminLayout}
        >
            <Resource name="users" list={<UserList />} show={UserShow} create={UserCreate} recordRepresentation='value' />
        </Admin>
        <Footer />
    </Container>
);

const filters = [<TextInput label="Search Last Name" source="lastName" size="small" alwaysOn />];

const UserList = () => (
    <List filters={filters}>
        <Datagrid rowClick="show">
            <TextField source="firstName" />
            <TextField source="lastName" />
            <DateField source="created" />
            <TextField source="car.make" />
            <TextField source="role" />
        </Datagrid>
    </List>
);