import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarContainer from './components/navbar/navbar.smart';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import HomeContainer from './components/home/home.smart';
import ProjectsContainer from './components/projects/projects.smart';


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
          <Route
            exact={true}
            path="/projects"
            component={ProjectsContainer}
          />
        </div>
      </Router>
    );
  }
}

export default App;
