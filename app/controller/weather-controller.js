const { OwmApiService } = require('../services/owm-api-service');
const config = require('../config/config');
const logger = require('../logger/logger');

/**
 *
 * @param {*} type Indicates "current" or "forecast" depending of the api call needed
 * @param {*} lat Latitude
 * @param {*} lon Longitude
 * @param {*} city optional value
 */
const weatherController = async (type, lat, lon, city) => {
  logger.debug('------------ weather-controller ------------');
  const serviceResponse = await OwmApiService(type, lat, lon, city);

  // Build response with valuable data
  if (type === config.owm.forecast) {
    return {
      forecast: serviceResponse.list,
      city: serviceResponse.city,
    };
  }

  return serviceResponse;
};

module.exports = {
  weatherController,
};
