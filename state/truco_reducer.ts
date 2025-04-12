// Reducer / state machine – build a /state/truco_reducer.ts that handles PLAY_CARD, CALL_TRUCO, ACCEPT, FOLD, score keeping, etc.
// A game state reducer — useful for modeling game transitions.

export function reducer(state: TrucoState, action: Action): TrucoState {
  switch (action.type) {
    case "PLAY_CARD":
      // Remove card from player's hand, add to board
      break;
    case "SAY_TRUCO":
      // Update truco challenge state
      break;
    case "FOLD":
      // End round with other player winning
      break;
    default:
      return state;
  }
}
