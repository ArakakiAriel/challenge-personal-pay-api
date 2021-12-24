const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');
const {locationController} = require('../controller/location-controller');

// This class handle the call of IpApi and store the result in res.data.location
module.exports.callIpApi = async (req, res, next) => {
  logger.debug('------------ call-ip-api ------------');
  // We identify the original IP address of the client
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Custom message while missing the x-forwarded-for header running in localhost
  if (ip === '::1') {
    logger.warn(`${constants.BAD_REQUEST_ERROR} - ${messages.FORWARDED_HEADER_MISSING}`);

    return setResponseWithError(res, constants.BAD_REQUEST_ERROR, messages.FORWARDED_HEADER_MISSING);
  }

  try{
    const ipApiResponse = await locationController(ip);
    if ((ipApiResponse.status) === 'fail') {
      logger.warn(`${constants.BAD_REQUEST_ERROR} - ${ipApiResponse.message}`);
      return setResponseWithError(res, constants.BAD_REQUEST_ERROR, ipApiResponse.message);
    }

    req.lat = ipApiResponse.lat;
    req.lon = ipApiResponse.lon;

    logger.debug(`IPAPI response: ${JSON.stringify(ipApiResponse)}`);
    res.data ={
      location: ipApiResponse
    }
  }catch(e){
    logger.error(error);
    return setResponseWithError(res, error.response.status, error.response.data.message);
  }
  
  return next();
};
