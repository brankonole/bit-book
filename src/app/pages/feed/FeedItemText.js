import React from "react";
import { Link } from "react-router-dom";

import './feed-css/FeedItemText.css';

const FeedItemText = props => {
    return (
        <div className="center">
            <div className="col s12 m12">
                <div className="card horizontal hoverable">
                    <div className="card-content">
                        <Link to={`/feed/text/${props.id}`} className='FeedItemText-content'><p className='FeedItemText-length'>{props.text}</p></Link>
                        <div className="FeedItem-inline">
                            <p>Text post</p>
                            <div className='FeedItemText-right'>
                                <p>{props.commentsNum}  Comment</p>
                                <i className="material-icons dp48 FeedItemText-delete" onClick={() => {props.deleteSinglePost(props.id)}}>delete_forever</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedItemText;