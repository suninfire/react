export default function TodoComponent({todo}) {
    return (
        <div>

            <h4>{todo.id} - {todo.title}</h4>

        </div>
    );
}