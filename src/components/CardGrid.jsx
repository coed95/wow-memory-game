import Card from "./Card.jsx";

function CardGrid({ cards, onCardClick, isShuffling }) {
    return (
        <div className="card-grid">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    card={card}
                    onCardClick={onCardClick}
                    isShuffling={isShuffling}
                />
            ))}
        </div>
    );
}

export default CardGrid;