
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
import spadesBack from '../assets/spades-back.png';

function ImageHelper  (cardValue)  {
    switch (cardValue) {
        case 'A':
            return spadesAce;
        case 2:
            return spadesTwo;
        case 3:
            return spadesThree;
        case 4:
            return spadesFour;
        case 5:
            return spadesFive;
        case 6:
            return spadesSix;
        case 7:
            return spadesSeven;
        case 8:
            return spadesEight;
        case 9:
            return spadesNine;
        case 10:
            return spadesTen;
        case 'J':
            return spadesJoker;
        case 'Q':
            return spadesQueen;
        case 'K':
            return spadesKing;
        default:
            return spadesBack;
    }
};
export {ImageHelper};