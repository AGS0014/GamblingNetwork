const regiRouter = require('express').Router();
const regi = require('../controller/Registration.controller');


regiRouter.post('/signin',regi.signin);
regiRouter.post('/getregisterwithid',regi.getregisterwithid);
regiRouter.get('/GetRegisterDetails',regi.GetRegisterDetails);
regiRouter.post('/saveRegister',regi.saveRegister);
regiRouter.post('/UpdateRegister',regi.UpdateRegister);

module.exports = regiRouter;