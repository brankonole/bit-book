import React, { Component } from "react";

import Video from "./Video";
import Image from "./Image";
import Text from "./Text";
import Loading from "../../shared/Loading"
import { dataService } from "../../../services/DataService";
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
        dataService.fetchSinglePost(this.type, this.id)
            .then(response => {
                response = response;
                this.setState({
                    singlePost: response,
                    commentInput: null
                })
            })
        this.fetchPostComments();
    }

    fetchPostComments = () => {
        dataService.fetchComments(this.id)
            .then(response => {
                this.setState({
                    comments: response
                })
            })
    }

    // sending commments
    sendComments = (data) => {
        return dataService.sendComment(this.id, data)
            .then(() => this.fetchPostComments())

    }

    chooseTypeOfPost() {
        if (this.type === "video") {
            return (<React.Fragment>
                <Video videoUrl={this.state.singlePost.videoUrl} commentsNum={this.state.singlePost.commentsNum}/>}
                <AddComment sendComments={this.sendComments} />
                <CommentList comments={this.state.comments} />
            </React.Fragment>)
        }
        else if (this.type === "image") {
            return (<React.Fragment>
                <Image imageUrl={this.state.singlePost.imageUrl} commentsNum={this.state.singlePost.commentsNum}/>
                <AddComment sendComments={this.sendComments} />
                <CommentList comments={this.state.comments} />
            </React.Fragment>)
        } else {
            return (<React.Fragment>
                <Text text={this.state.singlePost.text} commentsNum={this.state.singlePost.commentsNum}/>
                <AddComment sendComments={this.sendComments} />
                <CommentList comments={this.state.comments} />
            </React.Fragment>)
        }
    }

    render() {
        console.log(this.state.commentInput);
        return (this.state.singlePost === "") ? <Loading /> : this.chooseTypeOfPost()
    }
}

export default SingleFeed;