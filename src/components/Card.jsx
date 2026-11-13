import { useRef } from "react";

function Card({ card, onCardClick, isShuffling }) {
    const cardRef = useRef(null);

    function handleMouseMove(event) {
        if (isShuffling) return;

        const element = cardRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 20;
        const rotateX = (0.5 - y) * 20;

        element.style.setProperty("--rotate-x", `${rotateX}deg`);
        element.style.setProperty("--rotate-y", `${rotateY}deg`);
    }

    function handleMouseLeave() {
        const element = cardRef.current;
        if (!element) return;

        element.style.setProperty("--rotate-x", "0deg");
        element.style.setProperty("--rotate-y", "0deg");
    }

    return (
        <button
            ref={cardRef}
            type="button"
            className={`card ${isShuffling ? "flipped" : ""}`}

            onClick={() => {
                handleMouseLeave();
                onCardClick(card.id)
            }}

            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            disabled={isShuffling}
        >
            <span className="card-tilt">
                <span className="card-inner">
                    <span className="card-front">
                        <img src={card.image} alt={card.name} />
                    </span>

                    <span className="card-back">
                        <img
                            src={`${import.meta.env.BASE_URL}images/cards/card-back.png`}
                            alt=""
                        />
                    </span>
                </span>
            </span>
        </button>
    );
}

export default Card;