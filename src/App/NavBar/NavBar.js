import React, { Component } from 'react';

// Css
import './NavBar.css';

const NavBar = (props) => {
  
  return (
    <div className="NavBar">
     <div className="logo">
        <span className="logo_first">Musi</span><span className="logo_last">K</span>
     </div>
     <div className="user">
         <span>Login</span>
     </div>
    </div>
  );
}

export default NavBar;
