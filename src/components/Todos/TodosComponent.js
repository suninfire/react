import {useEffect, useState} from "react";

import {getTodos} from "../../services";
import TodoComponent from "./TodoComponent";

export default function TodosComponent() {

    const [todos,setTodos] = useState([]);

    useEffect(()=>{
          getTodos().then(({data}) => setTodos([...data]));
    },[]);

    return (
        <div>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
}