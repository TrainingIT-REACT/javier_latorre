import React, { Component } from "react";
import { connect } from "react-redux";

// Acciones
import { getAlbums } from "../actions/albums";

// Componentes
import Album from "./Album";
import Searcher from "../Searcher";

// Css
import "./Albums.css";

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busquedaRealizada: false,
      albumsEncontrados: []
    };
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  updateSearch = valorBusqueda => {
    const { albums } = this.props.albums;
    const albumsEncontrados = albums.filter(album => {
      var rgxp = new RegExp(valorBusqueda, "i"); // remember 'i' is case insensitive
      return album.name.match(rgxp);
    });
    this.setState({ albumsEncontrados, busquedaRealizada: true });
  };

  renderAlbums = () => {
    const { isLoading, error, albums } = this.props.albums;
    const { busquedaRealizada, albumsEncontrados } = this.state;
    const albumsMostrados = busquedaRealizada ? albumsEncontrados : albums;
    const albumsEncontradosTitle =
      albumsEncontrados.length === 0
        ? "No se han encontrado albums en la búsqueda :("
        : `Se han encontrado ${albumsEncontrados.length} albums:`;
    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return (
        <>
          <Searcher
            placeholder="Buscar album"
            updateSearch={this.updateSearch}
          />
          <h1>{busquedaRealizada ? albumsEncontradosTitle : "Albums:"}</h1>
          {albumsMostrados &&
            albumsMostrados.map(album => (
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
