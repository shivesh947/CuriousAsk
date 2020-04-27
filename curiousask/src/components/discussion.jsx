import React,{Component} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './footer';
import Question from './question';

class Discussion extends Component{
    render(){
        return(
            <div>
                <Question/>
                <Footer/>
            </div>
        )
    }
}

export default Discussion;