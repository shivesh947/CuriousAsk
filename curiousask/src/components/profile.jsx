import React,{Component} from 'react';

class Profile extends Component{
    constructor(){
        super();
        this.state={
            pass1:"",
            pass2:"",
            nope:false
        }
        this.textRef1=React.createRef();
        this.textRef2=React.createRef();
    }
    render(){
        return(
            <div>
                <div className="p-4 display-4">
                    Welcome Username!
                </div>
                <div className="p-3">
                    <h2>UserName:</h2>
                    <h3 className="pl-5">username</h3>
                </div>
                <div className="p-3">
                    <h2>Email:</h2>
                    <h3 className="pl-5">shivamkaushik12799@gmail.com</h3>
                </div>
                <div className="p-3">
                    <div>
                        <h2>Change Password:</h2>
                    </div>
                    <div className="pl-5">
                        <div className="p-2">
                            <input type="text" className="form-control" placeholder="Current Password" ref={this.textRef1}></input>
                        </div>
                        <div className="p-2">
                            <input type="text" className="form-control" placeholder="New Password" ref={this.textRef2}></input>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-6">
                                {this.state.nope?(<h6 className="text-danger">New password can not be same as old one!</h6>):<p></p>}
                            </div>
                            <div className="p-2 text-right col-sm-6">
                            <button className="btn btn-primary" onClick={this.changePass}>Change My Password!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // textRef1=(element)=>{
    //     this.setState({pass1:element});
    // }

    // textRef2=(element)=>{
    //     this.setState({pass2:element});
    // }

    changePass=(event)=>{
        event.preventDefault();
        if(this.state.pass1===this.state.pass2){
            this.setState({nope:true});
        }else{
            console.log(this.state.pass1);
            console.log(this.state.pass2);
            var user={
                pass1:this.state.pass1,
                pass2:this.state.pass2
            }
            console.log(user);
        }
    }
}

export default Profile;