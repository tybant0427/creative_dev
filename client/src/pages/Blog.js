import React from "react";
import Auth from "../utils/auth"
import Nav from "../components/BlogComponents/BlogNav"
export default function Home() {
  const loggedin = () => {
    Auth.loggedIn();
  }  


  return (

    
    <div>
      <Nav />
        <h1>home blog</h1>
        
      
          {loggedin ? console.log("loggedin"): console.log("loggedout")}
          
    </div>

    );
}