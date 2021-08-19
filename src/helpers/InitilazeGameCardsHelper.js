import _ from 'lodash';
import Card from '../Card';
import CardValues from '../CardValues';

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

  return { playingCards, floorCards };

};

//It creates 13 different playing cards
const createPlayingCard = () => {
  const initialCards = CardValues.map((cardItem) => {
    return new Card(cardItem.value, cardItem.nextValue,cardItem.image, id++);
  });

  cards.push(...initialCards);
};
