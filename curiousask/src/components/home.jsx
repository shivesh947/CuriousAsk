import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import QuestionPost from './questionPost';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            postType:"0",
            postList:[]
        }
    }    
    componentDidMount(){
        this.setState({postType:this.props.state.search})
        this.getPost();
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
                                    <Link to="/discussion" state={this.props.state} postId={post._id} target="_blank" className="btn btn-primary">discussion</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    getPost=()=>{
        var post={token:this.props.state.token,
            typeOf:this.state.postType}
        if(this.state.postType==="0"){
            fetch("http://127.0.0.1:4000/post/findAll"+post,{
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
        }else{
            fetch("http://127.0.0.1:4000/user/findTopic"+post,{
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
}

export default Home;