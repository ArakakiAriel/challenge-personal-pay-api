


/**
 * Function to convert the x-fowarded-for value to an array
 * @param {*} arr String to convert to array
 * @returns
 */
const stringToArray = (arr) => {
  const newArr = arr.replace(/ /g, '');
  return newArr.split(',');
};

/**
 * Function to get the x-fowarded-for header most recent value
 * @param {*} ip x-fowarded-for value
 * @returns
 */
const getIpByHeader = (ip) => {
  let newIp;
  if (ip.includes(',')) {
    newIp = stringToArray(ip)[0];
  } else {
    newIp = ip;
  }
  return newIp;
};

module.exports = {
  getIpByHeader,
};
