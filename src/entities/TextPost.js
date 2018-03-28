import Post from './Post';

class TextPost extends Post {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
}

export default TextPost;