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
    current: process.env.OWM_CURRENT || 'weather',
    forecast: process.env.OWM_FORECAST || 'forecast',
  },
  log: {
    file: {
      level: process.env.LOG_FILE_LEVEL || 'debug',
      name: process.env.LOG_FILE_NAME || 'app.log',
    },
    console: {
      level: process.env.LOG_CONSOLE_LEVEL || 'warn',
    },
  },
};
