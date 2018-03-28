import React, {Component} from "react"
import {Link} from "react-router-dom"

class EditProfile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Link to="/profile">Edit profile</Link>
        )
    }
}

export default EditProfile;