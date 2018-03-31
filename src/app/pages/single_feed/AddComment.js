import React, { Component } from 'react';

import "./css/AddComment.css";
import { dataService } from "../../../services/DateService"

const numberOfCharacters = 50;

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentInput: "",
            warning: ""
        }

    }

    // function that catches text input from comment 

    commentInput = (e) => {
        this.setState({
            commentInput: e.target.value,
            /// when I start typing, I want warning to disappear 
            warning: ''
        })
        /// warning if number of characters exceeds limit
        if (e.target.value.length === numberOfCharacters) {
            this.setState({
                warning: `You can put only ${numberOfCharacters} characters!!!`
            })
        }
    }

    /// add comments

    sendComments = (e) => {
        /// warning if there are not character input 
        if (this.state.commentInput == "") {
            return (this.setState({ warning: "You must put some text in comment!!!!" }))
            /// if everything is all right 
        } else {
            return (this.props.sendComments(this.state.commentInput).then(() => this.setState({ commentInput: "" })))
        }
    }


    render() {
        return (
            <div className="container">
                <div className="AddComment-row row">
                    <label className="col s8 m8 l8 ">
                        <input type="text" value={this.state.commentInput} onChange={this.commentInput} maxlength={numberOfCharacters} placeholder="Add your comment" required />
                    </label>
                    <button className="btn blue col s4 m4 l4 " onClick={this.sendComments} type="submit">Send</button>
                </div>
                <p class="red">{this.state.warning}</p>
            </div>
        )
    }
}


export default AddComment;