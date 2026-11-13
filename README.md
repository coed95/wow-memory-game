
# WoW Memory Game

A memory card game built with React and Vite, featuring characters from the World of Warcraft Trading Card Game.

The goal is to select every unique hero without clicking the same card twice.

## Live Demo

[Play WoW Memory Game](https://coed95.github.io/wow-memory-game/)

## How to Play

1. Five random hero cards are displayed from a collection of nine.
2. Click a hero you haven't selected before to earn one point.
3. After a correct selection, the cards flip, shuffle, and reveal a new set of five heroes.
4. At least one unselected hero is guaranteed to appear in every new selection.
5. Selecting a hero twice ends the game in defeat.
6. Select all nine unique heroes to win!

After winning or losing, you can start a new game by clicking **Play Again**.

## Built With

- React
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3

## Installation

Clone the repository:

```bash
git clone https://github.com/coed95/wow-memory-game.git
cd wow-memory-game
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Future Improvements

- Persistent Best Score using localStorage.
- Additional hero cards.
- Multiple difficulty levels.
- Additional visual effects and animations.

## Credits

World of Warcraft and its associated characters, artwork, and Trading Card Game assets belong to Blizzard Entertainment and their respective rights holders.

Card images were sourced from the World of Warcraft Trading Card Game collection.

This is a non-commercial fan project created for educational purposes.