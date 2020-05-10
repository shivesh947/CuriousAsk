const express = require('express')
const router = exprress.Router()
const UsersModel = require('./../models/user')
const jwt = require('jsonwebtoken')

router.post('/logIn',(req,res)=>{
    UsersModel.logIn(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            var token = tokenGenerator(response.userName,response.eMail);
            res.send(token,response)
        }
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

tokenGenerator = (user,email)=>{
    const token = jwt.sign(
        { userName:user,
        eMail:email }, 
        "secretKey", {
		algorithm: "HS256",
    })
    return token
}