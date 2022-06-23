import {useEffect, useState} from "react";
import Launch from "../launches/Launch";



export default function Launches(effect, deps){

    const [launches,setLaunches] = useState([]);


    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setLaunches(value.filter(value => value.launch_year !== '2020' ));
            });
    },[]);





    return (
        <div>

            <h2>Launches</h2>
            {launches.map((launch,index) =>
                <Launch
                    key={index}
                    item={launch}
                    img={launch.links.mission_patch_small}
                />  )}



        </div>
    );
}