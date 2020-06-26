import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame } from '../../services/game';


export default function Game() {
  const [game, setGame] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getGame(id)
    .then(game => setGame(game))
  }, [id])

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{game.title}</h2>
    </div>
  )
}

