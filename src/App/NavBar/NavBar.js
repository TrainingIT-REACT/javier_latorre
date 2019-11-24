import React from 'react';
import { connect } from 'react-redux';

// Css
import './NavBar.css';

const NavBar = ({name, openLoginUserModal}) => {
  
  return (
    <div className="NavBar">
     <div className="logo">
        <span className="logo_first">Musi</span><span className="logo_last">K</span>
     </div>
     {
       name ==='' ? (
      <div onClick={openLoginUserModal} className="user">
        <span>Login {name}</span>
      </div>
       ) : (
      <div onClick={openLoginUserModal} className="user">
        <span>{name}</span>
      </div>
       )
     }
     
    </div>
  );
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    name: state.user.name
  }
}

export default connect(
  mapStateToProps
)(NavBar);
