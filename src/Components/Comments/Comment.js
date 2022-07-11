import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.item;
    }

    render() {
        return (<div>
            <h4>{this.comment.id} (post{this.comment.postId}) - {this.comment.name}</h4>
            <p5>{this.comment.body}</p5>
        </div>);
    }

}

export default Comment;