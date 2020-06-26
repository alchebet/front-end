import { post } from "./request";

export const postGuess = guess => post('/api/v1/guess', guess);