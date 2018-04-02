import React from "react";
import { Link } from "react-router-dom";

import "./feed-css/FeedItemVideo.css"

const FeedItemVideo = props => {
    //Transformacija linka iz baze u embed video za iframe
    let videoLink = props.src;
    var array = videoLink.split("watch?v=");
    var src = array[0] + "embed/" + array[1]

    return (
        <div className="center">
            <div className="col s12 m12">
                <div className="card horizontal hoverable">
                    <div className="card-content left-align">
                        <Link to={`/feed/video/${props.id}`}>
                            <iframe width="100%" height="315" src={src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="FeedItemVideo-content"></iframe>
                        </Link>
                        <div className="FeedItem-inline">
                            <p>Video post</p>
                            <div className='FeedItemVideo-right'>
                                <p>{props.commentsNum} Comment</p>
                                <i className="material-icons dp48 FeedItemVideo-delete" onClick={() => { props.deleteSinglePost(props.id) }}>delete_forever</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default FeedItemVideo;