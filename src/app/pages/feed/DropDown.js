import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './feed-css/DropDown.css'

class DropDown extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="DropDownMain-css">
                <Link to={`/feed`} className='dropdown-button btn DropDown-css' data-activates='dropdown1'>All Posts</Link>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><Link to={`/feed`}>Option</Link></li>
                    <li><Link to={`/feed`}>Videos</Link></li>
                    <li><Link to={`/feed`}>images</Link></li>
                    <li><Link to={`/feed`}>Text</Link></li>
                </ul>
            </div>
        )
    }
}
export default DropDown;