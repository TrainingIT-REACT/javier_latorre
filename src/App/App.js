import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

// Css
import './App.css';

//Components
import NavBar from './NavBar'
import Home from './Home'
import Albums from './Albums'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
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
          <NavBar />
          <Route path="/" exact render={(props) => <Home {...props}  recomendadosList={this.state.albums} />}/>
          <Route path="/albums" render={(props) => <Albums {...props}  recomendadosList={this.state.albums} />}/>
        </div>
      </Router>
    );
  }
}

export default App;
