import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/layout/Navbar.js';
import People from './components/add/Person.js';

const Home = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        E <code>s</code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          link{' '}
        </a>
      </p>
    </header>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
