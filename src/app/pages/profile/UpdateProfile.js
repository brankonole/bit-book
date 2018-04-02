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
      updatedMyProfileData: {}
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

  updateMyProfile = () => {
    let data = {
      name: this.state.fullNameInputValue,
      avatarUrl: this.state.pictureInputValue,
      about: this.state.descriptionInputValue,
      aboutShort: this.state.descriptionInputValue,
      email: 'dyfvsidfv@sbvos.com'
    }

    dataService.fetchUpdateMyProfile(data)
      .then(res => {
        // console.log(res);
        this.setState({
          updatedMyProfileData: res
        })
        this.props.onRequestClose()
        this.props.refreshMyProfile()
      })
  }

  render() {
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
            <div className="row UpdateProfile-upload-wrapper">
              {/* <a className="waves-effect waves-light btn UpdateProfile-button col s3">Upload</a> */}
              <div className="input-field col s12">
                <label htmlFor="input_text"></label>
                <input className='UpdateProfile-upload-input' type="text" id="input_text" data-length="10" required="" placeholder="Insert new profile picture" onChange={this.updatePictureInputValue}/>
              </div>
            </div>
            
            {/* !!!This is for upload from disc  */}
            
            {/*<div className='file-field input-field'>
              <div className="btn">
                <span>Upload</span>
                <input type="file" onChange={this.updatePictureInputValue} />
              </div>
              <div className="file-path-wrapper UpdateProdile-input-file">
                <input className="file-path validate" type="text" />
              </div>
            </div> */}
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