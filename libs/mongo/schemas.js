
const Schema = require('mongoose').Schema;

let articleSchema = new Schema({
    articleId: Number,
    title: String,
    category: String,
    content: String,
    author: String,
    date: String
});

let commentSchema = new Schema({
    content: String,
    author: String,
    date: String
});

let userSchema = new Schema({
    username: String,
    password: String
});

module.exports = {
    articleSchema,
    commentSchema,
    userSchema
};