var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    typeOf:{
        type:String,
        requiredtrue
    },
    date:Number
})

const PostModel = mongoose.model("Posts",postSchema,"posts");

PostModel.findSpecific = function(req,callBack){
    let post = { typeOf: req.body.type};
    JSON.stringify(post);
    PostModel.find(post,callBack).sort({date: -1});
}

PostModel.findAll = function(req,callBack){
    PostModel.find(callBack).sort({date:-1});
}

module.exports = PostModel;