// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси
import {useState} from "react";

import Users from "./components/users/Users"
import Posts from "./components/posts/Posts";
import {getPostComments} from "./services";

export default function App () {

    let [comments,setComments] = useState([]);

    const getUserId = (id) => {
        getPostComments(id).then(({data}) => setComments([...data]));
    }

    return (
        <div>
            <Posts comments={comments}/>
            <hr/>
            <br/>
            <hr/>

            <Users getUserId={getUserId}/>
        </div>
    )
}