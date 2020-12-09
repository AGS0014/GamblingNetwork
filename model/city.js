const mongoose  = require('mongoose');

const UserSChema = mongoose.Schema;

const City = new UserSChema({
    CityName: { type : String },
    StateId: { type : String },
    IsActive: { type : Boolean, default: false },
  });

 
module.exports = mongoose.model('City', City);

