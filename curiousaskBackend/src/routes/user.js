const express = require('express')
const router = express.Router()
const UsersModel = require('./../models/user')
const jwt = require('jsonwebtoken')

const tokenGenerator = (user,email)=>{
    console.log("hello")
    const token = jwt.sign(
        { userName:user,
        eMail:email }, 
        "secretKey", {
		algorithm: "HS256",
    })
    return token
}

router.post('/logIn',(req,res)=>{
    // var token = tokenGenerator("response.userName","response.eMail");
    //     console.log(token)
    UsersModel.logIn(req,res,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            Console.log("1");
            var token = tokenGenerator(response.userName,response.eMail);
            res.send(token,response)
        }
            // res.send(token,response)
    })
})

router.post('/addUser',(req,res)=>{
    UsersModel.addUser(req,(error,response)=>{
        if(error){
            res.sendStatus('403')
        }else{
            var token = tokenGenerator(response.userName,response.eMail);
            res.send(token,response)
        }
    })
})

module.exports = router;