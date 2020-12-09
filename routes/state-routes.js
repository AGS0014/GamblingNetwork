const stateRouter = require('express').Router();
const state = require('../controller/statecity.controller');


stateRouter.post('/getstateid',state.getsatid);
stateRouter.get('/getState',state.getsat);
stateRouter.post('/saveState',state.saveStat);
stateRouter.post('/UpdateState',state.UpdateStat);

module.exports = stateRouter;

