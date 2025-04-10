//state.ts
export interface TrucoState {
  hand: Card[]; // my current hand
  trick: Card[]; // cards already on the table this trick
  score: { me: number; opp: number };
  bids: BidHistory[]; // who said “Truco”, “Envido”, etc.
  phase: "bidding" | "trick" | "between‑tricks";
}
