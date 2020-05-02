import React,{Component} from 'react';
import QuestionPost from './questionPost';

class MyQuestion extends Component{
    render(){
        return(
            <div>
                <div>
                    <QuestionPost/>
                </div>
                <div>
                    <div>
                        <div className="p-4">
                            <div className="row">
                                <div className="col-sm-8 font-weight-bold">username</div>
                                <div className="col-sm-4 text-right">date</div>
                            </div>
                            
                            <div>
                                <h1> my question</h1>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary">discussion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default MyQuestion;