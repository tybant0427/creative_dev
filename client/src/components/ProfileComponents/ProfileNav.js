import React from "react";
import Auth from "../../utils/auth"
import {   Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../utils/mutations';



export default function ProfileNav() {

const optionsUser =(userId)=>{
  // const something = window.confirm("Delete user? yes or no","yes",'no')

  if (window.confirm("Delete User?") === true) {
     window.alert("See You Soon!")
     handlebutton(userId)
  } else {
     console.log("You canceled!");
  }
  
}




  const [deleteUser, { err, dat}] = useMutation(DELETE_USER
    );

    const handlebutton =async(userId) =>{
console.log(userId);

      try{
        
      // const  {data} = await deleteUser({
      //     variables: {userId:userId }
      // })
      // console.log("deleted");
      //   window.location.replace("/");
      //   Auth.logout()
      
      }catch(err){
      console.log(err);
      }
      }




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
          <li className="nav-item">
          <Link className='nav-link' onClick={()=>optionsUser(localStorage.getItem('userId'))}  >Delete User</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>

  );
}