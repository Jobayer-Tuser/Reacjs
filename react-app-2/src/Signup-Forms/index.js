import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from './Forms';

const initValues = {
    name:'',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class SignUpForm extends Component{

    state = {
        values :initValues,
        agreement: false,
        error: {}
    };

    onChangeHandler = (event) =>{
        /*
        value is under state so we have access the prperty 
        like this and as like it's not inside direct value 
        so when we input a field the rest field will blank 
        that why we have to add it befor getting the value 
        */
        this.setState({
            values:{
                 ...this.state.values,
                 [event.target.name] : event.target.value
            }
        });

    }
    agreementHandler = (event) =>{
        this.setState({
            agreement: event.target.checked
        });
    }
    
    validate = () =>{
        const error = {}
        const { values:{name, email, password, gender, birthDate} } = this.state;

        if(!name){
            error.name = "Please Provide Your Name";
        }
        else if(name.length > 30){
            error.name = "Your name Can not be grater than 30 charecter";
        }
        if(!email){
            error.email = "Your email is invalid";
        }
        if(!password){
            error.password = "Please provide a password"
        }
        if(!birthDate){
            error.birthDate = "Please provide your birthdate"
        }
        if(!gender){
            error.gender = "Please select your gender";
        }

        return {
            error,
            isValid: Object.keys(error).length === 0
        }
    }
    
    onSubmitHandler = (event) =>{
        event.preventDefault();
        
        const { isValid, error } = this.validate();

        if(isValid){
            this.props.createUser(this.state);
            console.log(this.state);
            event.target.reset();
            this.setState({ values: initValues, agreement: false , error: {} });
        }
        else{
            this.setState({ error })
        }

    }

    render(){

        return(
            <div className="conatainer">
                <h3 className="text-warning text-center">Simple Sign-Up Form</h3>
                <Form
                    values = {this.state.values}
                    agreement={this.state.agreement}
                    error = {this.state.error}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    agreementHandler={this.agreementHandler}
                />
            </div>
        );
    }


}

SignUpForm.propTypes ={
    createUser: PropTypes.func.isRequired
}

export default SignUpForm;