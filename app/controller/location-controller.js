const { ipapiService } = require('../services/ipapi-service');
const logger = require('../logger/logger');

const locationController = async (ip) => {
  logger.debug('------------ location-controller ------------');
  const serviceResponse = await ipapiService(ip);

  return serviceResponse;
};

module.exports = {
  locationController,
};
