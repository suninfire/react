import {useDispatch} from "react-redux";

import {carActions} from "../../store";
import "./carboxStyle.css"

export default function Car({car}) {
    const {id,model,price,year} = car;

    const dispatch = useDispatch();

    return (
        <div className={'carbox'}>
            <h5>id: {id}</h5>
            <h5>model: {model}</h5>
            <h5>price: {price} $</h5>
            <h5>year: {year}</h5>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.del({id}))}>delete</button>
        </div>
    );
}