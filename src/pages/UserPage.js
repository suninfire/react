import UsersComponent from "../components/UsersComponent";
import {Outlet} from "react-router-dom";

export default function UserPage() {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
}