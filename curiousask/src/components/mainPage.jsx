import React, { Component } from "react";
import Intro from './intro';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class MainPage extends Component{
    render(){
        return(
            <div>
                <Intro/>
            {/* <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Intro} exact/>
                        <Route path="/home" component={Home}/>
                        <Route path="/pharmaList" component={PharmaList}/>
                        <Route path="/mediList" component={MediList}/>
                        <Route component={Error}/>
                    </Switch>
                </div> 
            </Router> */}
        </div>
        )
    }
}
export default MainPage;