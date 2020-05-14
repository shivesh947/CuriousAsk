import React,{Component} from 'react';
import Question from './question';

class Discussion extends Component{
    // contructor(props){
    //     super(props);   
    // }
    render(){
        return(
            <div>
                <div className="display-3 text-light font-weight-bolder text-center p-3 bg-danger">
                    CuriousAsk
                </div>
                <div>
                    {/* <Question state={
                        token=this.props.token,
                        userNamethis.props.userName,
                        userId=this.props.userId,
                        postId=this.props.postId
                    }/> */}
                </div>
            </div>
        )
    }
}

export default Discussion;