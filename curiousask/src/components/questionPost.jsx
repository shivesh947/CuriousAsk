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
                    <textarea className="form-control" ref={this.textRef}/>
                </div>
                <div className="row p-2">
                    <div className="col-sm-6">

                    </div>
                    <div className="text-right col-sm-6">
                        <button className="btn btn-primary">Ask it!</button>
                    </div>
                </div>
            </div>
        )
    }
    textRef=(element)=>{
        this.setState({val:element})
    }
}

export default QuestionPost;