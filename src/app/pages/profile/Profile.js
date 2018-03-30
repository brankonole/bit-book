import React, { Component } from "react";
import { Link } from "react-router-dom";

// import EditProfile from "./EditProfile";
import { dataService } from '../../../services/DataService';
import UpdateProfile from "./UpdateProfile";
import Modal from 'react-modal';

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
            // updatedMyProfileData: {}
            // fullNameInputValue: '',
            // pictureInputValue: '',
            // descriptionInputValue: '',
        }
    }

    myProfile() {
        dataService.fetchMyProfile()
            .then(res => {
                console.log(res);
                this.setState({
                    myProfileData: res
                })
            }) 
    }
    ///changing state
        // changingState = () => {
        //     this.setState({
        //         scrum: !this.state.scrum
        //     })
        // }


    // //update input values in my profile
    // updateFullNameInputValue = e => {
    //     this.setState({
    //         fullNameInputValue: e.target.value
    //     });
    // }
    
    // updatePictureInputValue = e => {
    //     this.setState({
    //         pictureInputValue: e.target.value
    //     });
    // }

    // updateDescriptionInputValue = e => {
    //     this.setState({
    //         descriptionInputValue: e.target.value
    //     });
    // }

    // updateMyProfile() {
    //     let data = {
    //         name: this.state.fullNameInputValue,
    //         avatarUrl: this.state.pictureInputValue,
    //         about: this.state.descriptionInputValue
    //     }

    //     // let data = {
    //     //     name: name,
    //     //     avatarUrl: avatar,
    //     //     about: about
    //     // }

    //     console.log(this.state.fullNameInputValue);
        
    //     dataService.fetchUpdateMyProfile(data)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 updatedMyProfileData: res
    //             })
    //         })
    // }

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

    render() {
        console.log(this.state.scrum);
        if (this.state.myProfileData.length === 0 ) {
            return <h2>Loading....</h2>
        } else {
            return (
                <div className="col s2 container Profile">
                    <img id="Profile-img" src={this.state.myProfileData.avatarUrl} alt="" className="circle responsive-img" />
                    <h3>{this.state.myProfileData.name}</h3>
                    <Link to={`/profile`} onClick={this.openModal}>Edit profile</Link>
                    {/* <EditProfile /> */}
                    <p>{this.state.myProfileData.about}</p>

                    <Modal style={customStyles} isOpen={this.state.isOpen} onRequestClose={this.closeModal} contentLabel="Example Modal">
                        <UpdateProfile /*changeFullName={this.updateFullNameInputValue} changePicture={this.updatePictureInputValue} changeDesc={this.updateDescriptionInputValue}*/ closeEditWindow={this.closeModal} updateWindow={this.updateMyProfile}/>
                    </Modal>
    
                    <div className="Profile-Two-counters center">
                        <div className="Profile-one left"><div className='Profile-c'>C</div><p>{this.state.myProfileData.postsCount}</p></div>
                        <div className="Profile-one"><div className='Profile-c'>C</div><p>{this.state.myProfileData.commentsCount}</p></div>
                    </div>
                </div>
            )
        }
    }
}

export default Profile;