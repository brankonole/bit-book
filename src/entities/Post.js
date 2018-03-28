class Post {
    constructor(post) {
        this.id = post.id;
        this.dateCreated = post.dateCreated;
        this.userId = post.userId;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
    }
}

export default Post;