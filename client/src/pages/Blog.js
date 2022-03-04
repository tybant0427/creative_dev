import React from "react";
import Auth from "../utils/auth"
export default function Home() {
  const loggedin = () => {
    Auth.loggedIn();
  }  


  return (

    <div>
        <h1>home blog</h1>
        
      
          {loggedin ? console.log("loggedin"): console.log("loggedout")}
          
    </div>

    );
}