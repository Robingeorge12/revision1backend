const {UserData} = require("../model/Users.model")
const {Router} = require("express")
const bcrypt = require('bcrypt');


const login = Router()

login.post("/",async (req,res)=>{

    const {email,password} = req.body
    console.log(email, password)
    const check = await UserData.findOne({email:email})

    if(check){


    }else{

        
    }


})

module.exports = { login }