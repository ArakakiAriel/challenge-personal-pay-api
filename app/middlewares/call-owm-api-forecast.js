const axios = require('axios');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');
const {callOwmApiController} = require('../controller/weather-controller');

// This class handle the call to OpenWeatherMap api when city is not send as param.
// It stores the result in res.data.weather_today.
module.exports.callOwmApiForecast = async (req, res, next) => {
  logger.debug('--------------- call-owm-api-forest ---------------');

  try{
    logger.debug('[Calling Weather Controller]');
    let owmApiResponse = await callOwmApiController(config.owm.forecast, req.lat, req.lon);
    // Set the data as weather_forecast
    res.data.weather_forecast = owmApiResponse;
  }catch(error){
    return setResponseWithError(res, error.response.status, error.response.data.message);
  }

  return next();
};
