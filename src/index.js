import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Snake from './Snake';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const HomePage = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Welcome to the Game Portal</h1>
    <Link to="/snake-game">Play Snake Game</Link>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/snake-game">
          <Snake />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);