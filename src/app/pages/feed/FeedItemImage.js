import React from "react";
import { Link } from "react-router-dom";

import { dataService } from '../../../services/DataService';

import "./feed-css/FeedItemImage.css"

const FeedItemImage = props => {
    return (
        <div className="center">
            <div className="col s12 m12">
                <div className="card horizontal hoverable">
                    <div className="card-content ">
                        <Link to={`/feed/image/${props.id}`}><img src={props.src} alt="" srcSet="" className="FeedItemImage-content" /></Link>
                        <div className="FeedItem-inline-img FeedItem-inline">
                            <p>Image post</p>
                            <div className='FeedItemImage-right'>
                                <p>{props.commentsNum} Comment</p>
                                <i className="material-icons dp48 FeedItemImage-delete" onClick={() => {props.deleteSinglePost(props.id)}}>delete_forever</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedItemImage;