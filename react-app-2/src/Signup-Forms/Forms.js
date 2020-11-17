import React from 'react';
import TextInput from './text-inputs';
import PropTypes from 'prop-types';

const Forms = ({ values, agreement, error, onSubmitHandler, onChangeHandler, agreementHandler }) =>{

    return(
        <form onSubmit={ onSubmitHandler }>
            <TextInput
                label= 'Your Name'
                name= 'name'
                placholder= 'Jobayer Al Mahmud Tuser'
                value= { values.name }
                error = {error.name}
                onChange= { onChangeHandler } 
            />

            <TextInput
                label= 'Your Email'
                type= 'email'
                name= 'email'
                placholder= 'Jobayer@gmail.com'
                value= { values.email }
                error = {error.email}
                onChange= { onChangeHandler } 
            />

            <TextInput
                label= 'Your Password'
                type= 'password'
                name= 'password'
                placholder= '**********'
                value= { values.password }
                error = {error.password}
                onChange= { onChangeHandler } 
            />

            <TextInput
                label= 'Your Birthdate'
                type= 'date'
                name= 'birthDate'
                value= { values.birthDate }
                error = {error.birthDate}
                onChange= { onChangeHandler } 
            />

            <div className="form-group">
                <label>Are you Male or Female</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="male" onChange={ onChangeHandler } /> Male
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="female" onChange={ onChangeHandler } /> Female
                </div>
             {/* { error.gender && <span className="invalid-feedback">{error.gender}</span> } */}
            </div>

            <div className="form-check">
                <input checked={agreement} className="form-check-input" type="checkbox" name="agreement" onChange={ agreementHandler } />I agree with term and condition
            </div>
            <button type="submit" className="btn btn-sm btn-info" disabled={!agreement}> Create User</button>

        </form>
    );
}

Forms.propTypes ={
    values: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
    agreementHandler:PropTypes.bool.isRequired
}

export default Forms;