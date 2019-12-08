import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Css
import "./App.css";

// Store
import store from "./store";

//Components
import AppComponents from "./AppComponents";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppComponents />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
