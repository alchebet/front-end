import { post, get } from "./request";

export const postGame = game => post('/api/v1/game', game);

export const getGames = () => get('/api/v1/game');

export const getGame = (id) => get(`/api/v1/game/${id}`);
