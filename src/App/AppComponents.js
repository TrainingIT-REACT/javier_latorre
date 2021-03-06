import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { ALBUMS, ROOT, USER } from "./constants";

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
import Profile from "./Profile";
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
    const {
      playerOpen,
      closePlayer,
      songTitle,
      songAudio,
      songHistory
    } = this.props;
    return (
      <>
        <NavBar openLoginUserModal={this.openModal} />
        <Route path={ROOT} exact component={Home} />
        <Route path={ALBUMS} exact component={Albums} />
        <Route path={`${ALBUMS}/:id`} component={Songs} />
        <Route
          path={`${USER}`}
          render={props => <Profile {...props} songHistory={songHistory} />}
        />
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
  return {
    ...state,
    songHistory: state.player.songHistory,
    playerOpen: state.player.playerOpen,
    songAudio: state.player.songAudio,
    songTitle: state.player.songTitle
  };
};

const mapDispatchToProps = dispatch => ({
  closePlayer: () => dispatch(closePlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
