export default function Posts({comments}) {

    return (
        <div>

            <h1>User posts</h1>
            {
                comments.map(value => <div><h4>{value.name}</h4> {value.body}</div>)
            }
        </div>
    );
}