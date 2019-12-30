import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navi from './components/layout/Navi.js';
import People from './components/add/Person.js';

const Home = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navi />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
