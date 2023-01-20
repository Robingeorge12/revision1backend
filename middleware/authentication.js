const bcrypt = require('bcrypt');
const { login } = require("../route/Login.route")
var jwt = require('jsonwebtoken');
require('dotenv').config()


const auth = async (req, res, next) => {

    const token  = req.headers.authorization
    console.log(token)
    try {
        var decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded)
         req.body.email = decoded.email
        next()
        
      } catch(err) {
        res.send({"msg":"you can't move to bugs"})
      }
   
}

module.exports = { auth }