const logger = require("../logger/logger");

/**
 * Function to convert the x-fowarded-for value to an array
 * @param {*} arr String to convert to array
 * @returns
 */
const stringToArray = (arr) => {
  arr = arr.replace(/ /g, '');
  return arr.split(',');
};

/**
 * Function to get the x-fowarded-for header most recent value
 * @param {*} ip x-fowarded-for value
 * @returns
 */
const getMostRecentIp = (ip) => {
  if (ip.includes(',')) {
    ip = stringToArray(ip)[1];
    
  }
  return ip;
};

module.exports = {
  getMostRecentIp,
};
