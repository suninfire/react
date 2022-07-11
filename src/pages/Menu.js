import {Link} from "react-router-dom";

export default function Menu() {
    return (
            <div className={'maindiv'}>

                <div><Link to={'/'}> Clear Page </Link></div>

                <div className={'menu'}>
                    <div><Link to={'/todos'}> Todos </Link></div>
                    <div><Link to={'/albums'}> Albums </Link></div>
                    <div><Link to={'/posts'}> Posts </Link></div>
                </div>
            </div>
    );
}