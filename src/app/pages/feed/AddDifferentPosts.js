import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

import NewTextPost from './NewPost';
import NewVideoPost from './NewVideo';
import NewImagePost from './NewImage';
import NewPost from './NewPost';
import NewImage from './NewImage';
import NewVideo from './NewVideo';

import './feed-css/NewPost.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%'
    }
};

class AddDifferentPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    openModalVideo = () => {
        this.setState({ modalIsOpen: true, modalName: "video" });
    }

    openModalImage = () => {
        this.setState({ modalIsOpen: true, modalName: "image" });
    }

    openModalText = () => {
        this.setState({ modalIsOpen: true, modalName: "text" });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    renderModalView() {
        if (this.state.modalName === "video") {
            return <NewVideo refreshData={this.props.refreshData} onRequestClose={this.closeModal}/>
        } else if (this.state.modalName === "image") {
            return <NewImage refreshData={this.props.refreshData} onRequestClose={this.closeModal}/>
        } else {
            return <NewPost refreshData={this.props.refreshData} onRequestClose={this.closeModal}/>
        }
    }

    render() {
        return (
            <div>
                <div className="fixed-action-btn vertical NewPost-css">
                    <a className="btn-floating btn-large waves-effect waves-light-green accent-3 hoverable"><i className="material-icons">add</i></a>
                    <ul className="NewPost-css">
                        <li><a onClick={this.openModalVideo} className="btn-floating red"><i className="material-icons">featured_video</i></a></li>
                        <li><a onClick={this.openModalImage} className="btn-floating green"><i className="material-icons">camera</i></a></li>
                        <li><a onClick={this.openModalText} className="btn-floating blue"><i className="material-icons">chat</i></a></li>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                        >
                            {this.renderModalView()}
                        </Modal>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AddDifferentPosts;