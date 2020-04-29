import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Intro extends Component{
    render(){
        return(
            <div>
                <div className="row" style={{height:'10vh',padding:'2vh'}}>
                    <div className="col-sm-6" style={{paddingLeft:'2vw'}}><h1>CuriousAsk</h1></div>
                    <div className="col-sm-6">
                        <form>
                            <div className="form-group row" style={{paddingLeft:'10vw'}}>
                                <div className="col-xs-4">
                                    <input type="text" placeholder="UserName" className="form-control"></input>
                                </div>
                                <div className="col-xs-4" style={{paddingLeft:'1vw'}}>
                                    <input type="password" placeholder="Password" className="form-control"></input>
                                </div>
                                <div className="col-xs-4" style={{paddingLeft:'1vw'}}>
                                    <button type="submit"  className="btn btn-primary" >logIn</button>
                                </div>   
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                    </div>
                    <div className="col-sm-5 form-group" style={{padding:'3vw'}}>
                        <form>
                            <div className="row" style={{padding:'1vh'}}>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="First Name" className="form-control"></input>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Last Name" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-sm-12" style={{padding:'1vh'}}>
                                <input type="text" placeholder="UserName" className="form-control"></input>
                            </div>
                            <div className="col-sm-12" style={{padding:'1vh'}}>
                                <input type="email" placeholder="Email" className="form-control"></input>
                            </div>
                            <div className="col-sm-12" style={{padding:'1vh'}}>
                                <input type="password" placeholder="Password" className="form-control"></input>
                            </div>
                            <div className="col-sm-12" style={{padding:'1vh'}}>
                                <input type="password" placeholder="Rewrite Password" className="form-control"></input>
                            </div>
                            <div className="col-sm-12" style={{padding:'1vh',textAlign:'center'}}>
                                <button type="submit"  className="btn btn-primary" >SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>   
            </div>
        )
    }
}
export default Intro;