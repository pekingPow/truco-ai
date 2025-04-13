# Truco AI Engine

This repository is part of a larger project to create a web-based version of the Venezuelan card game **Truco**. The goal of this repo is to build the **AI engine** and core game logic that powers the game. Eventually, this engine will support both human vs. human and human vs. AI gameplay.

## Features

- **Core Game Logic**: Implements the rules of Venezuelan Truco, including card ranking and trick evaluation.
- **Scoring System**: Tracks the number of tricks won by each player (in progress).
- **State Management**: Manages game state transitions (planned).
- **AI Player**: A bot that plays Truco using heuristics (future development).

## Project Stages

1. **Stage 1: 1-on-1 Human Game (Current)**

   - Testing the game logic in a simple terminal-based game between two human players.
   - Focused on card ranking, trick evaluation, and scoring.

2. **Stage 2: Human vs. AI Game**

   - Introduce a basic AI player that uses heuristics to play against a human.

3. **Stage 3: Full Web-Based Game**
   - Integrate the engine with a frontend built using Phaser or similar frameworks.
   - Add features like animations, sound effects, and a graphical interface.

## Directory Structure

truco/
├── game_rules/ # Core game logic
│ ├── rules.ts # Trick evaluation and card ranking
│ └── tests/ # Unit tests for game rules
│
├── state/ # Game state management (planned)
│ ├── types.ts # TrucoState, Action types
│ └── reducer.ts # Reducer for state transitions
│
├── ai/ # AI player logic (future)
│ └── heuristic_bot.ts
│
├── frontend/ # Web-based UI (future)
│ ├── scenes/ # Phaser scenes (Menu, Table, Results)
│ ├── ui/ # UI components
│ └── main.ts
│
├── assets/ # Game assets (cards, sounds)
│ ├── cards/ # Card images
│ └── sfx/ # Sound effects
│
├── tests/ # High-level integration tests
└── package.json # Project configuration

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to help improve the project.

## License

This project is licensed under the MIT License.
