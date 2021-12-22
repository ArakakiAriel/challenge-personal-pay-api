const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');

// This class handle the call of IpApi and store the result in res.data.location
module.exports.callIpApi = async (req, res, next) => {
  logger.debug('------------ call-ip-api ------------');
  // We identify the original IP address of the client
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Custom message while missing the x-forwarded-for header running in localhost
  if (ip === '::1') {
    logger.warn(`${constants.BAD_REQUEST_ERROR} - ${messages.FORWARDED_HEADER_MISSING}`);
    // eslint-disable-next-line max-len
    return setResponseWithError(res, constants.BAD_REQUEST_ERROR, messages.FORWARDED_HEADER_MISSING);
  }

  logger.debug(`USER IP:${ip}`);
  logger.debug('[Calling ipapi service by user IP]');
  // We use axios to make the call to the external api IpApi.
  const axiosResponse = await axios.get(`${config.url.ipapi}/${ip}`)
    .then((response) => {
      if ((response.data.status) === 'fail') {
        logger.warn(`${constants.BAD_REQUEST_ERROR} - ${response.data.message}`);
        return setResponseWithError(res, constants.BAD_REQUEST_ERROR, response.data.message);
      }

      logger.debug(`IPAPI response: ${JSON.stringify(response.data)}`);
      return response.data;
    }).catch((error) => {
      logger.error(error);
      return setResponseWithError(res, error.response.status, error.response.data.message);
    });

  res.data = {
    location: axiosResponse,
  };

  req.lat = axiosResponse.lat;
  req.lon = axiosResponse.lon;

  return next();
};
