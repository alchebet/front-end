import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame, patchAnswer } from '../../services/game';
import { useUser } from '../hooks/Provider'
import { postGuess } from '../../services/guess';
import { useHistory } from 'react-router-dom';

export default function Game() {
  const [game, setGame] = useState({});
  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [isCreator, setIsCreator] = useState(false);
  const user = useUser();
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    getGame(id)
    .then(game => {
      setGame(game)
      setIsCreator(game.creator === user._id)
    })
    }, [id, user])

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    patchAnswer(id, {answer: answer})
    .then(() => alert('Answer submitted!'))
    .then(() => window.location.reload())
  }

  const handleGuess = (event) => {
    event.preventDefault();
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

  const creatorInfo = () => {
    if(isCreator)
    return (
      <div>
      {isAnswer()}
      </div>
    )
    else if (game.guess?.find(guess => guess.bettor === user._id))
      return <h1>Already guessed!</h1>
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
      <h2>{game.title}</h2>
      <h3>{game.description}</h3>
      {creatorInfo()}
    </div>
  )
}

