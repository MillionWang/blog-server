/*
 * @File: articles query
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 10:38:32
 */
const articlesModel = require('../../libs/mongo/models').articlesModel;

module.exports = async (req, res) => {
    let result = await articlesModel.find({title: 'wzp'})
    res.success(result);
}
