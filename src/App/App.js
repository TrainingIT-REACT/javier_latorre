import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

// Css
import './App.css';

//Components
import NavBar from './NavBar'
import Home from './Home'
import Albums from './Albums'
import Modal from './Modal'
import LoginUser from './LoginUser'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      albums: []
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }));
  } 

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar openLoginUserModal={this.toggleModal} />
          <Route path="/" exact render={(props) => <Home {...props}  recomendadosList={this.state.albums} />}/>
          <Route path="/albums" render={(props) => <Albums {...props}  recomendadosList={this.state.albums} />}/>
          <Modal open={this.state.openModal}>
            <LoginUser closeModal={this.toggleModal} />
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
