import React, { useState } from 'react';
import { postGame } from '../../services/game';

export default function CreateGame() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [answer, setAnswer] = useState('');



  const handleSubmit = event => {
    event.preventDefault();
    postGame({ title, description, answer })
    .then(()=> window.location.reload())
      .then(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Game Title</h3>
      <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
      <h3>Description</h3>
      <textarea name="description" value={description} onChange={({ target }) => setDescription(target.value)} />
      <h3>Answer(if available)</h3>
      <input type="text" name="answer" value={answer} onChange={({ target }) => setAnswer(target.value)} />
      <button>Create Game</button>
    </form>
  )
}
