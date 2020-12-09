const mongoose  = require('mongoose');

const UserSChema = mongoose.Schema;

const Register = new UserSChema({
    MobileNo: { type : String },
    EmailId: { type : String },
    ReferenceId: { type : String },
    Password: { type : String },
    StateId: { type : String },
    CityId: { type : String },
    EntryDate: { type : Date, default: Date.now() },
    IsActive: { type : Boolean, default: false },
  });

 
module.exports = mongoose.model('Register', Register);

