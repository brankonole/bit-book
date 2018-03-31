class User {
    constructor(user) {
        this.id = user.userId;
        this.name = user.name;
        this.email = user.email;
        this.about = user.about;
        this.avatarUrl = user.avatarUrl;
        this.postsCount = user.postsCount;
        this.commentsCount = user.commentsCount;
    }
}

export default User;