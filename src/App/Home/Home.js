import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ALBUMS } from "../constants";

// Css
import "./Home.css";

const Home = ({ name }) => {
  return (
    <>
      {name === "" ? (
        <h1>Temas más escuchados por los usuarios:</h1>
      ) : (
        <h1>¡Bienvenido, {name}! Esta es tu lista de recomendados</h1>
      )}
      <p>TODO lista random de canciones</p>
      <Link to={ALBUMS}>Ver albums disponibles</Link>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    name: state.user.name
  };
};

export default connect(mapStateToProps)(Home);
