import React from "react";
import Auth from "../../utils/auth"
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
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top nav">
    <div className="container">
      
      <div >
        <ul className="navbar-nav ml-auto">

       
          <li className="nav-item">
            <Link className="test" to={"/upload"}>Upload</Link>
          </li>

          <li className="nav-item">
            <Link className="test" to={"/profile"}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="test" to={"/blog"}>Home</Link>
          </li>
          
          {loggedin?
          <li className="nav-item">
          <Link className='test' onClick={logout}>Logout</Link>
          </li>
          : console.log("loggedout")}
          
        </ul>
      </div>
      <p className="test nav-item">Creative Dev</p>
    </div>
  </nav>

  );
}