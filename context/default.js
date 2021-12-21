const config = require('../app/config/config');

module.exports = {
  middlewares: {
    //Estructura de cada funcionalidad, se utiliza la llamada de funciones unitarias 
    getLocationData: process.env.NODE_CONTEXT_MIDDLEWARES_GET_LOCATION_DATA || [
      'call-ip-api',
      'show-result-raw'
    ],
    getWeatherDataByCity: process.env.NODE_CONTEXT_MIDDLEWARES_GET_WEATHER_DATA_BY_CITY || [
      'call-ip-api',
      'call-owm-api-current-by-city',
      'show-result-raw'
    ],
    getWeatherData: process.env.NODE_CONTEXT_MIDDLEWARES_GET_WEATHER_DATA || [
      'call-ip-api',
      'call-owm-api-current',
      'show-result-raw'
    ],
    getForecastByCity: process.env.NODE_CONTEXT_MIDDLEWARES_GET_FORECAST_BY_CITY || [
      'call-ip-api',
      'call-owm-api-forecast-by-city',
      'show-result-raw'
    ],
    getForecast: process.env.NODE_CONTEXT_MIDDLEWARES_GET_FORECAST || [
      'call-ip-api',
      'call-owm-api-forecast',
      'show-result-raw'
    ]
  }
};
