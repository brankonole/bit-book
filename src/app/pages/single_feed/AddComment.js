import React, { Component } from 'react';

import "./css/AddComment.css";
import { dataService } from "../../../services/DateService"

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentInput: ""
        }
    }

    // function that catches text input from comment 

    commentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    }

    /// add commments

    sendComments = (e) => {
        if (this.state.commentInput == "") {
            return 
        } else {this.props.sendComments(this.state.commentInput).then(() => this.setState({commentInput: ""}))}
    }

    render() {
        return (
            <div className="container">
                <div className="AddComment-row row">
                    <label className="col s8 m8 l8 ">
                        <input type="text" value={this.state.commentInput} onChange={this.commentInput} placeholder="Add your comment" required />
                    </label>
                    <button className="btn blue col s4 m4 l4 " onClick={this.sendComments} type="submit">Send</button>
                </div>
            </div>
        )
    }
}


export default AddComment;