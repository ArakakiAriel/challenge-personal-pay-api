<<<<<<< HEAD

const RESPONSE_OK_STATUS_MESSAGE = 'OK';
const RESPONSE_NOK_STATUS_MESSAGE = 'error';
const REDIS_CONNECTION_ERROR = 'Error connecting to Redis';
const REDIS_CONNECTION_OK = 'Redis connection OK';
const REDIS_CONNECTION_READY = 'Ready connect to redis';

module.exports = {
    RESPONSE_OK_STATUS_MESSAGE,
    RESPONSE_NOK_STATUS_MESSAGE,
    REDIS_CONNECTION_ERROR,
    REDIS_CONNECTION_OK,
    REDIS_CONNECTION_READY,
    
}
=======
const RESPONSE_OK_STATUS_MESSAGE = 'OK';
const RESPONSE_NOK_STATUS_MESSAGE = 'error';
const INTERNAL_ERROR = 'Internal Error Not Handled';
const INVALID_URL = 'Invalid URL';
const REQUEST_TIMEOUT = 'Request timed out, try again and if the error persist call the support center';
const FORWARDED_HEADER_MISSING = "The 'x-forwarded-for header' is missing, please fill it with an ip if you are using the API as local";
const SERVER_STATUS_OK = 'Server is up and running';

module.exports = {
  RESPONSE_OK_STATUS_MESSAGE,
  RESPONSE_NOK_STATUS_MESSAGE,
  INTERNAL_ERROR,
  INVALID_URL,
  REQUEST_TIMEOUT,
  FORWARDED_HEADER_MISSING,
  SERVER_STATUS_OK,
};
>>>>>>> db15fa24c1c0efec71fa36f19e2a96e2400a9ce0
