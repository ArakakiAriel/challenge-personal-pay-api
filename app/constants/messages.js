
const RESPONSE_OK_STATUS_MESSAGE = 'OK';
const RESPONSE_NOK_STATUS_MESSAGE = 'error';
const INTERNAL_ERROR = 'Internal Error Not Handled';
const INVALID_URL = 'Invalid URL';
const REQUEST_TIMEOUT = 'Request timed out, try again and if the error persist call the support center';
const FORWARDED_HEADER_MISSING = "The 'x-forwarded-for header' is missing, please fill it with an ip if you are using the API as local"

module.exports = {
    RESPONSE_OK_STATUS_MESSAGE,
    RESPONSE_NOK_STATUS_MESSAGE,
    INTERNAL_ERROR,
    INVALID_URL,
    REQUEST_TIMEOUT,
    FORWARDED_HEADER_MISSING
}