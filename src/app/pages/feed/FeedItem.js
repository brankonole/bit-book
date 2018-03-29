import React, {Component} from 'react';
import {Link} from "react-router-dom";

import FeedItemVideo from "./FeedItemVideo";
import FeedItemImage from "./FeedItemImage";
import FeedItemText from "./FeedItemText";
import "./feed-css/FeedItem.css"


// import 'FeedItem.css'

const FeedItem = (props) => {
    return (
       (props.posts.length == 0)? <h1>...Loading</h1> : 

            props.posts.map(element => {
                
                if (element.type === "video") {
                    return (  <Link to={`/feed/video/${element.id}`}>
                    <FeedItemVideo src={element.videoUrl} commentsNum={element.commentsNum}/>
                    </Link>
                )
                }  else if (element.type === "image") {
                    return  (<Link to={`/feed/image/${element.id}`}><FeedItemImage src={element.imageUrl} commentsNum={element.commentsNum} /> </Link>)
                }  else {
                    return  (<Link to={`/feed/text/${element.id}`}><FeedItemText text={element.text} commentsNum={element.commentsNum}/> </Link>)
                } 
            })

    )
}


export default FeedItem;