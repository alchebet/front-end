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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id" component={Game} />
        <Route exact path="/" component={AuthPage} />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
