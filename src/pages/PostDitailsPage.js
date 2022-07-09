import {useLocation} from "react-router";

import PostDetailsComponent from "../components/PostDetailsComponent";


export default function PostDitailsPage() {
    let {state} = useLocation();
    console.log(state)

    return (
        <div>
            <PostDetailsComponent/>
        </div>
    );
}