import React from 'react';

import "./css/AddComment.css"

const AddComment = props => {
    return (
    <div className="container">
        <div className="AddComment-row row">
        <label className="col s8 m8 l8 "><input type="text" placeholder="Add your comment" required/></label>
        <button className="btn blue col s4 m4 l4 " type="submit">Send</button>
        </div>
    </div>
  )
}

export default AddComment;