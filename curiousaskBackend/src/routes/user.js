const express = require('express')
const router = exprress.Router()
const UsersModel = require('./../models/user')

router.post('/logIn',(req,res)=>{
    UsersModel.logIn(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

router.post('/addUser',(req,res)=>{
    UsersModel.addUser(req,(error,response)=>{
        if(error){
            res.sendStatus('403')
        }else{
            res.send(response)
        }
    })
})