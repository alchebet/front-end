import React, { useState, useEffect } from 'react'
import { getGames } from '../../services/game';
import { Link } from 'react-router-dom';

export default function ListOfGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames()
    .then(games => setGames(games))
  }, [])

  const gameList = games.map((game, i) => (
    <Link to={`/game/${game._id}`} key={i}>
    <li key={i}>{game.title}</li>
    </Link>
  ));

  return (
    <ul>
      {gameList}
    </ul>
  )
}

