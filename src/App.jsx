import { useEffect, useRef, useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid.jsx";
import Scoreboard from "./components/Scoreboard.jsx";

import cards from "./data/cards.js";
import selectCards from "./utils/selectCards.js";

import GameResult from "./components/GameResult.jsx";

function App() {
    const [visibleCards, setVisibleCards] = useState(() => {
        return selectCards(cards, []);
    });

    const [selectedCards, setSelectedCards] = useState([]);
    const score = selectedCards.length;

    const [bestScore, setBestScore] = useState(0);
    const [gameStatus, setGameStatus] = useState("playing");
    const [isShuffling, setIsShuffling] = useState(false);

    const shuffleTimerRef = useRef(null);
    const shuffleLockRef = useRef(false);

    useEffect(() => {
        return () => {
            clearTimeout(shuffleTimerRef.current);
        };
    }, []);

    function restartGame() {
        clearTimeout(shuffleTimerRef.current);
        shuffleTimerRef.current = null;
        shuffleLockRef.current = false;

        setSelectedCards([]);
        setVisibleCards(selectCards(cards, []));
        setGameStatus("playing");
        setIsShuffling(false);
    }

    function handleClick(id) {
        if (gameStatus !== "playing" || shuffleLockRef.current) {
            return;
        }

        if (selectedCards.includes(id)) {
            setGameStatus("lost");
            return;
        }

        const newSelectedCards = [...selectedCards, id];
        const newScore = newSelectedCards.length;

        setSelectedCards(newSelectedCards);

        if (newScore > bestScore) {
            setBestScore(newScore);
        }

        if (newScore === cards.length) {
            setGameStatus("won");
            return;
        }

        shuffleLockRef.current = true;
        setIsShuffling(true);

        shuffleTimerRef.current = setTimeout(() => {
            setVisibleCards(selectCards(cards, newSelectedCards));
            setIsShuffling(false);

            shuffleTimerRef.current = setTimeout(() => {
                shuffleLockRef.current = false;
                shuffleTimerRef.current = null;
            }, 450);
        }, 800);
    }

    return (
        <div className="app">
            <header className="game-header">
                <h1>WoW Memory Game</h1>

                <Scoreboard score={score} bestScore={bestScore} />
            </header>

            <main className="game-main">
                {gameStatus === "playing" ? (
                    <CardGrid
                        cards={visibleCards}
                        onCardClick={handleClick}
                        isShuffling={isShuffling}
                    />
                ) : (
                    <GameResult
                        gameStatus={gameStatus}
                        score={score}
                        totalCards={cards.length}
                        onRestart={restartGame}
                    />
                )}
            </main>
        </div>
    );
}

export default App;