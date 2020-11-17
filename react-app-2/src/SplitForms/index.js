import React, {Component} from 'react';
import Forms from './Forms';


class SplitForms extends Component{

    state ={
        name: '',
        email: '',
        password: '',
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    submitHandler = (event) =>{
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name:'', email:'', password:''});
    };



    render(){
        
        return (
            <div className="container">
                <Forms
                    values = {this.state}
                    changeHandler ={this.changeHandler}
                    submitHandler = {this.submitHandler}
                />
            </div>
        );
    }
}

export default SplitForms;