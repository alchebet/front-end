import React, { useState, useEffect } from 'react'
import { getGames } from '../../services/game';
import { Link } from 'react-router-dom';

export default function ListOfGames() {
  const [games, setGames] = useState([]);
  const [openGames, setOpenGames] = useState([]);
  const [closedGames, setClosedGames] = useState([]);

  useEffect(() => {
    getGames()
    .then(games => {
      setGames(games)
      games.map(game => {
        if(game.winners.length > 0) setClosedGames(closedGames => [...closedGames, game])
        else setOpenGames(openGames => [...openGames, game])
      })
    })
  }, [])

  const openGameList = openGames.map((game, i) => (
    <Link to={`/game/${game._id}`} key={i}>
    <li key={i}>{game.title}</li>
    </Link>
  ));

  const closedGameList = closedGames.map((game, i) => (
    <Link to={`/game/${game._id}`} key={i}>
    <li key={i}>{game.title} <p>{game.winners.map(winners => `${winners.displayName} `)}</p></li>
    </Link>
  ));

  return (
    <>
    <ul>
      <h2>Open Games</h2>
      {openGameList}
    </ul>
    <ul>
    <h2>Closed Games</h2>
      {closedGameList}
    </ul>
    </>

  )
}

