import {useEffect, useState} from "react";
import User from "./User";
import "./Users.css"


export default function Users(effect, deps){

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState({})

       useEffect(() => {
           fetch("https://jsonplaceholder.typicode.com/users")
               .then(value => value.json())
               .then(value => {
                   setUsers(value);
               });
       },[]);

    const choseUser = (item) => {
        setUser(item);
    };



    return (
        <div>
            {user.id &&
                <div>
                    <h5>Username - {user.username}</h5>
                    <h5>Email:{user.email} </h5>

                </div>}

           <h2>Users</h2>
            {users.map((user,index) =>
                <User
                    key={index}
                    item={user}
                    chose = {choseUser}
                />  )}



        </div>
    );
}
