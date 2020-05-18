import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import QuestionPost from './questionPost';
import Discussion from './discussion';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            postType:"0",
            postList:[],
            postid:""
        }
    }    
    componentDidMount(){
        this.setState({postType:this.props.search})
        this.getPost();
    }
    render(){
        return(
            <div className="row">
                    <div className="col-sm-7">
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
                                        <div>
                                        <div className="text-right">
                                            {/* <Link to={{
                                                pathname:'/discussion/'+post._id
                                            }} 
                                            target="_blank" className="btn btn-primary">discussion</Link> */}
                                            <button className="btn btn-primary" onClick={this.togglePop}>discussion</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                     </div>   
                     <div className="col-sm-5"><Discussion state={this.props.state} postid={this.state.postid}/></div>
                     </div>
        )
    }

    togglePop=(element)=>{
        this.setState({postid:element})
    }

    togglePop1=()=>{
        console.log("yaha")
        this.setState({seen:!this.state.seen})
    }

    getPost=()=>{
        var post={token:this.props.state.token,
            typeOf:this.state.postType}
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