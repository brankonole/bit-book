import React, {Component} from "react"

import "./css/UpdateProfile.css"

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
 
    }
    render() {
        return (
            <div className="UpdateProfile">
            <div class="row">
            <form class="col s12">
              <div class="row">
              <img className="col s3 UpdateProfile-img" src="http://www.babies-cute.com/wp-content/uploads/2012/05/upload-cute-baby-picture-810x425.jpg" />
                <div class="input-field col s6">
                  <input id="input_text" type="text" data-length="10"/>
                  <label for="input_text">Name</label>
                </div>
              </div>
                  <a class="waves-effect waves-light btn UpdateProfile-button">button</a>
              <div class="row">
                <div class="input-field col s12">
                <input id="input_text" type="text" data-length="10"/>
                  <label>Error goes here</label>
                </div>
                <div className="UpdateProfile-two-buttons">
                  <a class="waves-effect waves-light btn UpdateProfile-button">button</a>
                  <a class="waves-effect waves-light btn UpdateProfile-button">button</a>
                </div>
              </div>
            </form>
          </div>
            </div>
        )
    }
}

export default UpdateProfile