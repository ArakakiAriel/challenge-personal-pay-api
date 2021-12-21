const constants = require('../constants/constants');
const setResponseRaw = require('../utils/common-response').setResponseRaw;

//This class shows the final response allocated in res.data
module.exports.showResultRaw = async (req, res, next) => {
    let result = res.data;
    return setResponseRaw(res, constants.RESPONSE_OK, result);
};
