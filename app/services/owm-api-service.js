const axios = require('axios');
const config = require('../config/config');
const logger = require('../logger/logger');


const OwmApiService = async (type, lat, lon, city) =>{
    logger.debug('------------ owm-api-service ------------')
    
    try {
        let params = new URLSearchParams();

        logger.debug(`Calling OpenWeatherMap API by ${type}`);
        if(city){
            logger.debug(`City: ${city}`);
            params.append('q', city);
            params.append('appid', process.env.OWM_API_KEY)
        }else{
            logger.debug(`Lat ${lat} and Lon ${lon}`)
            params.append('lat', lat);
            params.append('lon', lon)
            params.append('appid', process.env.OWM_API_KEY)
        }
        
        const getCurrent = {
            method: 'get',
            url: `${config.url.owm}/${type}?`,
            params
        }

        //Calling API
        const responseAxios = await axios(getCurrent);
        return responseAxios.data;
    } catch (e) {
        logger.error(`Error trying to call the OpenWeatherMap API - owm-api-service.js`);
        logger.error(JSON.stringify(e));
        throw e;
    }
}

module.exports = {
    OwmApiService
}