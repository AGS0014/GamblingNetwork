const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const state = require('./routes/state-routes');
const app = express();
const City = require('./routes/city-routes');
const Register = require('./routes/register-routes');
app.use(cors());

// connect database
mongoose.connect('mongodb://localhost/GamblingNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err,data)=>{
  if(err)
   console.log('error',err);
  else
   console.log('database connected');

  });


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',state);
app.use('/',City);
app.use('/',Register);
// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
