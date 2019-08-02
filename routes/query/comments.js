/**
 * @File: comments query
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 10:38:25
 */


module.exports = (req, res) => {
    // console.log(req.params)
    console.log(req.query)

    res.success('comments')
}

