import React, { Component } from "react"
import "./css/Profile.css"

import EditProfile from "./EditProfile"
import UpdateProfile from "./UpdateProfile"

const Profile = props => {
    return (
        
        <div class="col s2 Profile">
        <img id="Profile-img" src="http://www.babies-cute.com/wp-content/uploads/2012/05/upload-cute-baby-picture-810x425.jpg" alt="" class="circle responsive-img"/> 
        <h3>Name Surname</h3>
        <EditProfile />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <UpdateProfile />
      </div>
    )
}

export default Profile;