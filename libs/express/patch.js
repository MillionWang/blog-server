const CODE_ENUM = require('./codeEnum');

let patch = (express) => {

    express.response.success = function (any) {
        const result = {
            result: any,
            code: CODE_ENUM.SUCCESS
        };
        endResponse(this, result);
    };

    express.response.error = function (msg, errCode) {
        const result = {
            code: CODE_ENUM,
            result: msg
        };
        endResponse(this, result);
    }
};

let endResponse = (res, result) => {
    res.status(200).end(JSON.stringify(result));
};
module.exports = patch;