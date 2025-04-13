version 0.1 tasks:

[X] 1. Card‑rank map & trick‑winner function (rules)
The evaluateTrick function and \_power logic in rules.ts fulfill this requirement.

[ ] 2. Score tracker & game‑over condition (rules):
Implement scoring logic in rules.ts or a new game.ts file.
This is essential for the MVP and should be done next.

[ ] 3. TrucoState type + reducer (play card, bid…) (state)
Define a TrucoState type and implement a reducer to manage game state transitions.
This is critical for managing the game flow and should follow scoring.

[ ] 4. Console‑only test loop that plays a full game (integration):
Create a cli_game.ts file to integrate the trick-winner function, scoring, and state management into a playable game loop.
This is the final step for the MVP.

Steps to Leave for Later
[ ] 5. Render static table & deal cards in Phaser (renderer)
Rendering and dealing cards are not necessary for the console-based MVP.
Postpone this until the MVP is functional.

[ ] 6. Wire clicks → reducer → re‑render (renderer+state):
This is part of the graphical interface and can wait until after the MVP.

[ ] 7. HeuristicBot that picks the lowest winning card (ai):
AI logic is not required for the initial 1-on-1 human player MVP.

[ ] 8. Scene flow: Menu → Game → Results (renderer):
Scene flow is part of the graphical interface and can be deferred.

[ ] 9. Basic sound & card‑flip animation (assets+renderer):
Sounds and animations are not relevant for the console-based MVP.

[ ]10. Package.json scripts: lint, test, dev (tooling):
While useful, this can be done after the MVP is functional.

Suggested Order of Implementation

1. Scoring System (Step 2) → Add to rules.ts or game.ts.
2. State Management (Step 3) → Add TrucoState and reducer in state.ts.
3. Console Test Loop (Step 4) → Implement in cli_game.ts.

4. Post-MVP Features:
   Renderer (Steps 5, 6, 8, 9).
   AI (Step 7).
   Tooling (Step 10).

Missing Implementations and Their Locations:

1. Scoring Implementation:

What’s Missing: A system to track the number of tricks won by each player and determine the game-over condition (e.g., first to 2 or 3 tricks wins).
Where to Implement: Add scoring logic to rules.ts or create a new file like game.ts to manage the overall game state (e.g., score tracking, game-over condition).

2. Game Loop:

What’s Missing: A console-based game loop to play a full game, integrating the evaluateTrick function and scoring system.
Where to Implement: Create a new file like cli_game.ts for the console-based test loop.

3. State Management:

What’s Missing: A TrucoState type and a reducer to handle actions like playing a card or bidding.
Where to Implement: Add this to a new file like state.ts.
