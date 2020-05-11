const express = require('express')
const router = express.Router()
const CommentModel = require('./../models/comment')

router.post('/addComment',(req,res)=>{
    CommentModel.addComment(req,(error,response)=>{
        if(error){
            res.sendStatus('403')
        }else{
            res.send('post has been added')
        }
    })
})

router.get('/findComment',(req,res)=>{
    CommentModel.findComment(req,(error,response)=>{
        if(error){
            res.sendStatus('404')
        }else{
            res.send(response)
        }
    })
})

module.exports = router;