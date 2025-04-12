// utils.ts
import { Play, PlayerId, Round } from "./types";

// Example: determine winner of a single trick
export function getTrickWinner(trick: Play[]): PlayerId | null {
  if (trick.length < 2) return null; // Trick still in progress

  // Replace with your Truco hierarchy logic:
  const card1 = trick[0].card;
  const card2 = trick[1].card;

  const rank = (card: { value: number }) => {
    // basic example; customize with real Truco ranking rules
    return card.value;
  };

  return rank(card1) > rank(card2) ? trick[0].playerId : trick[1].playerId;
}

export function isRoundOver(round: Round): boolean {
  return round.tricks.filter((t) => t.length === 2).length >= 2;
}
