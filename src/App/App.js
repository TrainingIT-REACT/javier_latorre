import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ALBUMS, USER, ROOT } from "./constants";

// Css
import "./App.css";

// Store
import store from "./store";

//Components
import NavBar from "./NavBar";
import Home from "./Home";
import Albums from "./Albums";
import Songs from "./Albums/Songs";
import Modal from "./Modal";
import LoginUser from "./LoginUser";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      albums: []
    };
  }

  openModal = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  async componentDidMount() {
    try {
      const res = await fetch("/albums");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
