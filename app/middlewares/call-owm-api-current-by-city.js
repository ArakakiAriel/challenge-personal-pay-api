const axios = require('axios');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');

// This class handle the call to OpenWeatherMap api when they send a city as param
// It stores the result in res.data.weather_today.
module.exports.callOwmApiCurrentByCity = async (req, res, next) => {
  logger.debug('------------ call-owm-api-current-by-city ------------');

  logger.debug(`City: ${req.params.city}`);

  const url = `${config.url.owm}/weather?q=${req.params.city}&appid=${process.env.OWM_API_KEY}`;
  logger.debug('[Calling OpenWeatherMap API - Current Weather]');
  logger.debug(`URL: ${url}`);
  // We use axios to make the call to the external api OpenWeatherMap.
  const responseAxios = await axios.get(url)
    .then((response) => {
      logger.debug(`OWM response: ${JSON.stringify(response.data)}`);
      return response.data;
    }).catch((error) => {
      logger.error(JSON.stringify(error));
      if (error.response) {
        return setResponseWithError(res, error.response.status, error.response.data.message);
      }
    });

  // Set the data as weather_today
  res.data.weather_today = responseAxios;

  return next();
};
