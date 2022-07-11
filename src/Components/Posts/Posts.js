import {Component} from 'react';

import {PostsApiService} from "../../Services";
import Post from "./Post";

class Posts extends Component {

    state = {posts: []};

    constructor(props) {
        super(props);
        this.postsApiService = new PostsApiService();

        this.postsApiService.getPosts().then(value => this.setState({posts: value}));
    }

    render() {
        return (<div>
            <h2>POSTS</h2>
            {this.state.posts.map(value => <Post key={value.id} item={value}></Post>)}
        </div>);
    }
}

export default Posts;