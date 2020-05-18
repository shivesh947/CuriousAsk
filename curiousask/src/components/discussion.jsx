import React,{Component} from 'react';
import Question from './question';
import {withRouter} from 'react-router-dom';
class Discussion extends Component{
    constructor(props){
        super(props);   
        this.state={}
    }

    render(){
        return(
            <div>
                <div>
                <div className="display-4 text-light font-weight-bolder text-center p-3 bg-info">
                    Discussion
                </div>
                {/* <button onClick={this.handleCross}>cross</button> */}
                </div>
                <div>
                    {/* {console.log(this.props.location.state)} */}
                    <Question state={this.props.state} postid={this.props.postid}/>
                </div>
            </div>
        )
    }

}

export default Discussion;