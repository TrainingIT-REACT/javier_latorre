import React, { Component } from "react";
import { connect } from "react-redux";

// Acciones
import { getSongs } from "../../actions/canciones";

// Componente
/* import Album from "./Album"; */

// Css
/* import "./Songs.css"; */

class Songs extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  renderSongs = () => {
    const { isLoading, error, canciones } = this.props.canciones;
    console.log(this.props);
    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return (
        <>
          <h1>Canciones</h1>
          {canciones && canciones.map(cancion => <p>{cancion.name}</p>)}
        </>
      );
    }
  };

  render() {
    return this.renderSongs();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
