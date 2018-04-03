import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { dataService } from '../../../services/DataService';

import './feed-css/AddDifferentPosts.css';

class NewVideoPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            inputVideoValue: '',
            isValidate: true
        };
    }

    closeModal = () => {
        this.setState({
            inputVideoValue: ''
        });
    }

    // Update form
    updateInputVideoValue = evt => {
        this.setState({
            inputVideoValue: evt.target.value
        });
    }

    // Update posts to Database and validation
    addVideoPost = () => {
        this.setState({
            isValidate: true
        })

        let data = {
            videoUrl: this.state.inputVideoValue
        }

        if (this.state.inputVideoValue.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) == null) {
            this.setState({
                isValidate: false
            })
            return
        }

        dataService.uploadNewVideoPost(data)
            .then(res => {
                this.props.onRequestClose();
                this.props.refreshData();
            });
        this.setState({
            inputVideoValue: ''
        })
    }

    render() {
        return (<div>
            <div className='AddDifferentPosts-header'>
                <h4 ref={subtitle => this.subtitle = subtitle} className='AddDifferentPosts-title'>New video post</h4>
                <a onClick={this.props.onRequestClose} className='AddDifferentPosts-close-btn'><i className="material-icons small dp48">close</i></a>
            </div>
            <div>YouTube video link</div>
            <div>
                <input value={this.state.inputVideoValue} onChange={this.updateInputVideoValue} autoFocus />
                {this.state.isValidate ? "" : <p className='AddDifferentPosts-text-errormsg'>Invalid input!</p>}
                <button className='waves-effect waves-light btn AddDifferentPosts-post-btn' onClick={this.addVideoPost}>POST</button>
            </div>
        </div>)
    }
}

export default NewVideoPost;