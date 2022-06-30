// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import {useForm} from "react-hook-form";

export default function App() {

   let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{name:'name',username:'username'}});

    const onSubmit = (data) => {

        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
<h4>Create User</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",{required:true})}/>
                {errors.name && <span>write yor name</span>}
                <input {...register("username")}/>
                <input type="submit" value={'save post'}/>
                {/*<select {...register("userId")}>*/}
                {/*    <option value="1">1</option>*/}
                {/*    <option value="2">2</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*    <option value="4">4</option>*/}
                {/*    <option value="5">5</option>*/}
                {/*</select>*/}
            </form>

        </div>
    );
}