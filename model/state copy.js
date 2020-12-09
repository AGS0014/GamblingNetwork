const mongoose  = require('mongoose');

const UserSChema = mongoose.Schema;

const State = new UserSChema({
    StateName: { type : String },
    IsActive: { type : Boolean, default: false },
  });



  
module.exports = mongoose.model('State', State);

