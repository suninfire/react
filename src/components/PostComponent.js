import {useNavigate} from "react-router";
import {Link} from "react-router-dom";


export default function PostComponent({post}) {
    const navigator = useNavigate();
    return (
        <div>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            {/*<button onClick={()=> {*/}
            {/*    navigator(post.id.toString());*/}
            {/*}}>details</button>*/}
            <span><Link to={'details'} state={{...post}}>details</Link></span>

            <hr/>

        </div>
    );
}