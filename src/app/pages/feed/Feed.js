import React, { Component } from 'react';

import NewPost from './NewPost';
import DropDown from './DropDown';
import FeedItem from './FeedItem';

import './Feed.css';

class Feed extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className='row'>
                        <div className='main col s7 offset-s2'></div>
                        <aside className='Feed-aside col s3'>
                            <NewPost />
                            <DropDown />
                        </aside>
                            <FeedItem/>
                    </div>
                    <div>Fantastic 4</div>
                </div>
            </React.Fragment>
        )
    }
}


export default Feed;