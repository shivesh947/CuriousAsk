import React,{Component} from'react';

class Comment extends Component{
    render(){
        return(
            <div>
                <div className="font-weight-bold">
                    username of commenter
                </div>
                <div className="p-2 pl-4">
                    comment
                </div>
            </div>
        )
    }
}

export default Comment;