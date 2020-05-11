const express = require('express')
const router = express.Router()
const PostsModel = require('./../models/post')

router.post('/addPost',(req,res)=>{
    PostsModel.addPost(req,(error,response)=>{
        if(error){
            res.sendStatus('403')
        }else{
            res.send('post has been added')
        }
    })
})

router.get('/findTopic',(req,res)=>{
    PostsModel.findTopic(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

router.get('/findSpecific',(req,res)=>{
    PostsModel.findSpecific(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

router.get('/findAll',(req,res)=>{
    // console.log("route check")
    PostsModel.findAll(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

router.get('/findUser',(req,res)=>{
    PostsModel.findUser(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

module.exports = router;