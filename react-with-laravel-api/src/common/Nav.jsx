import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{

    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/task">Task</Link>
                </li>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" to="#">Action</a>
                    <a className="dropdown-item" to="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" to="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" to="#">Disabled</a>
                </li> */}
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <Link className="nav-link " to="/login">Login</Link>|
                    <Link className="nav-link " to="/register">Register</Link>
                </div>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
        );
    };
}

export default Nav;