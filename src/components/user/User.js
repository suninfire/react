export default function User({item,getUserId}) {
    return (
        <div>
            <h2>{item.id}.{item.name}
                <button onClick={() => {
                    console.log(item.id);
                   getUserId(item.id);
                }}>show posts</button></h2>

        </div>
    );
}