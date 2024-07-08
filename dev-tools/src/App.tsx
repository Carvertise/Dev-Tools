import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField } from "react-admin";
import { dataProvider } from "./dataProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList, UserEdit, UserCreate, SimpleUserList, WithListContextUserList, UseListContextUserList } from "./users";
import { PostList,PostEdit,PostCreate} from "./posts";

import { Dashboard } from "./Dashboard";
export const App = () => (
    <Admin 
      dataProvider={dataProvider}
      dashboard={Dashboard}
      >
{/*        <Resource 
          name="posts"
          icon={PostIcon}
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}

        />*/}
{/*        <Resource name="comments"
          //list={CommentsList}
          // edit={CommentsEdit}
          // show={ShowGuesser}
          // create={CommentsCreate}
        />
        <Resource name="albums"
          list={AlbumsList}
          // edit={AlbumsEdit}
          // show={ShowGuesser}
          // create={AlbumsCreate}
        />
        <Resource name="photos"
          list={PhotosList}
          // edit={PhotosEdit}
          // show={ShowGuesser}
          // create={PhotosCreate}
        />
        <Resource name="todos"
          list={TodosList}
          // edit={TodosEdit}
          // show={ShowGuesser}
          // create={TodosCreate}
        />*/}





        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />

{/*        <Resource
          name="users"
          icon={UserIcon}
          list={SimpleUserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*        <Resource
          name="users"
          icon={UserIcon}
          list={WithListContextUserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*        <Resource
          name="users"
          icon={UserIcon}
          list={UseListContextUserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

    </Admin>
);
