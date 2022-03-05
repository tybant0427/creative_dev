import React from "react";
import Auth from "../utils/auth"
import Nav from "../components/BlogComponents/BlogNav"
import Test from "../components/BlogComponents/test"


export default function Home() {
  const loggedin = () => {
    Auth.loggedIn();
  }  


  return (

    
    <div>
      <Nav />
        <h1>home blog</h1>
        
      <Test />
         
          
    
   
</div>
    );
}