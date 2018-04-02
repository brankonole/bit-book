import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

import FeedItemVideo from "./FeedItemVideo";
import FeedItemImage from "./FeedItemImage";
import FeedItemText from "./FeedItemText";
import Loading from '../../shared/Loading';

import "./feed-css/FeedItem.css"
// import 'FeedItem.css'

class FeedItem extends Component {
    constructor(props) {
        super(props)
    }

    handlePageClick = (posts) => {
        let selected = posts.selected;
        let offset = Math.ceil(selected * 10);
    
        this.props.pagination(offset);
      };
    

    render() {
        return (
            (this.props.posts.length == 0) ? <Loading /> :
                <div>
                    {this.props.posts.map((element, index) => {

                        if (element.type === "video") {
                            return (<Link to={`/feed/video/${element.id}`}>
                                <FeedItemVideo src={element.videoUrl} commentsNum={element.commentsNum} />
                            </Link>
                            )
                        } else if (element.type === "image") {
                            return (<Link to={`/feed/image/${element.id}`}><FeedItemImage src={element.imageUrl} commentsNum={element.commentsNum} /> </Link>)
                        } else {
                            return (<Link to={`/feed/text/${element.id}`}><FeedItemText text={element.text} commentsNum={element.commentsNum} /> </Link>)
                        }
                        return (
                            <div key={index}>{element.element}</div>
                        )
                    })}

                    <ReactPaginate previousLabel={"previous"}
                        nextLabel={"next"}
                        pageCount={Math.ceil(this.props.pages / 10)}
                        marginPagesDisplayed={10}
                        pageRangeDisplayed={10}
                        onPageChange={this.handlePageClick}/>
                </div>
        )}}

export default FeedItem;