import React from "react";

// import "./css/UpdateProfile.css";

const UpdateProfile = (props) => {
  return (
    <div className="UpdateProfile">
      <h4>Update profile</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <img className="col s3 UpdateProfile-img" src="http://www.babies-cute.com/wp-content/uploads/2012/05/upload-cute-baby-picture-810x425.jpg" />
            <div className="input-field col s6">
              <label htmlFor="input_text"></label>
              <input id="input_text" type="text" data-length="10" required placeholder="Full Name" />
            </div>
          </div>
          <a className="waves-effect waves-light btn UpdateProfile-button">Upload</a>
          <div className="row">
            <div className="input-field col s12">
              <label></label>
              <input id="input_text" type="text" data-length="10" required placeholder="User description and  all text that describes user" />
            </div>
            <div className="UpdateProfile-two-buttons">
              <a className="waves-effect waves-light btn UpdateProfile-button hover" onClick={props.closeEditWindow}>Close</a>
              <a className="waves-effect waves-light btn UpdateProfile-button" /*onClick={props.updateWindow()}*/>Update</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile