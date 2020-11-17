import React from 'react'

const person = (props) =>{

    return (
        <div>
            <h3>My name is : {props.name} and my age : {props.age}</h3>
            <h2>{props.children}</h2>
        </div>
    );
}

export default person;