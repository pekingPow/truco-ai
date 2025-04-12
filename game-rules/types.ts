// types.ts defines Card, Player, Round types.
export type Suit = "espadas" | "bastos" | "oros" | "copas"; // swords, clubs, coins, cups
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12; // 10‑Jack, 11‑Knight, 12‑King

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number;
}

export type PlayerId = string;

export interface Player {
  id: PlayerId;
  hand: Card[];
}

export type TrucoAction =
  | "PLAY_CARD"
  | "CALL_TRUCO"
  | "ACCEPT_TRUCO"
  | "REJECT_TRUCO"
  | "FOLD"
  | "PASS"
  | "ENVIDO"
  | "REAL_ENVIDO"
  | "FLOOR_SCORE"; // Optional depending on rule set

export interface Round {
  number: number;
  turnOrder: PlayerId[];
  cardsPlayed: { playerId: PlayerId; card: Card }[];
  roundWinner?: PlayerId;
}

export interface Game {
  id: string;
  players: Player[];
  state: TrucoState;
  score: Record<PlayerId, number>;
  currentRound: Round;
}

/**
 * Optional vira (muestra) suit for Venezuelan Truco.
 * Omit or set to undefined when you play the “classic” hierarchy.
 */
export interface TrucoState {
  viraSuit?: Suit;
}
