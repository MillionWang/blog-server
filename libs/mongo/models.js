
const mongoose = require('mongoose');
const {articleSchema, commentSchema, userSchema} = require('./schemas');


let articlesModel = mongoose.model('articles', articleSchema);
let commentsModel = mongoose.model('comments', commentSchema);
let userModel = mongoose.model('users', userSchema);

module.exports = {
    articlesModel,
    commentsModel,
    userModel
};