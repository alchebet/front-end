import React, { useState } from 'react'
import { signup, login } from '../../services/auth';
import './Auth.css';
import { useHistory } from 'react-router-dom';

export default function AuthPage() {
  return (
    <section className="Auth">
      <SignUp />
      <Login />
    </section>
  )
}

const withAuthForm = (title, authService, showDisplayName = false) => {
  return function AuthFormHOC() {
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleSignUp = (e) => {
      e.preventDefault();
      authService({ username, displayName, password })
        .then(() => history.push('/dashboard'));
    }
  
    const handleChange = ({ target }) => {
      if(target.name === 'username') setUsername(target.value);
      if(target.name === 'displayName') setDisplayName(target.value);
      if(target.name === 'password') setPassword(target.value);
    }
  
    return (
      <div>
        <h2>{title}</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Username"
          />
          {showDisplayName && <input
            type="text"
            value={displayName}
            name="displayName"
            onChange={handleChange}
            placeholder="Enter Display Name"
          />}
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <button>{title}</button>
        </form>
      </div>
    )
  }
}

export const SignUp = withAuthForm('Sign Up', signup, true);
export const Login = withAuthForm('Login', login);
