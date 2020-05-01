import React,{Component} from 'react';
import Question from './question';

class Discussion extends Component{
    render(){
        return(
            <div>
                <div className="display-3 text-light font-weight-bolder text-center p-3 bg-danger">
                    CuriousAsk
                </div>
                <div>
                    <Question/>
                </div>
            </div>
        )
    }
}

export default Discussion;