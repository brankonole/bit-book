import React from "react";

const FeedItemText = props => {

    console.log(props);
    
    return (
        <div className="row container center">
        <div className="col s12 m12">
            <div className="card horizontal hoverable">
                <div className="card-content">
                    <p>{props.text}</p> 
                    <div className="FeedItem-inline">
                        <p className="left">Text post</p>
                        <p className="right"> {props.commentsNum}  Comment</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default FeedItemText;