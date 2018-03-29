// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Modal from 'react-modal';

// import { dataService } from '../../../services/DateService';

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


// class NewImage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             modalIsOpen: false,
//             postData: {},
//             inputImageValue: '',
//             isValidate: true,
//             modalName: "image"
//         };

//         this.openModalImage = this.openModalImage.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     openModalImage() {
//         this.setState({ modalIsOpen: true, /*modalName: "image"*/ });
//     }

//     closeModal() {
//         this.setState({
//             modalIsOpen: false,
//             inputImageValue: ''
//         });
//     }

//     // render posts modals
//     // Update form
//     updateInputImageValue = evt => {
//         this.setState({
//             inputImageValue: evt.target.value
//         });
//     }

//     // Update posts to Database and validation
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
//         this.setState({
//             inputImageValue: ''
//         })
//     }

//     // renderModalView() {
//     //     if (this.state.modalName === "video") {
//     //         return this.renderVideoModal()
//     //     } else if (this.state.modalName === "image") {
//     //         return this.renderImageModal()
//     //     } else {
//     //         return this.renderTextModal()
//     //     }
//     // }

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
//                             {/* {this.renderModalView()} */}
//                             <div>
//                                 <div className='Button-header'>
//                                     <h4 ref={subtitle => this.subtitle = subtitle} className='Button-title'>New image post</h4>
//                                     <a onClick={this.closeModal} className='Button-close-btn'><i class="material-icons small dp48">close</i></a>
//                                 </div>
//                                 <div>Add image file</div>
//                                 <form>
//                                     <input value={this.state.inputImageValue} onChange={this.updateInputImageValue} autoFocus />
//                                     <button className='waves-effect waves-light btn Button-post-btn' onClick={this.addImagePost} onClick={this.closeModal}>POST</button>
//                                 </form>
//                             </div>
//                         </Modal>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
//     // renderImageModal() {
//     //     return (<div>
//     //         <div className='Button-header'>
//     //             <h4 ref={subtitle => this.subtitle = subtitle} className='Button-title'>New image post</h4>
//     //             <a onClick={this.closeModal} className='Button-close-btn'><i class="material-icons small dp48">close</i></a>
//     //         </div>
//     //         <div>Add image file</div>
//     //         <form>
//     //             <input value={this.state.inputImageValue} onChange={this.updateInputImageValue} autoFocus />
//     //             <button className='waves-effect waves-light btn Button-post-btn' onClick={this.addImagePost} onClick={this.closeModal}>POST</button>
//     //         </form>
//     //     </div>)
//     // }
// }

// export default NewImage;