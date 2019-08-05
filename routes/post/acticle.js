/*
 * @File: modify article
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 13:30:14
 */

const {articlesModel} = require('../../libs/mongo/models');


module.exports = async (req, res) => {
    let body = req.body;
    let {title, content, date, category} = body;
    await articlesModel.create({title, content, date, category});
    res.success('post article');
};