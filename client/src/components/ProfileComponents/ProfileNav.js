import React from "react";
import Auth from "../../utils/auth"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function ProfileNav() {
    
        const logout = () => {
            Auth.logout();}
        
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      
      <div >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/blog"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/upload"}>Upload</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' onClick={logout}>Logout</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>

  );
}