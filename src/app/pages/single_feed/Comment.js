import React from 'react';

import "./css/Comment.css"

const Comment = props => {
  console.log(props.content);

  return (
    <div className="Comment-div">
      <div className="col s12 m7 container">
        <div className="card horizontal">
          <div className="Comment-second-div">
            <img className="Comment-image" src="https://lorempixel.com/100/190/nature/6" />
            <div className="Comment-name">{props.content.authorName}</div>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="Comment-paragraph" >{props.content.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;