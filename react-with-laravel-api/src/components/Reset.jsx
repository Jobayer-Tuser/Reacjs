import React, {Component} from 'react';

class Reset extends Component{
    render(){
        return (
            <div>
                 <br/>
                <div className="jumbotron col-md-6 offset-md-4">
                    <div className="container">
                        <h3 className="display-4">Reset Password</h3>
                        <form>
                            <div className="form-group">
                                <label HtmlFor="username">Pin Code</label>
                                <input type="email" className="form-control" id="username"  placeholder="Enter user name"/>
                            </div>
                            <div className="form-group">
                                <label HtmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label HtmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label HtmlFor="cPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="c_password" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset;