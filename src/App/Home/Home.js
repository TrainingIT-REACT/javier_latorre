import React from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions/canciones";
import SongsList from "../SongsList";

// Css
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.getSongs(); // All songs
  }

  get10RandomSongs = songs => {
    const randomSongs = [...songs];
    for (let i = randomSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomSongs[i], randomSongs[j]] = [randomSongs[j], randomSongs[i]];
    }
    return randomSongs.slice(0, 5);
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

  render() {
    const { name } = this.props;

    return (
      <>
        {name === "" ? (
          <h1>Temas más escuchados por los usuarios:</h1>
        ) : (
          <h1>¡Bienvenido, {name}! Esta es tu lista de recomendados:</h1>
        )}
        <div className="home-content">{this.renderRandomSongs()}</div>
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
