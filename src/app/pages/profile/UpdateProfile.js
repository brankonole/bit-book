import React, { Component } from "react";
import { dataService } from '../../../services/DataService';

import "./css/UpdateProfile.css";

class UpdateProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullNameInputValue: '',
      pictureInputValue: '',
      descriptionInputValue: '',
      updatedMyProfileData: {},
    }

  }
  //update input values in my profile
  updateFullNameInputValue = e => {
    
    this.setState({
      fullNameInputValue: e.target.value
    });
    
  }

  updatePictureInputValue = e => {
    this.setState({
      pictureInputValue: e.target.value
    });
  }

  updateDescriptionInputValue = e => {
    this.setState({
      descriptionInputValue: e.target.value
    });
  }

  updateMyProfile = () =>{
    let data = {
        name: this.state.fullNameInputValue,
        avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/0a/ae/0a/0aae0a7e99bcf336d582ed82f9a7a23e.jpg',
        about: this.state.descriptionInputValue,
        aboutShort: 'sdfsd',
        email: 'dyfvsidfv@sbvos.com'
    }

    // let data = {
    //     name: name,
    //     avatarUrl: avatar,
    //     about: about
    // }

    console.log(this.state.fullNameInputValue);
    
    dataService.fetchUpdateMyProfile(data)
        .then(res => {
            console.log(res);
            this.setState({
                updatedMyProfileData: res
            })
        })
}
  
  render() {
    console.log(this.state.fullNameInputValue);
      return (
        <div className="UpdateProfile">
          <h4>Update profile</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <img className="col s3 UpdateProfile-img" src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-md.png" />
                <div className="input-field col s6">
                  <label htmlFor="input_text"></label>
                  <input id="input_text" type="text" data-length="10" required placeholder="Full Name" onChange={this.updateFullNameInputValue} />
                </div>
              </div>
              <div className='file-field input-field'>
                <div className="btn">
                  <span>Upload</span>
                  <input type="file" />
                </div>
                <div className="file-path-wrapper UpdateProdile-input-file">
                  <input className="file-path validate" type="text" onChange={this.updatePictureInputValue} />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <label></label>
                  <input id="input_text" type="text" data-length="10" required placeholder="User description and  all text that describes user" onChange={this.updateDescriptionInputValue} />
                </div>
                <div className="UpdateProfile-two-buttons">
                  <a className="waves-effect waves-light btn UpdateProfile-button hover" onClick={this.props.closeEditWindow}>Close</a>
                  <a className="waves-effect waves-light btn UpdateProfile-button" onClick={this.updateMyProfile}>Update</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    }
}

export default UpdateProfile