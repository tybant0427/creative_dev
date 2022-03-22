import React, { useState } from "react";
import Auth from "../../utils/auth"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../Styles/Navigation/blogNav.scss'


export default function Nav() {
    const logout = () => {
        Auth.logout();
    }
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    // console.log(Auth.loggedIn() ? "loggedin": "loggedout");
   
  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            Creative Dev
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to="/profile" className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/upload" className='nav-links' onClick={closeMobileMenu}>
                    Upload
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Logout
                </Link>
            </li> 
           
           
        </ul>
        
    </nav>
    </>
    
  //   <nav className="navbar navbar-expand-lg navbar-light fixed-top nav">
  //   <div className="container">
      
  //     <div >
  //       <ul className="navbar-nav ml-auto">

       
  //         <li className="nav-item">
  //           <Link className="test" to={"/upload"}>Upload</Link>
  //         </li>

  //         <li className="nav-item">
  //           <Link className="test" to={"/profile"}>Profile</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="test" to={"/blog"}>Blog</Link>
  //         </li>
  //         {/* <li className="nav-item">
  //           <Link className="test" to={"/"}>Home</Link>
  //         </li> */}
       
  //         <li className="nav-item">
  //         <Link className='test' onClick={logout}>Logout</Link>
  //         </li>
       
          
  //       </ul>
  //     </div>
      
  //   </div>
  // </nav>

  );
}