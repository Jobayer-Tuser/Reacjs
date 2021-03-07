import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';
class Login extends Component{
    state = {
        email: '',
        password: '',
        messages: '',
        loggedIn: false,
    };

    onSubmitHandler=(e)=>{
        e.preventDefault();
        const formData = {
           email: this.state.email,
           password: this.state.password
        };
        let url = "http://localhost/laravel-project/laravel-react/public/login";
        Axios.post(url, formData)
            .then((response)=>{
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);//seta the token in loacal storage
                this.setState({loggedIn : true})
                this.props.setUser(response.data.user);
            })
            .catch((error)=>{
                console.log(error);
            });
    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/profile"/>
        }
        return (
            <div>
                <br/>
                <div className="jumbotron col-md-6 offset-md-4">
                    <div className="container">
                        <h3 className="display-4">Login Form</h3>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label HtmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name="email" className="form-control"  placeholder="Enter email" onChange={(e)=>(this.setState({email: e.target.value}))}/>
                                
                            </div>
                            <div className="form-group">
                                <label HtmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>(this.setState({password: e.target.value}))}/>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form><br/>
                        Forgot your password <Link to="/forgot" >Click Here</Link><br/>
                        I dont have a account <Link to="/register" >Register now</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;