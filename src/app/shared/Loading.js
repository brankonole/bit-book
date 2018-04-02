import React from "react";

import './Loading.css';

const Loading = props => {
    return (
        <div className='Loading-wrapper'>
            <div className="Loading-spinner spinner">
                <div className="Loading-rect rect1"></div>
                <div className="Loading-rect rect2"></div>
                <div className="Loading-rect rect3"></div>
                <div className="Loading-rect rect4"></div>
                <div className="Loading-rect rect5"></div>
            </div>
        </div>
    )
}

export default Loading;