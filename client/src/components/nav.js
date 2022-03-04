import React from "react";
import Auth from "../utils/auth"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Navbar() {
    const logout = () => {
        Auth.logout();
    }
    // console.log(Auth.loggedIn() ? "loggedin": "loggedout");
    const loggedin = () => {
      Auth.loggedIn();
    }
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-in"}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/upload"}>Upload</Link>
          </li>
          {loggedin?
          <li className="nav-item">
          <p className='nav-link' onClick={logout}>logout</p>
          </li>
          : console.log("loggedout")}
        </ul>
      </div>
    </div>
  </nav>

  );
}