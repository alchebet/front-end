import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame, patchAnswer } from '../../services/game';
import { useUser } from '../hooks/Provider'

export default function Game() {
  const [game, setGame] = useState({});
  const [answer, setAnswer] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    patchAnswer(id, {answer: answer})
    .then(() => alert('Answer submitted!'))
    .then(() => window.location.reload())
  }

  const isAnswer = () => {
    if(game.answer?.length < 1)
    return (
    <>
      <input type="text" placeholder="Write an answer" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
      <button onClick={handleSubmit}>Submit Answer</button>
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
      <h3>You didn't make this.</h3>
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

