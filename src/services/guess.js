import { post, patch } from "./request";

export const postGuess = guess => post('/api/v1/guess', guess);

export const patchGuess = (id, guess) => patch(`/api/v1/guess/${id}`, guess);
