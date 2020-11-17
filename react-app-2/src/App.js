//import logo from './logo.svg';
import './App.css'
import React, {Component} from 'react';
//import Jsx from './Persons/ReactJSX';
// import Person from './Persons/Persons.js';
// import Profile from './Profile/index.js';
// import Skill from './Profile/Skills';
// import Bio from './Profile/Bio';
// import Timer from './Persons/StateExamp';
//import Form from './Forms/index'
//import SpliteForm from './SplitForms/index';
import SignUpForm from './Signup-Forms/index';


class App extends Component{

  //state lifting
  state = {
    users: []
  }
  createUser = (user)=>{
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render(){

    return (
      <div className="App">
        <SignUpForm createUser={this.createUser}/>

        <div className="my-5">
          <h3>All Registerd Users</h3>
          <ul className="list">
              {this.state.users.map( (user)=> (
                <li key={user.id} className="list-item">
                  UserName :{user.name} -  UserEmail: {user.email}
                </li> 
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">

      <Profile></Profile>


      <div style={{marginTop: "30px 20px"}}>
        <h3>List of Coders And Skills</h3>
        <Bio name="tuser" title="i am not a developer i am designer" />
          <b>Jobayer</b>
          <Skill
            skillA = "laravel"
            skillB = "Javascript"
            skillC = "Spring Boot"
          />

      </div> 

      <Timer></Timer>
      <Form></Form>
      <SpliteForm/>
      <SignUpForm/>

    </div>
  );
}*/


/*class App extends Component{
  
  //state only work on Component function 
  state = {
    persons : [
        {name: 'Jobayer', age: 20, },
        {name: 'Tuser', age: 21},
        {name: 'Al Mahmud', age: 23}
    ]
  }
  

  render(){
    return(
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Person 1</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Person 2</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Person 3</Person>
      </div>
    );
  }
}*/

export default App;
