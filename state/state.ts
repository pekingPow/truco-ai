//state.ts Manages current game state (whose turn, cards on table, etc.)
export interface TrucoState {
  hand: Card[]; // my current hand
  trick: Card[]; // cards already on the table this trick
  score: { me: number; opp: number };
  bids: BidHistory[]; // who said “Truco”, “Envido”, etc.
  phase: "bidding" | "trick" | "between‑tricks";
}

export interface TrucoState {
  players: Player[];
  score: Record<string, number>;
  currentPlayer: string;
  board: Card[];
  round: number;
  winner?: string;
}

export function createInitialState(p1: string, p2: string): TrucoState {
  return {
    players: [
      { name: p1, hand: [] },
      { name: p2, hand: [] },
    ],
    score: { [p1]: 0, [p2]: 0 },
    currentPlayer: p1,
    board: [],
    round: 1,
  };
}
