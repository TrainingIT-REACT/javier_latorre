import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { ALBUMS, ROOT } from "./constants";

// Css
import "./App.css";

// Acciones
import { closePlayer } from "./actions/player";

//Components
import NavBar from "./NavBar";
import Home from "./Home";
import Albums from "./Albums";
import Songs from "./Albums/Songs";
import Modal from "./Modal";
import Player from "./Player";
import LoginUser from "./LoginUser";
import PlayerControls from "./PlayerControls";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };
  }

  openModal = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { playerOpen, closePlayer, songTitle, songAudio } = this.props;
    return (
      <>
        <NavBar openLoginUserModal={this.openModal} />
        <Route
          path={ROOT}
          exact
          render={props => (
            <Home {...props} recomendadosList={this.state.albums} />
          )}
        />
        <Route path={ALBUMS} exact component={Albums} />
        <Route path={`${ALBUMS}/:id`} component={Songs} />
        <Modal open={this.state.openModal}>
          <LoginUser closeModal={this.closeModal} />
        </Modal>
        <Player open={playerOpen}>
          <PlayerControls
            key={songTitle} // re-render component when is a different song
            closePlayer={closePlayer}
            songTitle={songTitle}
            songAudio={songAudio}
          />
        </Player>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state,
    playerOpen: state.player.playerOpen,
    songAudio: state.player.songAudio,
    songTitle: state.player.songTitle
  };
};

const mapDispatchToProps = dispatch => ({
  closePlayer: () => dispatch(closePlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
