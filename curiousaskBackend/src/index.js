const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('./dbConnection');
const app = express();
const port = 3001;

const user=require('./routes/user');
const post=require('./routes/post');
const comment=require('./routes/comment');

app.use('/user',user);
app.use('/post',verifyUser,post);
app.use('/comment',verifyUser,comment);

app.use(bodyParser.json());

app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

verifyUser=(err,req,res)=>{ 
    const token = req.token
    if(err||!token){
        res.sendStatus('401');
    }else{
        var payload
        try {
            payload = jwt.verify(token, "secretKey")
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).end()
            }
            return res.status(400).end()
        }
        res.send(`Welcome ${payload.username}!`)
    }
}

app.get('/',(req,res)=>res.send('Curious Ask!'));

app.listen(port,()=>console.log(listening));