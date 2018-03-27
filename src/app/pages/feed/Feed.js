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
        <NewPost/>
        <DropDown/>
        <div>Fantastic 4</div>
        </React.Fragment>
    )
}
}


export default Feed;