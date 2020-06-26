import { post, get, patch } from "./request";

export const postGame = game => post('/api/v1/game', game);

export const getGames = () => get('/api/v1/game');

export const getGame = (id) => {
  console.log(id)
  return get(`/api/v1/game/${id}`);
}

export const patchAnswer = (id, answer) => {
  return patch(`/api/v1/game/${id}`, answer)
}