import React from 'react';

import "./css/AddComment.css";
import { dataService } from "../../../services/DateService"

const AddComment = props => {

    console.log(props);
    const data = 
        {
            
            "dateCreated": "2018-03-30T17:02:38.037Z",
            "body": "string",
            "postId": 1285,
            "authorName": "string",
            "authorId": 391
          }
    
    
    return (
    <div className="container">
        <div className="AddComment-row row">
        <label className="col s8 m8 l8 "><input type="text" placeholder="Add your comment" required/></label>
        <button className="btn blue col s4 m4 l4 " onClick={() => {dataService.sendComment("dsf", 1286)}}type="submit">Send</button>
        </div>
    </div>
  )
}

export default AddComment;