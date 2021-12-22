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
    timer_default: process.env.TIMEOUT_TIMER_DEFAULT || 5000,
  },
  url: {
    ipapi: process.env.URL_IPAPI || 'http://ip-api.com/json/',
    owm: process.env.URL_OWM || 'https://api.openweathermap.org/data/2.5',
  },
  owmApiKey: process.env.OWM_API_KEY || '62d89ffa851fa59bd7e4cd42ba9b796b',
  log: {
    level: 'debug',
    file_name: 'app.log',
  },
};
