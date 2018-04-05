import React, { Component } from "react";
import { Link } from "react-router-dom";

// import EditProfile from "./EditProfile";
import { dataService } from '../../../services/DataService';
import UpdateProfile from "./UpdateProfile";
import Modal from 'react-modal';
import Loading from '../../shared/Loading';

import "./css/Profile.css";

const customStyles = {
    content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%'
    }
};

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myProfileData: {},
            isOpen: false
        }
    }

    myProfile = () => {
        dataService.fetchMyProfile()
            .then(res => {
                
                this.setState({
                    myProfileData: res
                })
            })
    }
    componentDidMount() {
        this.myProfile();
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    renderProfile() {
        console.log(this.state.myProfileData);
        
        
        return <div className="col s2 container Profile">
            <img id="Profile-img" src={this.state.myProfileData.avatarUrl} alt="" className="circle responsive-img" />
            <h3>{this.state.myProfileData.name}</h3>
            <Link to={`/profile`} onClick={this.openModal}>Edit profile</Link>
            {/* <EditProfile /> */}
            <p>{this.state.myProfileData.about}</p>

            <Modal style={customStyles} isOpen={this.state.isOpen} onRequestClose={this.closeModal} contentLabel="Example Modal">
                <UpdateProfile refreshMyProfile={this.myProfile} onRequestClose={this.closeModal} closeEditWindow={this.closeModal} />
            </Modal>

            <div className="Profile-Two-counters center">
                <div className="Profile-one left"><div className='Profile-c'>P</div><p>{this.state.myProfileData.postsCount}</p></div>
                <div className="Profile-one"><div className='Profile-c'>C</div><p>{this.state.myProfileData.commentsCount}</p></div>
            </div>
        </div>
    }

    render() {
        return (JSON.stringify(this.state.myProfileData) === '{}') ? <Loading /> : this.renderProfile();
    }
}

export default Profile;