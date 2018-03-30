import React from "react";

import Comment from "./Comment"
import NoComments from "./NoComments"

const CommentList = props => {
    
    return (
        props.comments.length === 0? <NoComments/>
     : props.comments.map(element => {
            return (
                <Comment content={element}/>
            )
        })
        
    )
}

export default CommentList;