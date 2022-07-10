import {Link} from "react-router-dom";

export default function PostComponent({post}) {
    return (
        <div>
            <h5>{post.title}</h5>
            {post.body}
            <div><Link to={post.id.toString()}> view comments </Link></div>
        </div>

    );
}