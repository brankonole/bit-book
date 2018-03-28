import React, { Component } from 'react';

import NewPost from './NewPost';
import DropDown from './DropDown';

class Feed extends Component {
    constructor(props) {
        super(props)

    }
    render() {
    return (
        <React.Fragment>
            <div className="container">
            <NewPost/>
            <DropDown/>
            <div>Fantastic 4</div>
            </div>
        </React.Fragment>
    )
}
}


export default Feed;