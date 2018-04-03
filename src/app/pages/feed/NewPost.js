import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { dataService } from '../../../services/DataService';

import './feed-css/AddDifferentPosts.css';

class NewTextPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            inputTextValue: '',
            isValidate: true
        };
    }

    // Update form
    updateInputTextValue = evt => {
        this.setState({
            inputTextValue: evt.target.value
        });
    }
    
    // Update posts to Database and validation
    addTextPost = () => {
        this.setState({
            isValidate: true
        })
        
        let inputValue = this.state.inputTextValue;
        let data = {
            text: inputValue
        }
        
        if (inputValue.charCodeAt(0) === 32 || inputValue.length === 0) {
            this.setState({
                isValidate: false
            })
        } else {
            dataService.uploadNewTextPost(data)
            .then(res => {
                this.props.onRequestClose();
                this.props.refreshData();
            })
            this.setState({
                inputTextValue: ''
            })
        }
    }
    render() {
        return (<div>
            <div className='AddDifferentPosts-header'>
                <h4 ref={subtitle => this.subtitle = subtitle} className='AddDifferentPosts-title'>New text post</h4>
                <a onClick={this.props.onRequestClose} className='AddDifferentPosts-close-btn'><i className="material-icons small dp48">close</i></a>
            </div>
            <div>Add text</div>
            <div>
                <input value={this.state.inputTextValue} onChange={this.updateInputTextValue} autoFocus/>
                {this.state.isValidate ? "" : <p className='AddDifferentPosts-text-errormsg'>Invalid input!</p>}
                <button className='waves-effect waves-light btn AddDifferentPosts-post-btn' onClick={this.addTextPost}>POST</button>
            </div>
        </div>)
    }
}

export default NewTextPost;