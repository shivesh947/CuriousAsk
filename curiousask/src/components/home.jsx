import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Home extends Component{    
    render(){
        return(
            <div>
                <div className="p-4">
                    <div className="row">
                        <div className="col-sm-8 font-weight-bold">username</div>
                        <div className="col-sm-4 text-right">date</div>
                    </div>
                    
                    <div>
                        <h1>question</h1>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-primary">discussion</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;