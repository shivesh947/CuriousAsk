const mongoose =  require('mongoose');

const commentSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:ture
    },
    date:Number

})

const CommentModel = mongoose.model("Comments",commentSchema,"comments");

CommentModel.addComment = function(req,callBack){
    let comment=req.body;
    CommentModel.create(comment, callBack);
}

CommentModel.findComment = function(req,callBack){
    let comment = {postId:req.body.postId};
    JSON.stringify(comment);
    CommentModel.find(comment, callBack);
}

module.exports = CommentModel;