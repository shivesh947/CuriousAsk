const express = require('express')
const router = express.Router()
const PostsModel = require('./../models/post')

PostsModel.post('/addPost',(req,res)=>{
    PostsModel.addPost(req,(error,response)=>{
        if(error){
            res.sendStatus('403')
        }else{
            res.send('post has been added')
        }
    })
})

PostsModel.get('/findTopic',(req,res)=>{
    PostsModel.findTopic(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

PostsModel.get('/findSpecific',(req,res)=>{
    PostsModel.findSpecific(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

PostsModel.get('/findAll',(req,res)=>{
    PostsModel.findAll(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

PostsModel.get('/findUser',(req,res)=>{
    PostsModel.findUser(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})