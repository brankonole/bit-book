import React from 'react';

// import 'FeedItem.css'

const FeedItem = () => {
    return (
        <React.Fragment>
            <div className="row container center">
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <div className="card-content left-align">
                            <iframe width="530" height="315" src="https://www.youtube.com/embed/AZ1pHmWhIuY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <div className="FeedItem-inline">
                                <p>Video post</p>
                                <p className="right">Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container center">
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <div className="card-content left-align">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ab, earum esse voluptatem optio atque nihil reiciendis, sapiente corporis totam possimus consectetur, minus necessitatibus amet odit dolorum consequatur doloribus ex.</p>
                            <div className="FeedItem-inline">
                                <p>Video post</p>
                                <p className="right">Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container center">
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <div className="card-content left-align">
                            <img src="" alt="" srcSet="" />
                            <div className="FeedItem-inline">
                                <p>Video post</p>
                                <p className="right">Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FeedItem;