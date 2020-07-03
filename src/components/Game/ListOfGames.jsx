import React, { useState, useEffect } from 'react'
import { getGames } from '../../services/game';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/Provider';

export default function ListOfGames() {
  const [openGames, setOpenGames] = useState([]);
  const [closedGames, setClosedGames] = useState([]);
  const user = useUser();

  useEffect(() => {
    getGames()
    .then(games => {
      games.forEach(game => {
        if(game.winners.length > 0) setClosedGames(closedGames => [...closedGames, game])
        else setOpenGames(openGames => [...openGames, game])
      })
    })
  }, [])

  const openGameList = openGames.map((game, i) => {
    const userGuess = game.guess.find(guess => guess.bettor === user._id);
    return (      
      <tr>
        <Link to={`/game/${game._id}`} key={i}><td>{game.title}</td></Link>
        <td>{userGuess ? userGuess.guess : null}</td>
      </tr>    
  )});

  const closedGameList = closedGames.map((game, i) => (
    <tr>
      <Link to={`/game/${game._id}`} key={i}><td>{game.title}</td></Link>
      <td>{game.answer}</td>
      <td>{game.winners.map(winner => {
      const winnerGuess = game.guess.find(guess => guess.bettor === winner._id)
        return (`${winner.displayName}
        guess: ${winnerGuess.guess}, `
        )})}</td>
    </tr>
  ));

  return (
    <>
    <h2>Open Games</h2>
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Guess</th>
        </tr>
      </thead>
      <tbody>
        {openGameList}
      </tbody>
    </table>
    <h2>Closed Games</h2>
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Answer</th>
          <th>Winner(s)</th>
        </tr>
      </thead>
      <tbody>
        {closedGameList}
      </tbody>
    </table>
    </>
  )
}

