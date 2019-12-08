import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ALBUMS } from "../../constants";

// Acciones
import { getSongs } from "../../actions/canciones";
import { getAlbums } from "../../actions/albums";
import SongsList from "../../SongsList";

// Componente
/* import Album from "./Album"; */

// Css
import "./Songs.css";

class Songs extends Component {
  componentDidMount() {
    this.props.getSongs(this.props.match.params.id);
    this.props.getAlbums(this.props.match.params.id);
  }

  renderSongs = () => {
    const { isLoading, error, canciones } = this.props.canciones;
    const { albums } = this.props.albums;
    const albumName = albums[0]
      ? albums[0].name
      : "El album que buscas no existe :(";
    const albumCover = albums[0] ? (
      <img src={albums[0].cover} alt="album cover" />
    ) : null;
    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return (
        <>
          <h1>{albumName} (Añadir tiempo total)</h1>
          <Link className="link-to-albums link" to={`${ALBUMS}`}>
            &lt; Back to Albums
          </Link>
          <div className="songs-container">
            {albumCover}
            <SongsList canciones={canciones} />
          </div>
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
  getAlbums: albumId => dispatch(getAlbums(albumId)),
  getSongs: albumId => dispatch(getSongs(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
