import { post } from "./request";

export const postGame = game => post('/api/v1/game', game);
