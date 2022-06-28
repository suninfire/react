export default function User({item,getUserId}) {
    return (
        <div>
            <h2>{item.id}.{item.name}
                <button onClick={() => {
                    getUserId(item.id);
                    console.log(item.id)
                }}>show posts</button></h2>

        </div>
    );
}