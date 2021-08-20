import spadesTwo from '../assets/spades-two.png';
import spadesThree from '../assets/spades-three.png';
import spadesFour from '../assets/spades-four.png';
import spadesFive from '../assets/spades-five.png';
import spadesSix from '../assets/spades-six.png';
import spadesSeven from '../assets/spades-seven.png';
import spadesEight from '../assets/spades-eight.png';
import spadesNine from '../assets/spades-nine.png';
import spadesTen from '../assets/spades-ten.png';
import spadesJoker from '../assets/spades-joker.png';
import spadesQueen from '../assets/spades-queen.png';
import spadesKing from '../assets/spades-king.png';
import spadesAce from '../assets/spades-ace.png';

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

