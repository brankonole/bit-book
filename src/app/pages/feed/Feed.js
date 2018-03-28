import React, { Component } from 'react';

import Button from './Button';
import DropDown from './DropDown';
import FeedItem from './FeedItem';
import { dataService } from '../../../services/DateService';

import './Feed.css';

class Feed extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        dataService.fetchPosts()
            .then(res =>{
                console.log(res);
            })
    }
 
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className='row'>
                        <div className='main col s7 offset-s2'></div>
                        <aside className='Feed-aside col s3'>
                            <Button />
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