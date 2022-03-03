<<<<<<< HEAD

//===============
//    Puerto
//===============
process.env.PORT = process.env.PORT || 3000;


//===============
//    Entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=========================
//  Google Client ID
//========================
process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || './credentials/credentialAccess.json';

//===============
//   DataBase
// Acá vamos a encontrar como configurar nuestra base de datos creada en MongoDB Atlas para poder almacenar allí la información
//===============
let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27018/someCollection'
}else{
    urlDB = 'yourMongoAtlasDBConnection'
}

process.env.URLDB = urlDB;

module.exports = {
    mongo: {
      reconnection_interval: process.env.MONGO_RECONNECTION_INTERVAL || 3000
    },
    timeouts: {
        timer_default: process.env.TIMEOUT_TIMER_DEFAULT || 3000,
        timer_post_mongo: process.env.TIMER_POST_MONGO || 5000,

    },
    redisConfig: {
        port: process.env.NODE_REDIS_PORT || 6379,
        server: process.env.NODE_REDIS_SERVER || '127.0.0.1',
        dbNumber: process.env.NODE_REDIS_DB_NUMBER || 15,
        pass: process.env.NODE_REDIS_PASS || '',
        ttl: process.env.NODE_REDIS_TTL || 86400,
        tls: process.env.REDIS_USE_TLS
    },
};
  
=======
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
      level: process.env.LOG_CONSOLE_LEVEL || 'silly',
    },
  },
};
>>>>>>> db15fa24c1c0efec71fa36f19e2a96e2400a9ce0
