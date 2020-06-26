import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame, patchAnswer } from '../../services/game';
import { useUser } from '../hooks/Provider'
import { placeBet } from '../../services/bet';

export default function Game() {
  const [game, setGame] = useState({});
  const [answer, setAnswer] = useState('');
  const [bet, setBet] = useState('');
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

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    patchAnswer(id, {answer: answer})
    .then(() => alert('Answer submitted!'))
    .then(() => window.location.reload())
  }


  const handleBetSubmit = (event) => {
    event.preventDefault();
    placeBet({game: id, guess: bet})
    .then(() => alert('Bet submitted!'))
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
    else return (
      <>
      <input type="text" placeholder="Enter your bet" value={bet} onChange={(e) => setBet(e.target.value)}/>
      <button onClick={handleBetSubmit}>Submit Bet</button>
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

