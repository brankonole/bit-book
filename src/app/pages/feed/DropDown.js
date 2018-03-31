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
            <li className='dropdown-button btn DropDown-css' data-activates='dropdown1'>ALL POSTS</li>
                <ul id='dropdown1' className='dropdown-content'>
                    <li onClick={() => this.props.filter('video')}>Video</li>
                    <li onClick={() => this.props.filter('image')}>Images</li>
                    <li onClick={() => this.props.filter('text')}>Text</li>
                    <li onClick={this.props.antifilter}>All Posts</li>
                </ul>
            </div>
        )
    }
}
export default DropDown;