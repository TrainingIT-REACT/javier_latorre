import React from 'react';

// Css
import './LoginUser.css';

const LoginUser = (props) => {
  
  return (
    <>
      <h1>Login</h1>
      <button onClick={props.closeModal}>X</button>
    </>
  );
}

export default LoginUser;
