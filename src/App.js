// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
// id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

import {Link, Route, Routes} from "react-router-dom";
import './App.css'

import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";

export default function App() {
    return (
        <div className={'maindiv'}>

            <div><Link to={'/'}> Clear Page </Link></div>

          <div className={'menu'}>
              <div><Link to={'/todos'}> Todos </Link></div>
              <div><Link to={'/albums'}> Albums </Link></div>
              <div><Link to={'/comments'}> Comments </Link></div>
          </div>

          <div>
            <hr/>
            <Routes>
              <Route path={'/todos'} element={<TodosPage/>}/>
              <Route path={'/albums'} element={<AlbumsPage/>}/>
              <Route path={'/comments'} element={<CommentsPage/>}/>
            </Routes>
          </div>

        </div>);}

