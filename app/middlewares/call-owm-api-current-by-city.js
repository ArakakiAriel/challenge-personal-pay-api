const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const setResponseWithError = require('../utils/common-response').setResponseWithError;


//This class handle the call to OpenWeatherMap api when they send a city as param
//It stores the result in res.data.weather_today.
module.exports.callOwmApiCurrentByCity = async (req, res, next) => {  
        console.log("Entering to callOwmApiCurrentByCity - Middleware")
        console.log("city: ", req.params.city)
        //We use axios to make the call to the external api OpenWeatherMap.
        await axios.get(`${config.url.owm}/weather?q=${req.params.city}&appid=${config.owmApiKey}`)
        .then(function (response) {
            
            //Set the data as weather_today
            res.data.weather_today = response.data;
        }).catch(function (error) {
            if(error.response){
                return setResponseWithError(res, error.response.status, error.response.data.message);
            }
            
        });

    return next();
};
