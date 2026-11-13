function GameResult({ gameStatus, score, totalCards, onRestart }) {
    const hasWon = gameStatus === "won";

    return (
        <div className="game-result">
            <h2>{hasWon ? "Victory" : "Defeat"}</h2>

            <p className="result-message">
                {hasWon
                    ? `You discovered all the heroes`
                    : `You selected a hero twice`}
            </p>

            <p className="final-score">
                Final Score: {score} / {totalCards}
            </p>

            <button
                type="button"
                className="restart-button"
                onClick={onRestart}
            >
                Play again
            </button>
        </div>
    )
}

export default GameResult;