import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AuthPage from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
