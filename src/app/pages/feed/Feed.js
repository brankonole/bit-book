import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import NewPost from './NewPost';
import DropDown from './DropDown';
import FeedItem from './FeedItem';
import { dataService } from '../../../services/DateService';

import './Feed.css';

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : []
        }

    }

    componentDidMount() {
        dataService.fetchPosts()
            .then(res =>{
                
                this.setState({
                    posts : res
                })
            })
    }
    
    render() {

        return (

        
     <div className="container">
                    <div className='row'>
                        <div className='main col s7 offset-s2'></div>
                        <aside className='Feed-aside col s3'>
                            <NewPost />
                            <DropDown />
                        </aside>
                            <FeedItem posts={this.state.posts}/>
                    </div>
                    <div>Fantastic 4</div>
                </div>

         
        )
    }
}


export default Feed;