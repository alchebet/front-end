import React, { useState, useEffect } from 'react'
import { useUser } from '../hooks/Provider'
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';

export default function Nav() {
  const [isLogged, setIsLogged] = useState(false);
  const user = useUser();
  const history = useHistory();

  useEffect(() => {
    if(user) setIsLogged(true);
  }, [user])

  const handleLogOut = () => {
    console.log('logout')
    logout()
    .then(() => {
      setIsLogged(false);
      history.push('/')
    })
  }

  const navLog = () => {
    if(isLogged)
    return (
      <>
      {user.displayName}
      <button onClick={handleLogOut}>Sign Out</button>
      </>
    )
    else return (
      <>
      Log in, fool
      </>
    )
  }

  return (
    <div>
      {navLog()}
    </div>
  )
}
