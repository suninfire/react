// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси


import Users from "./components/users/Users"
import Posts from "./components/posts/Posts";

export default function App () {
    return (
        <div>
            <Posts/>
            <hr/>
            <br/>
            <hr/>

            <Users/>
        </div>
    )
}