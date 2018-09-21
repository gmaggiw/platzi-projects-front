import React, { Component } from 'react';
import NavBar from './components/layout/navbar/container/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
      </div>
    );
  }
}

export default App;
