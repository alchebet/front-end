import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame } from '../../services/game';
import { useUser } from '../hooks/Provider'

export default function Game() {
  const [game, setGame] = useState({});
  const [isCreator, setIsCreator] = useState(false);
  const user = useUser();
  const {id} = useParams();

  useEffect(() => {
    getGame(id)
    .then(game => setGame(game))
    }, [id])

  useEffect(() => {
    if(game.creator === user._id) setIsCreator(true)
  }, [game, user])

  return (
    <div>
      <h1>Game Details</h1>
      <h2>{game.title}</h2>
      <h3>{game.description}</h3>
    </div>
  )
}

