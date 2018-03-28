import Post from './Post';

class VideoPost extends Post {
    constructor(props) {
        super(props);
        this.videoUrl = props.videoUrl;
    }
}

export default VideoPost;