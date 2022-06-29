import {useEffect, useState} from "react";

import {getPostComments} from "../../services";

export default function Posts() {

    let [comments,setComments] = useState([]);

    useEffect((id) => {
        getPostComments(id).then(({data}) => setComments([...data]));

    }, []);

    return (
        <div>

            <h1>User posts</h1>
            {
                comments.map(value => <div><h4>{value.name}</h4> {value.body}</div>)
            }
        </div>
    );
}