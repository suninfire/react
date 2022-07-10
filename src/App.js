import {Link, Route, Routes} from "react-router-dom";
import './App.css'

import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import PostsPage from "./pages/PostsPage";
import CommentsComponent from "./components/Comments/CommentsComponent";

export default function App() {
    return (
        <div className={'maindiv'}>

            <div><Link to={'/'}> Clear Page </Link></div>

          <div className={'menu'}>
              <div><Link to={'/todos'}> Todos </Link></div>
              <div><Link to={'/albums'}> Albums </Link></div>
              <div><Link to={'/posts'}> Posts </Link></div>
          </div>

          <div>
            <hr/>
            <Routes>
              <Route path={'/todos'} element={<TodosPage/>}/>
              <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<CommentsComponent/>}/>
                </Route>
            </Routes>
          </div>

        </div>);}

