import React,{Component} from 'react';
import Comment from './comment';

class Question extends Component{
    constructor(props){
        super(props);
        this.state={
            content:"",
            post:{}
        }
    }
    componentDidMount(){
        this.fetchPost();
    }

    componentDidUpdate(prevProps) {
        if(this.props.postid !== prevProps.postid){
          this.fetchPost();
        }
    } 

    render(){
        return(
            <div>
                <div className="row pt-3">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-8 font-weight-bold"><h6>{this.state.post.userName}</h6></div>
                            <div className="col-sm-4 text-right">{new Date(this.state.post.date).toLocaleString()}</div>
                        </div>
                        <div>
                            <h3>{this.state.post.content}</h3>
                        </div>
                        <div>
                            <div className="form-group p-3">
                                <div>
                                    <textarea className="form-control" onChange={this.textRef.bind(this)}/>
                                </div>
                                <div className="text-right p-2">
                                    <button className="btn btn-primary" onClick={this.postComment}>Answer it!</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-2 pl-4">
                                <Comment state={this.props.state} postid={this.props.postid}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        )
    }
    
    textRef=(element)=>{
        this.setState({content:element})
    }

    fetchPost=()=>{
        var post={
            token:this.props.state.token,
            _id:this.props.postid
        }
        fetch("http://127.0.0.1:4000/post/findSpecific",{
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
                console.log(res)
                this.setState({post:res[0]});
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }

    postComment=(event)=>{
        event.preventDefault();
        var comment={
            token:this.props.state.token,
            userId:this.props.postid,
            content:this.state.content,
            userName:this.props.state.userName,
            date:new Date.now()
        }
        fetch("http://127.0.0.1:4000/post/findSpecific",{
                method:'POST',
                headers:{
                    'content-Type': 'application/json'
                },
                body:JSON.stringify(comment)
            })
            .then(res=>{
                if(res.ok)
                    return res.json()
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }
}

export default Question;