const register= require('../model/registration');
const mongoose =  require('mongoose');
var filesid = mongoose.Types.ObjectId();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');




const GetRegisterDetails = async(req,res)=>{
    const requestData = req.body;
    const Regis = await  register.findOne({});

    return res.json({data: Regis,message: "State Records"})
}
const saveRegister = async (req,res) => {

    try{
        let requestData = req.body;
        let password = req.body.Password
      let salt= await  bcrypt.genSalt(10) 
           let passhash = await bcrypt.hash(password, salt);
           requestData.Password = passhash;
         
        const Regis = await  register.create(requestData);
        return res.json({data: Regis,message: "Record Insert Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}
const UpdateRegister = async (req,res) => {
    try{
        const Id = req.body.Id;
        const updatedObj = req.body ;
        delete updatedObj.Id
        console.log(updatedObj);
        const Regis = await  register.updateOne({_id: mongoose.Types.ObjectId(Id)}, { $set: updatedObj  });
        return res.json({data: Regis,message: "Record Updated Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}

const getregisterwithid = async(req,res)=>{
    const Id = req.body.Id;
    const State = await  state.findOne({ _id: mongoose.Types.ObjectId(Id)});
    console.log(State);
    return res.json({data: State,message: "State Records"})
}


const Login = async(req,res)=>{

    const {MobileNo,Password} = req.body;
    
    let user = await  (await register.findOne({MobileNo: MobileNo})).toObject();
   
    console.log(user);
    if(user)
    {
  
      let salt= await  bcrypt.genSalt(10) 

     let passw= await  bcrypt.compare(Password, user.Password);
     if(passw)
     {
      let Token = await jwt.sign({
            data: user
          }, 'Pankaj', { expiresIn: '1h' });
        
          delete user.Password;
        return res.json({data: user,message: "Login Successfully", Token})

    
     }
     else
     {
       console.log("Password is not valid");
     }
      
    }
    else
    {
        return res.json({message: "User is not Register with Mob No"})
    }


}

exports.signin = Login;
exports.getregisterwithid = getregisterwithid;
exports.GetRegisterDetails = GetRegisterDetails;
exports.saveRegister = saveRegister;
exports.UpdateRegister = UpdateRegister;


