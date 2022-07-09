import {Link} from "react-router-dom";

export default function UserComponent({user}) {
    return (
        <div>
            {user.name} - <Link to={user.id.toString()}>user posts</Link>
        </div>
    );
}