import React, { Component } from 'react';
import NavBarContainer from './components/layout/navbar/navbar.container';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBarContainer />
      </div>
    );
  }
}

export default App;
