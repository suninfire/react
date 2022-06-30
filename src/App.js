// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import NewUserForm from "./components/NewUserForm";
import NewCommentForm from "./components/NewCommentForm";

export default function App() {

    return (
        <div>
            <NewUserForm/>

            <hr/>

            <NewCommentForm/>
        </div>
    );
}