function shuffleCards(cards) {
    const shuffled = [...cards];

    // shuffling with the Fisher-Yates algorithm
    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

export default shuffleCards;