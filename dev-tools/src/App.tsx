import { Admin, Resource, ShowGuesser, EditGuesser, List, Datagrid, TextField, EmailField } from "react-admin";
import { dataProvider } from "./dataProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList, UserEdit, UserCreate, SimpleUserList, WithListContextUserList, UseListContextUserList, UserShow, UserShowStarIds, UserShowWithIdStars, UserShowSimpleShowLayout, UserShowGrid } from "./users";
import { PostList,PostEdit,PostCreate, PostsShowGrid, PostListFilterSidebar, PostListFilter} from "./posts";

import { Dashboard } from "./Dashboard";
export const App = () => (
    <Admin 
      dataProvider={dataProvider}
      dashboard={Dashboard}
      >

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

{/*LIST:POSTLIST
SHOW:SHOWGUESSER*/}
{/*        <Resource 
          name="posts"
          icon={PostIcon}
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}

        />*/}


{/*LIST:UserList
SHOW:UserShow
        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={UserShow}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*DOESNT WORK*/}
{/*        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={UserShowStarIds}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={ShowGuesser}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*FOR PHONE APPS
        <Resource
          name="users"
          icon={UserIcon}
          list={SimpleUserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*FORMAT EACH RECORD INTO A COMPONANT(EX:A SENTENCE)
        <Resource
          name="users"
          icon={UserIcon}
          list={WithListContextUserList}
          edit={UserEdit}
          create={UserCreate}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />*/}


     <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={UserShowWithIdStars}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />

{/*     <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={UserShowGrid}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />*/}


{/*DOESNT WORK*/}
{/*     <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          edit={UserEdit}
          show={UserShowSimpleShowLayout}
          create={UserCreate}
          recordRepresentation={(record) => `${record.name}`}
        />*/}

{/*     <Resource
          name="posts"
          icon={PostIcon}
          list={PostListFilterSidebar}
          edit={PostEdit}
          show={PostsShowGrid}
          create={PostCreate}
          recordRepresentation={(record) => `${record.title}`}
        />*/}

     <Resource
          name="posts"
          icon={PostIcon}
          list={PostListFilter}
          edit={PostEdit}
          show={PostsShowGrid}
          create={PostCreate}
          recordRepresentation={(record) => `${record.title}`}
        />

    </Admin>
);

PostListFilter