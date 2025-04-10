// deck.ts  (optional – separate file)
import { Card, Rank, Suit } from "./types";

export const SUITS: Suit[] = ["espadas", "bastos", "oros", "copas"];
export const RANKS: Rank[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
export const HAND_SIZE = 3;
export const TEAM_TARGET = 24; // points to win a match

export function newDeck(): Card[] {
  return SUITS.flatMap((suit) => RANKS.map((rank) => ({ suit, rank })));
}
