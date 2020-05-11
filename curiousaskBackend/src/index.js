const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('./dbConnection');
const app = express();
const port = 3001;

const user=require('./routes/user');
const post=require('./routes/post');
const comment=require('./routes/comment');

app.use(express.json());
app.use(bodyParser.json());

const verifyUser=(req,res,next)=>{ 
    // console.log("here")
    // console.log(err.body)
    const token = req.body.token
    if(!token){
        res.sendStatus('401');
    }else{
        var payload
        try {
            payload = jwt.verify(token, "secretKey")
        console.log("token ok")
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                // console.log("here1")
                return res.status(401).end()
            }
            // console.log("here2")
            return res.status(400).end()
        }
        // console.log("token ok")
        // res.send(`Welcome ${payload.username}!`)
        // res.send('ok')
        next();
    }
}

app.use('/user',user);
app.use('/post',verifyUser,post);
app.use('/comment',verifyUser,comment);

app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.get('/',(req,res)=>res.send('Curious Ask!'));

app.listen(port,()=>console.log('listening'));