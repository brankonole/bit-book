import React from "react";

import Comment from "./Comment"



const CommentList = props => {
    console.log(props.comments);
    
    return (
        props.comments.length === 0? <p>There are no comments yet!</p> : props.comments.map(element => {
            console.log(element.props)
            return (
                
                <Comment content={element}/>
            )
        })
        
    )
}

export default CommentList;