import React, { useState } from 'react';
import { postGame } from '../../services/game';

export default function CreateGame() {
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    postGame({ title })
      .then(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
      <button>Create Game</button>
    </form>
  )
}
