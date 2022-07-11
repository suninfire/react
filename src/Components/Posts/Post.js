import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post = this.props.item;
    }

    render() {
        return (<div>
            <h4>{this.post.id} - {this.post.title}</h4>
            <p5>{this.post.body}</p5>
        </div>);
    }

}

export default Post;