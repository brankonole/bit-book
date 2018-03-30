import React, { Component } from "react";

import Video from "./Video";
import Image from "./Image";
import Text from "./Text";
import Loading from "../../shared/Loading"
import { dataService } from "../../../services/DateService";
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import Comment from "./Comment";



class SingleFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePost: "",
            comments: []
        }

    }
    id = this.props.match.params.id;
    type = this.props.match.params.type;

    componentDidMount() {
        console.log(this.props);
        dataService.fetchSinglePost(this.type, this.id)
            .then(response => {
                response = response;  
                this.setState({
                    singlePost: response
                })
            }
            )
        dataService.fetchComments(this.id)
            .then(response => {
                this.setState({
                    comments: response
                })
            }
            )
    }

    chooseTypeOfPost() {
        if (this.type === "video") {
            return( <React.Fragment>
                <Video videoUrl={this.state.singlePost.videoUrl} />}
            <AddComment />
                <CommentList userId={this.props.match.params.userId} comments={this.state.comments}/>
            </React.Fragment>)
        }
        else if (this.type === "image") {
            return (  <React.Fragment>
                <Image imageUrl={this.state.singlePost.imageUrl} /> 
                <AddComment />
                 <CommentList userId={this.props.match.params.userId} comments={this.state.comments}/>
            </React.Fragment>)
        } else {
            return ( <React.Fragment>
                 <Text text={this.state.singlePost.text} />
                <AddComment />
                 <CommentList userId={this.props.match.params.userId} comments={this.state.comments}/>
            </React.Fragment> )
        }
    }


    render() {

        return (
            (this.state.singlePost === "") ? <Loading /> :    this.chooseTypeOfPost()
     
        )
    }
}

export default SingleFeed;