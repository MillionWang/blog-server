/*
 * @File: index.js
 * @Author: wangzhongpeng
 * @Date: 2019-07-30 18:19:47
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patchExpress = require('./libs/express/patch');
patchExpress(express);
const app = express();
require('./libs/mongo');

// parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Access-Control-Allow-Origin
const corsWhiteList = ['http://172.18.22.63:8080'];
const corsOptions = {
    origin (origin, callback) {
        if (corsWhiteList.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('not allowed by cors'));
        }
    }
};
app.use(cors(corsOptions));

app.get('/test', (req, res) => {
    res.success('test');
});
app.use('/query', require('./routes/query'));
app.use('/post', require('./routes/post'));



const port = process.env.PORT || 8081;
app.listen(port);
console.log('Server is listening on ' + port);
