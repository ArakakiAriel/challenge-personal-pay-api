const axios = require('axios');
const config = require('../config/config');
const logger = require('../logger/logger');

const ipapiService = async (ip) => {
  logger.debug('------------ ipapi-service ------------');

  try {
    const getLocation = {
      method: 'get',
      url: `${config.url.ipapi}/${ip}`
    };

    logger.silly(`USER IP:${ip}`);
    logger.debug('[Calling ipapi service by user IP]');
    // Calling API
    const responseAxios = await axios(getLocation);
    return responseAxios.data;
  } catch (e) {
    logger.error('Error trying to call the ipApi API - ipapi-service.js');
    logger.error(JSON.stringify(e));
    throw e;
  }
};

module.exports = {
    ipapiService
};
