const { UserData } = require("../model/Users.model")
const { Router } = require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const login = Router()

login.post("/", async (req, res) => {

    const { email, password } = req.body
    console.log(email, password)
    const check = await UserData.findOne({ email: email })

    if (check) {

        const id = check._id
        const email = check.email
        const hash = check.password
        bcrypt.compare(password, hash, function (err, result) {

            if (err) {
                res.send({ msg: "error occure in login" })
            }
            if (result) {
                var token = jwt.sign({ email: email,ID:id }, process.env.SECRET);

                res.send({ "token": token })
            } else {
                res.send({ msg: "check Login again" })
            }
        })

    } else {
        res.send({ msg: "signup again" })

    }


})

module.exports = {login}