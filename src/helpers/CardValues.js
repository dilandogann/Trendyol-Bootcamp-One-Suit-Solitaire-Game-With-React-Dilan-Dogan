import spadesTwo from './assets/spades-two.jpg';
import spadesThree from './assets/spades-three.jpg';
import spadesFour from './assets/spades-four.jpg';
import spadesFive from './assets/spades-five.jpg';
import spadesSix from './assets/spades-six.jpg';
import spadesSeven from './assets/spades-seven.jpg';
import spadesEight from './assets/spades-eight.jpg';
import spadesNine from './assets/spades-nine.jpg';
import spadesTen from './assets/spades-ten.jpg';
import spadesJoker from './assets/spades-joker.jpg';
import spadesQueen from './assets/spades-queen.jpg';
import spadesKing from './assets/spades-king.jpg';
import spadesAce from './assets/spades-ace.jpg';

const CardValues = [
    { value: 'A', nextValue: 2, image: spadesAce },
    { value: 2, nextValue: 3, image: spadesTwo },
    { value: 3, nextValue: 4, image: spadesThree },
    { value: 4, nextValue: 5, image: spadesFour },
    { value: 5, nextValue: 6, image: spadesFive },
    { value: 6, nextValue: 7, image: spadesSix },
    { value: 7, nextValue: 8, image: spadesSeven },
    { value: 8, nextValue: 9, image: spadesEight },
    { value: 9, nextValue: 10, image: spadesNine },
    { value: 10, nextValue: 'J', image: spadesTen },
    { value: 'J', nextValue: 'Q', image: spadesJoker },
    { value: 'Q', nextValue: 'K', image: spadesQueen },
    { value: 'K', nextValue: null, image: spadesKing },
];
export default CardValues;

