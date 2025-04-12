// types.ts defines Card, Player, Round types.
export type Suit = "espadas" | "bastos" | "oros" | "copas"; // swords, clubs, coins, cups
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12; // 10‑Jack, 11‑Knight, 12‑King

export interface Card {
  suit: Suit;
  rank: Rank;
  strength: number;
}

export type PlayerId = string;

export interface Player {
  id: PlayerId;
  hand: Card[];
  isHuman: boolean;
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

type Play = { playerId: PlayerId; card: Card };

export interface Round {
  number: number;
  turnOrder: PlayerId[];
  tricks: Play[][]; // Array of 3 tricks, each trick is a list of 2 plays
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
  phase: GamePhase;
  envidoPoints?: Record<PlayerId, number>;
  trucoLevel: number; // 3 = Truco, 6 = Retruco, 9 = Vale nueve, vale juego
}

export type GamePhase =
  | "DEALING"
  | "PLAYING"
  | "TRUCO_CALLED"
  | "ENVIDO_CALLED"
  | "SCORING";
