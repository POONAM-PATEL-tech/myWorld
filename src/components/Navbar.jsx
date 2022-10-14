import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MyLogo from './MyLogo.png';
import './Navbar.css';
const Navbar = () => {
  return (
    
   <div id='id'>
     <div id='navcontainer'>
    <nav>
  
      <Link className="link" to='/'><img src={MyLogo} alt="abcd"></img></Link>
      <NavLink className="link" to='/'>Home</NavLink>
      <Link className="link" to='/About'>About</Link>
     <Link className="link"  to='/ContactUs'>ContactUs</Link>
      <Link className="link1" to='/Login'>Login</Link>
      <Link className="link2" to='/SignUp'>SignUp</Link>
      
    </nav>
   </div>
    
</div>
  )
}

export default Navbar;