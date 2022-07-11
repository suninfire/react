import {useEffect, useState} from "react";

import PostComponent from "./PostComponent";
import {getPosts} from "../../services";

export default function PostsComponent() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
      getPosts().then(({data}) => setPosts([...data]));
},[]);

    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
}