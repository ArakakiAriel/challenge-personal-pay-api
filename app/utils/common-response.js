const messages = require('../constants/messages');

//Formatting of the error message shown as result
function setResponseWithError(res, status, message, code = messages.RESPONSE_NOK_STATUS_MESSAGE) {
  return res.status(status).send({ code, message });
}


//Formatting of the ok message shown as result
function setResponseRaw(res, status, message) {
  return res.status(status).send(message);
}


module.exports.setResponseWithError = setResponseWithError;
module.exports.setResponseRaw = setResponseRaw;
