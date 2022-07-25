import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import "./carsboxStyle.css"
import Car from "../Car/Car";
import {carActions} from "../../store";

export default function Cars() {
        const {cars} = useSelector(state => state.cars);
        const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div className={'carsbox'}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};