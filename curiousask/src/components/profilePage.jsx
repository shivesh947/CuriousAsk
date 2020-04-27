import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import Profile from './profile';
import home  from './home';

class ProfilePage extends Component{
    render(){
        return(
            <div>
                <Header/>
                {/* <Router>
                <div>
                    <Switch>
                        <Route path="/home" component={Home} exact/>
                        <Route path="/profile" component={Profile}/>
                        <Route component={Error}/>
                    </Switch>
                </div> 
            </Router> */}
            </div>
        )
    }
}
export default ProfilePage;