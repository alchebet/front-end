import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AuthPage from '../Auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/dashboard" render={() => <h1>Dashboard</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
