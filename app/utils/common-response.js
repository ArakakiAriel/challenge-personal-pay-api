<<<<<<< HEAD
const messages = require('../constants/messages');

function setResponseWithError(res, status, message, code = messages.RESPONSE_NOK_STATUS_MESSAGE) {
  return res.status(status).send({ code, message });
}

function setResponseWithErrorCode(res, status, message) {
  return res.status(status).send({ status, message });
}

function setResponseWithOk(res, status, message, code = messages.RESPONSE_OK_STATUS_MESSAGE) {
  return res.status(status).send({ code, message });
}

function setResponseRaw(res, status, message) {
=======
const logger = require('../logger/logger');
const messages = require('../constants/messages');

// Formatting of the error message shown as result
function setResponseWithError(res, status, message, code = messages.RESPONSE_NOK_STATUS_MESSAGE) {
  logger.error('Showing ERROR');
  return res.status(status).send({ code, message });
}

// Formatting of the ok message shown as result
function setResponseRaw(res, status, message) {
  logger.info('Showing result OK');
  logger.silly(JSON.stringify(message));
>>>>>>> db15fa24c1c0efec71fa36f19e2a96e2400a9ce0
  return res.status(status).send(message);
}

module.exports.setResponseWithError = setResponseWithError;
<<<<<<< HEAD
module.exports.setResponseWithOk = setResponseWithOk;
module.exports.setResponseRaw = setResponseRaw;
module.exports.setResponseWithErrorCode = setResponseWithErrorCode;
=======
module.exports.setResponseRaw = setResponseRaw;
>>>>>>> db15fa24c1c0efec71fa36f19e2a96e2400a9ce0
