import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import QuestionPost from './questionPost';

class MyQuestion extends Component{
    constructor(props){
        super(props);
        this.state={
            postList:[]
        }
    }
    componentDidMount(){
        this.fetchPost();
    }
    render(){
        return(
            <div>
                <div>
                    <QuestionPost state={this.props.state}/>
                </div>
                <div>
                    {this.state.postList.map(post=>
                    <div>
                        <div className="p-4">
                            <div className="row">
                                <div className="col-sm-8 font-weight-bold">{post.userName}</div>
                                <div className="col-sm-4 text-right">date</div>
                            </div>
                            
                            <div>
                                <h1>{post.content}</h1>
                            </div>
                            <div className="text-right">
                                <Link to="/discussion" target="_blank" state={this.props.state} postId={post._id} className="btn btn-primary">discussion</Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
        )
    }
    fetchPost=()=>{
        var post={
            userId:this.props.state.userId
        }
        fetch("http://127.0.0.1:4000/post/findUser"+post,{
            method:'GET',
            headers:{
                'content-Type': 'application/json'
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            this.setState({postList:res});
        })
        .catch(res=>{
            console.log(`The error is : ${JSON.stringify(res)}`)
        })
    }
}

export default MyQuestion;