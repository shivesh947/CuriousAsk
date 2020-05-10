const express = require('express');
const bodyParser = require('body-parser');
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


app.get('/',(req,res)=>res.send('Curious Ask!'));

app.listen(port,()=>console.log(listening));