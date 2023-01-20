const {Router} = require("express")
const {auth} = require("../middleware/authentication")
const bugs = Router()

bugs.get("/",auth,(req,res)=>{

    res.status("200").send("welcome")
})

module.exports = {bugs}