import {useState} from "react";
import {useForm} from "react-hook-form";

import {getComments} from "../services/comment.api.service";

export default function NewCommentForm() {

    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{name:'comment name',body:'comment'}});

    let [comments, setComments] = useState([]);

    const onSubmit = (data) => {
        getComments(data)
    };

    return (
        <div>
            <h4>Create Comments</h4>

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