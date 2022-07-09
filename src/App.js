import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import AboutPage from "./pages/AboutPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import CommentPage from "./pages/CommentPage";
import PostDitailsPage from "./pages/PostDitailsPage";

export default function App() {
    return (
        <div>
           <div>
               <h2>menu</h2>
               <ul>
                   <li><Link to={'/'}> home </Link></li>
                   <li><Link to={'/layout'}> layout </Link></li>
                   <li><Link to={'/about'}> about </Link></li>
               </ul>
           </div>

            <div>
                <h2>content</h2>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>

                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'users'} element={<UserPage/>}>
                            <Route path={':id'} element={<PostPage/>}/>
                        </Route>
                        <Route path={'posts'} element={<PostPage/>}>
                            <Route path={'details'} element={<PostDitailsPage/>}/>
                            </Route>
                        <Route path={'comments'} element={<CommentPage/>}/>
                    </Route>

                    {/*<Route path={'/layout/users'} element={<UserPage/>}/>*/}

                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </div>

        </div>


    );
}
