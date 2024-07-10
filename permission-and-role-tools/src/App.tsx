import * as React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField, Layout  } from "react-admin";
import { dataProvider } from "./dataProvider";
import TreeMenu from '@bb-tech/ra-treemenu';

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList, UserEdit, UserEdit2, UserCreate, SimpleUserList, WithListContextUserList, UseListContextUserList, UserShow, UserShowStarIds, UserShowWithIdStars, UserShowSimpleShowLayout, UserShowGrid } from "./users";
import { PostList,PostEdit,PostCreate, PostsShowGrid, PostListFilterSidebar, PostListFilter} from "./posts";

import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin 
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="users"
      icon={UserIcon}
      list={UserList}
      edit={UserEdit}
      edit={UserEdit2}
      show={UserShowWithIdStars}
      create={UserCreate}
      recordRepresentation={(record) => `${record.name}`}
    />
  </Admin>
)