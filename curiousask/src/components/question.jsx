import React,{Component} from 'react';
import Comment from './comment';

class Question extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div className="p-5 px-5">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-8 font-weight-bold"><h4>Username</h4></div>
                            <div className="col-sm-4 text-right"><h6>date</h6></div>
                        </div>
                        <div>
                            <h1>Question</h1>
                        </div>
                        <div>
                            <div className="form-group p-3">
                                <div>
                                    <textarea className="form-control" ref={this.textRef}/>
                                </div>
                                <div className="text-right p-2">
                                    <button className="btn btn-primary" onClick={postComment}>Answer it!</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-2 pl-4">
                                <Comment/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
    postComment=(event)=>{
        event.preventDefault();
        comment={
            token:this.props.token,

        }
    }
}

export default Question;