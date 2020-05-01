import React,{Component} from 'react';
 
class Question extends Component{
    render(){
        return(
            <div className="p-5 px-5">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-8 font-weight-bold"><h5>Username</h5></div>
                            <div className="col-sm-4 text-right"><h6>date</h6></div>
                        </div>
                        <div>
                            <h1>Question</h1>
                        </div>
                        <div>
                            <div className="p-2 pl-4">
                                <div className="font-weight-bold">
                                    username of commenter
                                </div>
                                <div className="p-2 pl-4">
                                    comment
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default Question;