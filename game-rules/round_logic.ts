import { getTrickWinner } from "./utils";

const winner = getTrickWinner(trick);

import { TrucoState } from "../state/state";

export function nextRound(state: TrucoState): TrucoState {
  if (state.board.length < 2) return state;

  const [card1, card2] = state.board;
  const winner = evaluateCards(card1, card2);

  const updatedScore = { ...state.score };
  updatedScore[winner] += 1;

  return {
    ...state,
    score: updatedScore,
    board: [],
    round: state.round + 1,
    currentPlayer: winner,
    winner: updatedScore[winner] >= 12 ? winner : undefined,
  };
}
