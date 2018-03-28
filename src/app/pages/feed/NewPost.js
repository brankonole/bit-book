import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './feed-css/NewPost.css';

class NewPost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        // <a className="btn-floating btn-large waves-effect waves-light-green accent-3 new-post-css hoverable"><i className="material-icons">add</i></Link>
                <div>
                    <div className="fixed-action-btn vertical NewPost-css">
                        <Link to={`/feed`} className="btn-floating btn-large waves-effect waves-light-green accent-3 hoverable"><i className="material-icons">add</i></Link>
                        <ul className="NewPost-css">
                            <li><Link to={`/feed`} className="btn-floating red"><i className="material-icons">featured_video</i></Link></li>
                            <li><Link to={`/feed`} className="btn-floating green"><i className="material-icons">camera</i></Link></li>
                            <li><Link to={`/feed`} className="btn-floating blue"><i className="material-icons">chat</i></Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default NewPost;