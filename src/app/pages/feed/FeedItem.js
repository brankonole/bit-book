import React, { Component } from 'react';

import FeedItemVideo from "./FeedItemVideo";
import FeedItemImage from "./FeedItemImage";
import FeedItemText from "./FeedItemText";
import Loading from '../../shared/Loading';

import "./feed-css/FeedItem.css"
// import 'FeedItem.css'

const FeedItem = (props) => {
    return (
        (props.posts.length == 0) ? <Loading /> :

            props.posts.map(element => {
                if (element.type === "video") {
                    return (<FeedItemVideo src={element.videoUrl} commentsNum={element.commentsNum} id={element.id} deleteSinglePost={props.deleteSinglePost} />
                    )
                } else if (element.type === "image") {
                    return (<FeedItemImage src={element.imageUrl} commentsNum={element.commentsNum} id={element.id} deleteSinglePost={props.deleteSinglePost} /> )
                } else {
                    return (<FeedItemText text={element.text} commentsNum={element.commentsNum} id={element.id} deleteSinglePost={props.deleteSinglePost}/>)
                }
            })
    )
}

export default FeedItem;