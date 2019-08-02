/*
 * @File: articles query
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 10:38:32
 */
const articlesModel = require('../../libs/mongo/models').articlesModel;

module.exports = async (req, res) => {
    let params = req.query;
    let result = await articlesModel.find(params);
    res.success(result);
}
