import React, {Component} from "react";

class Intro extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>CuriousAsk</div>
                    <div>
                        <form >
                            <input type="text" placeholder="UserName"></input>
                            <input type="password" placeholder="Password"></input>
                            <button type="submit">logIn</button>
                        </form>
                    </div>
                </div>
                <div>
                    <form>
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    <input type="text" placeholder="UserName"></input>
                    <input type="email" placeholder="Email"></input>
                    </form>
                </div>
            </div>
        )
    }
}
export default Intro;