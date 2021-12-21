const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const setResponseWithError = require('../utils/common-response').setResponseWithError;
const logger = require('../../logger');


//This class handle the call to OpenWeatherMap api when they send a city as param
//It stores the result in res.data.weather_today.
module.exports.callOwmApiForecastByCity = async (req, res, next) => {  
    logger.debug("------------ call-owm-api-forecast-by-city ------------");

    
    logger.debug(`City: ${req.params.city}`)
        
    let url = `${config.url.owm}/forecast?q=${req.params.city}&appid=${process.env.OWM_API_KEY}`;
    logger.debug("[Calling OpenWeatherMap API - Forecast 5 Days]");
    logger.debug(`URL: ${url}`);
    //We use axios to make the call to the external api OpenWeatherMap.
    await axios.get(url)
    .then(function (response) {
        
        logger.debug("OWM response: " + JSON.stringify(response.data));
        //Set the data as weather_today
        res.data.weather_forecast = response.data;
    }).catch(function (error) {
        logger.error(JSON.stringify(error));
        if(error.response){
            //Return an error of owm api
            return setResponseWithError(res, error.response.status, error.response.data.message);
        }
        
    });

    return next();
};
