const state= require('../model/state');
const city= require('../model/city');
const mongoose =  require('mongoose');
var filesid = mongoose.Types.ObjectId();


const getsate = async(req,res)=>{
    const requestData = req.body;
    const State = await  state.findOne({});

    return res.json({data: State,message: "State Records"})
}
const saveState = async (req,res) => {
    try{
        const requestData = req.body;
        const State = await  state.create(requestData);
        return res.json({data: State,message: "Record Insert Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}
const UpdateState = async (req,res) => {
    try{
        const Id = req.body.Id;
        const updatedObj = req.body ;
        delete updatedObj.Id
        console.log(updatedObj);
        const State = await  state.updateOne({_id: mongoose.Types.ObjectId(Id)}, { $set: updatedObj  });
        return res.json({data: State,message: "State Updated Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}

const getsatewithid = async(req,res)=>{
    const Id = req.body.Id;
    const State = await  state.findOne({ _id: mongoose.Types.ObjectId(Id)});
    console.log(State);
    return res.json({data: State,message: "State Records"})
}

exports.getsatid = getsatewithid;
exports.getsat = getsate;
exports.saveStat = saveState;
exports.UpdateStat = UpdateState;


const getcity = async(req,res)=>{
    const requestData = req.body;
    const City = await  city.findOne({});

    return res.json({data: City,message: "City Records"})
}
const saveCity = async (req,res) => {
    try{
        const requestData = req.body;
        const City = await  city.create(requestData);
        return res.json({data: City,message: "Record Insert Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}
const UpdateCity = async (req,res) => {
    try{
        const Id = req.body.Id;
        const updatedObj = req.body ;
        delete updatedObj.Id
        console.log(updatedObj);
        const City = await  city.updateOne({_id: mongoose.Types.ObjectId(Id)}, { $set: updatedObj  });
        return res.json({data: City,message: "State Updated Successfully"})
    }
    catch(e){
        console.log('error',e);
    }

}

const getcitywithid = async(req,res)=>{
    const Id = req.body.Id;
    const State = await  city.findOne({ _id: mongoose.Types.ObjectId(Id)});
    console.log(State);
    return res.json({data: State,message: "State Records"})
}

exports.getcityid = getcitywithid;
exports.getcity = getcity;
exports.saveCity = saveCity;
exports.UpdateCity = UpdateCity;