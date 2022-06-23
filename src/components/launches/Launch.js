export default function Launch( {item,img} ) {


    return (
        <div>
            <h3>{item.mission_name}  ({item.launch_year})</h3>
           <img src={img}/>
        </div>
    );
}