const mongoose = require("mongoose")
require('dotenv').config()

const UserShema = new mongoose.Schema({
 email:{type:String,required:true},
 password:{type:String,required:true}

})

const UserData = mongoose.model("users",UserShema)

module.exports = {UserData}