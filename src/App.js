import React, { Component } from 'react';
import logo from './logo.svg';
import LocacionClima from './components/LocacionClima'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocacionClima> </LocacionClima>
      </div>
    );
  }
}

export default App;
