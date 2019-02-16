import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import AppHeader from './components/header';
import AppContainer from './components/app-container';

class App extends Component {
  render() {
    return (
      <div className="App container text-center">
      <AppHeader/>
      <AppContainer/>
      </div>
    );
  }
}

export default App;
