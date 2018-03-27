import React, { Component } from 'react';

import './feed-css/NewPost.css';

class NewPost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    return (
        <a className="btn-floating btn-large waves-effect waves-light-green accent-3 new-post-css hoverable"><i className="material-icons">add</i></a>
    )
    }
}

export default NewPost;