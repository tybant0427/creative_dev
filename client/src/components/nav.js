import React,{useState} from "react";
import Auth from "../utils/auth"
import { BrowserRouter as  Route, Link } from "react-router-dom";
import "../Styles/Navigation/nav.scss"


export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

    
  return (

    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            Creative Dev
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to="/sign-in" className='nav-links' onClick={closeMobileMenu}>
                    Login
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/sign-up" className='nav-links' onClick={closeMobileMenu}>
                    Sign-Up
                </Link>
            </li>
             
           
           
        </ul>
        
    </nav>

  );
}