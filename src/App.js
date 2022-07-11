import {Route, Routes} from "react-router-dom";
import './App.css'

import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import PostsPage from "./pages/PostsPage";
import CommentsComponent from "./components/Comments/CommentsComponent";
import Menu from "./pages/Menu";

export default function App() {
    return (
        <div >

            <Menu/>
            <hr/>

          <div>
            <Routes>
              <Route path={'/todos'} element={<TodosPage/>}/>
              <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<CommentsComponent/>}/>
                </Route>
            </Routes>
          </div>

        </div>);}

