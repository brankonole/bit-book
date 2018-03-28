import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

import './feed-css/NewPost.css';
import { dataService } from '../../../services/DateService';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class NewPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            postData: {}
        };

        this.openModalVideo = this.openModalVideo.bind(this);
        this.openModalImage = this.openModalImage.bind(this);
        this.openModalText = this.openModalText.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModalVideo() {
        this.setState({ modalIsOpen: true, modalName: "video" });
    }

    openModalImage() {
        this.setState({ modalIsOpen: true, modalName: "image" });
    }

    openModalText() {
        this.setState({ modalIsOpen: true, modalName: "text" });
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    renderVideoModal() {
        return (<div>
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
            </form>
        </div>)
    }

    renderImageModal() {
        return (<div>
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>stays</button>
            </form>
        </div>)
    }

    renderTextModal() {
        return (<div>
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button onClick={this.bla}>the modal</button>
            </form>
        </div>)
    }

    bla() {
        dataService.uploadNewPost({text: "Boooo"})
            .then(res => {
                console.log(res);
            })
    }

    renderModalView() {
        if (this.state.modalName === "video") {
            return this.renderVideoModal()
        } else if (this.state.modalName === "image") {
            return this.renderImageModal()
        } else {
            return this.renderTextModal()
        }

    }

    componentDidMount() {
    }

    render() {
        return (
            // <a className="btn-floating btn-large waves-effect waves-light-green accent-3 new-post-css hoverable"><i className="material-icons">add</i></Link>
            <div>
                <div className="fixed-action-btn vertical NewPost-css">
                    <a className="btn-floating btn-large waves-effect waves-light-green accent-3 hoverable"><i className="material-icons">add</i></a>
                    <ul className="NewPost-css">
                        <li><a onClick={this.openModalVideo} className="btn-floating red"><i className="material-icons">featured_video</i></a></li>
                        <li><a onClick={this.openModalImage} className="btn-floating green"><i className="material-icons">camera</i></a></li>
                        <li><a onClick={this.openModalText} className="btn-floating blue"><i className="material-icons">chat</i></a></li>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            {this.renderModalView()}

                        </Modal>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewPost;