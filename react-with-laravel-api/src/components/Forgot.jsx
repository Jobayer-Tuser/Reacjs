import React, {Component} from 'react';

class Forgot extends Component{
    render(){
        return (
            <div>
                 <br/>
                <div className="jumbotron col-md-6 offset-md-4">
                    <div className="container">
                        <h3 className="display-4">Forgot Password</h3>
                        <form>
                            <div className="form-group">
                                <label HtmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgot;