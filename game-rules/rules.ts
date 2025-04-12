// rules.ts Core game logic (who wins round, etc.)
import { Card, Rank, Suit, TrucoState, PlayerId } from "./types";

/**
 * Public surface ≈ 1 function.
 * Given the cards in the order they were played, return the index (0‑based)
 * of the trick winner.
 *
 * Example:
 *   const winner = evaluateTrick(
 *       [{suit:'espadas', rank:3}, {suit:'oros', rank:7}, {suit:'bastos', rank:1}],
 *       { viraSuit:'copas' }      // or {}
 *   );
 */

// export function evaluateTrick(
//   played: readonly Card[],
//   state: Readonly<TrucoState>
// ): number {
//   if (played.length === 0) throw new Error("No cards to evaluate");

//   const vira = state.viraSuit ?? null;

//   let bestIdx = 0;
//   let bestPower = _power(played[0], vira);

//   for (let i = 1; i < played.length; i++) {
//     const p = _power(played[i], vira);
//     if (p > bestPower) {
//       bestPower = p;
//       bestIdx = i;
//     }
//   }
//   return bestIdx;
// }
export function evaluateTrick(
  played: readonly { playerId: PlayerId; card: Card }[]
): PlayerId {
  if (played.length !== 2) throw new Error("A trick must have exactly 2 cards");

  const [play1, play2] = played;
  const power1 = _power(play1.card);
  const power2 = _power(play2.card);

  return power1 > power2 ? play1.playerId : play2.playerId;
}

/* ──────────────────────────  PRIVATE HELPERS  ────────────────────────── */

/** Static hierarchy for the 40‑card Spanish deck (no vira). */
const _BASE_ORDER: readonly (readonly [Rank, Suit | "any"])[] = [
  [1, "espadas"],
  [1, "bastos"],
  [7, "espadas"],
  [7, "oros"],
  [3, "any"],
  [2, "any"],
  [1, "copas"],
  [1, "oros"],
  [12, "any"],
  [11, "any"],
  [10, "any"],
  [7, "copas"],
  [7, "bastos"],
  [6, "any"],
  [5, "any"],
  [4, "any"],
];

/** Calculates the power of a card based on the static hierarchy. */
function _power(card: Card): number {
  const idx = _BASE_ORDER.findIndex(
    ([rank, suit]) =>
      rank === card.rank && (suit === card.suit || suit === "any")
  );
  return idx >= 0 ? 90 - idx : 0; // Higher index = lower power
}

/** Extra “piezas” promoted when there is a vira (Venezuelan variant). 
function _viraOverrides(vira: Suit | null): Map<string, number> {
  if (!vira) return new Map();
  // Highest card = Knight (11) of vira suit, then Jack (10) of same suit.
  return new Map<string, number>([
    [_key(11, vira), 100], // El Perico
    [_key(10, vira), 99], // La Perica
  ]);
}

function _power(card: Card, vira: Suit | null): number {
  const overrides = _viraOverrides(vira);
  const k = _key(card.rank, card.suit);
  if (overrides.has(k)) return overrides.get(k)!;

  // Static ranking – higher index ⇒ lower power, so invert with (‑index)
  const idx = _BASE_ORDER.findIndex(
    ([r, s]) => r === card.rank && (s === card.suit || s === "any")
  );
  // Unknown cards (shouldn’t happen) fall to bottom.
  return idx >= 0 ? 90 - idx : 0;
}

const _key = (rank: Rank, suit: Suit) => `${rank}-${suit}` as const;
*/
