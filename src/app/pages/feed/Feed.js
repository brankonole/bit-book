import React, { Component } from 'react';

import DropDown from './DropDown';
import FeedItem from './FeedItem';
import { dataService } from '../../../services/DataService';
import AddDifferentPosts from './AddDifferentPosts';


import './feed-css/Feed.css';

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            filteredPosts: []
        }
    }

    componentDidMount() {
        console.log('mounted')
        this.getPosts();
    }

    getPosts = () => {
        console.log('called')
        dataService.fetchPosts()
            .then(res => {
                console.log("RESULT", res)
                this.setState({
                    posts: res,
                    filteredPosts: res
                })
            })
    }

    //// filtering posts by type
    filter = (type) => {
        if (this.state.posts.length !== 0) {
            const filter = this.state.posts.filter(element => element.type == type)
            this.setState({
                filteredPosts: filter
            })
        }
    }

    /// antifiltering posts
    antifilter = () => {
        this.setState({
            filteredPosts: this.state.posts
        })
    }

    deleteSinglePost = (id) => {
        dataService.fetchDeleteSinglePost(id)
            .then(res => {
                this.getPosts();
            })
    }

    render() {
        console.log(this.state.filteredPosts)
        return (
            <div className="container">
                <div className='row Feed-container'>
                    <div className='main col s9'>
                        <FeedItem posts={this.state.filteredPosts} deleteSinglePost={this.deleteSinglePost}/>
                    </div>
                    <aside className='Feed-aside col s3'>
                        {/* <NewPost /> */}
                        <DropDown filter={this.filter} antifilter={this.antifilter} />
                        <AddDifferentPosts refreshData={this.getPosts} />
                    </aside>
                </div>
            </div>
        )
    }
}


export default Feed;