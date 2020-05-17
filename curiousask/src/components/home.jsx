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
        this.setState({postType:this.props.search})
        // console.log(this.props.search)
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
                        <div key={post._id}>
                            <div className="p-4">
                                <div className="row">
                                    <div className="col-sm-8 font-weight-bold">{post.userName}</div>
                                    <div className="col-sm-4 text-right">{new Date(post.date).toLocaleString()}</div>
                                </div>
                                <div>
                                    <h1>{post.content}</h1>
                                </div>
                                <div className="text-right">
                                    <Link to="/discussion" state={this.props.state} postid={post._id} target="_blank" className="btn btn-primary">discussion</Link>
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
            // console.log(this.state.postType)
        if(this.state.postType==="0"){
            fetch(`http://127.0.0.1:4000/post/findAll?token=${post.token}`,{
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
            // console.log(post);
            fetch("http://127.0.0.1:4000/user/findTopic",{
                method:'POST',
                headers:{
                    'content-Type': 'application/json'
                },
                body:JSON.stringify(post)
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