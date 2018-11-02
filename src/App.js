import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import routes from './routes';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <Header />
        {routes}
        </HashRouter>
      </div>
    );
  }
}

export default App;
