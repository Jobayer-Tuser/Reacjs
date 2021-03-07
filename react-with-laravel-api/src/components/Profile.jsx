import React, {Component} from 'react';


class Profile extends Component{

    render(){
        let name;
        let email;
        if(this.props.user){
            name = this.props.user.name;
            email = this.props.user.email;
        }
        return (
            <div>
               <br/>
                <div className="jumbotron col-md-6 offset-md-4">
                    <div className="container">
                        <h5 className="display-4">Welcome page</h5>
                        <li> User Name : {name} </li>
                        <li> User Email : {email} </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;