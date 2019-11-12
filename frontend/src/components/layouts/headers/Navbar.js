import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignInLinks';
import SignedOutLinks from './SignOutLinks';


const Navbar = ({loggedInStatus}) => {
  if (loggedInStatus){
    return <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link exact to="/" className="left brand-logo">STITCH</Link>
      <SignedInLinks loggedInStatus={loggedInStatus} /> 
    </div>
  </nav> 
  }

    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link exact to="/" className="left brand-logo">STITCH</Link>
          <SignedOutLinks loggedInStatus={loggedInStatus}/>
          
           
        </div>
      </nav> 
    )
  }
  
  export default Navbar;