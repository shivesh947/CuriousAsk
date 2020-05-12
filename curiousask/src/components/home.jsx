import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import QuestionPost from './questionPost';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            postType:0,
            postList:[]
        }
        this.getPost.bind();
    }    
    componentDidMount(){
        this.setState({postType:this.props.type})
        this.getPost();
    }
    render(){
        return(
            <div>
                <div>
                    <QuestionPost />
                </div>
                <div>
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
                                <Link to="/discussion" target="_blank" className="btn btn-primary">discussion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getPost=()=>{
        console.log("hello");
    }
}

export default Home;