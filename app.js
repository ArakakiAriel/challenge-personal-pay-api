const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const constants = require('./app/constants/constants');
const messages = require('./app/constants/messages');

const app = express();

app.use(express.json());
app.use(cors());
app.set('trust proxy', true);

const weatherRoute = require('./app/routes/weather-route');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //Middleware cuando es app.use
// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//weather routing
app.use('/v1', weatherRoute);

// 404 - Json formatting for not supported URI
app.use('*', (req, res) => { // eslint-disable-line
    res.setHeader('Content-Type', 'application/json');
    // eslint-disable-next-line max-len
    res.status(constants.NOT_FOUND_ERROR).send({ code: constants.NOT_FOUND_ERROR, message: messages.INVALID_URL });
  });
  
  //TIMEOUT && DEFAULT ERROR
  app.use((err, req, res, next) => { // eslint-disable-line
    // eslint-disable-next-line max-len
    if (req.timedout) {
      res.status(constants.REQUEST_TIMEOUT).send({
        code: messages.RESPONSE_NOK_STATUS_MESSAGE,
        message: messages.REQUEST_TIMEOUT
      });
    } else {//DEFAULT ERROR NOT HANDLED
      console.log(err)
      res.status(constants.INTERNAL_ERROR).send({
        code: constants.INTERNAL_ERROR,
        message: messages.INTERNAL_ERROR
      });
    }
  });

module.exports = app;
