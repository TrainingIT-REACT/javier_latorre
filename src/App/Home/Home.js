import React from 'react';
import { Link } from "react-router-dom";
import { ALBUMS } from '../constants'

// Css
import './Home.css';

const Home = (props) => {
  
  return (
    <>
      <h1>Inicio. Lista recomendada</h1>
      <p>TODO lista random de canciones</p>
      <Link to={ALBUMS} >Ver albums disponibles</Link>
      
    </>
  );
}

export default Home;
