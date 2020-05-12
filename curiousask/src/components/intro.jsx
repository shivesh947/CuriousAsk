import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Intro extends Component{
    constructor(){
        super();
        this.state={
            pnm:false,
            enm:false,
            unm:false,
            lnm:false,
            userDetail:[],
            redir:false
        }
    }
    render(){
        return(
            <div style={{widht:'vw'}}>
                <div className="row  align-middle h-50 p-3 bg-danger">
                    <div className="col-sm-7 display-4 text-light font-weight-bolder">CuriousAsk</div>
                    <div className="col-sm-5 pt-3">
                        <form onSubmit={this.login}>
                            <div className="form-group row">
                                <div className="col-xs-4 p-1">
                                    <input type="text" placeholder="UserName" className="form-control" ref="logUser"></input>
                                </div>
                                <div className="col-xs-4 p-1">
                                    <input type="password" placeholder="Password" className="form-control" ref="logPass"></input>
                                </div>
                                <div className="col-xs-4 p-1">
                                    <button type="submit"  className="btn btn-primary" >logIn</button>
                                </div>   
                            </div>
                        </form>
                        {this.state.lnm?(<div className="text-light text-center font-weight-bold">UserName or Password is wrong...try again!</div>)
                        :<p></p>}
                    </div>
                </div>
                <div className="row bg-light pt-5" style={{height:'80vh'}}>
                    <div className="col-sm-7 display-2 text-danger font-weight-bolder text-center">
                        Curious about <br/> something...<br/>Ask it here!
                    </div>
                    <div className="col-sm-5 form-group px-5">
                        <form onSubmit={this.signup}>
                            <div className="row pl-3 pr-3">
                                <div className="col-sm-6 pr-1">
                                    <input type="text" placeholder="First Name" className="form-control" ref="fname"></input>
                                </div>
                                <div className="col-sm-6 pl-1">
                                    <input type="text" placeholder="Last Name" className="form-control" ref="lname"></input>
                                </div>
                            </div>
                            <div className="col-sm-12 pt-3">
                                <input type="text" placeholder="UserName" className="form-control" ref="uname"></input>
                            </div>
                            <div className="col-sm-12 pt-3">
                                <input type="email" placeholder="Email" className="form-control" ref="email"></input>
                            </div>
                            <div className="col-sm-12 pt-3">
                                <input type="password" placeholder="Password" className="form-control" ref="pass"></input>
                            </div>
                            <div className="col-sm-12 pt-3">
                                <input type="password" placeholder="Rewrite Password" className="form-control" ref="pass2"></input>
                            </div>
                            {this.state.pnm?(<div className="pt-3 pl-3 text-danger text-left">Your password does not match!</div>)
                            :this.state.enm?(<div className="pt-3 pl-3 text-danger text-left">This email is already in use!</div>)
                            :this.state.unm?(<div className="pt-3 pl-3 text-danger text-left">This username is taken try another!</div>)
                            :<p></p>}
                            <div className="col-sm-12 pt-3 text-center">
                                <button type="submit"  className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>   
            </div>
        )
    }
    
    login=(event)=>{
        event.preventDefault();
        var user={
            userName:this.refs.logUser.value,
            password:this.refs.logPass.value
        }
        fetch("http://127.0.0.1/user/logIn",{
            method:'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:{user}
        })
        .then(res=>{
            if(res.ok)
                return res.json()
        })
        .then(res=>{
            if(res.ok)
                this.setState({userDetail:res,redir:true})
        })
        .then(res=>{
            this.setState({lnm:true})
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(user);
    }

    signup=(event)=>{
        event.preventDefault();
        var p1=this.refs.pass.value;
        var p2=this.refs.pass2.value;
        if(p1===p2){       
            var user={
                username:this.refs.uname.value,
                password:this.refs.pass.value,
                firstName:this.refs.fname.value,
                lastName:this.refs.lname.value,
                eMail:this.refs.email.value
            }
            fetch("http://127.0.0.1/user/addUser",{
            method:'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:{user}
            })
            .then(res=>{
                if(res.ok)
                    return res.json()
            })
            .then(res=>{
                if(res.ok)
                    this.setState({userDetail:res,redir:true})
            })
            .then(res=>{
                this.setState({lnm:true})
            })
            .catch(err=>{
                console.log(err)
            })
            console.log(user);
        }else{
            this.setState({pnm:true})
        }
    }
}
export default Intro;