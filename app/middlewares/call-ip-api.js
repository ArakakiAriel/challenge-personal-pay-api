const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const config = require('../config/config');
const setResponseWithError = require('../utils/common-response').setResponseWithError;


//This class handle the call of IpApi and store the result in res.data.location
module.exports.callIpApi = async (req, res, next) => {   
    //We identify the original IP address of the client
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    //We use axios to make the call to the external api IpApi.
    await axios.get(`${config.url.ipapi}/${ip}`)
    .then(function (response) {
        if((response.data.status) === 'fail'){
            return setResponseWithError(res, constants.BAD_REQUEST_ERROR, response.data.message);
        }
        
        res.data ={
            location: response.data
        }; 
        req.lat = response.data.lat;
        req.lon = response.data.lon;

    }).catch(function (error) {
        if(error.response){
            return setResponseWithError(res, error.response.status, error.response.data.message);
        }
        
    });


    return next();
};
