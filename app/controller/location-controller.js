const { ipapiService } = require('../services/ipapi-service');
const config = require('../config/config');
const logger = require('../logger/logger');

const locationController = async (ip) => {

  logger.debug('------------ location-controller ------------');
  const serviceResponse = await ipapiService(ip);

  return serviceResponse;
};

module.exports = {
  locationController
};
