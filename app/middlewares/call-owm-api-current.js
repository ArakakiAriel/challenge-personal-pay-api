const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');
const { weatherController } = require('../controller/weather-controller');

// This class handle the call to OpenWeatherMap api when city is not send as param.
// It stores the result in res.data.weather_today.
module.exports.callOwmApiCurrent = async (req, res, next) => {
  logger.debug('------------ call-owm-api-current ------------');

  try {
    logger.debug('[Calling Weather Controller]');
    const owmApiResponse = await weatherController(config.owm.current, req.lat, req.lon);
    // Set the data as weather_today
    res.data.weather_today = owmApiResponse;
  } catch (error) {
    return setResponseWithError(res, error.response.status, error.response.data.message);
  }

  return next();
};
