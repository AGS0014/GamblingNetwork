const stateRouter = require('express').Router();
const city = require('../controller/statecity.controller');


stateRouter.post('/getcityid',city.getcityid);
stateRouter.get('/getcity',city.getcity);
stateRouter.post('/saveCity',city.saveCity);


module.exports = stateRouter;