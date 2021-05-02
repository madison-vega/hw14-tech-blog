const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const LinkId = require('./LinkId');

User.hasMany(Post, {
    through: LinkId,
    foreignKey: 'post_id',
});

Post.hasOne(User, {
    through: LinkId,
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    through: LinkId,
    foreignKey: 'user_id'

});

module.exports = {
    User,
    Post,
    Comment,
    LinkId
};