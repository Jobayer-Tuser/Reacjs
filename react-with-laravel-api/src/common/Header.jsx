import React, {Component} from 'react';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Register from '../components/Register';
import Reset from '../components/Reset';
import Forgot from '../components/Forgot';
import Axios from 'axios';
class Header extends Component{
    state = {
        user: {},
    }

    componentDidMount(){
        Axios.get('user')
            .then((response)=>{
                this.setUser(response.data)
            })
            .catch((error)=>{
                console.log(error);
            });
    }
    setUser = (user) =>{
        this.setState({user:user});
    }
    render(){
        return (
            <Router>
                <div>
                    <Nav user={this.state.user} setUser={this.setUser}/>
                </div>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/profile"><Profile user={this.state.user} setUser={this.setUser} /></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/register"><Register/></Route>
                    <Route path="/reset"><Reset/></Route>
                    <Route path="/forgot"><Forgot/></Route>
                </Switch>
            </Router>
            
        )
    }
}

export default Header;