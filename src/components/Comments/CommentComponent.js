export default function CommentComponent({comment}) {
    return (
        <div>
            <h5>{comment.name}</h5>
            {comment.body}
        </div>
    );
}