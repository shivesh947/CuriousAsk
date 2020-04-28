import React, {Component} from 'react';
import MyQuestion from './myQuestion';
import Profile from './profile';
import Home  from './home';

class ProfilePage extends Component{
    constructor(){
        super();
        this.state={
            check:0,
            search:""
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.changeOne}>home</button>
                <button onClick={this.changeTwo}>profile</button>
                <button onClick={this.changeThree}>information</button>
                {this.state.check===0?(<Home/>):this.state.check===1?(<MyQuestion/>):(<Profile/>)}
            </div>
        )
    }
    changeOne=()=>{
        this.setState({check:0});
    }
    changeTwo=()=>{
        this.setState({check:1});
    }
    changeThree=()=>{
        this.setState({check:2});
    }
}
export default ProfilePage;