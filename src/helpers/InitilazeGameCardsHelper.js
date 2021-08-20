import _ from 'lodash';
import Card from './Card';
import CardValues from './CardValues';

let id = 1;
let cards = [];
let playingCards = [];
let floorCards = [];

//It creates 8 copy of each playing cards
export const initializeCards = () => {
  for (let i = 0; i < 8; i++) {
    createPlayingCard();
  }

    //shufle cards array
    const shuffledCards = _.shuffle(cards);
    cards = shuffledCards;

    getRandomPlayGroundCards();

    getRemainingFloorCards();

    chunkPlayingCards();

    showFrontSideOfLastCardsInChunks();

  return { playingCards, floorCards };

};

//It creates 13 different playing cards
const createPlayingCard = () => {
  const initialCards = CardValues.map((cardItem) => {
    return new Card(cardItem.value, cardItem.nextValue,cardItem.image, id++);
  });

  cards.push(...initialCards);
};

const getRandomPlayGroundCards = () => {
    // lower and upper bounds
    let lower = 0;
    let upper = 103;
  
    let randomIndexes = [];
  
    // Calculating 54 random values in range 0 and 103
    while (playingCards.length !== 54) {
      let randomNum = _.random(lower, upper);
      if (randomIndexes.includes(randomNum)) continue;
      playingCards.push(cards[randomNum]);
      randomIndexes.push(randomNum);
    }
  };

  const getRemainingFloorCards = () => {
    //Choose cards different then playing cards
    floorCards = cards.filter((card) =>
      playingCards.every((playingCard) => playingCard.id !== card.id)
    );
  };

  //Creating 6-6-6-6-5-5-5-5-5-5 chunk of cards
  const chunkPlayingCards = () => {
    const overflowingItems = playingCards.slice(-4); // first 100
    playingCards = playingCards.slice(
      0,
      playingCards.length - 4
    );
    playingCards = _.chunk(playingCards, 5); // 5 group of 20
    for (let i = 0; i < overflowingItems.length; i++) {
      playingCards[i].push(overflowingItems[i]);
    }
  };
  //Set showFront property of last items as true to show carts
  const showFrontSideOfLastCardsInChunks = () => {
    for (let i = 0; i < playingCards.length; i++) {
      const length = playingCards[i].length;
      playingCards[i][length - 1].showFront = true;
    }
  };