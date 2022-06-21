import './Character.css'

// task1
// function Character(props) {
//     let {name,text,picture} = props;
//
//     return (<div>
//         <h2>{name}</h2>
//         <p>{text}</p>
//         <img src={picture} className={'image'} alt=""/>
//     </div>)
// }

// task2
function Character(props) {
    let {id,name,status,species,gender,image} = props;

    return (<div>
        <h2>{id}-{name}</h2>
        <p>status-{status}</p>
        <p>species-{species}</p>
        <p>gender-{gender}</p>
        <img src={image} className={'picture'} alt=""/>
    </div>)
}

export default Character;