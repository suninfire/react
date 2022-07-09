import {Outlet,useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts, getPostsById} from "../services/PostsService";
import PostComponent from "../components/PostComponent";

export default function PostPage() {
    let {id} = useParams();
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        if (id){
            getPostsById(id).then(({data}) => setPosts([...data]));
        }
        else {
            getPosts().then(({data}) => setPosts([...data]));
        }

    },[id]);
    return (
        <div>
            <Outlet/>
            {
                posts.map(post => <PostComponent post={post} key={post.id} />)
            }

        </div>
    );
}