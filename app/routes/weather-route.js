const Router = require('express').Router;
const timeout = require('connect-timeout');
const config = require('../config/config');
const context = require('../../context/default');
const getMiddlewares = require('../utils/get-middleware').getMiddlewares;

const router = Router();
router.get('/location', timeout(`${config.timeouts.timer_default}`), getMiddlewares(context.middlewares.getLocationData));
router.get('/current/:city', timeout(`${config.timeouts.timer_default}`), getMiddlewares(context.middlewares.getWeatherDataByCity));
router.get('/current', timeout(`${config.timeouts.timer_default}`), getMiddlewares(context.middlewares.getWeatherData));
router.get('/forecast/:city', timeout(`${config.timeouts.timer_default}`), getMiddlewares(context.middlewares.getForecastByCity));
router.get('/forecast', timeout(`${config.timeouts.timer_default}`), getMiddlewares(context.middlewares.getForecast));

module.exports = router;
