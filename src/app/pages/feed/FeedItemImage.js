import React from "react";

import "./feed-css/FeedItemImage.css"

const FeedItemImage = props => {
    
    return (
        <div className="row container center">
        <div className="col s12 m12">
            <div className="card horizontal hoverable">
                <div className="card-content ">
                    <img src={props.src} alt="" srcSet="" className="FeedItemImage-img"/>
                    <div className="FeedItem-inline-img FeedItem-inline">
                        <p >Image  post</p> 
                        <p> {props.commentsNum} Comment    </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeedItemImage;