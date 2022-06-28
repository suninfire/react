import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../services";

export default function Users ({getUserId}) {

     let [users,setUsers] = useState([]);

    useEffect(() => {
            getUsers().then(({data}) => setUsers([...data]));

        }, []);

    return (
        <div>
            {
                users.map(value => <User
                key={value.id}
                item={value}
                getUserId={getUserId}
                />)
            }
        </div>
    )
}