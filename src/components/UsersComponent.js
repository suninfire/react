import {useEffect, useState} from "react";
import UserComponent from "./UserComponent";
import {getUsers} from "../services/UsersService";

export default function UsersComponent() {

    const [users,setUsers] = useState([]);
   useEffect(()=>{
        getUsers().then(({data}) => setUsers([...data]));
    },[]);

    return (
        <div>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>);
}
