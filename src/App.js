import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarContainer from './components/navbar/navbar.container';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import HomeContainer from './components/home/home.container';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBarContainer />
          <Route
            exact={true}
            path="/"
            component={HomeContainer}
          />
        </div>
      </Router>
    );
  }
}

export default App;
