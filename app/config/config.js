//= ==============
//    PORT
//= ==============
process.env.PORT = process.env.PORT || 3000;

//= ==============
//    ENVIRONMENT
//= ==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  timeouts: {
    timer_default: process.env.TIMEOUT_TIMER_DEFAULT || 10000,
  },
  url: {
    ipapi: process.env.URL_IPAPI || 'http://ip-api.com/json/',
    owm: process.env.URL_OWM || 'https://api.openweathermap.org/data/2.5',
  },
  owm: {
      api_key: process.env.OWM_API_KEY ,
      current: process.env.OWM_CURRENT || 'weather',
      forecast: process.env.OWM_FORECAST || 'forecast'
  },
  log: {
    level: 'debug',
    file_name: 'app.log',
  },
};
