import React, { Component } from 'react';

import "./css/Comment.css"
import { dataService } from "../../../services/DataService"
import User from "../../../entities/User"

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.content.authorId,
      avatarUrl: null
    }
  }

  componentDidMount() {
    dataService.fetchingUser(this.state.userId)
      .then(response => {
        this.setState({
          avatarUrl: response.avatarUrl
        })
      }
      )
  }

  render() {
    return (
      <div className="Comment-div">
        <div className="col s12 m7 container">
          <div className="card horizontal">
            <div className="Comment-second-div">
              <img className="Comment-image" src={this.state.avatarUrl} />
              <div className="Comment-name">{this.props.content.authorName}</div>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="Comment-paragraph" >{this.props.content.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;