import React, {Component} from "react"

import "./css/UpdateProfile.css"

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
 
    }
    render() {
        return (
            <div className="UpdateProfile">
            <h4>Update profile</h4>  
            <div class="row">
            <form class="col s12">
              <div class="row">
              <img className="col s3 UpdateProfile-img" src="http://www.babies-cute.com/wp-content/uploads/2012/05/upload-cute-baby-picture-810x425.jpg" />
                <div class="input-field col s6">
                  <label for="input_text"></label>
                  <input id="input_text" type="text" data-length="10"  required placeholder="Full Name" />
                </div>
              </div>
                  <a class="waves-effect waves-light btn UpdateProfile-button">Upload</a>
              <div class="row">
                <div class="input-field col s12">
                 <label></label>
                <input id="input_text" type="text" data-length="10"  required placeholder="User description and  all text that describes user" />
                </div>
                <div className="UpdateProfile-two-buttons">
                  <a class="waves-effect waves-light btn UpdateProfile-button  hover">Close</a>
                  <a class="waves-effect waves-light btn UpdateProfile-button">Update</a>
                </div>
              </div>
            </form>
          </div>
            </div>
        )
    }
}

export default UpdateProfile