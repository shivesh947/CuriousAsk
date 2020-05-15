import React,{Component} from 'react';
import Question from './question';

class Discussion extends Component{
    constructor(props){
        super(props);   
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="display-3 text-light font-weight-bolder text-center p-3 bg-danger">
                    CuriousAsk
                </div>
                <div>
                    <Question state={this.props.state }/>
                </div>
            </div>
        )
    }
}

export default Discussion;