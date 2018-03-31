// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Modal from 'react-modal';

// import { dataService } from '../../../services/DataService';

// import './feed-css/NewPost.css';
// import './feed-css/Button.css';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         width: '50%'
//     }
// };


// class NewPost extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             modalIsOpen: false,
//             postData: {},
//             inputTextValue: '',
//             inputVideoValue: '',
//             inputImageValue: '',
//             isValidate: true
//         };

//         this.openModalVideo = this.openModalVideo.bind(this);
//         this.openModalImage = this.openModalImage.bind(this);
//         this.openModalText = this.openModalText.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     openModalVideo() {
//         this.setState({ modalIsOpen: true, modalName: "video" });
//     }

//     openModalImage() {
//         this.setState({ modalIsOpen: true, modalName: "image" });
//     }

//     openModalText() {
//         this.setState({ modalIsOpen: true, modalName: "text" });
//     }

//     closeModal() {
//         this.setState({
//             modalIsOpen: false,
//             inputTextValue: '',
//             inputVideoValue: '',
//             inputImageValue: ''
//         });
//     }

//     // render posts modals
//     renderVideoModal() {
//         console.log("videoooo")
//         return (<div>
//             <div className='Button-header'>
//                 <h4 ref={subtitle => this.subtitle = subtitle} className='Button-title'>New video post</h4>
//                 <a onClick={this.closeModal} className='Button-close-btn'><i class="material-icons small dp48">close</i></a>
//             </div>
//             <div>YouTube video link</div>
//             <div>
//                 <input value={this.state.inputVideoValue} onChange={this.updateInputVideoValue} autoFocus/>
//                 {this.state.isValidate ? "" : <p className='Button-text-errormsg'>Invalid input!</p>}
//                 <button className='waves-effect waves-light btn Button-post-btn' onClick={this.addVideoPost}>POST</button>
//             </div>
//         </div>)
//     }

//     renderImageModal() {
//         return (<div>
//             <div className='Button-header'>
//                 <h4 ref={subtitle => this.subtitle = subtitle} className='Button-title'>New image post</h4>
//                 <a onClick={this.closeModal} className='Button-close-btn'><i class="material-icons small dp48">close</i></a>
//             </div>
//             <div>Add image file</div>
//             <form>
//                 <input value={this.state.inputImageValue} onChange={this.updateInputImageValue} autoFocus/>
//                 <button className='waves-effect waves-light btn Button-post-btn' onClick={this.addImagePost} onClick={this.closeModal}>POST</button>
//             </form>
//         </div>)
//     }

//     renderTextModal() {
//         console.log(this.state.isValidate)
//         return (<div>
//             <div className='Button-header'>
//                 <h4 ref={subtitle => this.subtitle = subtitle} className='Button-title'>New text post</h4>
//                 <a onClick={this.closeModal} className='Button-close-btn'><i class="material-icons small dp48">close</i></a>
//             </div>
//             <div>Add text</div>
//             <form>
//                 <input value={this.state.inputTextValue} onChange={this.updateInputTextValue} autoFocus/>
//                 {this.state.isValidate ? "" : <p className='Button-text-errormsg'>Invalid input!</p>}
//                 <button className='waves-effect waves-light btn Button-post-btn' onClick={this.addTextPost}>POST</button>
//             </form>
//         </div>)
//     }

//     // Update form
//     updateInputTextValue = evt => {
//         this.setState({
//             inputTextValue: evt.target.value
//         });
//     }

//     updateInputVideoValue = evt => {
//         this.setState({
//             inputVideoValue: evt.target.value
//         });
//     }

//     updateInputImageValue = evt => {
//         this.setState({
//             inputImageValue: evt.target.value
//         });
//     }

//     // Update posts to Database and validation
//     addTextPost = () => {
//         this.setState({
//             isValidate: true
//         })

//         let inputValue = this.state.inputTextValue;
//         let data = {
//             text: inputValue
//         }

//         if (inputValue.charCodeAt(0) === 32 || inputValue.length === 0) {
//             this.setState({
//                 isValidate: false
//             })
//         } else {
//             this.closeModal();
//             dataService.uploadNewTextPost(data)
//                 .then(res => {
//                     console.log(res);
//                 })
//             this.setState({
//                 inputTextValue: ''
//             })
//         }
//     }

//     addVideoPost = (event) => {
//         event.preventDefault();

//         let data = {
//             videoUrl: this.state.inputVideoValue
//         }
//         console.log(this.state.inputVideoValue);
        
//         if (this.state.inputVideoValue.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) == null) {
//             console.log("ne valja")
//             this.setState({
//                 isValidate: false
//             })
//             return
//         }

//         dataService.uploadNewVideoPost(data)
//             .then(res => {
//                 console.log(res);
//                 this.closeModal();
//             });
//             this.setState({
//                 inputVideoValue: ''
//             })
//     }

//     addImagePost = () => {

//         let data = {
//             imageUrl: this.state.inputImageValue
//         }

//         if (data.match(/^(http|https):\/\/.*\.(jpg|jpeg|gif|png)$/) == null) {
            
//             return
//         }

//         dataService.uploadNewImagePost(data)
//             .then(res => {
//                 console.log(res);
//             });
//             this.setState({
//                 inputImageValue: ''
//             })
//     }

//     renderModalView() {
//         if (this.state.modalName === "video") {
//             return this.renderVideoModal()
//         } else if (this.state.modalName === "image") {
//             return this.renderImageModal()
//         } else {
//             return this.renderTextModal()
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div className="fixed-action-btn vertical NewPost-css">
//                     <a className="btn-floating btn-large waves-effect waves-light-green accent-3 hoverable"><i className="material-icons">add</i></a>
//                     <ul className="NewPost-css">
//                         <li><a onClick={this.openModalVideo} className="btn-floating red"><i className="material-icons">featured_video</i></a></li>
//                         <li><a onClick={this.openModalImage} className="btn-floating green"><i className="material-icons">camera</i></a></li>
//                         <li><a onClick={this.openModalText} className="btn-floating blue"><i className="material-icons">chat</i></a></li>
//                         <Modal
//                             isOpen={this.state.modalIsOpen}
//                             onRequestClose={this.closeModal}
//                             style={customStyles}
//                             contentLabel="Example Modal"
//                         >
//                             {this.renderModalView()}
//                         </Modal>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewPost;