import React,{Component} from 'react';

class QuestionPost extends Component{
    
    constructor(){
        super();
        this.state={
            val:"",
            post:""
        }
    }

    render(){
        return(
            <div className="form-group p-3">
                <div>
                    <textarea className="form-control" placeholder="Curious about something.... Ask it here!" onChange={this.textRef.bind(this)}/>
                </div>
                <div className="row p-2">
                    <div className="col-sm-6">
                        <select onChange={this.type.bind(this)} className="btn btn-light" >
                            <option>select the type!</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Architecture</option>
                            <option value="3">Management</option>
                            <option value="4">Business</option>
                            <option value="5">Mechanical</option>
                            <option value="6">Electrical</option>
                        </select>
                    </div>
                    <div className="text-right col-sm-6">
                        <button className="btn btn-primary" onClick={this.ask}>Ask it!</button>
                    </div>
                </div>
            </div>
        )
    }
    
    textRef=(element)=>{
        this.setState({val:element.target.value})
    }

    type=(element)=>{
        this.setState({post:element.target.value})
    }
    
    ask=(event)=>{
        event.preventDefault();
        var post={
            ques:this.state.val,
            type:this.state.post
        }
        console.log(post);
    }
}

export default QuestionPost;