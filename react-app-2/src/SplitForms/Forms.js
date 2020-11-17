import React from 'react';
import TextInput from './Textinput';
import PropsTypes from 'prop-types';

const Forms = (props) =>(
    <form onSubmit= {props.submitHandler}>
    <h2 className="text-warning text-center">React Form Input Control</h2>
        <TextInput
            name="name"
            label = "Enter your Full Name"
            palceholder = "Jobayer Al Mahmud"
            value ={props.values.name}
            onChange ={props.changeHandler}
        
        />
        <TextInput
            name="email"
            type ="email"
            label = "Enter your email"
            palceholder = "Jobayer@gmail.com"
            value ={props.values.email}
            onChange ={props.changeHandler}
        
        />
        <TextInput
            name="password"
            type="password"
            label = "Enter your password"
            palceholder = "************"
            value ={props.values.password}
            onChange ={props.changeHandler}
        
        />
    <button type="submit" className="btn btn-sm btn-info"> Show Data</button>
</form>

);

Forms.propsTypes ={
    values: PropsTypes.object.isRequired,
    changeHandler: PropsTypes.func.isRequired,
    submitHandler: PropsTypes.func.isRequired
}

export default Forms;