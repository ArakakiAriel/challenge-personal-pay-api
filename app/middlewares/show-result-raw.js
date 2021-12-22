const constants = require('../constants/constants');
const { setResponseRaw } = require('../utils/common-response');

// This class shows the final response allocated in res.data
module.exports.showResultRaw = async (req, res) => {
  const result = res.data;
  return setResponseRaw(res, constants.RESPONSE_OK, result);
};
