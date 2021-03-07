import React, {Component} from 'react';

class reactState extends Component{

    //state only work on Component function 
    state = {
        persons : [
            {name: 'Jobayer', age: 20, },
            {name: 'Tuser', age: 21},
            {name: 'Al Mahmud', age: 23}
        ]
    }

    render(){

        return (
            <div>
                <h1>My Name : {this.state.persons[0].name} My Age: {this.state.persons[0].age} </h1>
                <h2>My name : {this.state.persons[1].name} My age: {this.state.persons[1].age}</h2>
                <h3>My name : {this.state.persons[2].name} My age: {this.state.persons[2].age}</h3>
            </div>
        );
    }
}

export default reactState;