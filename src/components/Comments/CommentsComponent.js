import {useEffect, useState} from "react";

import {getAlbums} from "../../services/AlbumsService";
import CommentComponent from "./CommentComponent";
import {getComments} from "../../services/CommentsService";

export default function CommentsComponent() {

    const [comments,setComments] = useState([]);

    useEffect(() => {
      getComments().then(({data}) => setComments([...data]));
},[]);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
}