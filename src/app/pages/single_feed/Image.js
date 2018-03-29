import React from 'react';

const Image = props => {
  
    return (
        
        <div className="row container center">
        <div className="col s12 m12">
            <div className="card horizontal hoverable">
                <div className="card-content ">
                    <img alt="" src={props.imageUrl} srcSet="" className="FeedItemImage-img"/>
                    <div className="FeedItem-inline-img FeedItem-inline">
                        <p >Image  post</p> 
                        <p> {props.commentsNum} Comment </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Image;