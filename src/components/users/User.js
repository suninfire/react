// export default function User(props) { деструктуризація
export default function User( {item,chose} ) {

    return (
        <div>
            {item.id} - {item.name}
            <button onClick={ () => {
                chose(item);
                // console.log('click',item.id)
            }}>details
            </button>
        </div>
    );
}