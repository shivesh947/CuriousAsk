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
            <div style={{widht:'vw'}}>
                <div className="row  align-middle h-50 p-3 bg-danger">
                    <div className="col-sm-3 display-4 text-light font-weight-bolder">CuriousAsk</div>
                    <div className="col-sm-3 pt-3">
                        <form onSubmit={this.login}>
                            <div className="form-group d-flex flex-row-reverse row">
                                <div className="col-xs-4 pt-1">
                                    <button type="submit"  className="btn btn-primary">search</button>
                                </div>   
                                <div className="col-xs-8 pt-1">
                                    <input type="text" placeholder="UserName" className="form-control" ref="logUser"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6 d-flex flex-row-reverse row pt-3">
                        <div className="col-xs-3">
                            <button type="submit"  className="btn text-light btn-lg">logout</button>
                        </div>
                        <div className="col-xs-3">
                            <button type="submit" className="btn text-light btn-lg">Profile</button>
                        </div>
                        <div className="col-xs-3">
                            <button type="submit"  className="btn text-light btn-lg">My Questions</button>
                        </div>
                        <div className="col-xs-3">
                            <button type="submit"  className="btn text-light btn-lg">Home</button>
                        </div>
                    </div>
                </div>
                <div className="row bg-light pt-5" style={{height:'80vh'}}>
                    <div className="col-sm-3 display-2 text-danger font-weight-bolder text-center">
                    </div>
                    <div className="col-sm-9 form-group px-5">
                        
                    </div>
                </div>   
            </div>
            // <div>
            //     <button onClick={this.changeOne}>home</button>
            //     <button onClick={this.changeTwo}>profile</button>
            //     <button onClick={this.changeThree}>information</button>
            //     {this.state.check===0?(<Home/>):this.state.check===1?(<MyQuestion/>):(<Profile/>)}
            // </div>
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