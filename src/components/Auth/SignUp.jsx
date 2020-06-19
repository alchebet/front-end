import React from 'react'

export default function SignUp() {
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
