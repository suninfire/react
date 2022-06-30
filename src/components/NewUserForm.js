import {useState} from "react";
import {useForm} from "react-hook-form";

import {getUsers} from "../services/user.api.service"

export default function NewUserForm() {

    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{name:'name',username:'username'}});

    let [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        getUsers(data)
    };

    return (
        <div>
            <h4>Create User</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",{required:true})}/>
                {errors.name && <span>write your name</span>}
                <input {...register("username")}/>
                <input type="submit" value={'save user'}/>
            </form>
        </div>
    );
}