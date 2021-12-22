const axios = require('axios');
const config = require('../config/config');
const { setResponseWithError } = require('../utils/common-response');
const logger = require('../logger/logger');
const {callOwmApiController} = require('../controller/weather-controller');

// This class handle the call to OpenWeatherMap api when they send a city as param
// It stores the result in res.data.weather_today.
module.exports.callOwmApiCurrentByCity = async (req, res, next) => {
  logger.debug('------------ call-owm-api-current-by-city ------------');

  try{
    logger.debug('[Calling Weather Controller]');
    let owmApiResponse = await callOwmApiController(config.owm.current, req.lat, req.lon, req.params.city);
    // Set the data as weather_today
    res.data.weather_today = owmApiResponse;
  }catch(error){
    return setResponseWithError(res, error.response.status, error.response.data.message);
  }

  return next();
};
