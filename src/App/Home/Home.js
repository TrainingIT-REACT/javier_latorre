import React from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions/canciones";
import SongsList from "../SongsList";
import Searcher from "../Searcher";

// Css
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busquedaRealizada: false,
      cancionesEncontradas: []
    };
  }

  componentDidMount() {
    // All songs (No puedo hacer búsquedas con coincidencias parciales, así que las hago en local para el ejercicio)
    this.props.getSongs();
  }

  get10RandomSongs = songs => {
    const randomSongs = [...songs];
    for (let i = randomSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomSongs[i], randomSongs[j]] = [randomSongs[j], randomSongs[i]];
    }
    return randomSongs.slice(0, 8);
  };

  renderRandomSongs = () => {
    const { canciones, isLoading, error } = this.props.canciones;
    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    } else {
      return <SongsList canciones={this.get10RandomSongs(canciones)} />;
    }
  };

  renderSongs = cancionesEncontradas => {
    return <SongsList canciones={cancionesEncontradas} />;
  };

  renderMasEscuchadosTitle = name => {
    return name === "" ? (
      <h1>Temas más escuchados por los usuarios:</h1>
    ) : (
      <h1>¡Bienvenido, {name}! Esta es tu lista de recomendados:</h1>
    );
  };

  renderCancionesEncontradasTitle = (name, cancionesEncontradas) => {
    if (cancionesEncontradas.length === 0) {
      return name === "" ? (
        <h1>{`No hay coincidencias :(. Inténtalo con una nueva búsqueda.`}</h1>
      ) : (
        <h1>{`No ha habido suerte ${name}! Inténtalo con una nueva búsqueda.`}</h1>
      );
    }
    return name === "" ? (
      <h1>{`Se han encontrado ${cancionesEncontradas.length} coincidencias:`}</h1>
    ) : (
      <h1>{`${name}, tenemos ${cancionesEncontradas.length} coincidencias dada tu búsqueda:`}</h1>
    );
  };

  updateSearch = valorBusqueda => {
    const { canciones } = this.props.canciones;
    const cancionesEncontradas = canciones.filter(cancion => {
      var rgxp = new RegExp(valorBusqueda, "i"); // remember 'i' is case insensitive
      return cancion.name.match(rgxp);
    });
    this.setState({ cancionesEncontradas, busquedaRealizada: true });
  };

  render() {
    const { name } = this.props;
    const { busquedaRealizada, cancionesEncontradas } = this.state;
    return (
      <>
        <Searcher
          placeholder="Buscar canción"
          updateSearch={this.updateSearch}
        />
        {busquedaRealizada
          ? this.renderCancionesEncontradasTitle(name, cancionesEncontradas)
          : this.renderMasEscuchadosTitle(name)}
        <div className="home-content">
          {busquedaRealizada
            ? this.renderSongs(cancionesEncontradas)
            : this.renderRandomSongs()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    name: state.user.name
  };
};

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
