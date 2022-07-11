import {Component} from 'react';

import Comment from "./Comment";
import {CommentsApiService} from "../../Services";

class Comments extends Component {

    state = {comments: []};

    constructor(props) {
        super(props);
        this.commentsApiService = new CommentsApiService();

        this.commentsApiService.getComments().then(value => this.setState({comments: value}));
    }

    render() {
        return (<div>
            <h2>COMMENTS</h2>
            {this.state.comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>);
    }
}

export default Comments;