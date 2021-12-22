const { createLogger, transports, format } = require('winston');
const config = require('../config/config');

// Formato customizado para mostrar los logs.
const customFormat = format.combine(format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss.SSS' }), format.printf((info) => `${info.timestamp} - [LEVEL:${info.level.toUpperCase()}] - ${info.message}`));

const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console({ level: 'silly' }),
    new transports.File({ filename: config.log.file_name, level: config.log.level }),
  ],
});

module.exports = logger;
