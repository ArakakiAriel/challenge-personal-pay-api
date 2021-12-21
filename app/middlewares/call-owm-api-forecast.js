const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const setResponseWithError = require('../utils/common-response').setResponseWithError;
const logger = require('../../logger');


//This class handle the call to OpenWeatherMap api when city is not send as param. 
//It stores the result in res.data.weather_today.
module.exports.callOwmApiForecast = async (req, res, next) => { 
    logger.debug("--------------- call-owm-api-forest ---------------"); 
    
    let url = `${config.url.owm}/forecast?lat=${req.lat}&lon=${req.lon}&appid=${process.env.OWM_API_KEY}`;
    logger.debug("[Calling OpenWeatherMap API - Forecast 5 Days]");
    logger.debug(`URL: ${url}`);
    await axios.get(url)
    .then(function (response) {
        
        logger.debug("OWM response: " + JSON.stringify(response.data));
        //Set the data as weather_today
        res.data.weather_forecast = response.data;
    }).catch(function (error) {
        logger.error(JSON.stringify(error));
        if(error.response){
            return setResponseWithError(res, error.response.status, error.response.data.message);
        }
        
    });

    return next();
};
