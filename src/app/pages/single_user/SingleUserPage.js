import React, { Component } from "react";

import { dataService } from "../../../services/DataService";
import Loading from "../../shared/Loading"


class SingleUserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
         myProfileData: []
        }
    }

    id = this.props.match.params.id

         componentDidMount() {
             dataService.fetchingUser(this.id)
             .then(res => {
                 console.log(res);
                 
                 this.setState({
                     myProfileData: res
                 })
                 
             })
         }
         
         render() {
             
             return (
                 (this.state.myProfileData.length === 0)? <Loading/> : 
                 (<div className="col s2 container Profile">
            <img id="Profile-img" src={this.state.myProfileData.avatarUrl} alt="" className="circle responsive-img" />
            <h3>{this.state.myProfileData.name}</h3>
            <p>{this.state.myProfileData.about}</p>
            <div className="Profile-Two-counters center">
                <div className="Profile-one left"><div className='Profile-c'>C</div><p>{this.state.myProfileData.postsCount}</p></div>
                <div className="Profile-one"><div className='Profile-c'>C</div><p>{this.state.myProfileData.commentsCount}</p></div>
            </div>
        </div>)
        )
    }
}

export default SingleUserPage
