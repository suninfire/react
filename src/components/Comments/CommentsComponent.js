import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import CommentComponent from "./CommentComponent";
import {getComments} from "../../services";

export default function CommentsComponent() {


    let {id} = useParams();

    const [comments,setComments] = useState([]);

    useEffect(() => {
        getComments(id).then(({data}) => setComments([...data]));
    },[id]);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
}