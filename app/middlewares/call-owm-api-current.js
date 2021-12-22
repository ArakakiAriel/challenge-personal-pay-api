const axios = require('axios');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');

// This class handle the call to OpenWeatherMap api when city is not send as param.
// It stores the result in res.data.weather_today.
module.exports.callOwmApiCurrent = async (req, res, next) => {
  logger.debug('------------ call-owm-api-current ------------');

  // eslint-disable-next-line max-len
  // We use the ipapi data to get the location of the user and show the weather on his city using latitude and longitude.
  // eslint-disable-next-line max-len
  const url = `${config.url.owm}/weather?lat=${req.lat}&lon=${req.lon}&appid=${process.env.OWM_API_KEY}`;

  logger.debug('[Calling OpenWeatherMap API - Current Weather]');
  logger.debug(`URL: ${url}`);
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
