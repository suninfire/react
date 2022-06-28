// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси


import Users from "./components/users/Users"

import {useState} from "react";
import {getPostComments} from "./components/services";

export default function App () {

   let [comments,setComments] = useState([]);

   const getUserId = (id) => {
getPostComments(id).then(({data}) => setComments([...data]));
   }

    return (
        <div>

                <h1>User posts</h1>
                {
                    comments.map(value => <div><h4>{value.name}</h4> {value.body}</div>)
                }
            <hr/>
            <br/>
            <hr/>

            <Users getUserId={getUserId}/>
        </div>
    )
}