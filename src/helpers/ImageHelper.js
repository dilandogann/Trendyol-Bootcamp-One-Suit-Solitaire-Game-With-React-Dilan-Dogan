
import spadesTwo from '../assets/spades-two-min.png';
import spadesThree from '../assets/spades-three-min.png';
import spadesFour from '../assets/spades-four-min.png';
import spadesFive from '../assets/spades-five-min.png';
import spadesSix from '../assets/spades-six-min.png';
import spadesSeven from '../assets/spades-seven-min.png';
import spadesEight from '../assets/spades-eight-min.png';
import spadesNine from '../assets/spades-nine-min.png';
import spadesTen from '../assets/spades-ten-min.png';
import spadesJoker from '../assets/spades-joker-min.png';
import spadesQueen from '../assets/spades-queen-min.png';
import spadesKing from '../assets/spades-king-min.png';
import spadesAce from '../assets/spades-ace-min.png';
import spadesBack from '../assets/spades-back-min.png';

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