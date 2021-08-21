
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

export default class Game {

    constructor(cardValues, decCount, tableCardsCount, floorCardsCount, firstChunk, secondChunk) {

        this.cards = []
        this.tableCards = [];
        this.floorCards = []
        this.randomTableCardIndexes = []
        this.floorCardsCount = floorCardsCount
        this.tableCardsCount = tableCardsCount
        this.cardValues = cardValues
        this.decCount = decCount
        this.firstChunk = firstChunk
        this.secondChunk = secondChunk

    }

    init() {
        this.initializeGameDecs()
        this.shuffleGameDecs()
        this.createRandomTableCardIndexes();
        this.initializeTableCards()
        this.initializeFloorCards()
        this.chunkPlayingCards()
        this.showFrontSideOfLastCardsInChunks()
        return true;

    }
    initializeGameDecs() {

        for (let i = 0; i < this.decCount; i++) {
            this.initializeOneDec();
        }
    }
    initializeOneDec() {

        const initialCards = this.cardValues.map((cardItem) => {
            return new Card(uuidv4(), cardItem.value, cardItem.nextValue);
        });
        this.cards.push(...initialCards);

    };
    shuffleGameDecs() {

        const shuffledCards = _.shuffle(this.cards);
        this.cards = shuffledCards;

    }

    createRandomTableCardIndexes() {

        let upperBound = this.tableCardsCount + this.floorCardsCount - 1
        while (this.randomTableCardIndexes.length !== this.tableCardsCount) {
            let randomNum = _.random(0, upperBound);
            if (this.randomTableCardIndexes.includes(randomNum)) continue;
            this.randomTableCardIndexes.push(randomNum);
        }
    };

    initializeTableCards() {

        for (let i = 0; i < this.randomTableCardIndexes.length; i++)
            this.tableCards.push(this.cards[this.randomTableCardIndexes[i]]);

    }
    initializeFloorCards() {

        this.floorCards = this.cards.filter((card) =>
            this.tableCards.every((tableCard) => tableCard.id !== card.id)
        );

    };

    chunkPlayingCards() {
        const firstChunkItems = _.chunk(this.tableCards.slice(0, this.firstChunk.size * this.firstChunk.quantity), this.firstChunk.size)
        const secondChunkItems = _.chunk(this.tableCards.slice(this.firstChunk.size * this.firstChunk.quantity), this.secondChunk.size)
        this.tableCards = []
        this.tableCards.push(...firstChunkItems)
        this.tableCards.push(...secondChunkItems)
    };


    showFrontSideOfLastCardsInChunks() {
        const totalChunks = this.firstChunk.quantity + this.secondChunk.quantity
        for (let i = 0; i < totalChunks; i++) {
            const chunkLength = this.tableCards[i].length;
            this.tableCards[i][chunkLength - 1].showFront = true;
        }
    };

}
