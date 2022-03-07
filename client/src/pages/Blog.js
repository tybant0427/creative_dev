import React from "react";
import Auth from "../utils/auth"
import Nav from "../components/BlogComponents/BlogNav"
import Blog from "../components/BlogComponents/BlogHome"



export default function Home() {
  const loggedin = () => {
    Auth.loggedIn();
  } 



  return (

    
    <div>
      
      <Nav />
        <h1>Home Blog</h1>
        
      <Blog />

      <a href="/sign-in"> Please login</a>
         
          
    
   
</div>
    );
}