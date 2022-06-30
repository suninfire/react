import {useForm} from "react-hook-form";

export default function NewUserForm() {

    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{name:'name',username:'username'}});

    const onSubmit = (data) => {

        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

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