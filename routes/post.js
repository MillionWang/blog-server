/*
 * @File: post router
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 10:11:58
 */
const express = require('express');
const Router = express.Router();

Router.post('/comment', require('./post/comment'));
Router.post('/article', require('./post/acticle'));
Router.post('/deletearticle', require('./post/deleteArticle'));

module.exports = Router;