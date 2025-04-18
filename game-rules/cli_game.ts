// Start a 2-player Truco match

// Read from terminal input (e.g. prompt() or readline)

// Loop through turns

// Render simple text (e.g. cards in hand, winner of round)

// Minimal player interaction logic:

// Prompt Player 1, show hand

// Wait for card selection

// Repeat for Player 2

// Print result of the round

// Turn engine or controller:

// If state.ts and truco_reducer.ts include "whose turn" logic, you might already have this.

// Next Steps
// Integrate with CLI Game:

// Use this simplified evaluateTrick function in the CLI game loop in cli_game.ts.
// Track Scores:

// Add logic to track the number of tricks won by each player and determine the overall winner.
// Test the MVP:

// Play a few rounds in the terminal to ensure the game logic works as expected.

import { createInitialState } from "../state/state";
import { reducer } from "../state/truco_reducer";
import { nextRound } from "./round_logic";

export function runCLIGame() {
  let state = createInitialState("Alice", "Bob");

  while (!state.winner) {
    // Print state
    console.log(`Turn: ${state.currentPlayer}`);
    // Get player input
    const action = promptPlayer(state);
    // Apply action
    state = reducer(state, action);
    // Handle round logic
    state = nextRound(state);
  }

  console.log(`🎉 Winner is ${state.winner}`);
}
