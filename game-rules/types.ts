// types.ts
export type Suit = "espadas" | "bastos" | "oros" | "copas"; // swords, clubs, coins, cups
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12; // 10‑Jack, 11‑Knight, 12‑King

export interface Card {
  suit: Suit;
  rank: Rank;
}

export interface Player {
  id: PlayerId;
  hand: Card[];
}

/**
 * Optional vira (muestra) suit for Venezuelan Truco.
 * Omit or set to undefined when you play the “classic” hierarchy.
 */
export interface TrucoState {
  viraSuit?: Suit;
}
