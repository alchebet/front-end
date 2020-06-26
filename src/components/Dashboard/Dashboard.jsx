import React, { useState } from 'react'
import { useUser } from '../hooks/Provider'
import CreateGame from '../Game/CreateGame';
import ListOfGames from '../Game/ListOfGames';

export default function Dashboard() {
 const user = useUser();
 console.log(user)

  return (
    <div>
      <h1>{user.displayName}'s Dashboard</h1>
      <CreateGame />
      <ListOfGames />
    </div>
  )
}
