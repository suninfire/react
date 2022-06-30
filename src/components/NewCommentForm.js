import {useForm} from "react-hook-form";

export default function NewCommentForm() {

    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{name:'comment name',body:'comment'}});

    const onSubmit = (data) => {

        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <h4>Create Post</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",{required:true})}/>
                {errors.name && <span>write your comment name</span>}
                <input {...register("body")}/>
                <input type="submit" value={'save comment'}/>
                <select {...register("userId")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </form>
        </div>
    );
}