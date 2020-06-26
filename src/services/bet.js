import { post } from "./request";

export const placeBet = bet => post('/api/v1/bets', bet);