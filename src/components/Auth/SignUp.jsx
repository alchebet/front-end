import React, { useState } from 'react'
import { signup } from '../../services/auth';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ username, displayName, password })
  }

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUsername(target.value);
    if(target.name === 'displayName') setDisplayName(target.value);
    if(target.name === 'password') setPassword(target.value);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          placeholder="Enter Display Name"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}
