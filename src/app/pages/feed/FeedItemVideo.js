import React from "react"

import "./feed-css/FeedItemVideo.css"

    const FeedItemVideo = props => {
    

        //Transformacija linka iz baze u embed video za iframe
        let videoLink = props.src;
        var array = videoLink.split("watch?v=");
        var src = array[0] + "embed/" + array[1]
      
        return (
            <div className="row container center">
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <div className="card-content left-align">
                            <iframe  width="100%" height="315" src={src}frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <div className="FeedItem-inline">
                                <p >Video post </p>
                                <p >  {props.commentsNum} Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

            
    }


    export default FeedItemVideo;