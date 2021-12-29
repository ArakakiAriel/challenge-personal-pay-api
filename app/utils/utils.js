/**
 * Function to convert the x-fowarded-for value to an array
 * @param {*} arr String to convert to array
 * @returns
 */
const stringToArray = (arr) => {
  arr.replace(/ /g, '');
  arr.split(',');
  return arr;
};

/**
 * Function to get the x-fowarded-for header most recent value
 * @param {*} ip x-fowarded-for value
 * @returns
 */
const getMostRecentIp = (ip) => {
  if (ip.includes(',')) {
    return stringToArray(ip).at(-1);
  }
  return ip;
};

module.exports = {
  getMostRecentIp,
};
