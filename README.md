# truco-ai

This repo is a smaller component of the bigger Truco project. Truco is a card game. This repo will become the AI which plays Truco against humans.

Proposed v0.1 layout:

truco/
├── game_rules/ # universal, UI‑free logic
│ ├── rules.ts
│ └── **tests**/rules.test.ts
│
├── state/
│ ├── types.ts # TrucoState, Action
│ └── reducer.ts
│
├── ai/ # one file per bot version
│ └── heuristic_bot.py # or .ts if you stay JS‑only
│
├── frontend/
│ ├── scenes/ # Phaser scenes (Menu, Table, Results)
│ ├── ui/ # buttons, pop‑ups, React components if any
│ └── main.ts
│
├── assets/
│ ├── cards/_.png
│ └── sfx/_.mp3
│
├── backend/ (optional)
│ └── ... # Django or FastAPI
│
├── tests/ # high‑level integration tests
└── package.json / pyproject.toml
