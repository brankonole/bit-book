import React from 'react';

const Text= props => {
     
    return (
        <div className="row container center">
        <div className="col s12 m12">
            <div className="card horizontal hoverable">
                <div className="card-content">
                    <p>{props.text}</p> 
                    <div className="FeedItem-inline">
                        <p>Text post</p>
                        <p>{props.commentsNum}  Comment</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    )
};

export default Text;