import React, {Component} from 'react';

import './App.css'
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

class App extends Component {
    render() {
        return (
            <div className={'main'}>
              <div className={'box'}><Posts/></div>
              <div className={'box'}><Comments/></div>
            </div>
        );
    }
}

export default App;


