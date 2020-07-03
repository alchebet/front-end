import React, { useState } from 'react'
import { useUser } from '../hooks/Provider'
import CreateGame from '../Game/CreateGame';
import ListOfGames from '../Game/ListOfGames';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
 const user = useUser();
 const history = useHistory();

 const handleLogOut = () => {
   console.log('logout')
   logout()
   .then(() => history.push('/'))
 }

  return (
    <div>
      <h1>{user.displayName}'s Dashboard</h1>
      <CreateGame />
      <ListOfGames />
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  )
}
