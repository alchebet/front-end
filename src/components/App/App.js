import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AuthPage from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';
import Game from '../Game/Game';
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/game/:id" component={Game} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;
