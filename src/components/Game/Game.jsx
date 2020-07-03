import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame, patchGame } from '../../services/game';
import { useUser } from '../hooks/Provider'
import { postGuess, patchGuess } from '../../services/guess';
import { useHistory } from 'react-router-dom';

export default function Game() {
  const [game, setGame] = useState({});
  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [currentGuess, setCurrentGuess] = useState({});
  const [isCreator, setIsCreator] = useState(false);
  const [winners, setWinners] = useState([]);
  const user = useUser();
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    getGame(id)
    .then(game => {
      setGame(game)
      setIsCreator(game.creator === user._id)
      setCurrentGuess(game.guess?.find(guess => guess.bettor._id === user._id))
    })
    }, [id, user])

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    patchGame(id, {answer: answer})
    .then(() => alert('Answer submitted!'))
    .then(() => window.location.reload())
  }

  const handleGuess = (event) => {
    event.preventDefault();
    if(currentGuess) {
      patchGuess(currentGuess._id, {guess: guess})
      .then(() => alert('Guess updated!'))
      .then(() => history.push('/dashboard'));
    }
    else
    postGuess({game: id, guess: guess})
    .then(() => alert('Guess submitted!'))
    .then(() => history.push('/dashboard'));
  }

  const isAnswer = () => {
    if(game.answer?.length < 1)
    return (
    <>
      <input type="text" placeholder="Write an answer" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
    </>
    )
    else return (
    <h3>{game.answer}</h3>
    )
  }

const selectWinner = (event) => {
  console.log(event.target.checked)
  if(event.target.checked)setWinners([...winners, event.target.value])
  if(!event.target.checked){
    const newWinners = winners.filter(winner => winner !== event.target.value)
    setWinners(newWinners)
  }
}

const gameGuesses = game.guess?.map(guess => (
    <li>
      bettor: {guess.bettor.displayName}, guess: {guess.guess}
      <input type="checkbox" onChange={selectWinner} name="winner" value={guess.bettor._id}/>
      <label for="winner">Winner</label>
      </li>
  ))

  const handleCloseGame = (event) => {
    event.preventDefault();
    patchGame(id, {winners: winners})
    .then(() => alert('Winner winner!'))
    .then(() => history.push('/dashboard'));
  }

  const creatorInfo = () => {
    if(isCreator)
    return (
      <div>
      {isAnswer()}
        <form onSubmit={handleCloseGame}>
          {gameGuesses}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
    else if (currentGuess)
      return (
      <>
      <h1>Already guessed {currentGuess.guess}!</h1>
      <h2>Would you like to change your guess?</h2>
      <input type="text" placeholder="Enter your new guess" value={guess} onChange={(e) => setGuess(e.target.value)}/>
      <button onClick={handleGuess}>Submit New Guess</button>
      </>
      )
    else return (
      <>
      <input type="text" placeholder="Enter your guess" value={guess} onChange={(e) => setGuess(e.target.value)}/>
      <button onClick={handleGuess}>Submit Guess</button>
      </>
    )
  }

  return (
    <div>
      <h1>Game Details</h1>
      <h2>Title: {game.title}</h2>
      <h3>Description: {game.description}</h3>
      {creatorInfo()}
    </div>
  )
}

