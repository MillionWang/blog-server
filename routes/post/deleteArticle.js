/*
 * @File: 
 * @Author: wangzhongpeng
 * @Date: 2019-08-12 20:20:43
 */
const articleModel = require('../../libs/mongo/models').articlesModel;

module.exports = async (req, res) => {
    let body = req.body;
    let title = body.title;
    await articleModel.remove({title});
    res.success('删除成功')
}