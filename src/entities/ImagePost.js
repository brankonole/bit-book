import Post from './Post';

class ImagePost extends Post {
    constructor(props) {
        super(props);
       this.imageUrl = props.imageUrl;
    }
}

export default ImagePost;