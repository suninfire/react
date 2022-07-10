export default function CommentComponent({comment}) {
    return (
        <div>
            {comment.name} - {comment.body}
            <hr/>
        </div>
    );
}