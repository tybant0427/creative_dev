import React from "react";
import Auth from "../../utils/auth"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Navbar() {
    const logout = () => {
        Auth.logout();
    }
    // console.log(Auth.loggedIn() ? "loggedin": "loggedout");
   
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
            <Link className="test" to={"/blog"}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="test" to={"/"}>Home</Link>
          </li>
       
          <li className="nav-item">
          <Link className='test' onClick={logout}>Logout</Link>
          </li>
       
          
        </ul>
      </div>
      <p id="logo" className="test nav-item">Creative Dev</p>
    </div>
  </nav>

  );
}