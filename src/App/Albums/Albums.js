import React, { Component } from "react";
import { connect } from "react-redux";

// Acciones
import { getAlbums } from "../actions/albums";

// Componente
import Album from "./Album";

// Css
import "./Albums.css";

class Albums extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums = () => {
    const { isLoading, error, albums } = this.props.albums;
    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return (
        <>
          <h1>Albums</h1>
          {albums &&
            albums.map(album => (
              <Album
                key={album.id}
                name={album.name}
                id={album.id}
                cover={album.cover}
                artist={album.artist}
              />
            ))}
        </>
      );
    }
  };

  render() {
    return this.renderAlbums();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
