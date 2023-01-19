const { Router } = require("express")
const { UserData } = require("../model/Users.model")
const bcrypt = require('bcrypt');

const signup = Router()

signup.post("/", async (req, res) => {

    const { email, password } = req.body
    console.log(email, password)
    const check = await UserData.findOne({ email: email })
    if (check) {
        res.send({ msg: "user already exist" })

    } else {
        bcrypt.hash(password, 4, async function (err, hash_pass) {

            if (err) {

                res.send({ msg: "signup has some error occured" })
            } else {

                const new_userData = UserData({
                    email,
                    password: hash_pass
                })
            }

            try {

                await new_userData.save()
                res.send({ msg: "signup sucess" })
            } catch (er) {
                res.send({ msg: "signup has some error" })
            }

        });

    }


})
module.exports = { signup }