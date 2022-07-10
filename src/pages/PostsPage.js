import {Outlet} from "react-router-dom";

import PostsComponent from "../components/Posts/PostsComponent";

export default function PostsPage() {
    return (
        <div>
            <Outlet/>
            <hr/>
            <PostsComponent/>

        </div>
    );
}