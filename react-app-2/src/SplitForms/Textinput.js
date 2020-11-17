import React from 'react';
import PropsTypes from 'prop-types';


const TextInput = (props) =>(
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className="form-control" 
            type= {props.type}
            name= {props.name} 
            palceholder= {props.palceholder} 
            value= {props.value}   
            onChange= {props.onChange} 
        />
    </div>
);

TextInput.propsTypes = {
    label: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired, 
    type: PropsTypes.string.isRequired, 
    palceholder: PropsTypes.string.isRequired, 
    onChange: PropsTypes.func.isRequired 
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    palceholder: ''
}

export default TextInput;