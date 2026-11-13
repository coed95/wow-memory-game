import shuffleCards from "./shuffleCards";

function selectCards(cards, selectedIds) {
    const avaiableCards = cards.filter(
        (card) => !selectedIds.includes(card.id)
    );
    
    const shuffledAvaiable = shuffleCards(avaiableCards);
    const guaranteedCard = shuffledAvaiable[0];

    const remainingCards = cards.filter(
        (card) => card.id !== guaranteedCard.id
    );

    const shuffledRemaining = shuffleCards(remainingCards);

    const newSelection = [
        guaranteedCard,
        ...shuffledRemaining.slice(0, 4)
    ];

    return shuffleCards(newSelection);
}

export default selectCards;