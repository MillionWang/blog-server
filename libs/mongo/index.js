/*
 * @File: init db
 * @Author: wangzhongpeng
 * @Date: 2019-08-01 13:41:01
 */

const mongoose = require('mongoose');
const mongoConf = require('./mongo.config');

mongoose.connect(mongoConf.dbUrl);
const db = mongoose.connection;
db.on('error', () => {
    console.log('db connected error');
});
db.once('open', () => {
    console.log('db connected success')
});


