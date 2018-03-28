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

       


        <Link to="singleFeed">
            {props.posts.map(element => {
                
                if (element.type === "video") {
                    return  <FeedItemVideo src={element.videoUrl} commentsNum={element.commentsNum}/>
                }  else if (element.type === "image") {
                    return  <FeedItemImage src={element.imageUrl} commentsNum={element.commentsNum} />
                }  else {
                    return  <FeedItemText text={element.text} commentsNum={element.commentsNum}/>
                } 
            })}
           
           
           
           
        </Link>
    )
}


export default FeedItem;