import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/landing/Home.js';
import Navi from './components/layout/Navi.js';
import People from './components/add/Person.js';

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
