import React, {Component} from 'react';
import './Profile.style.css'

import Bio from './Bio';
import Skills from './Skills';
import Link from './Links';

class Profile extends Component {

    myBio = {
        name: "Jobayer Al Mahmud Tuser",
        title: "I am web application developer",
        skillA: "Php",
        skillB: "Java",
        skillC: "python"
    }
    render(){
        // console.log(this.props);

        return (
            <div className="container">
                <Bio name={this.myBio.name} title={this.myBio.title}/>
                <Skills 
                    skillA = {this.myBio.skillA}
                    skillB = {this.myBio.skillB}
                    skillC = {this.myBio.skillC}
                />
                <Link/>
            </div>
        );
    }

}

export default Profile;
