/*
 * @File: query router
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 10:11:51
 */

const express = require('express');
const router = express.Router();

router.get('/login', require('./query/login'));
router.get('/comments', require('./query/comments'));
router.get('/articles', require('./query/articles'));

module.exports = router;