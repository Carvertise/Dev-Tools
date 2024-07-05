import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
// import { PostList, PostEdit, PostCreate } from "./posts";
// import { CommentsList, CommentsEdit, CommentsCreate } from "./comments";
// import { TodosList, TodosEdit, TodosCreate } from "./todos";
// import { PhotosList, PhotosEdit, PhotosCreate } from "./photos";
// import { AlbumsList, AlbumsEdit, AlbumsCreate } from "./albums";
import { UserList } from "./users";

export const App = () => (
    <Admin dataProvider={dataProvider}>
{/*        <Resource name="posts"
          list={PostList}
          edit={PostEdit}
          show={ShowGuesser}
          create={PostCreate}
          show={ShowGuesser}
        />
        <Resource name="comments"
          list={CommentsList}
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
          list={UserList}
          show={ShowGuesser}
          recordRepresentation={(record) => `${record.name}`}
        />
    </Admin>
);
