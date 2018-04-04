import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { dataService } from '../../../services/DataService';

import './feed-css/AddDifferentPosts.css';

class NewImagePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            inputImageValue: '',
            isValidate: true
        };
    }

    // render posts modals
    updateInputImageValue = evt => {
        this.setState({
            inputImageValue: evt.target.value
        });
    }
    
    // Update posts to Database and validation
    addImagePost = (event) => {
        event.preventDefault();
        
        let data = {
            imageUrl: this.state.inputImageValue
        }

        if (this.state.inputImageValue.match(/^(http|https):\/\/.*\.(jpg|jpeg|gif|png)$/) == null) {
            this.setState({
                isValidate: false
            })
            return
        }
        
        dataService.uploadNewImagePost(data)
        .then(res => {
                this.props.onRequestClose();
                this.props.refreshData();
            });
            this.setState({
                inputImageValue: ''
            })}
        
        render() {
            return (<div>
                <div className='AddDifferentPosts-header'>
                    <h4 ref={subtitle => this.subtitle = subtitle} className='AddDifferentPosts-title'>New image post</h4>
                    <a onClick={this.props.onRequestClose} className='AddDifferentPosts-close-btn'><i class="material-icons small dp48">close</i></a>
                </div>
                <div>Add image file</div>
                <div>
                    <input value={this.state.inputImageValue} onChange={this.updateInputImageValue} autoFocus/>
                    {this.state.isValidate ? "" : <p className='AddDifferentPosts-text-errormsg'>Invalid input!</p>}
                    <button className='waves-effect waves-light btn AddDifferentPosts-post-btn' onClick={this.addImagePost}>POST</button>
                </div>
            </div>)
        }}

export default NewImagePost;